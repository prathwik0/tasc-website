interface Link {
	url: string;
	platform: string;
	title: string;
}

export default interface ProfileData {
	published: boolean;
	username?: string;
	name?: string;
	usn?: string;
	photoURL: string;
	bio: string;
	links: Link[];
}
