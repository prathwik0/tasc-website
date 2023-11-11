<script lang="ts">
	import SortableList from '$lib/components/Profile/SortableList.svelte';
	import UserLink from '$lib/components/Profile/UserLink.svelte';
	import { db, userID, userData, userProfileData } from '$lib/firebase/firebase';
	import { arrayRemove, arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore';
	import { writable } from 'svelte/store';

	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Button, buttonVariants } from '$lib/components/ui/custom_button';

	import * as Select from '$lib/components/ui/select';
	import Label from '$lib/components/ui/label/label.svelte';
	const icons: Array<{ value: string; label: string }> = [
		{ value: 'instagram', label: 'Instagram' },
		{ value: 'twitter', label: 'Twitter' },
		{ value: 'linkedin', label: 'LinkedIn' },
		{ value: 'github', label: 'GitHub' },
		{ value: 'custom', label: 'Custom' }
	];

	const formDefaults = {
		icon: 'custom',
		title: '',
		url: 'https://'
	};

	const formData = writable(formDefaults);

	let showForm = false;

	$: urlIsValid = $formData.url.match(/^(ftp|http|https):\/\/[^ "]+$/);
	$: titleIsValid = $formData.title.length < 20 && $formData.title.length > 0;
	$: formIsValid = urlIsValid && titleIsValid;

	function sortList(e: CustomEvent) {
		const newList = e.detail;
		const userRef = doc(db, 'profile', $userID!.user);
		setDoc(userRef, { links: newList }, { merge: true });
	}

	async function addLink(e: SubmitEvent) {
		const userRef = doc(db, 'profile', $userID!.user);

		await updateDoc(userRef, {
			links: arrayUnion({
				...$formData,
				id: Date.now().toString()
			})
		});

		formData.set({
			icon: '',
			title: '',
			url: ''
		});

		showForm = false;
	}

	async function deleteLink(item: any) {
		const userRef = doc(db, 'profile', $userID!.user);
		await updateDoc(userRef, {
			links: arrayRemove(item)
		});
	}

	function cancelLink() {
		formData.set(formDefaults);
		showForm = false;
	}
</script>

<Dialog.Root>
	<Dialog.Trigger class="{buttonVariants({ variant: 'outline' })} m-2 max-w-sm">Add a new Link</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<form on:submit|preventDefault={addLink}>
			<Dialog.Header class="mb-4">
				<Dialog.Title>Add a Link</Dialog.Title>
				<Dialog.Description>Enter the details of your link.</Dialog.Description>
			</Dialog.Header>

			<div class="flex flex-col gap-4">
				<Select.Root
					selected={icons[0]}
					onSelectedChange={(item) => {
						$formData.icon = item?.value;
					}}
				>
					<Select.Trigger class="w-[180px]">
						<Select.Value placeholder="Select an icon" />
					</Select.Trigger>
					<Select.Content>
						<Select.Group>
							<Select.Label>Icons</Select.Label>
							{#each icons as icon}
								<Select.Item {...icon}>{icon.label}</Select.Item>
							{/each}
						</Select.Group>
					</Select.Content>
				</Select.Root>

				<Input name="title" type="text" placeholder="Title" bind:value={$formData.title} />
				<Input name="url" type="text" placeholder="URL" bind:value={$formData.url} />

				<Label>
					{#if !titleIsValid || !urlIsValid}
						New link must have valid title and URL
					{/if}
					{#if formIsValid}
						Looks good!
					{/if}
				</Label>
			</div>

			<Dialog.Footer class="mt-4">
				<Button type="submit" disabled={!formIsValid}>Add Link</Button>
			</Dialog.Footer>
		</form>
	</Dialog.Content>
</Dialog.Root>

<SortableList list={$userProfileData?.links ?? []} on:sort={sortList} let:item let:index>
	<div class="group relative">
		<UserLink {...item} disabled={true} />
		<button on:click={() => deleteLink(item)} class="invisible absolute -right-4 bottom-6 rounded-md border bg-foreground px-4 py-1 text-background transition-all group-hover:visible">Delete</button>
	</div>
</SortableList>
