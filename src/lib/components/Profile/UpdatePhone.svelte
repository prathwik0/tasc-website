<script lang="ts">
	import { doc, updateDoc } from 'firebase/firestore';
	import { db, userID, userProfileData } from '$lib/firebase/firebase';
	import Button from '../ui/custom_button/button.svelte';
	import Label from '../ui/label/label.svelte';
	import Input from '../ui/input/input.svelte';

	let phone = '';

	const rePhone = /^[0-9]{10}$/;
	$: isValidPhone = phone?.length === 10 && rePhone.test(phone);
	$: isTouchedPhone = phone.length >= 1;

	async function updatePhone(e: Event) {
		if (!isValidPhone) {
			alert('Please enter a valid phone number!');
			return;
		}

		const userRef = doc(db, 'profile', $userID!.user);

		await updateDoc(userRef, {
			phone
		});
	}
</script>

<div class="w-full py-2">
	<Label>Current Phone Number: <span>{$userProfileData?.phone}</span></Label>
</div>

<div class="grid gap-1.5">
	<Label for="phone">New phone number (WhatsApp)</Label>
	<Input name="phone" placeholder="Enter your Whatsapp Phone Number here" bind:value={phone} />
</div>
<Button class="mt-4" on:click={updatePhone}>Update Phone Number</Button>
