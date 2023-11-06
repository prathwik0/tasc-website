<script lang="ts">
	import { NAVITEM } from '$lib/data/NavbarItems';
	import { page } from '$app/stores';
</script>

<ul class="hidden w-max flex-grow justify-center md:flex">
	{#each NAVITEM as item}
		<a href={`${item.href}`}>
			<li class="py-2 text-xl font-bold duration-200 hover:scale-125 md:px-4 lg:px-10 xl:px-14 {$page.url.pathname.split('/')[1] === item.title.toLowerCase() || ($page.url.pathname === '/' && item.title === 'Home') ? 'underline underline-offset-4' : ''} ">
				<span>{item.title}</span>
			</li>
		</a>
	{/each}
</ul>
