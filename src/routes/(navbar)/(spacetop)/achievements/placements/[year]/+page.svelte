<script lang='ts'>
    import { page } from '$app/stores';
    import PlacementCardGrid from '$lib/components/CardGrids/PlacementCardGrid.svelte';
    let year = $page.params.year;
</script>

<div>
	<div class={'flex w-full justify-center sm:space-x-10 space-x-4 py-10 font-bold md:space-x-16 ov overflow-x-auto'} data-sveltekit-reload>
        <a href="/achievements/placements/2024">
			<button class={`text-md sm:text-xl md:text-2xl ${year === '2024' ? 'underline underline-offset-4' : 'no-underline'}`}> 2024 </button>
		</a>
        <a href="/achievements/placements/2025">
			<button class={`text-md sm:text-xl md:text-2xl ${year === '2025' ? 'underline underline-offset-4' : 'no-underline'}`}> 2025 </button>
		</a>
	</div>
    <PlacementCardGrid year={year} />
</div>