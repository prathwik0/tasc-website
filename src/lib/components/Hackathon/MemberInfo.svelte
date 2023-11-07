<script>
	import { user, userData, userLoaded } from '$lib/firebase/firebase';
	import MainButton from './MainButton.svelte';
	import MutedButton from './MutedButton.svelte';

	import RegisterButton from './RegisterButton.svelte';
</script>

{#if !$userLoaded}
	<span></span>
{:else if $user && $userData}
	<p class="pb-4 pt-6 text-center text-2xl">Hello {$userData.name}!</p>
	<div class="flex flex-col gap-2 sm:flex-row">
		<MainButton hrefId="#">Create Team (soon...)</MainButton>
		<MutedButton hrefId="#">Join Team (soon...)&nbsp;&nbsp;</MutedButton>
	</div>
{:else}
	<RegisterButton />
{/if}
