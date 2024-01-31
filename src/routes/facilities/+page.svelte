<script>
	import AuthButton from '$lib/components/Auth/AuthButton.svelte';
	import Footer from '$lib/components/HeaderFooter/Footer.svelte';
	import Navbar from '$lib/components/HeaderFooter/Navbar.svelte';
	import Vectorall from '$lib/components/VectorBackground/vectorall.svelte';
	import { facilitiesData, heading } from '$lib/data/Facilities';
	let active = 0;
</script>

<!-- <Vectorall /> -->
<Navbar />
<div class="flex min-h-screen w-full flex-col pt-20 sm:flex-row bg-slate-950">
	<!-- <h1 class="pt-20">Hello DELL!</h1> -->
	<div class="relative flex h-1/3 w-full sm:w-1/3" >
		<div class="flex w-full flex-col md:min-h-screen px-4 pb-4">
			{#each facilitiesData as data, index}
				<button class:active={index == active} on:click={() => (active = index)} class={`rounded-t-md rounded-b-md border-b-[1px] rounded- w-full bg-slate-900 sm:p-6 p-4 text-left text-white transition-colors duration-300 hover:bg-white hover:text-black`}>{data.key}</button>
			{/each}
		</div>
	</div>
	<div class="h-2/3 w-full bg-[#0c1324] px-10 pt-10 sm:h-full sm:w-2/3 md:px-20 border-l-2">
		<div class="flex min-h-screen flex-col gap-5">
			<h1 class="self-center rounded-full border-2 bg-slate-900 p-2 text-center text-lg font-semibold drop-shadow-2xl sm:max-w-2xl md:p-6 md:text-xl lg:text-3xl">{heading}</h1>
			{#each facilitiesData as data, index}
				{#if data.key == facilitiesData[active].key}
					<h2 class="text-2xl font-medium">{data.title}</h2>
					<p class="pb-10 text-lg leading-7 text-slate-400 sm:pb-0">{data.content}</p>
					{#if data.imageCount !== 0}
						<div class="grid w-full grid-cols-1 place-items-center gap-10 pb-10 sm:pb-0 md:grid-cols-2 lg:grid-cols-3">
							{#each Array(data.imageCount) as _, i}
								<img src={`/facilities/1(${i + 1}).JPG`} class="h-44 w-72 md:h-48 rounded-md drop-shadow-2xl" alt="" />
							{/each}
						</div>
					{/if}
				{/if}
			{/each}
		</div>
	</div>
</div>
<Footer />

<style>
	.active {
		background-color: white;
		color: black;
	}
</style>
