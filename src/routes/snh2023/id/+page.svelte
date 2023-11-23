<script lang="ts">
	import TeamId from '$lib/components/Hackathon/TeamIDRound2.svelte';
	import MemberID from '$lib/components/Hackathon/MemberIDRound2.svelte';
	import { doc, getDoc } from 'firebase/firestore';
	import { db, userData, userID, userProfileData } from '$lib/firebase/firebase';
	import type { TeamDataSNH2023 } from '$lib/components/types/TeamData';

	let teamID = $userProfileData?.snh2023final ?? '';
	let data: TeamDataSNH2023 | undefined = undefined;

	async function getData() {
		const teamRef = doc(db, 'snh2023final', teamID);
		const docSnap = await getDoc(teamRef);

		if (docSnap.exists()) {
			data = docSnap.data() as TeamDataSNH2023;
			console.log(data);
		} else {
			alert('Team error! Register again and then come back to this page');
		}
	}

	async function getDataWrapper() {
		await getData();
	}

	$: if ($userProfileData) {
		teamID = $userProfileData?.snh2023final ?? '';
		if (teamID) {
			getDataWrapper();
		}
	}
</script>

<svelte:head>
	<title>QR Code Generator</title>
</svelte:head>

{#if data}
	<MemberID {data} userID={$userID?.user ?? ''}></MemberID>
	<TeamId {data}></TeamId>
{/if}

{JSON.stringify(data)}
