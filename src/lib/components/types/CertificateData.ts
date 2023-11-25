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
	occasion: string;
	description: string;
	role: string;
	event: string;
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
