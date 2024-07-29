<script lang="ts">
    import { page } from '$app/stores';
	import PlacementCardGrid from '$lib/components/CardGrids/PlacementCardGrid.svelte';
    let year = $page.params.year;
</script>

<div class="w-full h-auto grid">
    <div class={'flex sm:w-[80%] w-[95%] justify-around justify-self-center py-8 font-bold overflow-x-auto'} data-sveltekit-reload>
        <a href="/achievements/placements/2024">
            <button class={`text-md sm:text-xl md:text-2xl ${year === '2024' ? 'underline underline-offset-4' : 'no-underline'}`}> 2024 </button>
        </a>
    </div>
    <PlacementCardGrid year={year} />
</div>