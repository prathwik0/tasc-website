<script lang="ts">
	import { navigating } from '$app/stores';
	import { called, user, userData, userLoaded } from '$lib/firebase/firebase';
	import LoadingSVG from '$lib/loader/spinnerDark.svg';
	import { loading } from '$lib/stores/loading';
	import { darkTheme } from '$lib/stores/theme';
	import '../app.css';

	/* Subscribe to stores in root layout */
	$darkTheme;
	$user;
	$userData;
	$userLoaded;
	$called;
	$: $loading = !!$navigating;
</script>

{#if $loading}
	<div class="flex h-[100vh] items-center justify-center"><img src={LoadingSVG} alt="spin" class=" w-24" /></div>
{:else}
	<slot />
{/if}
