<script lang="ts">
	import '../app.css';
	import { darkTheme } from '$lib/stores/theme';
	import { user, userData, userLoaded, called } from '$lib/firebase/firebase';

	/* Subscribe to stores in root layout */
	$darkTheme;
	$user;
	$userData;
	$userLoaded;
	$called;
</script>

<slot />
