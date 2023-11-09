<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import MainButton from './MainButton.svelte';

	import { db, user, userData, userID, userProfileData } from '$lib/firebase/firebase';
	import { doc, collection, getDoc, setDoc, writeBatch, limit, query, where, updateDoc, arrayUnion, increment } from 'firebase/firestore';
	import { goto } from '$app/navigation';

	let teamID: string = '';
	let teamSecret: string = '';

	async function joinTeam() {
		//return if user is not logged in
		if (!$userID) return;

		const batch = writeBatch(db);

		const profileRef = doc(db, 'profile', $userID!.user);
		batch.update(profileRef, {
			snh2023: teamID
		});

		const eventRef = doc(db, 'events', 'snh2023');
		batch.update(eventRef, {
			members: arrayUnion($userID!.user)
		});

		const teamRef = doc(db, 'snh2023', teamID);
		batch.update(teamRef, {
			members: arrayUnion($userID!.user),
			teamSecret: teamSecret,
			memberInfo: arrayUnion({
				id: $userID!.user,
				name: $userData!.name,
				usn: $userData!.usn,
				phone: $userProfileData!.phone,
				email: $user!.email
			}),
			memberCount: increment(1)
		});

		await batch.commit();

		alert("Team joined! You'll be redirected to the team page.");
		goto('/snh2023/team/' + teamID);
	}

	// check if a user is in a team or not
	// async function checkTeam() {
	// 	if (!$userID) return;

	// 	const teamCollectionRef = collection(db, 'snh2023');

	// 	const q = query(teamCollectionRef, where('members', 'array-contains', $userID!.user), limit(1));
	// 	const snapshot = await getDoc(q);

	// 	const exists = snapshot.doc[0]?.exists();
	// 	if (exists) {
	// 		//redirect to team page
	// 		//goto('/snh2023/team/' + snapshot.docs[0].id);
	// 	}
	// }

	// $: $userID && checkTeam();
</script>

<div class="mx-10 flex h-[20rem] w-[18rem] flex-col items-center justify-center rounded-2xl border-[1px] border-[#d2b863] p-10 md:h-[22rem] md:w-[25rem]">
	<div class="flex h-full w-full flex-col items-center justify-center space-y-6 py-6">
		<h2 class="font-jbExtrabold text-2xl md:text-4xl">Join A Team</h2>
		<Input type="text" bind:value={teamID} placeholder="Enter the team ID" class="mb-4 h-12 w-60 rounded-2xl bg-gray-600 p-4 font-jbMedium text-white md:h-14 md:w-80" required />
		<Input type="text" bind:value={teamSecret} placeholder="Enter the team Secret" class="h-12 w-60 rounded-2xl bg-gray-600 p-4 font-jbMedium text-white md:h-14 md:w-80" required />
		<button on:click={joinTeam}><MainButton>Join Team</MainButton></button>
	</div>

	<!-- Already in a team -->
	<!-- <div class="flex h-full w-full flex-col items-center justify-center p-4 text-center">
		<h2 class="pb-6 pt-4 font-jbExtrabold text-4xl text-[#fffba4]">
			You are already in a team!
			<p class="pt-4 font-jbMedium text-2xl text-white">Team ID/Team Secret</p>
		</h2>
	</div> -->
</div>
