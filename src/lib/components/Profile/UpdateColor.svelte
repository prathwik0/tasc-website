<script lang="ts">
	import { doc, updateDoc } from 'firebase/firestore';
	import { db, userID, userProfileData } from '$lib/firebase/firebase';
	import Button from '$lib/components/ui/button/button.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import Input from '$lib/components/ui/input/input.svelte';

	let color: string = $userProfileData?.color ?? '';

	async function updateBio(e: SubmitEvent) {
		const userRef = doc(db, 'profile', $userID!.user);

		await updateDoc(userRef, {
			color
		});
	}
</script>

<div class="w-full pb-6 pt-2">
	<Label>Current Color: <span>{$userProfileData?.color}</span></Label>
</div>
<form on:submit|preventDefault={updateBio}>
	<div class="grid gap-1.5">
		<Label for="color">Pick background-color</Label>
		<Input type="color" name="color" bind:value={color} />
	</div>
	<Button class="mt-4">Update Color</Button>
</form>
