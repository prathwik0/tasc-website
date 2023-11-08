export default interface TeamData {
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
}
