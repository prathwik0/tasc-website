<script lang="ts">
	import MemberID from '$lib/components/Hackathon/MemberIDRound2.svelte';
	import TeamId from '$lib/components/Hackathon/TeamIDRound2.svelte';
	import type { TeamDataSNH2023 } from '$lib/components/types/TeamData';
	import { db, userData, userID, userProfileData } from '$lib/firebase/firebase';
	import { doc, getDoc } from 'firebase/firestore';

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
	<div class="min-h-screen">
		<MemberID {data} userID={$userID?.user ?? ''}></MemberID>
		<TeamId {data}></TeamId>
	</div>
{/if}

<!-- {JSON.stringify(data)} -->
