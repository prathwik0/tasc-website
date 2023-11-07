<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import MainButton from './MainButton.svelte';

	import { db, user, userData, userID, userProfileData } from '$lib/firebase/firebase';
	import { doc, collection, getDocs, setDoc, writeBatch, limit, query, where } from 'firebase/firestore';
	import { goto } from '$app/navigation';

	let teamName: string = '';

	//function to generate random 5 character alphanumeric string
	function genSecret(length: number) {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	async function createTeam() {
		console.log('hello');
		const batch = writeBatch(db);

		const newTeamRef = doc(collection(db, 'snh2023'));

		batch.set(newTeamRef, {
			teamName: teamName,
			teamURL: newTeamRef.id,
			teamSecret: genSecret(5),
			leader: $userID!.user,
			leaderName: $userData!.name,
			leaderPhone: $userProfileData!.phone,
			leaderEmail: $user!.email,
			members: [$userID!.user],
			memberInfo: [
				{
					id: $userID!.user,
					name: $userData!.name,
					usn: $userData!.usn,
					phone: $userProfileData!.phone,
					email: $user!.email
				}
			],
			memberCount: 1,
			acceptingMembers: true,
			createdAt: new Date().toISOString()
		});

		await batch.commit();
		alert("Team created! You'll be redirected to the team page.");
		goto('/snh2023/' + newTeamRef.id);
	}

	// check if a user is in a team or not
	async function checkTeam() {
		if (!$userID) return;

		const teamCollectionRef = collection(db, 'snh2023');

		const q = query(teamCollectionRef, where('members', 'array-contains', $userID!.user), limit(1));
		const snapshot = await getDocs(q);

		const exists = snapshot.docs[0]?.exists();
		if (exists) {
			//redirect to team page
			goto('/snh2023/team/' + snapshot.docs[0].id);
		}
	}

	$: $userID && checkTeam();
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	<div class="flex h-full w-full flex-col items-center justify-center">
		<h2 class="pb-6 pt-4 font-jbExtrabold text-4xl">Create a Team</h2>
		<Input type="text" placeholder="Enter your team name!" bind:value={teamName} class="h-14 w-80 rounded-2xl bg-gray-600 p-4 font-jbMedium text-white" />
		<button on:click={createTeam}><MainButton>Create Team</MainButton></button>
	</div>

	<!-- Already in a team -->
	<!-- <div class="flex h-full w-full flex-col items-center justify-center p-4 text-center">
		<h2 class="pb-6 pt-4 font-jbExtrabold text-4xl text-[#fffba4]">
			You are already in a team!
			<p class="pt-4 font-jbMedium text-2xl text-white">Team ID/ Team Secret</p>
		</h2>
	</div> -->
</div>
