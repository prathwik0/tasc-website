<script>
	import AuthButton from '$lib/components/Auth/AuthButton.svelte';
	import ThemeToggle from '$lib/components/HeaderFooter/ThemeToggle.svelte';
	import Vectorall from '$lib/components/VectorBackground/vectorall.svelte';
</script>

<Vectorall />
<nav class="block h-20 w-full z-50">
	<div class="flex h-full items-center justify-between px-10">
		<a href="/"><img src="/TASCLogo.png" alt="TASC logo" class="w-20 contrast-125 brightness-125" /></a>
		<AuthButton />
		<ThemeToggle/>
	</div>
</nav>

<slot />
