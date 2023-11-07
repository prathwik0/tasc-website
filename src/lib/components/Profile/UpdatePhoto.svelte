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
		const maxSize = 1024 * 512;
		if (file.size > maxSize) {
			alert('The file is too large. Please upload a file smaller than 512kB.');
			uploading = false;
			return;
		} else {
			previewURL = URL.createObjectURL(file);
			const storageRef = ref(storage, `profile/${$userID!.user}/profile.png`);
			const result = await uploadBytes(storageRef, file);

			const url = await getDownloadURL(result.ref);

			await updateDoc(doc(db, 'profile', $userID!.user), { photoURL: url });

			alert('Your profile photo has been updated!');
			uploading = false;
		}
	}
</script>

<form class="w-full">
	<img src={previewURL ?? $userProfileData?.photoURL ?? '/user.png'} alt="photoURL" class="aspect-auto h-72 w-72 rounded-full object-cover py-4" />
	<!-- <Label for="photoURL">Choose a file</Label> -->
	<Input on:change={upload} name="photoURL" type="file" accept="image/png, image/jpeg, image/gif, image/webp" />
	<p class="text-red-600">Max file size limit 500kB</p>
	{#if uploading}
		<p>Uploading...</p>
		<Progress value={33} />
	{/if}
</form>
