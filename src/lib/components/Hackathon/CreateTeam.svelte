<script>
	import { Input } from '$lib/components/ui/input';
	import MainButton from './MainButton.svelte';
</script>

<div class="mx-10 h-[22rem] w-[25rem] flex-col items-center justify-center rounded-2xl border-[1px] border-gray-700 p-10">
	<!-- Not in a team -->
	<div class="flex h-full w-full flex-col items-center justify-center space-y-6">
		<h2 class="font-jbExtrabold text-3xl md:text-4xl">Create a Team</h2>
		<Input type="text" placeholder="Enter your team name!" class="h-12 w-60  rounded-2xl bg-gray-600 p-4 font-jbMedium text-white md:h-14 md:w-80" />
		<MainButton hrefId="/createteam">Create Team</MainButton>
	</div>

	<!-- Already in a team -->
	<!-- <div class="flex h-full w-full flex-col items-center justify-center p-4 text-center">
		<h2 class="pb-6 pt-4 font-jbExtrabold text-4xl text-[#fffba4]">
			You are already in a team!
			<p class="pt-4 font-jbMedium text-2xl text-white">Team ID/ Team Secret</p>
		</h2>
	</div> -->
</div>
