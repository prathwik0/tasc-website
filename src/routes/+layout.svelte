<script>
	import '../app.css';
	import { user, userData } from '$lib/firebase/firebase';

	import Navbar from '$lib/components/HeaderFooter/Navbar.svelte';
	import Footer from '$lib/components/HeaderFooter/Footer.svelte';

	let y = 0;

	$user;
	$userData;
</script>

<svelte:window bind:scrollY={y} />

<div class="fixed top-0 z-40 w-full" class:bg-navbar={y >= 20}>
	<Navbar />
</div>

<slot />

<Footer />
