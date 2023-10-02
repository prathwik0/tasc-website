<script lang="ts">
    import EventCardgrid from "$lib/components/CardGrids/EventCardgrid.svelte";
    import {page} from "$app/stores";
    let eventType = $page.params.type;
    import type EventCardType from "$lib/components/types/EventCardType";
    export let data: EventCardType;

</script>

<div class={`${eventType === 'upcoming' ? 'h-screen' : ''}`}>
    <div class={'flex w-full justify-center md:space-x-16 space-x-8 font-bold pt-16'}>
        <a href="/events/previous">
            <button class={`md:text-2xl text-xl ${eventType === 'previous' ? 'underline underline-offset-4' : 'no-underline'}`} on:click={() => eventType = "previous"}>
                Previous Events
            </button>
        </a>
        <a href="/events/upcoming">
            <button class={`md:text-2xl text-xl ${eventType === 'upcoming' ? 'underline underline-offset-4' : 'no-underline'}`}  on:click={() => eventType = "upcoming" }>
                Upcoming Events
            </button>
        </a>
    </div>

    <EventCardgrid data={data}/>
</div>