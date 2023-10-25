<script lang="ts">
	import { user, userData, userLoaded } from '$lib/firebase/firebase';
	import { Button } from '../ui/button';
	export let currentUsername: string | undefined;
</script>

{#if !$userLoaded}
	<span></span>
{:else if $user && $userData && $userData.username === currentUsername}
	<a href="/{$userData.username}" class="text-center"><Button variant="outline">Edit Profile</Button></a>
{/if}
