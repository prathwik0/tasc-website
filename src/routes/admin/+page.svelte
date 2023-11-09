<script lang="ts">
	import { user } from '$lib/firebase/firebase';
	import * as Table from '$lib/components/ui/table';
	import { getDoc, getDocs, collection } from 'firebase/firestore';
	import { Button } from '$lib/components/ui/button';
	import { db } from '$lib/firebase/firebase';
	import type TeamData from '../snh2023/team/[teamURL]/TeamData';

	let data: TeamData[] = [];

	async function getData() {
		const teamsRef = collection(db, 'snh2023');
		const docSnapshot = await getDocs(teamsRef);
		const docs = docSnapshot.docs;
		data = docs.flatMap((doc) => doc.data()) as TeamData[];
		console.log(data);
	}

	const convertAndDownloadCSV = () => {
		if (data && data.length > 0) {
			// Create CSV headers
			const headers = ['Team Name', 'Leader Name', 'Leader Phone', 'Leader Email', 'Member Count', 'Team ID', 'Team Secret'].join(',') + '\n';

			// Convert data to CSV rows
			const csvRows = data.map((team) => {
				const row = [team.teamName, team.leaderName, team.leaderPhone, team.leaderEmail, team.memberCount, team.teamURL, team.teamSecret].join(',');
				return row;
			});

			// Combine headers and rows
			const csvContent = headers + csvRows.join('\n');

			// Trigger CSV download
			const blob = new Blob([csvContent], { type: 'text/csv' });
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.style.display = 'none';
			a.href = url;
			a.download = `SNH2023_Teams.csv`;
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
		}
	};

	$: if ($user) {
		getData();
	}
</script>

<div class="flex flex-col items-center justify-center text-center">
	<Button on:click={convertAndDownloadCSV}>Download Report</Button>

	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head>S No.</Table.Head>
				<Table.Head>Team Name</Table.Head>
				<Table.Head>Leader Name</Table.Head>
				<Table.Head>Leader Phone</Table.Head>
				<Table.Head class="text-center">Leader Email</Table.Head>
				<Table.Head class="text-center">Member Count</Table.Head>
				<Table.Head class="text-center">Team ID</Table.Head>
				<Table.Head class="text-center">Team Secret</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each data as team, i}
				<Table.Row class="text-center">
					<Table.Cell>{i + 1}</Table.Cell>
					<Table.Cell>{team.teamName}</Table.Cell>
					<Table.Cell>{team.leaderName}</Table.Cell>
					<Table.Cell>{team.leaderPhone}</Table.Cell>
					<Table.Cell>{team.leaderEmail}</Table.Cell>
					<Table.Cell>{team.memberCount}</Table.Cell>
					<Table.Cell>{team.teamURL}</Table.Cell>
					<Table.Cell>{team.teamSecret}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
