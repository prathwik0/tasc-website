<script lang="ts">
    import MemberCardGrid from "$lib/components/CardGrids/MemberCardGrid.svelte";
    import {page} from "$app/stores";
    let year = $page.params.year;
    export let data:any;
</script>

<div>
    <div class={'flex w-full justify-center md:space-x-16 space-x-8 font-bold py-10'}>
        <a href="/team/2021">
            <button class={`md:text-2xl text-xl ${year === '2021' ? 'underline underline-offset-4' : 'no-underline'}`} on:click={() => year = '2021'}>
                2021-22
            </button>
        </a>
        <a href="/team/2022">
            <button class={`md:text-2xl text-xl ${year === '2022' ? 'underline underline-offset-4' : 'no-underline'}`}  on:click={() => year = '2022'}>
                2022-23
            </button>
        </a>
        <a href="/team/2023">
            <button class={`md:text-2xl text-xl ${year === '2023' ? 'underline underline-offset-4' : 'no-underline'}`}  on:click={() => year = '2023'}>
                2023-24
            </button>
        </a>
    </div>
    <MemberCardGrid data={data}/>
</div>