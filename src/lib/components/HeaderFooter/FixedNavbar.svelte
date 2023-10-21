<script>
	import Navbar from '$lib/components/HeaderFooter/Navbar.svelte';

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="fixed top-0 z-40 w-full" class:bg-navbar={y >= 20}>
	<Navbar>
		<slot />
		<slot slot="auth" name="auth" />
	</Navbar>
</div>
