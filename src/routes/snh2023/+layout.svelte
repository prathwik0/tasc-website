<script>
	import Navbar from '$lib/components/Hackfest/Navbar.svelte';
	import { get } from 'svelte/store';
	import './OverrideGlobal.css';
	import { darkTheme } from '$lib/stores/theme';

	if (get(darkTheme) === false) {
		darkTheme.toggle();
	}
</script>

<Navbar />
<slot />
