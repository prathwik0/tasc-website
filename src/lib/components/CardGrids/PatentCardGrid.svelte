<script lang='ts'>
    import { PATENT_DETAILS } from '$lib/data/Achievements';
    import type { Patent, PatentDetails } from '$lib/components/types/AchievementData';
    import PatentCard from '$lib/components/Card/PatentCard.svelte';

    export let year: string;

    let patents: Patent[] = PATENT_DETAILS.find((patent: PatentDetails) => patent.year === year)?.patents || [];
</script>

<div class="sm:px-4 md:py-5 py-0">
    <PatentCard patents={patents} />
</div>