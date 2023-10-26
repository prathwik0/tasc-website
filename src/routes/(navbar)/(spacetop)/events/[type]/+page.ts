import { db } from '$lib/firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import type { PageLoad } from './$types';
import type EventData from '$lib/components/types/EventData';

// @ts-ignore
export const load = (async ({ params }) => {
	const eventSnapshot = await getDocs(collection(db, 'events', params.type, 'eventId'));
	const events: EventData[] = [];

	eventSnapshot.forEach((doc) => {
		const eventData = doc.data() as EventData;
		events.push(eventData);
	});

	if (params.type === 'previous') {
		events.reverse();
	}
	return { events: events };
}) satisfies PageLoad;
