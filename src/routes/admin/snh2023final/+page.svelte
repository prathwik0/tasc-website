<script lang="ts">
	// import { Button } from '$lib/components/ui/button';
	import { Button } from '$lib/components/ui/custom_button';
	import { Input } from '$lib/components/ui/input';
	import { user, userID, userProfileData } from '$lib/firebase/firebase';
	import * as Table from '$lib/components/ui/table';
	import { getDoc, getDocs, collection, writeBatch, doc, arrayUnion, increment, Timestamp, query, where } from 'firebase/firestore';

	import { db } from '$lib/firebase/firebase';
	import type { TeamDataSNH2023 } from '$lib/components/types/TeamData';

	let data: TeamDataSNH2023[] = [];
	let floor: number;

	async function getData() {
		const teamsRef = collection(db, 'snh2023final');
		let q;
		if (floor) {
			q = query(teamsRef, where('floor', '==', floor));
		} else {
			q = query(teamsRef);
		}
		const docSnapshot = await getDocs(q);
		const docs = docSnapshot.docs;
		data = docs.flatMap((doc) => doc.data()) as TeamDataSNH2023[];
		// console.log(data);
	}

	async function getDataWrapper() {
		if ($user && $userID && $userProfileData) {
			await getData();
		}
	}

	const convertAndDownloadCSV = () => {
		console.log('lol');
	};
</script>

<div class="flex flex-col items-center justify-center text-center">
	<div class="flex w-full max-w-sm items-center space-x-2">
		<Input bind:value={floor} type="number" placeholder="Enter Floor Number" />
		<Button on:click={getDataWrapper}>Query the Database</Button>
	</div>

	<Button on:click={convertAndDownloadCSV}>Download Report</Button>

	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head>S No.</Table.Head>
				<Table.Head>Team Name</Table.Head>
				<Table.Head class="text-center">Member Count</Table.Head>
				<Table.Head class="text-center">College</Table.Head>
				<Table.Head class="text-center">PID</Table.Head>
				<Table.Head class="max-w-[5rem] text-center">Link</Table.Head>
				<Table.Head>Leader Name</Table.Head>
				<Table.Head>Leader Phone</Table.Head>
				<Table.Head class="text-center">Leader Email</Table.Head>
				<Table.Head class="text-center">Team ID</Table.Head>
				<Table.Head class="text-center">Team Secret</Table.Head>
			</Table.Row>
		</Table.Header>

		<Table.Body>
			{#each data as team, i}
				<Table.Row class="text-center">
					<Table.Cell>{i + 1}</Table.Cell>
					<Table.Cell>{team.teamName}</Table.Cell>
					<Table.Cell>{team.memberCount}</Table.Cell>
					<Table.Cell class="text-center">{team.college}</Table.Cell>
					<Table.Cell>{team.PID}</Table.Cell>
					<Table.Cell class="text-wrap max-w-[5rem]"><a href={team.submission.link} class="text-blue-600" target="_blank">Click Here</a></Table.Cell>

					<Table.Cell>{team.leaderName}</Table.Cell>
					<Table.Cell>{team.leaderPhone}</Table.Cell>
					<Table.Cell>{team.leaderEmail}</Table.Cell>
					<Table.Cell>{team.teamURL}</Table.Cell>
					<Table.Cell>{team.teamSecret}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
