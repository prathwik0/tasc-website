import type CertificateData from '$lib/components/types/CertificateData';
import { db } from '$lib/firebase/firebase';
import { error } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const certificateDocRef = doc(db, 'certificate', params.certificateID);
	const certificateSnap = await getDoc(certificateDocRef);

	if (!certificateSnap.exists()) {
		throw error(404, params.certificateID + ' certificate does not exist!');
	}

	const data = certificateSnap.data();
	const date:Date = data.date.toDate();
	const id = certificateSnap.id;

	return {
		certificateID: id,
		user: data.user,
		name: data.name,
		role: data.role,
		occasion: data.occasion,
		date: date,
		team: data?.team,
		teamName: data?.teamName
	} as CertificateData;
}) satisfies PageLoad;
