export interface CertificateStaticData {
	// Certificate details
	certificateTitle: string;
	version?: string;
	issueDate: Date;
	startDate: Date;
	endDate: Date;

	// Certificate validity (in years from issueDate)
	validity?: number;

	// Issuer details
	occasion: string; // occasion uniquely identifies a type of certificate
	description: string;

	role: string; // eg. participant, winner, runners up, organizer, volunteer

	eventName: string;
	eventID: string;
	eventDescription: string;

	// We have organization field because we plan to allow multiple organizations to issue certificates in the future
	organization: string;
	organizationLogo: string;
	issuerNames: string[];
	issuerDesignations: string[];
	issuerSignatures: string[];
}

export interface CertificateData extends CertificateStaticData {
	certificateID: string;

	// Recipient details
	userID: string;
	name: string;
	email: string;
	college: string;
	usn?: string;
	branch?: string;

	// Team details
	teamID?: string;
	teamName?: string;

	// Certificate authenticity
	hash: string;
}
