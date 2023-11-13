import { collection, doc, getDoc, getDocs, limit, query, where } from 'firebase/firestore';
import type { PageLoad } from './$types';
import { db } from '$lib/firebase/firebase';
import { error } from '@sveltejs/kit';
import type { TeamData, Submission } from '$lib/components/types/TeamData';

export const load = (async ({ params }) => {
	// update the datamodel to include username in the profile collection
	// currently you're querying firebase user collection to get the id
	// and then querying the profile collection to get the data
	// this should be updated soon

	const teamCollectionRef = collection(db, 'snh2023');

	const q = query(teamCollectionRef, where('teamURL', '==', params.teamURL), limit(1));
	const snapshot = await getDocs(q);

	const exists = snapshot.docs[0]?.exists();
	if (!exists) {
		throw error(404, params.teamURL + ' team does not exist!');
	}

	const teamData = snapshot.docs[0]?.data();
	const id = snapshot.docs[0]?.id;

	return {
		teamName: teamData.teamName,
		teamURL: teamData.teamURL,
		teamSecret: teamData.teamSecret,
		leader: teamData.leader,
		leaderName: teamData.leaderName,
		leaderPhone: teamData.leaderPhone,
		leaderEmail: teamData.leaderEmail,
		members: teamData.members,
		memberInfo: teamData.memberInfo,
		memberCount: teamData.memberCount,
		acceptingMembers: teamData.acceptingMembers,
		createdAt: teamData.createdAt,
		submissions: <Submission>[]
	} as TeamData;
}) satisfies PageLoad;
