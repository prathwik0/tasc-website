import type { CertificateData } from '$lib/components/types/CertificateData';
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
	const id = certificateSnap.id;

	console.log(data);

	return {
		certificateID: id,
		certificateTitle: data.certificateTitle,
		version: data.version,
		issueDate: data.issueDate,
		startDate: data.startDate,
		endDate: data.endDate,
		validity: data.validity,
		occasion: data.occasion,
		description: data.description,
		role: data.role,
		organization: data.organization,
		organizationLogo: data.organizationLogo,
		issuerNames: data.issuerNames,
		issuerSignatures: data.issuerSignatures,
		userID: data.userID,
		name: data.name,
		email: data.email,
		college: data.college,
		usn: data.usn,
		branch: data.branch,
		event: data.event,
		teamID: data.teamID,
		teamName: data.teamName,
		hash: data.hash
	} as CertificateData;
}) satisfies PageLoad;
