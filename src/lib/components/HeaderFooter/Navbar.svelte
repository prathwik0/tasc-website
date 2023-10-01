<script lang="ts">
	import { NAVITEM } from '$lib/data/NavItems';
	import ThemeToggle from '$lib/components/HeaderFooter/ThemeToggle.svelte';
	import { page } from '$app/stores';
	import NavbarMenu from '$lib/components/HeaderFooter/NavbarMenu.svelte';
	import { menuToggle } from '$lib/stores/menuToggle';
	const toggleMenu = () => {
		menuToggle.set(!$menuToggle); // Toggle the menu state
	};

	import { fade } from 'svelte/transition';
</script>

<section class="flex items-center justify-between border-zinc-300 bg-primary-light px-10 py-4 shadow-slate-100 dark:border-zinc-800 dark:bg-primary-dark dark:shadow-white">
	<a href="/"><img src="/TASCLogo.png" alt="" class="h-7 w-20 duration-200 hover:scale-110" /></a>
	<ul class="hidden space-x-10 md:flex">
		{#each NAVITEM as item}
			<a href={`${item.href}`}>
				<li class={`rounded-xl px-3 py-2 text-xl font-bold duration-200 hover:scale-110 hover:bg-primary-dark hover:text-white hover:dark:bg-primary-light hover:dark:text-black ${$page.url.pathname.split('/')[1] === item.title.toLowerCase() || ($page.url.pathname === '/' && item.title === 'Home') ? 'underline underline-offset-4' : ''}`}>
					<span>{item.title}</span>
				</li>
			</a>
		{/each}
	</ul>
	<div class="flex items-center space-x-5">
		<!-- <button class="hidden rounded-xl bg-brand px-4 py-2 text-white duration-200 hover:scale-110 md:block">Login</button> -->
		<div><ThemeToggle /></div>
		<button class="md:hidden" on:click={toggleMenu}>
			<iconify-icon icon="ion:menu" height="2.5rem"></iconify-icon>
		</button>
	</div>

	<div class={`md:hidden ${menuToggle ? '' : 'hidden'} fixed right-0 top-0 z-50`} transition:fade={{ delay: 250, duration: 300 }}>
		<NavbarMenu />
	</div>
</section>
