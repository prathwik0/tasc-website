<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	export let data: LayoutData;

	let mount = false;
	onMount(() => {
		mount = true;
		console.log($page.url.pathname.toString());
		if (!$page.url.pathname.toString().includes(data.occasionID)) {
			goto(`/certificate/${data.certificateID}/${data.occasionID}`, { replaceState: true });
		}
	});
</script>

<svelte:head>
	<title>Certificate | TASC</title>
	<meta name="description" content={data.occasionID} />
</svelte:head>

{#if mount}
	<slot />
{/if}
