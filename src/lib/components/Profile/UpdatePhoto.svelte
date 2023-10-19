<script lang="ts">
	import { userID, userProfileData, storage, db } from '$lib/firebase/firebase';
	import { doc, updateDoc } from 'firebase/firestore';
	import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Progress } from '$lib/components/ui/progress';

	let previewURL: string;
	let uploading = false;

	async function upload(e: any) {
		uploading = true;
		const file = e.target.files[0];
		previewURL = URL.createObjectURL(file);

		const storageRef = ref(storage, `profile/${$userID!.user}/profile.png`);
		const result = await uploadBytes(storageRef, file);

		const url = await getDownloadURL(result.ref);

		await updateDoc(doc(db, 'profile', $userID!.user), { photoURL: url });
		uploading = false;
	}
</script>

<form class="w-full sm:max-w-sm">
	<img src={previewURL ?? $userProfileData?.photoURL ?? '/user.png'} alt="photoURL" class="aspect-square h-72 object-cover py-4" />
	<!-- <Label for="photoURL">Choose a file</Label> -->
	<Input on:change={upload} name="photoURL" type="file" accept="image/png, image/jpeg, image/gif, image/webp" />
	{#if uploading}
		<p>Uploading...</p>
		<Progress value={33} />
	{/if}
</form>
