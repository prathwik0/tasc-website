import { db } from '$lib/firebase/firebase';
import { collection, getDocs, type DocumentData } from 'firebase/firestore';
import type { PageLoad } from './$types';
import type FacultyData from '$lib/types/FacultyData';

export const load = (async () => {
	const facultySnapshot = await getDocs(collection(db, 'Faculty'));
	let faculties: FacultyData[] = [];

	facultySnapshot.forEach((doc) => {
		faculties.push(doc.data() as FacultyData);
	});

	return { faculties: faculties };
}) satisfies PageLoad;
