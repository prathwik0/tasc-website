<script>
	import Footer from '$lib/components/HeaderFooter/Footer.svelte';
	import FixedNavbar from '$lib/components/HeaderFooter/FixedNavbar.svelte';
	import NavbarMenu from '$lib/components/HeaderFooter/NavbarMenu.svelte';
	import AuthButton from '$lib/components/Auth/AuthButton.svelte';
</script>

<FixedNavbar>
	<NavbarMenu />
	<AuthButton slot="auth" />
</FixedNavbar>

<slot />

<Footer />
