<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import MainButton from '$lib/components/Hackathon/MainButton.svelte';
	import type { PageData } from './$types';
	import MemberInfo from '$lib/components/Hackathon/MemberInfo.svelte';

	export let data: PageData;
</script>

<!-- Not in a team -->
<div class="flex h-full min-h-screen w-full flex-col items-center justify-center">
	<h2 class="pb-6 pt-4 font-jbExtrabold text-4xl">Team Details</h2>
	<div class="gradient_border mx-5 w-auto cursor-default bg-[#d1f2f9] bg-opacity-5 p-10 backdrop-blur-sm transition duration-300 md:w-[600px]">
		<ul class="mt-5 space-y-2">
			<p class="font-jbRegular text-lg sm:text-2xl">Team Name : <span class="text-[#fffba4]">{data.teamName}</span></p>
			<p class="font-jbRegular text-lg sm:text-2xl">Team ID : <span class="text-[#fffba4]">{data.teamURL}</span></p>
			<p class="font-jbRegular text-lg sm:text-2xl">Team Secret : <span class="text-[#fffba4]">{data.teamSecret}</span></p>
			<h2 class="bg-gradient-to-tr pt-4 font-jbExtrabold text-2xl drop-shadow-[0_0_0.15rem_#d2b863]">Team Members</h2>
			<div class="grid grid-cols-2 grid-rows-2 gap-4">
				{#each data.memberInfo as memberInfo, i}
					<p class="font-jbRegular text-lg sm:text-2xl">Member {i} : <span class="text-[#fffba4]">{memberInfo.name}</span></p>
				{/each}
			</div>
		</ul>
	</div>

	<MainButton>Solution Submission (soon...)</MainButton>
</div>
