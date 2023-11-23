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
	let floor: number = 1;
	let room: number = 1;

	async function getData() {
		const teamsRef = collection(db, 'snh2023final');
		let q;
		if (floor && room) {
			q = query(teamsRef, where('floor', '==', floor), where('room', '==', room));
		} else if (floor) {
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

	function getDate(timestamp: { seconds: number }) {
		return Timestamp.fromMillis(timestamp.seconds * 1000)
			.toDate()
			.toLocaleString();
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
