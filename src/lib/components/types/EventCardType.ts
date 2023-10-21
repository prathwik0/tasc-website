export default interface EventCardType {
    Data: Array<{
        id: number;
        title: string;
        image: string;
        date: Date;
        time: string;
        venue: string;
        organizers: string;
        description: string;
        guests: string;
        winners: string;
        reportLink: string;
        registrationLink: string;
    }>
}