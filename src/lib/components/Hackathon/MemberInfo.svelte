<script>
	import { user, userData, userLoaded } from '$lib/firebase/firebase';
	import LoadingSVG from '$lib/loader/spinnerDark.svg';
	import MainButton from './MainButton.svelte';
	import MutedButton from './MutedButton.svelte';

	import RegisterButton from './RegisterButton.svelte';
</script>

{#if !$userLoaded}
	<span><img src={LoadingSVG} alt="spin" class=" w-24" /></span>
{:else if $user && $userData}
	<p class="pb-4 pt-6 text-center text-2xl">Hello {$userData.name}!</p>
	<div class="flex flex-col gap-2 sm:flex-row">
		<a href="/snh2023"><MainButton>Create Team (soon...)</MainButton></a>
		<a href="/snh2023"><MutedButton>Join Team (soon...)</MutedButton></a>
	</div>
{:else}
	<RegisterButton />
{/if}
