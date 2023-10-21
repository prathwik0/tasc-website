<script lang="ts">
	import ThemeToggle from '$lib/components/HeaderFooter/ThemeToggle.svelte';

	import NavbarMobile from '$lib/components/HeaderFooter/NavbarMobile.svelte';

	import { menuToggle } from '$lib/stores/menuToggle';
	const toggleMenu = () => {
		menuToggle.set(!$menuToggle); // Toggle the menu state
	};

	import { fade } from 'svelte/transition';
</script>

<div class="my-[6px] flex h-12 content-center items-center justify-between px-4 md:px-10">
	<a href="/"><img src="https://firebasestorage.googleapis.com/v0/b/tasc-8df79.appspot.com/o/TASCLogo.png?alt=media&token=885899c8-a49c-46d7-9d22-ebc5507964db&_gl=1*ozy9q7*_ga*MTE2MzE3ODExMC4xNjk1Mzg4Nzkx*_ga_CW55HF8NVT*MTY5NjIxODM2NC4xOS4xLjE2OTYyMTg0MzEuNTcuMC4w" alt="TASC logo" class="w-20 duration-200 hover:scale-110" /></a>

	<slot />

	<div class="flex items-center space-x-5">
		<slot name="auth" />
		<div class="flex-1 duration-200 hover:scale-110"><ThemeToggle /></div>
		<button class="flex md:hidden" on:click={toggleMenu}>
			<iconify-icon icon="eva:menu-outline" height="2rem" width="2rem"></iconify-icon>
		</button>
	</div>
</div>

<div class="fixed right-0 top-0 z-50 md:hidden" class:hidden={!menuToggle} transition:fade={{ delay: 250, duration: 300 }}>
	<NavbarMobile />
</div>
