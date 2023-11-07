<script>
	import { Input } from '$lib/components/ui/input';
	import MainButton from './MainButton.svelte';
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	<!-- Not in a team -->
	<div class="flex h-full w-full flex-col items-center justify-center">
		<h2 class="pb-6 pt-4 font-jbExtrabold text-4xl">Create a Team</h2>
		<Input type="text" placeholder="Enter your team name!" class="h-14 w-80 rounded-2xl bg-gray-600 p-4 font-jbMedium text-white" />
		<MainButton hrefId="/createteam">Create Team</MainButton>
	</div>

	<!-- Already in a team -->
	<div class="flex h-full w-full flex-col items-center justify-center p-4 text-center">
		<h2 class="pb-6 pt-4 font-jbExtrabold text-4xl text-[#fffba4]">
			You are already in a team!
			<p class="pt-4 font-jbMedium text-2xl text-white">Team ID/ Team Secret</p>
		</h2>
	</div>
</div>
