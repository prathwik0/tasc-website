<script lang="ts">
    import type { Publication } from '$lib/components/types/AchievementData';
    import { NAME_TO_IMAGE as images } from '$lib/data/Images';
    import * as Dialog from '$lib/components/ui/dialog-publications';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
    export let publications: Publication[];
    export let faculty: Record<string, string[]>;
    export let titles: Record<string, Publication[]>;

    gsap.registerPlugin(ScrollTrigger);

    let facultyNames = Object.keys(faculty);

    function title_details(key: string, value: string) {
        if (value === '') return '';
        let detail =`
            <div class="grid sm:grid-cols-8 grid-cols-9 items-center">
                <p class="sm:col-auto col-span-2">${key}</p>
                <p class="text-center">:</p>
                <p class="sm:col-span-6 col-span-5">${value}</p>
            </div>`
        return detail;
    }

    onMount(() => {
        const items = document.querySelectorAll('.animate-item');
        items.forEach((item,) => {
            gsap.fromTo(item, 
                { x: -200, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.5, ease: 'power4.out', 
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%', // Starts animation when the top of the element is at 80% of the viewport height
                        end: 'bottom 60%', // Ends animation when the bottom of the element is at 70% of the viewport height
                        scrub: true,
                        toggleActions: 'play none none reverse',
                        markers: false // Set to true to see markers for debugging
                    }
                }
            );
        });
    });
</script>

<div class="flex flex-col gap-6 lg:px-24 md:px-12 sm:px-0 px-4">
    {#each facultyNames as teacher}
        <div class="animate-item opacity-0 sm:grid flex flex-col grid-cols-10 justify-items-center rounded-2xl border border-blue-500 bg-card lg:p-5 md:p-4 sm:p-3 p-2 sm:gap-0 gap-3">
            <div class="relative col-span-2 grid justify-items-center place-content-center transition duration-300 ease-in-out">
                <div class="image-container"><img src={images.find(n => n.name === teacher)?.image||''} alt="" class="aspect-[3/4] sm:w-auto w-40 sm:object-cover rounded-2xl"></div>
                <div class="absolute grid inset-0 items-center justify-center dark:text-white opacity-0 transition-opacity duration-300 hover:opacity-100 hover:dark:custom-drop-shadow-white hover:custom-drop-shadow-black">
                    <p class="justify-self-center lg:text-xl md:text-lg sm:text-md">{teacher}</p>
                    <p class="justify-self-center lg:text-lg md:text-md sm:text-sm">({publications.find(paper => paper.name === teacher)?.designation})</p>
                </div>
            </div>
            <div class="col-span-8 justify-evenly gap-5 flex flex-col sm:w-[80%]">
                {#each faculty[teacher] as paper}
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <h1 class="animate-item lg:text-lg md:text-md sm:text-sm text-xs font-semibold text-center hover:underline hover:cursor-pointer">{paper}</h1>
                        </Dialog.Trigger>
                        <Dialog.Content>
                            <div class="grid gap-6 justify-around">
                                {@html title_details('Title', `${paper} (<a href=${titles[paper][0].link} class="text-blue-500 hover:underline">Read the full paper here</a>)`)}
                                {@html title_details('Authors', titles[paper][0].authors.map(author => author).join(', '))}
                                {@html title_details('Date of Publication', titles[paper][0].month_year)}
                                {#if titles[paper][0].journal !== ''}
                                    {@html title_details('Journal', `${titles[paper][0].journal}${titles[paper][0].ranking ? `(${titles[paper][0].ranking})` : ''}`)}
                                {:else}
                                    {@html title_details('Journal Ranking', titles[paper][0].ranking)}
                                {/if}
                                {@html title_details('Impact Factor', titles[paper][0].impact_factor)}
                                {@html title_details('Publisher', titles[paper][0].publisher)}
                                {@html title_details('Conference', titles[paper][0].conference)}
                                {@html title_details('Publisher', titles[paper][0].publisher_conference)}
                                {@html title_details('Indexing', `Indexed in ${titles[paper][0].indexed}`)}
                            </div>
                        </Dialog.Content>
                    </Dialog.Root>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    .image-container {
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }

    .relative:hover .image-container {
        opacity: 0.5;
    }
</style>