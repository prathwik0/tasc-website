<script lang="ts">
	import AuthCheck from '$lib/components/AuthCheck.svelte';

	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	import Input from '$lib/components/ui/input/input.svelte';
	import { Label } from '$lib/components/ui/label';

	import { db, user, userData } from '$lib/firebase/firebase';
	import { doc, collection, getDoc, setDoc, writeBatch } from 'firebase/firestore';

	let name = '';
	let usn = '';
	let username = '';
	let loading = false;
	let isAvailable = false;

	const reUsername = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
	const reName = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;
	const reUSN = /^[1-4][A-Z]{2}\d{2}[A-Z]{2}\d{3}$/;

	$: isValidName = name?.length > 4 && name.length < 48 && reName.test(name);
	$: isTouchedName = name.length >= 1;

	$: isValidUSN = usn?.length > 4 && usn.length < 11 && reUSN.test(usn);
	$: isTouchedUSN = usn.length >= 1;

	$: isValidUsername = username?.length > 2 && username.length < 16 && reUsername.test(username);
	$: isTouchedUsername = username.length >= 1;
	$: isTakenUsername = isValidUsername && !isAvailable && !loading;

	let debounceTimer: NodeJS.Timeout;

	async function checkAvailability() {
		isAvailable = false;
		clearTimeout(debounceTimer);

		loading = true;

		if (!isTouchedUsername || !isValidUsername) {
			return;
		}

		// We are resetting the setTimeout using debounce such that this function only executes
		// when the user has stopped typing for a certain amount of time (500ms)
		// ps. this is to prevent unnecessary document reads in FireStore
		// without it, the function would run on every keypress
		debounceTimer = setTimeout(async () => {
			console.log('checking availability of', username);

			// We are making a reference to a document in FireStore in the
			// "usernames" collection where doc id = username
			const ref = doc(db, 'usernames', username);
			const exists = await getDoc(ref).then((doc) => doc.exists());

			isAvailable = !exists;
			loading = false;
		}, 500);
	}

	async function createAccount() {
		if (isValidName && isValidUSN && isValidUsername) {
			console.log('confirming username', username);

			const batch = writeBatch(db);

			// Add a new document with an auto generated id
			const newUserRef = doc(collection(db, 'user'));

			batch.set(doc(db, 'auth', $user!.uid), { user: newUserRef.id });

			batch.set(doc(db, 'usernames', username), { user: newUserRef.id });

			batch.set(newUserRef, {
				username: username,
				name: name,
				usn: usn
			});

			await batch.commit();

			username = '';
			isAvailable = false;
		} else {
			alert('Please enter valid details');
		}
	}
</script>

<AuthCheck>
	{#if $userData !== null}
		<div class="m-4 flex flex-col">
			<p>You have an account.</p>
			<p>Go to <a href="/account">your account</a> settings to make any more changes.</p>
		</div>
	{:else if $user}
		<Card.Root class="m-2">
			<Card.Header class="space-y-1">
				<Card.Title class="text-2xl">Enter your details</Card.Title>
				<h2 class="card-title">Welcome, {$user.displayName}</h2>
				<Card.Description>You have successfully signed in. Now you can enter your details. Make sure to enter all your details correctly. These cannot be changed later unless you contact the admins.</Card.Description>
			</Card.Header>

			<form on:submit|preventDefault={createAccount}>
				<Card.Content>
					<div>
						<Label for="name">Name</Label>
						<Input type="text" id="name" placeholder="Enter your full name" bind:value={name} class={!isValidName && isTouchedName ? 'bg-red-200 dark:bg-red-900' : ''} />
						<p class="mt-1 text-sm text-muted-foreground">This is the name that will appear on your certificates.</p>
						{#if isTouchedName && !isValidName}
							<div class="h-4">
								<p>The name you have entered is invalid.</p>
							</div>
						{/if}
					</div>

					<div class="mt-6">
						<Label for="usn">USN</Label>
						<Input type="text" id="usn" placeholder="Enter your college USN" bind:value={usn} class={!isValidUSN && isTouchedUSN ? 'bg-red-200 dark:bg-red-900' : ''} />
						{#if isTouchedUSN && !isValidUSN}
							<div class="h-4">
								<p>The USN you have entered is invalid.</p>
							</div>
						{/if}
					</div>

					<div class="mt-6">
						<Label for="username" class="mt-10">Username</Label>
						<Input type="text" class="{!isValidUsername && isTouchedUsername ? 'bg-red-200 dark:bg-red-900' : ''} {isTakenUsername ? 'bg-yellow-200 dark:bg-yellow-700' : ''} {isAvailable && isValidUsername && !loading ? 'bg-green-300 dark:bg-green-800' : ''}" id="username" placeholder="Enter a username" bind:value={username} on:input={checkAvailability} />
						<p class="mt-1 text-sm text-muted-foreground">Your username is public and is used to access your profile page.</p>

						{#if isTouchedUsername}
							<div class="mt-4 h-12">
								{#if loading}
									<p>Checking availability of @{username}...</p>
								{/if}

								{#if !isValidUsername && isTouchedUsername}
									<p class="mt-1 text-sm text-muted-foreground">Username must be 3-16 characters long, alphanumeric only</p>
								{/if}

								{#if isValidUsername && !isAvailable && !loading}
									<p>
										@{username} is not available
									</p>
								{/if}

								{#if isValidUsername && isAvailable}
									<p class="text-green-500">@{username} is available</p>
								{/if}
							</div>
						{/if}
					</div>
				</Card.Content>

				<Card.Footer>
					<Button class="w-full" type="submit">Submit</Button>
				</Card.Footer>
			</form>
		</Card.Root>
	{/if}
</AuthCheck>
