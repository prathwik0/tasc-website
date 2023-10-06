<script>
	import '../app.css';

	import Navbar from '$lib/components/HeaderFooter/Navbar.svelte';
	import Footer from '$lib/components/HeaderFooter/Footer.svelte';

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="sticky top-0 z-50 w-full" class:bg-navbar={y >= 20}>
	<Navbar />
</div>

<slot />

<Footer />
