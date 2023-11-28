<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	const specialOccasions = ['snh2023'];

	let mount = false;
	onMount(() => {
		if (specialOccasions.includes(data.occasion)) {
			goto(`/certificate/${data.certificateID}/${data.occasion}`, { replaceState: true });
		}
		mount = true;
	});
</script>

<svelte:head>
	<title>Certificate | TASC</title>
	<meta name="description" content={data.occasion} />
</svelte:head>

{#if mount}
	<slot />
{/if}
