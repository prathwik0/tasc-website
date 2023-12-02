<script lang="ts">
	import { db, userID, userProfileData } from '$lib/firebase/firebase';
	import { doc, updateDoc } from 'firebase/firestore';
	import Button from '../ui/custom_button/button.svelte';
	import Input from '../ui/input/input.svelte';
	import Label from '../ui/label/label.svelte';

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

<h1 class="text-2xl font-medium">Update your College</h1>

<div class="w-full py-1">
	<Label class="text-base text-slate-500">{$userProfileData?.college}</Label>
</div>

<Input name="college" placeholder="Enter your college name here" class="border-slate-400 focus:border-white" bind:value={college} />
<Button class="mt-4 w-1/3 min-w-fit self-center border transition-all duration-300 ease-in-out hover:bg-[#020817]" variant="ghost" on:click={updateCollege}>Update College</Button>
