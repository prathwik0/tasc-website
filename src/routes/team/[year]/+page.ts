import { db } from '$lib/firebase/firebase';
import { collection, getDocs, type DocumentData } from 'firebase/firestore';
import type MemberCardType from '$lib/components/types/MemberCardType';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const postSnapshot = await getDocs(collection(db, 'members', params.year, 'post'));
	const Data: DocumentData = [];
	for (const doc of postSnapshot.docs) {
		Data.push(doc.data());
	}
	return { Data: Data as MemberCardType['Data'] };
}) satisfies PageLoad;
