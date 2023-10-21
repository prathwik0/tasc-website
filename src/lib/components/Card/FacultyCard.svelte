<script lang="ts">
	export let image: string;
	export let image2: string = image;
	export let imageAlt: string = 'profile';
	export let name: string;
	export let designation: string = 'Professor';
	export let designation2: string;
	export let about: Array<any> = [];
	// export let target: string = '_blank';

	let display: 'none' | 'block' | 'flex' = 'none';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click|preventDefault={() => {
		display = 'block';
	}}
	class="dark:custom-shadow-black w-72 cursor-pointer overflow-hidden rounded-lg border bg-card py-5 shadow-xl duration-300 ease-in-out hover:scale-110"
>
	<div class="mx-14 flex items-center justify-center">
		<!-- w-32 h-32 -->
		<img src={image} alt={imageAlt} class="aspect-square w-full rounded-full border border-border object-cover" />
	</div>
	<div class="flex flex-col items-center justify-center">
		<h1 class="pt-4 text-xl font-bold">{name}</h1>
		<h2 class="p-2 text-lg font-medium">{designation}</h2>
		{#if designation2}
			<h2 class={'pb-5 text-center text-lg'}>{designation2}</h2>
		{/if}
	</div>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click|preventDefault={() => {
		display = 'none';
		console.log('close popup');
	}}
	style="display: {display};"
	class="fixed top-0 z-10 h-screen w-full duration-300"
>
	<div on:click|preventDefault|stopPropagation={() => {}} class="card dark:custom-shadow-black fixed inset-0 top-[20%] z-20 mx-auto flex min-h-max w-[80%] cursor-pointer flex-col items-center overflow-hidden rounded-lg border border-border bg-popover shadow-lg md:min-h-fit md:w-1/2 lg:w-[66%]">
		<div class="m-4 grid w-full grid-cols-2">
			<div class="flex items-center justify-center p-4">
				<img src={image2} alt={imageAlt} class="w-full border border-border object-cover md:h-96 md:w-96" />
			</div>
			<div class="mr-4 flex flex-col items-center justify-center">
				<h1 class="pt-4 text-2xl font-bold">{name}</h1>
				<h2 class="p-2 text-lg font-medium">{designation}</h2>

				<div>
					{#each about as para}
						<p class="pt-2">{para}</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<!-- class="cursor-pointer border border-border bg-[hsl(282,25%,79%)] shadow-lg dark:bg-[hsl(261,88%,16%)]" -->
