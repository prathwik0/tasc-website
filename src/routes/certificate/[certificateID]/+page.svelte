<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Certificate | TASC</title>
	<meta name="description" content={data.occasion} />
</svelte:head>

<div>
	{data.certificateID}
	{data.date}
	{data.name}
	{data.teamName}
	{data.user}
	{data.team}
	{data.role}
	{data.occasion}
</div>
