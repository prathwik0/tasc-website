<script lang="ts">
	import { ProblemStatements } from '$lib/data/ProblemStatements';
	import PsTemplate from './PSTemplate.svelte';
</script>

<div class="mx-16 flex flex-col py-10 md:mx-24">
	<h1 class="my-10 py-5 text-center font-jbExtrabold text-4xl md:py-10 md:text-5xl">Problem Statements</h1>

	<div class="grid grid-cols-1 gap-x-32 gap-y-10 md:grid-cols-2">
		{#each ProblemStatements as ps}
			<div>
				<PsTemplate title={ps.title} description={ps.description} PID={ps.PID} startup={ps.startup} startupDescription={ps.startupDescription} />
			</div>
		{/each}
	</div>

	<h3 class="py-5 text-center font-jbExtrabold text-xl md:py-10 md:text-2xl">More problem statements coming soon!</h3>
</div>
