<script lang="ts">
	import { backgroundColor } from '$lib/actions/style';
	import EditButton from '$lib/components/Auth/EditButton.svelte';
	import UserLink from '$lib/components/Profile/UserLink.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { darkTheme } from '$lib/stores/theme';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>@{data.username} | TASC</title>
	<meta name="description" content={data.bio} />
</svelte:head>

<svelte:body
	use:backgroundColor={{
		color_light: data.color_light ?? '',
		color_dark: data.color_dark ?? '',
		darkTheme: $darkTheme
	}}
/>
<div class="mx-2 flex flex-col items-center justify-center sm:my-6">
	<!-- <h1 class="mt-2 text-center text-3xl sm:text-4xl">Profile</h1> -->
	<div class="flex h-auto w-full flex-col items-center gap-y-5 rounded-md border border-white bg-white bg-opacity-5 p-10 shadow-[0_0_.9rem_#ffffff] sm:w-3/4 md:w-[550px]">
		{#if data.photoURL}
			<img src={data.photoURL} alt="photoURL" class="w-32 rounded-full aspect-square object-cover md:w-52" />
		{:else}
			<img src={'/fallback-image.jpg'} alt="photoURL" class="w-32 rounded-full aspect-square object-cover md:w-52" />
		{/if}
		<h1 class="text-center text-lg font-bold md:text-2xl">{data.name}</h1>
		<Separator class="h-[0.5px] w-2/3 bg-white" />
		<p class="text-center text-sm text-slate-200 md:text-base">{data.bio ?? 'No bio yet'}</p>
		<EditButton currentUsername={data.username} />
	</div>
	<h1 class="mt-4 text-center text-3xl sm:text-4xl">My Links</h1>
	<div class="w-ful flex justify-center sm:w-3/4 md:w-[550px]">
		{#if data.links && data.links.length > 0}
			<ul class="my-6 flex list-none flex-wrap justify-center gap-4">
				{#each data.links as item}
					<UserLink {...item} />
				{/each}
			</ul>
		{/if}
	</div>
</div>
{#if data.achievements && data.achievements.length > 0}
	<div class="mx-2 flex flex-col items-center gap-2">
		<h1 class="my-4 text-center text-3xl sm:text-4xl">Achievements</h1>
		{#each data.achievements as achievement}
			<a href={data[achievement].certificateURL} target="_blank"><h2 class="w-full text-center text-2xl text-slate-400 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_0.3rem_#ffffff]">{data[achievement].certificateTitle}</h2> </a>
			<!-- Todo make animations pop up like on hover it shows! On Phone screen let this be default -->
			<div class="text-center text-slate-400">
				<p>Issue Date : {data[achievement].issueDate.toDate().toLocaleDateString()}</p>
				<p>Occasion : {data[achievement].occasion.toUpperCase()}</p>
			</div>
			<Separator class="my-4 w-1/3"></Separator>
		{/each}
	</div>
{/if}

<style>
</style>
