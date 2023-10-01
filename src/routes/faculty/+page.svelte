<script lang="ts">
    import FacultyCardGrid from "$lib/components/CardGrids/FacultyCardGrid.svelte";
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<FacultyCardGrid data={data}/>