<script lang="ts">
	import { doc, updateDoc } from 'firebase/firestore';
	import { db, userID, userProfileData } from '$lib/firebase/firebase';
	import Textarea from '../ui/textarea/textarea.svelte';
	import Button from '../ui/button/button.svelte';
	import Label from '../ui/label/label.svelte';

	let bio: string = '';

	async function updateBio(e: SubmitEvent) {
		const userRef = doc(db, 'profile', $userID!.user);

		await updateDoc(userRef, {
			bio
		});
	}
</script>

<div class="w-full pb-6 pt-2">
	<Label>Current Bio: <span>{$userProfileData?.bio}</span></Label>
</div>
<form on:submit|preventDefault={updateBio}>
	<div class="grid gap-1.5">
		<Label for="bio">New bio</Label>
		<Textarea name="bio" placeholder="Type your new bio here!" bind:value={bio} />
	</div>
	<Button class="mt-4">Update Bio</Button>
</form>
