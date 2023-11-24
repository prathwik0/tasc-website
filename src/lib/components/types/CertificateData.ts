export default interface CertificateData {
	// Certificate details
	certificateID: string;
	certificateTitle: string;
	version?: string;
	issueDate: Date;
	startDate?: Date;
	endDate?: Date;

	// Certificate validity (in years from issueDate)
	validity?: number;

	// Issuer details
	occasion: string;
	role: string;
	organization: string;
	organizationLogo: string;
	issuerNames: string[];
	issuerSignatures: string[];

	// Recipient details
	userID: string;
	name: string;
	email: string;
	college: string;
	usn?: string;
	branch?: string;

	// Team details
	event?: string;
	teamID?: string;
	teamName?: string;

	// Certificate authenticity
	hash: string;
}
