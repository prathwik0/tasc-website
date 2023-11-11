<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import MainButton from './MainButton.svelte';
	//@ts-ignore
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/DropdownMenu';
	import { db, user, userData, userID, userProfileData } from '$lib/firebase/firebase';
	import { doc, collection, getDoc, setDoc, writeBatch, limit, query, where, updateDoc, arrayUnion, increment } from 'firebase/firestore';
	import ProblemStatements from './ProblemStatements.svelte';

	export let teamID: string;
	export let PID: string = '';
	export let title: string = '';
	export let link: string = '';

	async function joinTeam() {
		if (title == '' || PID == '' || link == '') {
			alert('Please fill all the fields before submission!');
			return;
		}

		//return if user is not logged in
		if (!$userID || !teamID) return;

		const batch = writeBatch(db);

		const teamRef = doc(db, 'snh2023', teamID);
		batch.update(teamRef, {
			PID: PID,
			submissions: arrayUnion({
				title: title,
				PID: PID,
				link: link
			})
		});
		await batch.commit();

		alert('Your submission has been recorded :)');
	}
</script>

<h2 class="pb-4 text-center font-jbExtrabold text-2xl md:text-4xl">Submit solution for your problem statement</h2>

<div class="w-[23rem]flex-col mx-5 flex items-center justify-center rounded-2xl border-[1px] border-[#d2b863] p-6 md:w-[25rem] md:p-10">
	<div class="flex w-full flex-col items-center justify-center">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button variant="outline" builders={[builder]}>Choose problem statement</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content class="w-56">
				<DropdownMenu.RadioGroup bind:value={PID}>
					<DropdownMenu.RadioItem value="SNH01">SNH01</DropdownMenu.RadioItem>
					<DropdownMenu.RadioItem value="SNH02">SNH02</DropdownMenu.RadioItem>
					<DropdownMenu.RadioItem value="SNH03">SNH03</DropdownMenu.RadioItem>
					<DropdownMenu.RadioItem value="SNH04">SNH04</DropdownMenu.RadioItem>
					<DropdownMenu.RadioItem value="SNH05">SNH05</DropdownMenu.RadioItem>
				</DropdownMenu.RadioGroup>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
		<Input type="text" bind:value={title} placeholder="Title for your solution" class="mb-4 h-12 w-60 rounded-2xl bg-gray-600 p-4 text-center font-jbMedium text-white md:h-14 md:w-80" />
		<Input type="text" bind:value={link} placeholder="Link to presentation" class="h-12 w-60 rounded-2xl bg-gray-600 p-4 text-center font-jbMedium text-white md:h-14 md:w-80" />
		<button on:click={joinTeam} class="pt-6"><MainButton>Submit</MainButton></button>
	</div>
</div>
