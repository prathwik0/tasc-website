<script>
	import * as Table from '$lib/components/ui/table';
	import { facilitiesData, heading, specs } from '$lib/data/Facilities';
	let active = 0;
</script>

<div class="flex min-h-screen w-full flex-col sm:flex-row">
	<div class="relative flex h-1/3 w-full sm:w-1/3">
		<div class="flex w-full flex-col px-4 pb-4 md:min-h-screen">
			{#each facilitiesData as data, index}
				<button class:active={index == active} on:click={() => (active = index)} class={`m-1 w-full rounded rounded-b-md rounded-t-md border-b-[1px] bg-slate-900 p-3 text-left text-white transition-colors duration-300 hover:bg-[#dfdee3] hover:text-black sm:p-6`}>{data.key}</button>
			{/each}
		</div>
	</div>
	<div class="h-2/3 w-full bg-[#0e162a1e] px-10 pt-10 dark:bg-[#0e162a59] sm:h-full sm:w-2/3 md:px-20">
		<div class="flex min-h-screen flex-col gap-5">
			<h1 class="self-center rounded-full border-2 bg-slate-50 p-2 text-center text-lg font-semibold drop-shadow-2xl dark:bg-slate-900 sm:max-w-2xl md:p-6 md:text-xl lg:text-3xl">{heading}</h1>
			{#each facilitiesData as data}
				{#if data.key == facilitiesData[active].key && facilitiesData[active].key !== 'Workstation Specifications'}
					{#if data.title}<h2 class="text-2xl font-bold">{data.title}</h2>{/if}
					<p class="pb-10 text-lg leading-7 text-slate-800 dark:text-slate-300 sm:pb-0">{data.content}</p>
					{#if data?.bullets}
						<ul>
							{#each data.bullets as bullet}
								<li class="pb-10 text-lg leading-7 sm:pb-0"><span class="font-semibold">{bullet.header}</span></li>
								<ul class="ml-8 list-disc text-slate-800 dark:text-slate-300">
									{#each bullet.points as point}
										<li class="text-md pb-10 leading-7 sm:pb-0">{point}</li>
									{/each}
								</ul>
							{/each}
						</ul>
					{/if}
					{#if data.images}
						<div class="mb-10 grid w-full grid-cols-1 place-items-center gap-10 sm:pb-0 md:grid-cols-2 lg:grid-cols-3">
							{#each data.images as i}
								<img src={`/facilities/${i}.webp`} class="h-44 w-72 rounded-md drop-shadow-2xl md:h-48" alt="" />
							{/each}
						</div>
					{/if}
				{:else if data.key == facilitiesData[active].key && facilitiesData[active].key == 'Workstation Specifications'}
					<h2 class="text-2xl font-medium">{data.title}</h2>
					<Table.Root>
						<Table.Body>
							{#each specs as spec}
								<Table.Row>
									<Table.Cell class="font-semibold">{spec.title}</Table.Cell>
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

<style lang="scss">
	.active {
		background-color: #dfdee3;
		color: black;
	}
</style>
