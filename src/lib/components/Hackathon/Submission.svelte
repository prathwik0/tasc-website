<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import MainButton from './MainButton.svelte';
	//@ts-ignore
	import { Button } from '$lib/components/ui/custom_button';
	import * as DropdownMenu from '$lib/components/ui/DropdownMenu';
	import { db, user, userData, userID, userProfileData } from '$lib/firebase/firebase';
	import { doc, collection, getDoc, setDoc, writeBatch, limit, query, where, updateDoc, arrayUnion, increment } from 'firebase/firestore';

	const collegeList = ['NMAMIT, Nitte', 'NITK, Surathkal', 'MAHE, Manipal', 'Sahyadri, Mangalore', 'St Joseph Engineering College, Mangalore', "Alva's College, Moodbidri", 'Yenepoya College, Mangalore', 'Other'];
	const PList = ['SNH01', 'SNH02', 'SNH03', 'SNH04', 'SNH05', 'SNH06', 'SNH07', 'SNH08', 'SNH09', 'SNH10'];

	export let teamID: string;
	export let PID: string = '';
	export let title: string = '';
	export let link: string = '';
	export let college: string = '';
	let collegeEntered = false;

	$: if (college !== '') {
		collegeEntered = true;
	}

	$: if (college == 'Other') {
		collegeEntered = true;
		college = '';
	}

	async function joinTeam() {
		if (title == '' || PID == '' || link == '' || college == '' || college == 'Other') {
			alert('Please fill all the fields before submission!');
			return;
		}

		//return if user is not logged in
		if (!$userID || !teamID) return;

		const batch = writeBatch(db);

		const teamRef = doc(db, 'snh2023', teamID);
		batch.update(teamRef, {
			PID: PID,
			college: college,
			submission: {
				title: title,
				PID: PID,
				link: link,
				college: college
			},
			submissionHistory: arrayUnion({
				title: title,
				PID: PID,
				link: link
			}),
			certificate: true
		});
		await batch.commit();

		alert('Your submission has been recorded :)');
	}
</script>

<h1 class="pb-4 text-center font-jbExtrabold text-2xl md:text-4xl">Submit solution for your problem statement</h1>
<h2 class="text-md mx-4 pb-4 text-center font-jbMedium text-[#d2b863] md:text-lg">Hurry up 🏃🏻‍♂️! Submissions close on Nov 19, 2023, at 11:59 pm. You can make changes till then 😄</h2>
<div class="flex w-full flex-grow px-2 md:px-6">
	<div class="flex w-full flex-shrink flex-col items-center justify-center rounded-2xl border-[1px] border-[#d2b863] p-6 md:p-10">
		<select bind:value={PID} class="mb-4 h-12 w-full rounded-2xl bg-gray-600 text-center font-jbMedium">
			<option value="" disabled selected>Problem Statement</option>
			{#each PList as problem}
				<option value={problem}>
					{problem}
				</option>
			{/each}
		</select>

		<select bind:value={college} class="mb-4 h-12 w-full rounded-2xl bg-gray-600 text-center font-jbMedium">
			<!-- <option value="" disabled selected>College</option> -->
			{#each collegeList as college}
				<option value={college}>
					{college}
				</option>
			{/each}
			<option value={college} disabled selected>Select / Write your college name</option>
		</select>

		{#if collegeEntered && (college == 'Other' || !collegeList.includes(college))}
			<Input type="text" bind:value={college} placeholder="College Name" class="mb-4 h-12 rounded-2xl bg-gray-600 p-4 text-center font-jbMedium text-white md:h-14 " />
		{/if}

		<Input type="text" bind:value={title} placeholder="Title for your solution" class="mb-4 h-12 rounded-2xl bg-gray-600 p-4 text-center font-jbMedium text-white md:h-14 " />
		<Input type="text" bind:value={link} placeholder="Link to presentation" class="h-12 rounded-2xl bg-gray-600 p-4 text-center font-jbMedium text-white md:h-14 " />
		<button on:click={joinTeam} class="px-6 pt-6"><MainButton>Submit</MainButton></button>
	</div>
</div>
