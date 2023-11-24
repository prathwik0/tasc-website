<script lang="ts">
	import CreateTeam from '$lib/components/Hackathon/CreateTeam.svelte';
	import JoinTeam from '$lib/components/Hackathon/JoinTeam.svelte';
	import MainButton from '$lib/components/Hackathon/MainButton.svelte';
	import { user, userData, userLoaded, userProfileData } from '$lib/firebase/firebase';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { Input } from '$lib/components/ui/input';

	$: if ($user && $userData && $userProfileData && $userProfileData.snh2023) {
		onMount(async () => {
			goto(`/snh2023/team/${$userProfileData?.snh2023}`);
		});
	}
</script>

<main class="">
	{#if !userLoaded}
		<span></span>
	{:else if $user && $userData && $userProfileData && $userProfileData.snh2023}
		<div class="flex h-full min-h-screen w-full flex-col items-center justify-center">
			<h2 class="pb-6 pt-4 font-jbExtrabold text-4xl">You are already in a team!</h2>
			<h2 class="pb-6 pt-4 font-jbExtrabold text-4xl">Exit team to create/join a new team</h2>
			<a href="/snh2023/team/{$userProfileData.snh2023}"><MainButton>Goto Your Team Page</MainButton></a>
		</div>
	{:else if $user && $userData && $userProfileData && !$userProfileData.snh2023}
		<div class="flex h-screen flex-col justify-center pt-16">
			<h3 class="text-md mx-4 pb-6 text-center font-jbBold text-[#d2b863] md:text-lg">Registrations Closed 🥲 We won't be accepting new teams but you can still join a team!</h3>
			<div class="flex flex-col items-center justify-center space-y-12 pb-16 md:flex-row md:space-y-0 md:px-10 md:pb-0 md:pt-0">
				<div class="mx-10 h-[16rem] w-[18rem] flex-col items-center justify-center rounded-2xl border-[1px] border-gray-500 p-10 md:h-[22rem] md:w-[25rem]">
					<div class="flex h-full w-full flex-col items-center justify-center space-y-6">
						<h2 class="font-jbExtrabold text-2xl md:text-4xl">Create a Team</h2>
						<Input type="text" placeholder="Enter your team name!" class="h-12 w-60  rounded-2xl bg-gray-600 p-4 font-jbMedium text-white md:h-14 md:w-80" disabled />
						<button disabled class="cursor-not-allowed">
							<div class="flex flex-col items-center justify-center duration-300">
								<div class="rounded-[15px] border border-gray-500 p-[1px] font-jbMedium transition duration-300">
									<div class="rounded-[14px] bg-[#0f0913] py-3 underline-offset-8 transition duration-300">
										<div class=" transition duration-300">
											<div class="px-3 py-1 text-sm underline-offset-8 transition duration-300 md:text-xl">Create Team</div>
										</div>
									</div>
								</div>
							</div>
						</button>
					</div>
				</div>
				<JoinTeam />
			</div>
		</div>
	{:else}
		<div class="flex h-full min-h-screen w-full flex-col items-center justify-center">
			<h2 class="pb-6 pt-4 font-jbExtrabold text-4xl">You need to be logged in to view/join a team!</h2>
			<a href="/snh2023"><MainButton>Goto Home page, refresh the page and Login</MainButton></a>
		</div>
	{/if}
</main>
