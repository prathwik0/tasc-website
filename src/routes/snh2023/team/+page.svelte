<script lang="ts">
	import CreateTeam from '$lib/components/Hackathon/CreateTeam.svelte';
	import JoinTeam from '$lib/components/Hackathon/JoinTeam.svelte';
	import MainButton from '$lib/components/Hackathon/MainButton.svelte';
	import { user, userData, userLoaded, userProfileData } from '$lib/firebase/firebase';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	$: if ($user && $userData && $userProfileData && $userProfileData.snh2023) {
		onMount(async () => {
			goto(`/snh2023/team/${$userProfileData?.snh2023}`);
		});
	}
</script>

<main class="pt-16 md:pt-0">
	{#if !userLoaded}
		<span></span>
		<!-- {:else if $user && $userData && $userProfileData && $userProfileData.snh2023}
		<div class="flex h-full min-h-screen w-full flex-col items-center justify-center">
			<h2 class="pb-6 pt-4 font-jbExtrabold text-4xl">You are already in a team!</h2>
			<h2 class="pb-6 pt-4 font-jbExtrabold text-4xl">Exit team to create/join a new team</h2>
			<a href="/snh2023/team/{$userProfileData.snh2023}"><MainButton>Goto Your Team Page</MainButton></a>
		</div> -->
	{:else if $user && $userData && $userProfileData && !$userProfileData.snh2023}
		<div class="flex h-screen w-full flex-col items-center justify-center space-y-12">
			<h3 class="text-md mx-[3vw] text-center font-jbBold text-[#d2b863] md:text-lg">Registrations Closed 🥲 We won't be accepting new teams but you can still join a team!</h3>
			<div class="flex flex-col items-center justify-center space-y-12 pb-16 md:flex-row md:space-y-0 md:px-10 md:pb-0 md:pt-0">
				<CreateTeam />
				<JoinTeam />
			</div>
		</div>
	{:else}
		<div class="flex h-full min-h-screen w-full flex-col items-center justify-center">
			<h2 class="pb-6 pt-4 font-jbExtrabold text-4xl">You need to be logged in to view/create/join a team!</h2>
			<a href="/snh2023"><MainButton>Goto Home page, refresh the page and register</MainButton></a>
		</div>
	{/if}
</main>
