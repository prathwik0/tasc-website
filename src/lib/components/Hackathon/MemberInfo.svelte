<script>
	import { user, userData, userLoaded, userProfileData } from '$lib/firebase/firebase';
	import LoadingSVG from '$lib/loader/spinnerDark.svg';
	import MainButton from './MainButton.svelte';

	import RegisterButton from './RegisterButton.svelte';
</script>

{#if !$userLoaded}
	<span><img src={LoadingSVG} alt="spin" class=" w-24" /></span>
{:else if $user && $userData && $userProfileData && !$userProfileData.snh2023}
	<p class="pb-4 pt-6 text-center text-2xl">Hello {$userData.name}!</p>
	<div class="flex flex-col gap-2 sm:flex-row">
		<h3 class="text-md mx-4 py-4 text-center font-jbBold text-[#d2b863] md:text-xl">Registration wraps up tonight at 11:59pm! Get on board before it's too late 😲</h3>
		<a href="/snh2023/team"><MainButton><span class="sm:px-12">Create / Join Team</span></MainButton></a>
	</div>
{:else if $user && $userData && $userProfileData && $userProfileData.snh2023}
	<p class="pb-4 pt-6 text-center text-2xl">Hello {$userData.name}!</p>
	<h3 class="text-md mx-4 py-4 text-center font-jbBold text-[#d2b863] md:text-xl">Registration wraps up tonight at 11:59pm! Get on board before it's too late 😲</h3>
	<div class="flex flex-col gap-2 sm:flex-row">
		<a href={`/snh2023/team/${$userProfileData?.snh2023}`}><MainButton><span class="sm:px-12">Go to your Team</span></MainButton></a>
	</div>
{:else}
	<h3 class="text-md mx-4 py-4 text-center font-jbBold text-[#d2b863] md:text-xl">Registration wraps up tonight at 11:59pm! Get on board before it's too late 😲</h3>
	<RegisterButton />
{/if}
