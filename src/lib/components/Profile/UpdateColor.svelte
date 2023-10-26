<script lang="ts">
	import { doc, updateDoc } from 'firebase/firestore';
	import { db, userID, userProfileData } from '$lib/firebase/firebase';
	import Button from '$lib/components/ui/button/button.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import Input from '$lib/components/ui/input/input.svelte';

	let color_light: string = $userProfileData?.color_light ?? '';
	let color_dark: string = $userProfileData?.color_dark ?? '';

	async function updateColor(e: SubmitEvent) {
		const userRef = doc(db, 'profile', $userID!.user);

		await updateDoc(userRef, {
			color_light,
			color_dark
		});
	}
</script>

<div class="w-full pb-6 pt-2">
	<Label>Current Lightmode Color: {$userProfileData?.color_light}</Label>
  <br />
	<Label>Current Darkmode Color: {$userProfileData?.color_dark}</Label>
</div>
<form on:submit|preventDefault={updateColor}>
	<div class="grid gap-1.5">
		<Label for="color_light">Pick Lightmode background-color</Label>
		<Input type="color" name="color_light" bind:value={color_light} />

		<Label for="color_dark">Pick Darkmode background-color</Label>
		<Input type="color" name="color_dark" bind:value={color_dark} />
	</div>
	<Button class="mt-4">Update Color</Button>
</form>
