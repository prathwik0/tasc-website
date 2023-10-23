<script lang="ts">
	import { backgroundColor } from '$lib/actions/style';
	import UserLink from '$lib/components/Profile/UserLink.svelte';
	import type { PageData } from './$types';
	import Layout from './Layout.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>@{data.username} | TASC</title>
	<meta name="description" content={data.bio} />
</svelte:head>

<svelte:body use:backgroundColor={data.color ?? ''} />

<Layout>
	<h1 slot="navbar" class="hidden text-2xl md:block">{data.name} {data.color}</h1>

	<div class="flex w-full flex-grow flex-wrap items-center justify-evenly align-middle">
		<div class="mt-6 w-72 sm:w-[420px]">
			<h1 class="text-2xl">{data.name}</h1>
			<img src={data.photoURL ?? '/user.png'} alt="photoURL" class="aspect-square h-72 object-cover py-4" />
			<p>{data.bio ?? 'No bio yet'}</p>
		</div>

		<div class="mt-6 w-72 sm:w-[420px]">
			<h1 class="text-2xl">My Social Media</h1>

			<ul class="flex list-none flex-col">
				{#each data.links as item}
					<li class="w-full py-2">
						<UserLink {...item} />
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="m-24"></div>
</Layout>
