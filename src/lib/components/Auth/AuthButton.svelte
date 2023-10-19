<script lang="ts">
	import { goto } from '$app/navigation';
	import { Icons } from '$lib/components/docs/icons';
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover';

	import { auth, userData } from '$lib/firebase/firebase';
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

{#if $user && $userData}
	<Popover.Root>
		<Popover.Trigger>
			<Button class="text-lg font-bold duration-200 hover:scale-110" variant="ghost">You</Button>
		</Popover.Trigger>
		<Popover.Content>
			<div class="flex max-w-xs flex-col gap-2">
				<div class="px-2 text-lg">
					Hello {$userData.name},
				</div>
				<Button variant="outline"><a href="/{$userData.username}">Your Public Profile</a></Button>
				<Button variant="outline"><a href="/{$userData.username}/edit">Edit your Profile</a></Button>
				<Button on:click={signOutSSR}>Sign out</Button>
			</div>
		</Popover.Content>
	</Popover.Root>
{:else if $user}
	<Popover.Root>
		<Popover.Trigger>
			<Button class="text-lg font-bold duration-200 hover:scale-110" variant="ghost">You</Button>
		</Popover.Trigger>
		<Popover.Content>
			<div class="flex max-w-xs flex-col gap-2">
				<div class="px-2 text-lg">
					Hello {$user.displayName}, you don't have an account yet.
				</div>
				<Button variant="outline"><a href="/create-account">Create Account</a></Button>
				<Button on:click={signOutSSR}>Sign out</Button>
			</div>
		</Popover.Content>
	</Popover.Root>
{:else}
	<Popover.Root>
		<Popover.Trigger>
			<Button class="text-lg font-bold duration-200 hover:scale-110" variant="ghost">Login</Button>
		</Popover.Trigger>
		<Popover.Content>
			<div class="flex max-w-xs flex-col gap-2">
				<div class="px-2 text-lg">Login via Google</div>
				<Button on:click={signInWithGoogle}>
					<Icons.google class="mr-2 h-4 w-4" />
					Login
				</Button>
				<div class="px-2 text-lg">Don't have an account?</div>
				<Button
					on:click={() => {
						goto('/signup');
					}}
				>
					Signup
				</Button>
			</div>
		</Popover.Content>
	</Popover.Root>
{/if}
