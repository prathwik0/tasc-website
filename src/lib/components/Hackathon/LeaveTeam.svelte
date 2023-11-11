<script lang="ts">
	import { db, user, userID, userData, userProfileData } from '$lib/firebase/firebase';
	import { doc, collection, getDocs, setDoc, writeBatch, limit, query, where, updateDoc, arrayUnion, increment, deleteField, arrayRemove } from 'firebase/firestore';
	import MainButton from '$lib/components/Hackathon/MainButton.svelte';
	import { goto } from '$app/navigation';

	export let teamID: string = '';
	export let leader: string = '';
	export let memberInfo: any = '';

	async function leaveTeam() {
		if (teamID && $user && $userID && $userProfileData && $userProfileData.snh2023) {
			const batch = writeBatch(db);

			const eventRef = doc(db, 'events', 'snh2023');
			batch.update(eventRef, {
				members: arrayRemove($userID!.user)
			});

			/* ****************************************** */

			const profileRef = doc(db, 'profile', $userID!.user);
			batch.update(profileRef, {
				snh2023: deleteField()
			});

			/* ****************************************** */

			const teamRef = doc(db, 'snh2023', teamID);

			if ($userID.user === leader) {
				if (memberInfo.length === 1) {
					batch.delete(teamRef);
				} else {
					for (let i = 0; i < memberInfo.length; i++) {
						if (memberInfo[i].id === $userID!.user) {
							batch.update(teamRef, {
								memberInfo: arrayRemove(memberInfo[i])
							});
						}
					}

					batch.update(teamRef, {
						members: arrayRemove($userID!.user),
						memberCount: increment(-1),
						leader: memberInfo[1].id,
						leaderName: memberInfo[1].name,
						leaderUSN: memberInfo[1].usn,
						leaderPhone: memberInfo[1].phone,
						leaderEmail: memberInfo[1].email
					});
				}
			} else {
				for (let i = 0; i < memberInfo.length; i++) {
					if (memberInfo[i].id === $userID!.user) {
						batch.update(teamRef, {
							memberInfo: arrayRemove(memberInfo[i])
						});
					}
				}

				batch.update(teamRef, {
					members: arrayRemove($userID!.user),
					memberCount: increment(-1)
				});
			}

			await batch.commit();

			alert("Successfully left the team. You'll be redirected to team page");
			goto('/snh2023/team/');
		} else {
			alert('Login or Join a team before leaving!');
		}
	}
</script>

<button on:click={leaveTeam}><MainButton>Leave Team</MainButton> </button>
