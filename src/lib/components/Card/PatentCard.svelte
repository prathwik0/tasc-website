<script lang="ts">
	import type { Patent } from "$lib/components/types/AchievementData";
	import { NAME_TO_IMAGE as images } from "$lib/data/Images";
	import { darkTheme } from "$lib/stores/theme";

	export let patents: Patent[];
    let theme: string = 'dark';

    $: darkTheme.subscribe(value => {
        if (value) theme = 'dark';
        else theme = 'light';
    })
</script>

<div class={`h-full w-full grid sm:space-y-10 space-y-4 ${theme}`}>
	{#each patents as patent}
		<div class="sm:w-[80%] w-[95%] justify-self-center bg-card border-2 border-blue-900 sm:p-4 p-1 rounded-2xl shadow-xl dark:custom-shadow-black">
			<p class="text-center lg:text-3xl md:text-2xl sm:text-lg text-xs sm:font-semibold font-bold underline md:underline-offset-4 underline-offset-2 dark:text-yellow-300 text-black">{patent.title}</p>
			{#if images.find(n => n.name === patent.id)}
				<div class="grid w-full my-5"><img src={images.find(n => n.name === patent.id)?.image} class="sm:w-[60%] w-[80%] justify-self-center" alt=""></div>
			{/if}
			{#if !(images.find(n => n.name === patent.id))}
				<div class="grid grid-cols-10 md:p-6 py-2">
					<p class="sm:col-span-2 col-span-3 self-center text-center lg:text-xl md:text-lg sm:text-md text-xs dark:text-white text-black">Faculty</p>
					<p class="col-span-1 self-center text-center lg:text-xl md:text-lg sm:text-md text-xs dark:text-white text-black">:</p>
					<div class="sm:col-span-7 col-span-6 flex justify-around sm:space-x-4">
						{#each patent.faculty as teacher}
							<div class="justify-self-center grid w-[30%]">
								<img src={images.find(n => n.name === teacher)?.image||''} class="lg:h-[9rem] md:h-[7rem] sm:h-[5rem] h-[3rem] justify-self-center" alt="">
								<div class="justify-center items-center"><p class="text-center lg:text-lg md:text-md sm:text-sm text-xs dark:text-white text-black">{teacher}</p></div>
							</div>
						{/each}
					</div>
				</div>
			{/if}
			{#if patent.students}
				<div class="grid grid-cols-10 md:p-6 py-2">
					<p class="sm:col-span-2 col-span-3 self-center text-center lg:text-xl md:text-lg sm:text-md text-xs dark:text-white text-black">Students</p>
					<p class="col-span-1 self-center text-center lg:text-xl md:text-lg sm:text-md text-xs dark:text-white text-black">:</p>
					<div class="sm:col-span-7 col-span-6 flex justify-around sm:space-x-4">
						{#each patent.students as student}
							<div class={`justify-self-center grid w-[30%]`}>
								<img src='/user1.png' class="lg:h-[9rem] md:h-[7rem] sm:h-[5rem] h-[3rem] justify-self-center" alt="">
								<div class="justify-center items-center"><p class="text-center lg:text-lg md:text-md sm:text-sm text-xs dark:text-white text-black">{student}</p></div>
							</div>
						{/each}
					</div>
				</div>
			{:else if patent.inventors}
				<div  class="sm:grid grid-cols-10 md:p-6 py-2">
					<p class="sm:col-span-2 col-span-3 self-center text-center lg:text-xl md:text-lg sm:text-md text-xs dark:text-white text-black">In collaboration with</p>
					<p class="col-span-1 self-center text-center lg:text-xl md:text-lg sm:text-md text-xs hidden sm:block dark:text-white text-black">:</p>
					<div class="col-span-7">
						{#each patent.inventors as inventor}
							<div class="grid grid-cols-3 space-y-1">
								<p class="lg:text-lg md:text-md sm:text-sm text-xs self-center dark:text-white text-black">{inventor.address}</p>
								<p class="lg:text-lg md:text-md sm:text-sm text-xs self-center text-center dark:text-white text-black">-</p>
								<p class="lg:text-lg md:text-md sm:text-sm text-xs self-center dark:text-white text-black">{inventor.names.map(name => name).join(', ')}</p>
							</div>
						{/each}
					</div>
				</div>
			{:else if patent.authors}
				<div class="grid grid-cols-10 md:p-6 py-2">
					<p class="sm:col-span-2 col-span-3 self-center text-center lg:text-xl md:text-lg sm:text-md text-xs dark:text-white text-black">Collaborated with</p>
					<p class="col-span-1 self-center text-center lg:text-xl md:text-lg sm:text-md text-xs dark:text-white text-black">:</p>
					<div class="sm:col-span-7 col-span-6 grid ">
						<p class="lg:text-lg md:text-md sm:text-sm text-xs text-center self-center dark:text-white text-black">{patent.authors.map(author => author).join(',  ')}</p>
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	:root {
		--patent-dark-gradient: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
		--patent-light-gradient: linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%);


	}

	.dark {
		--patent-gradient: var(--patent-dark-gradient);
	}

	.light {
		--patent-gradient: var(--patent-light-gradient);
	}

	.patent-card {
		position: relative;
		background-color: transparent;
	}

	.patent-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		border-radius: inherit;
		pointer-events: none;
		opacity: 0.2;
		background-image: var(--patent-gradient);
	}

	.patent-card > * {
		position: relative;
		z-index: 2;
	}
</style>
