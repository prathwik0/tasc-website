interface Link {
	url: string;
	platform: string;
	title: string;
}

interface ImmutableData {
	username: string;
	name: string;
	email: string;
	achievements: string[];
	[dynamicField: string]: unknown;
}

interface Achievement {
	name: string;
	description: string;
	certificateTitle: string;
	certificateURL: string;
	certificateID: string;

	issueDate: string;
	organization: string;

	occassion: string;
	role: string;

	event?: string;
	teamID?: string;
	teamName?: string;
}

type DynamicFields<T> = {
	[K in keyof T as `${string & K}`]: Achievement;
};

interface MutableData {
	usn?: string;
	phone?: string;
	college?: string;
	branch?: string;
	photoURL: string;
	bio: string;
	color_light: string;
	color_dark: string;
	links: Link[];
	snh2023: string;
	snh2023final: string;
}

// Intersection of TeamData and DynamicHistoryFields to enforce the structure
export type ProfileData = ImmutableData & DynamicFields<ImmutableData> & MutableData;
