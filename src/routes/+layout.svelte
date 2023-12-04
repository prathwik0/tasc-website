<script lang="ts">
	import { navigating } from '$app/stores';
	import Footer from '$lib/components/HeaderFooter/Footer.svelte';
	import Navbar from '$lib/components/HeaderFooter/Navbar.svelte';
	import { called, user, userData, userLoaded, userProfileData } from '$lib/firebase/firebase';
	import LoadingSVG from '$lib/loader/spinnerDark.svg';
	import { loading } from '$lib/stores/loading';
	import { darkTheme } from '$lib/stores/theme';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import '../app.css';
	/* Subscribe to stores in root layout */
	$darkTheme;
	$user;
	$userData;
	$userProfileData;

	$userLoaded;
	$called;

	//$: console.log('user', $userData);
	$: $loading = !!$navigating;
</script>

{#if $loading}
	<div class="flex h-[100vh] items-center justify-center"><img src={LoadingSVG} alt="spin" class=" w-24" /></div>
{:else}
	<slot />
{/if}
<div class="wrapper text-center leading-5 font-medium"><SvelteToast options={{ intro: { y: -120 }, duration: 2500 }} /></div>

<style>
	:root {
		--toastWidth: 300px;
		--toastHeight: auto;
		--toastPadding: 0 0 0 0.5rem;
	}
	.wrapper {
		/* --toastWidth: 250px;
		--toastContainerTop: -33%;
		--toastContainerLeft: calc(25vw); */
		--toastContainerTop: 1rem;
		--toastContainerRight: auto;
		--toastContainerBottom: auto;
		--toastContainerLeft: calc(50vw - 8rem);
	}
</style>
