import type { CertificateData } from '$lib/types/CertificateData';
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
	const date: Date = data.date;
	const id = certificateSnap.id;

	return {
		...data,
		certificateID: id
	} as CertificateData;
}) satisfies PageLoad;
