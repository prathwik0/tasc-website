import { db } from '$lib/firebase/firebase';
import { collection, getDocs } from "firebase/firestore";
import type { PageLoad } from './$types';

export const load = (async () => {
    const postSnapshot = await getDocs(collection(db, 'Faculty'));
    const Data = [];
    for (const doc of postSnapshot.docs) {
        Data.push(doc.data());
    }
    return {Data};

}) satisfies PageLoad;
