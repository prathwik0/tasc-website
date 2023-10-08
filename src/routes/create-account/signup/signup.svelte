<script lang="ts">
	import { Icons } from '$lib/components/docs/icons';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';

	import { auth } from '$lib/firebase/firebase';
	import { user } from '$lib/firebase/firebase';

	import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		await signInWithPopup(auth, provider);
	}

	async function signOutSSR() {
		await signOut(auth);
	}
</script>

<Card.Root class="m-2">
	<Card.Header class="space-y-1">
		<Card.Title class="text-2xl">Create an account</Card.Title>
		<Card.Description>Step 1: Sign in using Google</Card.Description>
	</Card.Header>

	{#if $user}
		<Card.Content class="flex flex-col gap-4">
			<h2 class="card-title">Welcome, {$user.displayName}</h2>
			<p>You are now signed in! To continue your account creation process, click on Create Account.</p>
			<Button class="w-48" variant="outline" on:click={signOutSSR}>Sign out</Button>
		</Card.Content>
		<Card.Footer>
			<a class="w-full" href="/create-account/account"> <Button class="w-full">Create account</Button></a>
		</Card.Footer>
	{:else}
		<Card.Content class="grid gap-4">
			<Button variant="outline" on:click={signInWithGoogle}>
				<Icons.google class="mr-2 h-4 w-4" />
				Google
			</Button>
			<!-- <div class="grid grid-cols-2 gap-6">
				<Button variant="outline">
					<Icons.gitHub class="mr-2 h-4 w-4" />
					Github
				</Button>
			</div>
			<div class="relative">
				<div class="absolute inset-0 flex items-center">
					<span class="w-full border-t" />
				</div>
				<div class="relative flex justify-center text-xs uppercase">
					<span class="bg-card px-2 text-muted-foreground"> Or continue with </span>
				</div>
			</div>
			<div class="grid gap-2">
				<Label for="email">Email</Label>
				<Input id="email" type="email" placeholder="ai@nmamit.in" />
			</div>
			<div class="grid gap-2">
				<Label for="password">Password</Label>
				<Input id="password" type="password" />
			</div> -->
		</Card.Content>
	{/if}
</Card.Root>
