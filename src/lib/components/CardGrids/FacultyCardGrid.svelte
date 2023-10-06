<script lang="ts">
	import type FacultyData from '../types/FacultyData';
	export let faculties: FacultyData[];
</script>

<div class="grid-container gap-10 space-y-10 px-6 py-16 md:space-y-0 md:px-12 lg:px-16">
	{#each faculties as faculty}
		<div class={'dark:custom-shadow-black min-w-full rounded-xl bg-muted-light px-6 py-8 shadow-xl  dark:bg-muted-dark dark:drop-shadow-md'}>
			<div class={'flex justify-center'}>
				<img src={faculty.image} alt={faculty.name} class={'h-36 w-36 rounded-full border border-[#e5c6fc] object-cover   dark:border-[#121928] lg:h-44 lg:w-44'} />
			</div>
			<h1 class={'py-4 text-center text-2xl font-bold'}>{faculty.name}</h1>
			<h2 class={'pb-5 text-center text-lg'}>{faculty.designation}</h2>
			{#if faculty.designation2}
				<h2 class={'pb-5 text-center text-lg'}>{faculty.designation2}</h2>
			{/if}
			<h2 class={'pb-5 text-center text-lg'}>{faculty.email}</h2>
		</div>
	{/each}
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
		justify-items: center;
		justify-content: end;
		align-content: end;
		row-gap: 4rem;
	}
</style>
