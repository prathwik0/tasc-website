<script lang="ts">
    export let data:any;
</script>

<div class="grid-container gap-10 lg:px-16 md:px-12 px-6 space-y-10 md:space-y-0 pb-28">
    {#each data.Data as member}
        <div  class={'min-w-full bg-muted-light dark:bg-muted-dark rounded-xl shadow-xl dark:drop-shadow-md dark:custom-shadow-black py-8 px-5 hover:scale-110 duration-200'}>
            <div class={'flex justify-center'}>
                <img
                        src={member.image}
                        alt={member.name}
                        width={800}
                        height={800}
                        class={'object-cover rounded-full lg:w-44 lg:h-44 w-36 h-36 border border-[#e5c6fc] dark:border-[#121928]'}
                />
            </div>
            <h1 class={'text-2xl font-bold py-4 text-center'}>{member.name}</h1>
            <h2 class={'text-lg pb-5 text-center'}>{member.role}</h2>
            <ul class={'flex justify-center w-full space-x-5 z-50'}>
                {#if member.instagram}
                    <a href={`${member.instagram}`} target={'_blank'}>
                        <iconify-icon icon="mdi:instagram" height="2.5rem"/>
                    </a>
                {/if}
                {#if member.github}
                    <a href={`${member.github}`} target={'_blank'}>
                        <iconify-icon icon="mdi:github" height="2.5rem"/>
                    </a>
                {/if}
                {#if member.linkedin}
                    <a href={`${member.linkedin}`} target={'_blank'}>
                        <iconify-icon icon="mdi:linkedin" height="2.5rem"/>
                    </a>
                {/if}
            </ul>
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