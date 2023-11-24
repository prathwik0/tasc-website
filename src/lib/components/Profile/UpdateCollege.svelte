<script lang="ts">
	import { doc, updateDoc } from 'firebase/firestore';
	import { db, userID, userProfileData } from '$lib/firebase/firebase';
	import Button from '../ui/custom_button/button.svelte';
	import Label from '../ui/label/label.svelte';
	import Input from '../ui/input/input.svelte';

	let college = '';

	// regular expressioin to include the specified set of characters - A-Za-z 0-9~'!#()[]{}",._
	const reCollege = /^[A-Za-z0-9!#()'{}",._ ]{4,40}$/;
	$: isValidCollege = college?.length >= 4 && college?.length <= 40 && reCollege.test(college);
	$: isTouchedCollege = college.length >= 1;

	async function updateCollege(e: Event) {
		if (!isValidCollege) {
			alert('Please use only the specified set of characters - A-Za-z0-9~!#()[]{}",._ and make sure that you have entered 4 to 40 characters');
			return;
		}

		const userRef = doc(db, 'profile', $userID!.user);

		console.log('Updating college name');

		await updateDoc(userRef, {
			college
		});
	}
</script>

<div class="w-full py-2">
	<Label>Current College: <span>{$userProfileData?.college}</span></Label>
</div>

<div class="grid gap-1.5">
	<Label for="college">Update college name</Label>
	<Input name="college" placeholder="Enter your college name here" bind:value={college} />
</div>
<Button class="mt-4" on:click={updateCollege}>Update College Name</Button>
