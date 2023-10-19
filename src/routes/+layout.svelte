<script lang="ts">
	import '../app.css';
	import { darkTheme } from '$lib/stores/theme';
	import { user, userData } from '$lib/firebase/firebase';

	/* Subscribe to stores in root layout */
	$darkTheme;
	$user;
	$userData;
</script>

<slot />
