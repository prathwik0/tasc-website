<script>
	import Navbar from '$lib/components/Hackathon/Navbar.svelte';
	import { get } from 'svelte/store';
	import { hackathonStyles } from '$lib/actions/style';
	import './hackathon.css';
	import { darkTheme } from '$lib/stores/theme';

	if (get(darkTheme) === false) {
		darkTheme.toggle();
	}
</script>

<svelte:body use:hackathonStyles />

<Navbar />
<slot />
