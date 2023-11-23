<script lang="ts">
	// import { Button } from '$lib/components/ui/button';
	import { Button } from '$lib/components/ui/custom_button';
	import { Input } from '$lib/components/ui/input';
	import { user, userID, userProfileData } from '$lib/firebase/firebase';
	import * as Table from '$lib/components/ui/table';
	import { getDocs, collection, writeBatch, doc, Timestamp, query, where } from 'firebase/firestore';

	import { db } from '$lib/firebase/firebase';
	import type { TeamDataSNH2023 } from '$lib/components/types/TeamData';

	let data: TeamDataSNH2023[] = [];
	let floor: number | null = 1;
	let room: number | null = 1;
	let arrived: boolean | null = false;

	function getDate(timestamp: { seconds: number }) {
		if (!timestamp) return '';

		return Timestamp.fromMillis(timestamp.seconds * 1000)
			.toDate()
			.toLocaleString();
	}

	async function getData() {
		const teamsRef = collection(db, 'snh2023final');
		let q;

		if (arrived == true) {
			if (floor && room) {
				q = query(teamsRef, where('floor', '==', floor), where('room', '==', room), where('arrived', '==', true));
			} else if (floor) {
				q = query(teamsRef, where('floor', '==', floor), where('arrived', '==', true));
			} else {
				q = query(teamsRef, where('arrived', '==', true));
			}
		} else if (arrived == false) {
			if (floor && room) {
				q = query(teamsRef, where('floor', '==', floor), where('room', '==', room), where('arrived', '==', false));
			} else if (floor) {
				q = query(teamsRef, where('floor', '==', floor), where('arrived', '==', false));
			} else {
				q = query(teamsRef, where('arrived', '==', false));
			}
		} else {
			if (floor && room) {
				q = query(teamsRef, where('floor', '==', floor), where('room', '==', room));
			} else if (floor) {
				q = query(teamsRef, where('floor', '==', floor));
			} else {
				q = query(teamsRef);
			}
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
		const headers = ['Team Name', 'College', 'Floor', 'Room', 'Team ID', 'Team Secret', 'PID', 'Link', 'Title', 'Leader Name', 'Member Count', 'Member 1 Name', 'USN', 'Email', 'Phone', 'Status', 'Timestamp', 'Member 2 Name', 'USN', 'Email', 'Phone', 'Status', 'Timestamp', 'Member 3 Name', 'USN', 'Email', 'Phone', 'Status', 'Timestamp'].join(',') + '\n';

		const csvRows = data.map((team) => {
			const row = [
				JSON.stringify(team.teamName),
				JSON.stringify(team.college),
				team.floor,
				team.room,
				team.teamID,
				team.teamSecret,
				team.PID,
				team.submission.link,
				JSON.stringify(team.submission.title),
				team.leaderName,
				team.memberCount,
				team[team.members[0] ?? '']?.name ?? '',
				team[team.members[0] ?? '']?.usn ?? '',
				team[team.members[0] ?? '']?.email ?? '',
				team[team.members[0] ?? '']?.phone ?? '',
				team[team.members[0] ?? '']?.status ?? '',
				JSON.stringify(getDate(team[team.members[0] ?? '']?.timestamp) ?? ''),
				team[team.members[1] ?? '']?.name ?? '',
				team[team.members[1] ?? '']?.usn ?? '',
				team[team.members[1] ?? '']?.email ?? '',
				team[team.members[1] ?? '']?.phone ?? '',
				team[team.members[1] ?? '']?.status ?? '',
				JSON.stringify(getDate(team[team.members[1] ?? '']?.timestamp) ?? ''),
				team[team.members[2] ?? '']?.name ?? '',
				team[team.members[2] ?? '']?.usn ?? '',
				team[team.members[2] ?? '']?.email ?? '',
				team[team.members[2] ?? '']?.phone ?? '',
				team[team.members[2] ?? '']?.status ?? '',
				JSON.stringify(getDate(team[team.members[2] ?? '']?.timestamp) ?? '')
			].join(',');
			return row;
		});

		const csvContent = headers + csvRows.join('\n');

		// CSV download
		const blob = new Blob([csvContent], { type: 'text/csv' });
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.style.display = 'none';
		a.href = url;
		a.download = `SNH2023Final_Teams.csv`;
		document.body.appendChild(a);
		a.click();
		window.URL.revokeObjectURL(url);
	};

	async function updateFloor(i: number) {
		const batch = writeBatch(db);

		const teamRef = doc(db, 'snh2023final', data[i].teamID);
		batch.update(teamRef, {
			floor: data[i].floor
		});
		await batch.commit();

		alert('Floor Updated');
	}

	async function updateRoom(i: number) {
		const batch = writeBatch(db);

		const teamRef = doc(db, 'snh2023final', data[i].teamID);
		batch.update(teamRef, {
			room: data[i].room
		});
		await batch.commit();

		alert('Room Updated');
	}
</script>

<div class="flex flex-col items-center justify-center text-center">
	<div class="flex w-full max-w-sm items-center space-x-2">
		<Input bind:value={floor} type="number" placeholder="Enter Floor Number" />
		<Input bind:value={room} type="number" placeholder="Enter Room Number" />
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
				<Table.Head class="text-center">Leader Email</Table.Head>
				<Table.Head class="text-center">Team ID</Table.Head>
				<Table.Head class="text-center">Team Secret</Table.Head>

				<Table.Head class="text-center">Floor</Table.Head>
				<Table.Head class="text-center">Button</Table.Head>
				<Table.Head class="text-center">Room</Table.Head>
				<Table.Head class="text-center">Button</Table.Head>

				{#each { length: 3 } as _, i}
					<Table.Head>Member {i + 1}</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head>Timestamp</Table.Head>
					<Table.Head>Phone Number</Table.Head>
				{/each}
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
					<Table.Cell>{team.leaderEmail}</Table.Cell>
					<Table.Cell>{team.teamID}</Table.Cell>
					<Table.Cell>{team.teamSecret}</Table.Cell>

					<Table.Cell class="text-center"><input type="text" bind:value={data[i].floor} /></Table.Cell>
					<Table.Cell class="text-center">
						<button
							on:click={() => {
								updateFloor(i);
							}}
							>Floor
						</button>
					</Table.Cell>
					<Table.Cell class="text-center"><input type="text" bind:value={data[i].room} /></Table.Cell>
					<Table.Cell class="text-center">
						<button
							on:click={() => {
								updateRoom(i);
							}}
							>Room
						</button>
					</Table.Cell>

					{#each { length: 3 } as _, i}
						{#if team.members[i]}
							<Table.Cell>{team[team.members[i]].name}</Table.Cell>
							<Table.Cell>{team[team.members[i]].status}</Table.Cell>
							<Table.Cell>{getDate(team[team.members[i]].timestamp)}</Table.Cell>
							<Table.Cell>{team[team.members[i]].phone}</Table.Cell>
						{:else}
							<Table.Cell>Na</Table.Cell>
							<Table.Cell>Na</Table.Cell>
							<Table.Cell>Na</Table.Cell>
							<Table.Cell>Na</Table.Cell>
						{/if}
					{/each}
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
