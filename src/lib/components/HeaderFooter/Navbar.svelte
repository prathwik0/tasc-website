<!-- <script lang="ts">
	import ThemeToggle from '$lib/components/HeaderFooter/ThemeToggle.svelte';
	import { NAVITEM } from '$lib/data/NavbarItems';
	import NavbarMobile from '$lib/components/HeaderFooter/NavbarMobile.svelte';
	import AuthButton from '$lib/components/Auth/AuthButton.svelte';
	import { page } from '$app/stores';
	import { menuToggle } from '$lib/stores/menuToggle';
	const toggleMenu = () => {
		menuToggle.set(!$menuToggle); // Toggle the menu state
	};

	import { fade } from 'svelte/transition';
</script>

<div class="my-[6px] flex h-12 content-center items-center justify-between px-2">
	<a href="/" class="hidden sm:block"><img src="/TASCLogo.png" alt="TASC logo" class="w-20 duration-200 hover:scale-110" /></a>

	<ul class="flex">
		{#each NAVITEM as item}
			<a href={`${item.href}`}>
				<li class="py-2 text-xl font-bold duration-200 hover:scale-125 md:px-4 lg:px-10 xl:px-14 {$page.url.pathname.split('/')[1] === item.title.toLowerCase() || ($page.url.pathname === '/' && item.title === 'Home') ? 'underline underline-offset-4' : ''} ">
					<span>{item.title}</span>
				</li>
			</a>
		{/each}
	</ul>

	<div class="flex flex-grow items-center justify-between space-x-5 sm:flex-grow-0">
		<AuthButton />
		<div class="flex items-center space-x-2 sm:space-x-5">
			<div class="flex-1 duration-200 hover:scale-110"><ThemeToggle /></div>
			<button class="flex md:hidden" on:click={toggleMenu}>
				<iconify-icon icon="eva:menu-outline" height="2rem" width="2rem"></iconify-icon>
			</button>
		</div>
	</div>
</div>
<div class="fixed right-0 top-0 z-50 flex md:hidden" class:hidden={!menuToggle} transition:fade={{ delay: 250, duration: 300 }}>
	<NavbarMobile />
</div>
 -->

<script>
	import { NAVITEM } from '$lib/data/NavbarItems';
	import AuthButton from '$lib/components/Auth/AuthButton.svelte';
	import ThemeToggle from '$lib/components/HeaderFooter/ThemeToggle.svelte';

	const closeMenu = () => {
		// @ts-ignore
		document.getElementById('menuToggle').querySelector('input').checked = false;
	};
</script>

<div>
	<div class="fixed top-0 z-50 hidden w-full backdrop-blur-md lg:grid">
		<div class="flex items-center justify-between px-4 py-3">
			<a href="/" class="w-28">
				<img src="/TASCLogo.png" class="w-20" alt="logo" />
			</a>
			<ul class="flex flex-wrap items-center space-x-8 tracking-wider md:text-lg">
				{#each NAVITEM as nav}
					<div class=" hover:drop-shadow-[0_0_0.2rem_#eb71cc]"><a href={`${nav.href}`} class="scroll-smooth font-bold underline-offset-8 transition duration-300 hover:drop-shadow-[0_0_0.2rem_#460a07]">{nav.title}</a></div>
				{/each}
			</ul>
			<div class="flex w-28 justify-center space-x-5">
				<AuthButton />
				<ThemeToggle />
			</div>
		</div>
	</div>

	<div class="fixed z-50 flex w-full px-3 py-6 backdrop-blur-md lg:hidden">
		<a href="/" class="w-20">
			<img src="/TASCLogo.png" alt="logo" />
		</a>
		<nav>
			<div id="menuToggle" class="py-6 pr-3">
				<input type="checkbox" />
				<span class="bg-black dark:bg-white"></span>
				<span class="bg-black dark:bg-white"></span>
				<span class="bg-black dark:bg-white"></span>

				<ul id="menu" class="bg-secondary text-right text-black dark:bg-primary-dark dark:text-white">
					{#each NAVITEM as nav}
						<a class="mb-10 font-jbBold text-2xl" href={`${nav.href}`} on:click={closeMenu}> {nav.title} </a>
					{/each}
					<div class="mb-10 flex justify-end font-jbBold text-2xl">
						<AuthButton />
					</div>
					<div class="mb-10 flex justify-end font-jbBold text-2xl">
						<ThemeToggle />
					</div>
				</ul>
			</div>
		</nav>
	</div>
</div>

<style>
	#menuToggle {
		display: block;
		z-index: 1;
		font-weight: bold;
		-webkit-user-select: none;
		user-select: none;
		position: absolute;
		right: 0;
		top: 0;
	}

	#menuToggle a {
		text-decoration: none;
		transition: color 0.3s ease;
	}

	#menuToggle a:hover {
		color: grey;
	}

	#menuToggle input {
		display: block;
		width: 40px;
		height: 32px;
		position: absolute;
		cursor: pointer;

		opacity: 0;
		z-index: 2;

		-webkit-touch-callout: none;
	}

	/*
  	* Just a quick hamburger
  	*/
	#menuToggle span {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;
		border-radius: 3px;

		z-index: 1;

		transform-origin: 4px 0px;

		transition:
			transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
			opacity 0.55s ease;
	}

	#menuToggle span:first-child {
		transform-origin: 0% 0%;
	}

	#menuToggle span:nth-last-child(2) {
		transform-origin: 0% 100%;
	}

	/* 
	* Transform all the slices of hamburger
	* into a crossmark.
	*/
	#menuToggle input:checked ~ span {
		opacity: 1;
		transform: rotate(45deg) translate(-2px, -1px);
	}

	/*
	* But let's hide the middle one.
	*/
	#menuToggle input:checked ~ span:nth-last-child(3) {
		opacity: 0;
		transform: rotate(0deg) scale(0.2, 0.2);
	}

	/*
	* Ohyeah and the last one should go the other direction
	*/
	#menuToggle input:checked ~ span:nth-last-child(2) {
		transform: rotate(-45deg) translate(0, -1px);
	}

	#menu {
		display: flex;
		flex-direction: column;
		position: absolute;
		width: 100vw;
		padding-top: 5rem;
		padding-right: 2rem;
		z-index: 0;
		top: 0;
		right: 0;
		height: 100vh;
		list-style-type: none;
		-webkit-font-smoothing: antialiased;
		transform-origin: 0% 0%;
		transform: translate(100%, 0);

		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
	}

	#menuToggle input:checked ~ ul {
		transform: none;
	}
</style>
