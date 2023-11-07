<script lang="ts">
	import FixedNavbar from '$lib/components/HeaderFooter/FixedNavbar.svelte';
	import Footer from '$lib/components/HeaderFooter/Footer.svelte';
</script>

<!-- <FixedNavbar>
	<slot name="navbar" />
</FixedNavbar> -->

<div class="flex min-h-screen flex-col">
	<div class="min-h-screen w-full pt-[60px]">
		<slot />
	</div>
</div>

<Footer />
