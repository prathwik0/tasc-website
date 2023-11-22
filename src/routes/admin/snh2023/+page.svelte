<script lang="ts">
	import { user, userID, userProfileData } from '$lib/firebase/firebase';
	import * as Table from '$lib/components/ui/table';
	import { getDoc, getDocs, collection, writeBatch, doc, arrayUnion, increment, Timestamp } from 'firebase/firestore';
	import { Button } from '$lib/components/ui/custom_button';
	import { db } from '$lib/firebase/firebase';
	import type { TeamData } from '$lib/components/types/TeamData';

	let data: TeamData[] = [];

	async function getData() {
		const teamsRef = collection(db, 'snh2023');
		const docSnapshot = await getDocs(teamsRef);
		const docs = docSnapshot.docs;
		data = docs.flatMap((doc) => doc.data()) as TeamData[];
		// console.log(data);
	}

	let submitted = 'No';
	let PID = '';
	let pLink = '';

	const convertAndDownloadCSV = () => {
		if (data && data.length > 0) {
			// Create CSV headers
			const headers = ['Team Name', 'Leader Name', 'Leader Phone', 'Leader Email', 'Member Count', 'Submitted', 'PID', 'Link', 'Team ID', 'Team Secret'].join(',') + '\n';
			// Convert data to CSV rows
			const csvRows = data.map((team) => {
				if (team.submission) {
					submitted = 'Yes';
					PID = team.submission.PID || '';
					pLink = team.submission.link || '';
				} else {
					submitted = 'No';
					PID = '';
					pLink = '';
				}
				const row = [team.teamName, team.leaderName, team.leaderPhone, team.leaderEmail, team.memberCount, submitted, PID, pLink, team.teamURL, team.teamSecret].join(',');
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

	async function qualify(teamID: string) {
		const batch = writeBatch(db);

		const teamRef = doc(db, 'snh2023', teamID);
		batch.update(teamRef, {
			qualified: true
		});
		await batch.commit();

		alert('Team has been qualified)');
	}

	async function disQualify(teamID: string) {
		const batch = writeBatch(db);

		const teamRef = doc(db, 'snh2023', teamID);
		batch.update(teamRef, {
			qualified: false
		});
		await batch.commit();

		alert('Team has been qualified)');
	}

	async function paid(teamID: string) {
		const batch = writeBatch(db);

		const teamRef = doc(db, 'snh2023', teamID);
		batch.update(teamRef, {
			payment: true
		});
		await batch.commit();

		alert(teamID + ' Payment set to true');
	}

	async function notPaid(teamID: string) {
		const batch = writeBatch(db);

		const teamRef = doc(db, 'snh2023', teamID);
		batch.update(teamRef, {
			payment: false
		});
		await batch.commit();

		alert(teamID + ' Payment set to false');
	}

	async function secondRound(team: TeamData) {
		const batch = writeBatch(db);
		const teamRef = doc(db, 'snh2023final', team.teamURL);

		batch.set(teamRef, {
			teamName: team.teamName,
			teamID: team.teamURL,
			teamSecret: team.teamSecret,
			college: team.college,

			leader: team.leader,
			leaderName: team.leaderName,
			leaderPhone: team.leaderPhone,
			leaderEmail: team.leaderEmail,

			PID: team.PID,
			submission: team.submission,

			members: team.members,
			memberCount: team.memberCount,

			createdAt: Timestamp.now()
		});

		for (var i = 0; i < team.memberInfo.length; i++) {
			let userID = team.memberInfo[i].id;
			batch.update(teamRef, {
				[userID]: {
					status: 'pending',
					timestamp: Timestamp.now(),
					name: team.memberInfo[i].name,
					usn: team.memberInfo[i].usn,
					phone: team.memberInfo[i].phone,
					email: team.memberInfo[i].email
				},
				[userID + '_history']: arrayUnion({
					status: 'pending',
					timestamp: Timestamp.now()
				})
			});

			let userProfileRef = doc(db, 'profile', userID);
			batch.update(userProfileRef, {
				snh2023final: team.teamURL
			});

			let eventRef = doc(db, 'events', 'snh2023final');
			batch.update(eventRef, {
				members: arrayUnion(userID)
			});
		}

		await batch.commit();
		alert(team.teamName + ' team added to second round');
	}

	$: if ($user && $userID && $userProfileData) {
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
				<Table.Head class="text-center">Submitted</Table.Head>
				<Table.Head class="text-center">PID</Table.Head>
				<Table.Head class="max-w-[5rem] text-center">Link</Table.Head>
				<Table.Head class="text-center">Team ID</Table.Head>
				<Table.Head class="text-center">Team Secret</Table.Head>
				<Table.Head class="text-center">Qualified</Table.Head>
				<Table.Head class="text-center">Qualify Button</Table.Head>
				<Table.Head class="text-center">Disqualify Button</Table.Head>
				<Table.Head class="text-center">Payment</Table.Head>
				<Table.Head class="text-center">Paid Button</Table.Head>
				<Table.Head class="text-center">Not Paid Button</Table.Head>
				<Table.Head class="text-center">Add to Second Round</Table.Head>
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
					{#if team.submission}
						<Table.Cell class="text-center">Yes</Table.Cell>
						<Table.Cell>{team.PID}</Table.Cell>
						<Table.Cell class="text-wrap max-w-[5rem]"><a href={team.submission.link} class="text-blue-600">Click Here</a></Table.Cell>
					{:else}
						<Table.Cell class="text-center">No</Table.Cell>
						<Table.Cell></Table.Cell>
						<Table.Cell></Table.Cell>
					{/if}

					<Table.Cell>{team.teamURL}</Table.Cell>
					<Table.Cell>{team.teamSecret}</Table.Cell>
					<Table.Cell>{team?.qualified}</Table.Cell>
					<Table.Cell>
						<button
							on:click={() => {
								qualify(team.teamURL);
							}}
						>
							Qualify
						</button>
					</Table.Cell>
					<Table.Cell>
						<button
							on:click={() => {
								disQualify(team.teamURL);
							}}
						>
							DisQualify
						</button>
					</Table.Cell>
					<Table.Cell>{team?.payment}</Table.Cell>
					<Table.Cell>
						<button
							on:click={() => {
								paid(team.teamURL);
							}}
						>
							Paid
						</button>
					</Table.Cell>
					<Table.Cell>
						<button
							on:click={() => {
								notPaid(team.teamURL);
							}}
						>
							NotPaid
						</button>
					</Table.Cell>
					<Table.Cell>
						<button
							on:click={() => {
								secondRound(team);
							}}
						>
							SecondRound
						</button>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
