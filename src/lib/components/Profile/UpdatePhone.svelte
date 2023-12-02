<script lang="ts">
	import { db, userID, userProfileData } from '$lib/firebase/firebase';
	import { doc, updateDoc } from 'firebase/firestore';
	import Button from '../ui/custom_button/button.svelte';
	import Input from '../ui/input/input.svelte';
	import Label from '../ui/label/label.svelte';

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

<div>
	<h1 class="text-2xl font-medium">Update your Phone Number</h1>
	<div class="w-full py-1">
		<Label class="text-slate-500 text-base font-medium"><span>{$userProfileData?.phone}</span></Label>
	</div>

	<div class="grid gap-1.5">
		<Input class="border-slate-500 focus:border-white" name="phone" placeholder="Enter your Whatsapp Phone Number here" bind:value={phone} />
	</div>
	<Button class="mt-4 border w-1/3 min-w-fit self-center transition-all duration-300 ease-in-out hover:bg-[#020817]" variant="ghost" on:click={updatePhone}>Update Phone</Button>
</div>
