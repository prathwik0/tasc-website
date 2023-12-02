<script lang="ts">
	import { db, storage, userID, userProfileData } from '$lib/firebase/firebase';
	import LoadingSVG from '$lib/loader/rolling.svg';
	import { cn } from '$lib/utils';
	import { doc, updateDoc } from 'firebase/firestore';
	import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

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
	<img src={previewURL ?? $userProfileData?.photoURL ?? '/user.png'} alt="photoURL" class="mx-auto aspect-square h-72 w-72 rounded-full object-cover py-4" />
	<h1 class="text-2xl">Change your Profile Photo</h1>

	<p class="mb-2 dark:text-slate-500">Choose a new photo to change your profile picture</p>

	<!-- <Label for="photoURL">Choose a file</Label> -->

	<!-- <label class="mb-2 block text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label> -->
	<!-- <input accept="image/png, image/jpeg, image/gif, image/webp" class=" block w-full cursor-pointer rounded-lg border border-gray-300 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-200" id="file_input" type="file" on:change={upload} /> -->

	<div class="mx-auto flex w-full items-center justify-center lg:w-72">
		<label for="dropzone-file" class="dark:hover:bg-bray-800 flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 duration-300 hover:bg-white dark:border-gray-500 dark:bg-transparent dark:hover:border-gray-500 hover:dark:bg-gray-900">
			<div class="flex flex-col items-center justify-center pb-6 pt-5">
				<svg class="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
				</svg>
				<p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
				<p class="text-xs text-gray-500 dark:text-gray-400">WEBP, PNG, JPEG or GIF (MAX 1024 X 512px)</p>
			</div>
			<input name="photoURL" id="dropzone-file" type="file" class="hidden" accept="image/png, image/jpeg, image/gif, image/webp" on:change={upload} />
		</label>
	</div>

	<!-- <Input on:change={upload} name="photoURL" type="file" accept="image/png, image/jpeg, image/gif, image/webp" class="w-auto flex justify-center items-center h-14 mx-auto"/> -->
	<p class="text-red-600">Max file size limit 500kB</p>
	{#if uploading}
		<p>Uploading...</p>
		<div class="mx-auto flex w-full justify-center"><img src={LoadingSVG} alt="spin" class="w-16" /></div>
		<!-- <Progress value={33} /> -->
	{/if}
</form>
