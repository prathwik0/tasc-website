<script lang="ts">
	import type FacultyData from '$lib/types/FacultyData';
	import FacultyCard from '../Card/FacultyCard.svelte';
	export let faculties: FacultyData[];
</script>

<div class="grid-container gap-y-2 px-6 py-10 md:gap-y-4 md:px-12 lg:px-16">
	{#each faculties as faculty}
		<FacultyCard {...faculty} />
	{/each}
</div>

<style>
	.grid-container {
		display: grid;
		gap: 3rem 0;
		grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
		justify-items: center;
		justify-content: end;
		align-content: end;
	}
</style>
