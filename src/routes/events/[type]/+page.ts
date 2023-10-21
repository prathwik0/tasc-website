import { db } from '$lib/firebase/firebase';
import { collection, getDocs } from "firebase/firestore";
import type { PageLoad } from './$types';

// @ts-ignore
export const load = (async ({params}) => {
    const postSnapshot = await getDocs(collection(db, 'events',params.type,'eventId'));
    const Data = [];
    for (const doc of postSnapshot.docs) {
        Data.push(doc.data());
    }
    if(params.type === 'previous'){
        Data.reverse();
    }
    return {Data};
})satisfies PageLoad;



