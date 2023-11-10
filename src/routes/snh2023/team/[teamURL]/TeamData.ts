export interface Submission {
	title?: string;
	description?: string;
	link?: string;
	problemStatement?: string;
}

export interface TeamData {
	teamName: string;
	teamURL: string;
	teamSecret: string;
	leader: string;
	leaderName: string;
	leaderPhone: string;
	leaderEmail: string;
	members: string[];
	memberInfo: any[];
	memberCount: number;
	acceptingMembers: boolean;
	createdAt: string;
	submissions?: Submission[];
}
