import { collection, doc, getDoc, getDocs, limit, query, where } from 'firebase/firestore';
import type { PageLoad } from './$types';
import { db } from '$lib/firebase/firebase';
import { error } from '@sveltejs/kit';
import type ProfileData from '$lib/components/types/ProfileData';

export const load = (async ({ params }) => {
	// update the datamodel to include username in the profile collection
	// currently you're querying firebase user collection to get the id
	// and then querying the profile collection to get the data
	// this should be updated soon

	const userCollectionRef = collection(db, 'user');

	const q = query(userCollectionRef, where('username', '==', params.username), limit(1));
	const snapshot = await getDocs(q);

	const exists = snapshot.docs[0]?.exists();
	if (!exists) {
		throw error(404, params.username + ' username does not exist!');
	}

	const userData = snapshot.docs[0]?.data();
	const id = snapshot.docs[0]?.id;

	const profileDocRef = doc(db, 'profile', id);
	const profileSnapshot = await getDoc(profileDocRef);

	const profileData = profileSnapshot.data() as ProfileData;

	// if (!data.published) {
	// 	throw error(403, `The profile of @${data.username} is not public!`);
	// }

	return {
		name: userData.name,
		usn: userData.usn,
		username: userData.username,
		photoURL: profileData?.photoURL,
		bio: profileData?.bio,
		links: profileData?.links ?? [],
		color_dark: profileData?.color_dark,
		color_light: profileData?.color_light
	} as ProfileData;
}) satisfies PageLoad;
