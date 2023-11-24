<script lang="ts">
	import { copy } from 'svelte-copy';
	import MainButton from '$lib/components/Hackathon/MainButton.svelte';
	import LeaveTeam from '$lib/components/Hackathon/LeaveTeam.svelte';
	import Submission from '$lib/components/Hackathon/Submission.svelte';
	import { doc, getDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase';
	import { page } from '$app/stores';
	import type { TeamData } from '$lib/components/types/TeamData';
	import { onMount } from 'svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { qualified } from '$lib/data/Qualified';
	import { storage } from '$lib/firebase/firebase';
	import { Progress } from '$lib/components/ui/progress';
	import { Input } from '$lib/components/ui/input';
	import { updateDoc } from 'firebase/firestore';
	import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
	import { RefreshCcw } from 'lucide-svelte';
	export let teamID: string;
	let uploading = false;

	let teamURL = $page.params.teamURL;
	let data: TeamData;

	async function getData() {
		const teamRef = doc(db, 'snh2023', teamURL);
		const docSnap = await getDoc(teamRef);

		if (docSnap.exists()) {
			data = docSnap.data() as TeamData;
		} else {
			alert('Team error! Register again and then come back to this page');
		}
	}

	async function upload(e: any) {
		uploading = true;
		const file = e.target.files[0];
		const maxSize = 1024 * 512;
		if (file.size > maxSize) {
			alert('The file is too large. Please upload a file smaller than 512kB.');
			uploading = false;
			return;
		} else {
			const storageRef = ref(storage, `snh2023/${data.teamURL}/proof.png`);
			const result = await uploadBytes(storageRef, file);

			const url = await getDownloadURL(result.ref);

			await updateDoc(doc(db, 'snh2023', data.teamURL), { proofURL: url });
			alert('Your profile photo has been updated!');
			uploading = false;
			refresh();
		}
	}

	async function refresh() {
		await getData();
	}

	onMount(async () => {
		await getData();
	});
</script>

{#if data}
	<div class="flex h-full min-h-screen w-full flex-col items-center justify-center space-y-6 pt-[8dvh]">
		<h2 class="pt-4 font-jbExtrabold text-3xl md:text-4xl">Your Team</h2>

		<div class="text-md w-[20rem] cursor-default rounded-2xl border border-[#d2b863] bg-gray-400 bg-opacity-5 p-6 backdrop-blur-sm transition duration-300 md:w-[35rem] md:p-10 md:text-2xl">
			<ul class="space-y-2">
				<p class="font-jbRegular">Team Name: <span class="text-[#fffba4]">{data.teamName}</span></p>
				<p class="flex items-center space-x-2 font-jbRegular">
					Team ID:
					<span class="pl-3 text-[#fffba4]">{data.teamURL}</span>

					<button class="rounded-x rounded-lg bg-gray-600 p-1" use:copy={data.teamURL} on:svelte-copy={() => alert('Team ID copied to clipboard!')}>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								fill-rule="evenodd"
								d="M15 1.25h-4.056c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433V16a3.751 3.751 0 0 0 3.166 3.705c.137.764.402 1.416.932 1.947c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h3.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982c.602-.602.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-5.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26c-.531-.53-1.183-.795-1.947-.932A3.751 3.751 0 0 0 15 1.25Zm2.13 3.021A2.25 2.25 0 0 0 15 2.75h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812c-.423.423-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.289v6a2.25 2.25 0 0 0 1.521 2.13c-.021-.61-.021-1.3-.021-2.075v-5.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117h3.11c.775 0 1.464 0 2.074.021ZM7.408 6.41c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103h3c1.435 0 2.436.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191v5c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103h-3c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191v-5c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399Z"
								clip-rule="evenodd"
							/></svg
						>
					</button>
				</p>

				<p class="font-jbRegular">
					Team Secret:
					<span class="text-[#fffba4]">{data.teamSecret}</span>
					<button class="rounded-x rounded-lg bg-gray-600 p-1" use:copy={data.teamSecret} on:svelte-copy={() => alert('Team Secret copied to clipboard!')}>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								fill-rule="evenodd"
								d="M15 1.25h-4.056c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433V16a3.751 3.751 0 0 0 3.166 3.705c.137.764.402 1.416.932 1.947c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h3.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982c.602-.602.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-5.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26c-.531-.53-1.183-.795-1.947-.932A3.751 3.751 0 0 0 15 1.25Zm2.13 3.021A2.25 2.25 0 0 0 15 2.75h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812c-.423.423-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.289v6a2.25 2.25 0 0 0 1.521 2.13c-.021-.61-.021-1.3-.021-2.075v-5.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117h3.11c.775 0 1.464 0 2.074.021ZM7.408 6.41c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103h3c1.435 0 2.436.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191v5c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103h-3c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191v-5c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399Z"
								clip-rule="evenodd"
							/></svg
						>
					</button>
				</p>

				<h2 class="pt-4 font-jbExtrabold">Team Members</h2>
				<div class="flex flex-col space-y-2">
					{#each data.memberInfo as memberInfo}
						{#if memberInfo.id == data.leader}
							<p class="font-jbRegular text-[#fffba4]">👑 {memberInfo.name}</p>
						{:else}
							<p class="font-jbRegular text-[#fffba4]">♟️ {memberInfo.name}</p>
						{/if}
					{/each}
				</div>
			</ul>
		</div>

		<LeaveTeam teamID={data.teamURL} memberInfo={data.memberInfo} leader={data.leader} />

		<Separator class="my-16"></Separator>

		{#if data?.qualified}
			<h3 class="px-2 text-center font-jbExtrabold text-2xl md:px-12 md:text-4xl lg:px-48">Nov 24: You will be issued Team and Member ID soon</h3>
			<Separator></Separator>
			<h1 class="mx-4 text-center font-jbExtrabold text-xl md:text-3xl">Nov 22: Congratulations!! You have been qualified for the next round</h1>
			{#if !data?.proofURL}
				<h3 class="mx-4 text-center font-jbMedium text-lg md:text-xl">Please pay ₹300 to confirm your registeration for the final showdown</h3>
			{/if}
			<div class="pb-8">
				<div class="mx-5 flex w-[20rem] flex-col items-center rounded-2xl border border-[#d2b863] bg-gray-400 bg-opacity-5 p-6 backdrop-blur-sm transition duration-300 md:w-[35rem] md:p-10">
					<img src="/upi.png" alt="UPI" class="h-[20rem] w-[20rem]" />
					<h3 class="py-4 font-jbBold text-xl md:text-2xl">Upload Payment Proof</h3>
					<Input on:change={upload} name="photoURL" type="file" accept="image/png, image/jpeg, image/gif, image/webp" />
					<p class="text-red-600">Max file size limit 500kB</p>
					{#if uploading}
						<p>Uploading...</p>
						<Progress value={33} />
					{/if}
				</div>
			</div>
			{#if data?.proofURL}
				<h3 class="font-jbMedium text-lg md:text-xl">Thank you for Registering! Your Payment Proof has been noted.</h3>
			{/if}
			<Separator class="my-16"></Separator>
		{:else}
			<h3 class="px-2 text-center font-jbExtrabold text-2xl md:px-12 md:text-4xl lg:px-48">Nov 22: Thank you for participating. Unfortunately, you didn't qualify this time. Keep up the effort!</h3>
			<Separator class="my-16"></Separator>
		{/if}

		<div class="flex flex-col items-center justify-center pt-8">
			<h1 class="px-2 text-center font-jbExtrabold text-2xl md:px-12 md:text-4xl lg:px-48">Nov 20: Submissions are closed. We are sorry if you missed it.</h1>
			<Separator class="my-12"></Separator>
			<Submission teamID={data.teamURL} PID={data.submission?.PID} title={data.submission?.title} college={data.submission?.college} link={data.submission?.link}></Submission>
		</div>

		<Separator></Separator>

		<div class="flex flex-col items-center justify-center p-6 align-middle md:flex-row">
			<h1 class="px-2 text-center font-jbExtrabold text-2xl md:text-4xl">Nov 6:</h1>
			<MainButton>Solution Submission (soon...)</MainButton>
		</div>

		<Separator></Separator>
	</div>
{/if}
