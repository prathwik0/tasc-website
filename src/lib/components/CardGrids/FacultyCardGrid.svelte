<script lang="ts">
    export let data:any;
</script>

<div class="grid-container gap-10 lg:px-16 md:px-12 px-6 space-y-10 md:space-y-0 py-16">
    {#each data.Data as faculty}
        <div  class={'min-w-full bg-muted-light dark:bg-muted-dark rounded-xl shadow-xl dark:drop-shadow-md dark:custom-shadow-black  py-8 px-6'}>
            <div class={'flex justify-center'}>
                <img src={faculty.image} alt={faculty.name} class={'object-cover rounded-full lg:w-44 lg:h-44 w-36 h-36   border border-[#e5c6fc] dark:border-[#121928]'}/>
            </div>
            <h1 class={'text-2xl font-bold py-4 text-center'}>{faculty.name}</h1>
            <h2 class={'text-lg pb-5 text-center'}>{faculty.designation}</h2>
            {#if faculty.designation2}
                <h2 class={'text-lg pb-5 text-center'}>{faculty.designation2}</h2>
            {/if}
            <h2 class={'text-lg pb-5 text-center'}>{faculty.email}</h2>
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