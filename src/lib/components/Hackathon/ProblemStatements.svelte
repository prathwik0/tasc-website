<script lang="ts">
	import { ProblemStatements } from '$lib/data/ProblemStatements';
	import MainButton from './MainButton.svelte';
	import PsTemplate from './PSTemplate.svelte';
</script>

<div class="mx-16 flex flex-col space-y-8 py-20 md:mx-24">
	<h1 class="text-center font-jbExtrabold text-4xl md:text-5xl">Problem Statements</h1>

	<a href="https://1drv.ms/p/s!Aq9n_XTNf6UwgZs4Pcyc4VJtBekb0A?e=PBCA89" target="_blank"><MainButton>Presentation Template</MainButton></a>

	<div class="grid grid-cols-1 gap-x-32 gap-y-10 md:grid-cols-2">
		{#each ProblemStatements as ps}
			<div class="duration-300 hover:scale-105">
				<PsTemplate title={ps.title} description={ps.description} PID={ps.PID} startup={ps.startup} startupDescription={ps.startupDescription} />
			</div>
		{/each}
	</div>

	<h3 class="py-5 text-center font-jbExtrabold text-xl md:py-10 md:text-2xl">More problem statements coming soon!</h3>
</div>
