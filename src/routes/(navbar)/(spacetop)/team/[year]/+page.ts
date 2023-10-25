import { db } from '$lib/firebase/firebase';
import { collection, getDocs, type DocumentData } from 'firebase/firestore';
import type { PageLoad } from './$types';
import type MemberData from '$lib/components/types/MemberData';

export const load = (async ({ params }) => {
	const memberSnapshot = await getDocs(collection(db, 'members', params.year, 'post'));
	const members: MemberData[] = [];

	memberSnapshot.forEach((doc) => {
		members.push(doc.data() as MemberData);
	});

	return { members: members };
}) satisfies PageLoad;
