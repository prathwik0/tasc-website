<script>
	import { Input } from '$lib/components/ui/input';
	import MainButton from './MainButton.svelte';
</script>

<div class="mx-10 flex h-[22rem] w-[25rem] flex-col items-center justify-center rounded-2xl border-[1px] border-gray-700 p-10">
	<!-- Not in a team -->
	<div class="flex h-full w-full flex-col items-center justify-center space-y-6">
		<h2 class="font-jbExtrabold text-4xl">Join A Team</h2>
		<Input type="text" placeholder="Enter the team ID" class="mb-4 h-14 w-80 rounded-2xl bg-gray-600 p-4 font-jbMedium text-white" />
		<Input type="text" placeholder="Enter the team Secret" class="h-14 w-80 rounded-2xl bg-gray-600 p-4 font-jbMedium text-white" />
		<MainButton hrefId="/createteam">Join Team</MainButton>
	</div>

	<!-- Already in a team -->
	<!-- <div class="flex h-full w-full flex-col items-center justify-center p-4 text-center">
		<h2 class="pb-6 pt-4 font-jbExtrabold text-4xl text-[#fffba4]">
			You are already in a team!
			<p class="pt-4 font-jbMedium text-2xl text-white">Team ID/Team Secret</p>
		</h2>
	</div> -->
</div>
