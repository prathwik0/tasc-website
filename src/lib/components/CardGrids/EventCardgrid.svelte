<script lang="ts">

    import type EventCardType from "$lib/components/types/EventCardType";
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };
    export let data:EventCardType;

</script>


<div class={`grid-container gap-10 mx-20 py-16 `}>
    {#each data.Data as event}
        <div class="flex flex-col w-full">
            <div class={'bg-muted-light dark:bg-muted-dark rounded-lg shadow-xl dark:drop-shadow-md dark:custom-shadow-black py-8 px-5 flex-1'}>
                <div class={'flex justify-center'}>
                    {#if event.image}
                        <img src={event?.image} alt={event.title} class={'object-cover border border-muted-light dark:border-muted-dark'}/>
                    {/if}
                </div>
                <h1 class={'text-2xl font-bold py-4 text-center'}>{event.title}</h1>
                {#if event.date}
                    <h2 class={'text-xl'}>Date: {event.date.toDate().toLocaleDateString(undefined, options)}</h2>
                {/if}
                {#if event.time}
                    <h2 class={'text-xl'}>Time: {event.time}</h2>
                {/if}
                {#if event.venue}
                    <h2 class={'text-xl'}>Venue: {event?.venue}</h2>
                {/if}

                <div class="flex justify-center items-center pt-4">
                    {#if event.registrationLink}
                        <a href={`${event.registrationLink}`} target="_blank">
                            <button class="bg-brand text-white px-4 py-2 rounded-xl hover:scale-110 duration-200">
                                Register Now
                            </button>
                        </a>
                    {/if}
                </div>
            </div>
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