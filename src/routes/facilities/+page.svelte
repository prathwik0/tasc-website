<script>
	import AuthButton from '$lib/components/Auth/AuthButton.svelte';
	import Footer from '$lib/components/HeaderFooter/Footer.svelte';
	import Navbar from '$lib/components/HeaderFooter/Navbar.svelte';
	import * as Table from '$lib/components/ui/table';
	import Vectorall from '$lib/components/VectorBackground/vectorall.svelte';
	import { facilitiesData, heading, specs } from '$lib/data/Facilities';
	let active = 0;
</script>

<!-- <Vectorall /> -->
<Navbar />
<div class="flex min-h-screen w-full flex-col bg-slate-950 pt-20 sm:flex-row">
	<!-- <h1 class="pt-20">Hello DELL!</h1> -->
	<div class="relative flex h-1/3 w-full sm:w-1/3">
		<div class="flex w-full flex-col px-4 pb-4 md:min-h-screen">
			{#each facilitiesData as data, index}
				<button class:active={index == active} on:click={() => (active = index)} class={`rounded- w-full rounded-b-md rounded-t-md border-b-[1px] bg-slate-900 p-4 text-left text-white transition-colors duration-300 hover:bg-white hover:text-black sm:p-6`}>{data.key}</button>
			{/each}
		</div>
	</div>
	<div class="h-2/3 w-full border-l-2 bg-[#0c1324] px-10 pt-10 sm:h-full sm:w-2/3 md:px-20">
		<div class="flex min-h-screen flex-col gap-5">
			<h1 class="self-center rounded-full border-2 bg-slate-900 p-2 text-center text-lg font-semibold drop-shadow-2xl sm:max-w-2xl md:p-6 md:text-xl lg:text-3xl">{heading}</h1>
			{#each facilitiesData as data, index}
				{#if data.key == facilitiesData[active].key && facilitiesData[active].key !== 'Workstation Specifications'}
					<h2 class="text-2xl font-medium">{data.title}</h2>
					<p class="pb-10 text-lg leading-7 text-slate-400 sm:pb-0">{data.content}</p>
					{#if data.imageCount !== 0}
						<div class="grid w-full grid-cols-1 place-items-center gap-10 pb-10 sm:pb-0 md:grid-cols-2 lg:grid-cols-3">
							{#each Array(data.imageCount) as _, i}
								<img src={`/facilities/1(${i + 1}).JPG`} class="h-44 w-72 rounded-md drop-shadow-2xl md:h-48" alt="" />
							{/each}
						</div>
					{/if}
				{:else if data.key == facilitiesData[active].key && facilitiesData[active].key == 'Workstation Specifications'}
					<h2 class="text-2xl font-medium">{data.title}</h2>
					<Table.Root>
						<Table.Body>
							{#each specs as spec}
								<Table.Row>
									<Table.Cell class="font-bold">{spec.title}</Table.Cell>
									<Table.Cell>{spec.desc}</Table.Cell>
								</Table.Row>
							{/each}
						</Table.Body>
					</Table.Root>
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
