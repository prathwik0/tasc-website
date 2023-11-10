<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import MainButton from './MainButton.svelte';

	import { db, user, userData, userID, userProfileData } from '$lib/firebase/firebase';
	import { doc, collection, getDoc, setDoc, writeBatch, limit, query, where, updateDoc, arrayUnion, increment } from 'firebase/firestore';
	import ProblemStatements from './ProblemStatements.svelte';

	export let teamID: string;
	export let statement: string = '';
	export let title: string = '';
	export let description: string = '';
	export let link: string = '';

	async function joinTeam() {
		//return if user is not logged in
		if (!$userID || !teamID) return;

		const batch = writeBatch(db);

		const teamRef = doc(db, 'snh2023', teamID);
		batch.update(teamRef, {
			submissions: arrayUnion({
				title: title,
				problemStatement: statement,
				description: description,
				link: link
			})
		});
		await batch.commit();

		alert('Your submission has been recorded!');
	}
</script>

<div class="mx-10 flex w-[18rem] flex-col items-center justify-center rounded-2xl border-[1px] border-[#d2b863] p-10 md:h-[22rem] md:w-[25rem]">
	<div class="flex w-full flex-col items-center justify-center space-y-6 py-6">
		<h2 class="font-jbExtrabold text-2xl md:text-4xl">Submit solution for your problem statement</h2>
		<Input type="text" bind:value={title} placeholder="Enter Title for your solution" class="mb-4 h-12 w-60 rounded-2xl bg-gray-600 p-4 font-jbMedium text-white md:h-14 md:w-80" />
		<Input type="text" bind:value={description} placeholder="Enter the description of your solution" class="mb-4 h-12 w-60 rounded-2xl bg-gray-600 p-4 font-jbMedium text-white md:h-14 md:w-80" />
		<Input type="text" bind:value={link} placeholder="Enter the link to your presentation" class="h-12 w-60 rounded-2xl bg-gray-600 p-4 font-jbMedium text-white md:h-14 md:w-80" />
		<button on:click={joinTeam}><MainButton>Submit</MainButton></button>
	</div>
</div>
