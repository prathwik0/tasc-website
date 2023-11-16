export default interface CertificateData {
	certificateID: string;
	user: string;
	name: string;
	role: string;
	occasion: string;
	date: Date;
	team?: string;
	teamName?: string;
}
