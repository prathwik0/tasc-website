import { db } from '$lib/firebase/firebase';
import { collection, getDocs, type DocumentData } from 'firebase/firestore';
import type FacultyCardType from '$lib/components/types/FacultyCardType';
import type { PageLoad } from './$types';

export const load = (async () => {
	const postSnapshot = await getDocs(collection(db, 'Faculty'));
	const Data:DocumentData = [];
	for (const doc of postSnapshot.docs) {
		Data.push(doc.data());
	}
	return { Data: Data as FacultyCardType['Data'] };
}) satisfies PageLoad;
