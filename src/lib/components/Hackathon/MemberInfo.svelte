<script>
	import { user, userLoaded, userData } from '$lib/firebase/firebase';
	import MainButton from './MainButton.svelte';
	import MutedButton from './MutedButton.svelte';

	import RegisterButton from './RegisterButton.svelte';
</script>

{#if !$userLoaded}
	<span></span>
{:else if $user && $userData}
	<p class="pt-6 text-center text-2xl">Hello {$userData.name}!</p>
	<div class="flex gap-2">
		<MainButton hrefId="#">Create Team (soon...)</MainButton>
		<div class="hidden sm:block">
			<MutedButton hrefId="#">Join Team (soon...)</MutedButton>
		</div>
	</div>
{:else}
	<RegisterButton />
{/if}
