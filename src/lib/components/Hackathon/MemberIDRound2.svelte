<script lang="ts">
	import type { TeamDataSNH2023 } from '$lib/components/types/TeamData';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { copy } from 'svelte-copy';
	import { QRCodeImage } from 'svelte-qrcode-image';

	export let data: TeamDataSNH2023;
	export let userID: string;

	let QRCode: string;

	$: QRCode = JSON.stringify({
		team: data.teamID,
		user: userID
	});
</script>

<div class="flex items-center justify-center pt-24">
	<div class="mt-5 rounded-2xl bg-[#d2b863] p-0.5 font-jbMedium transition duration-300 md:w-[35rem] lg:w-[50rem]">
		<div class="rounded-2xl bg-slate-950 underline-offset-8 transition duration-300 hover:drop-shadow-[0_0_0.1rem_#460a07]">
			<div class="flex flex-col items-center justify-center rounded-2xl bg-[#d1f2f9] bg-opacity-5 px-5 py-16 font-jbBold text-4xl backdrop-blur-sm sm:px-20">
				<div class="flex flex-col items-center justify-center md:flex-row">
					<div class="text-2xl text-[#fffba4] transition duration-300 lg:text-3xl">Member ID Card</div>
				</div>
				<ul class="mb-6 mt-5 w-fit text-lg md:text-2xl">
					<li class="py-1"><span class="text-slate-500">Name : </span>{data[userID].name}</li>
					<li class="py-1"><span class="text-slate-500">Floor Number : </span>{data.floor}</li>
					<li class="py-1"><span class="text-slate-500">Room Number : </span>{data.room}</li>
					<li class="py-1"><span class="text-slate-500">College Name : </span>{data.college}</li>
					<li class="py-1"><span class="text-slate-500">Status : You are </span>{data[userID].status}</li>
				</ul>
				<Separator />
				<!-- 
				<p class="text-xs">{QRCode}</p> -->
				<div class="mb-4 mt-8 h-64 w-64 rounded-md bg-white"><QRCodeImage text={QRCode} errorCorrectionLevel="H" height="256" width="256" /></div>
				<!-- <p class="bottom-10 text-base text-slate-500">
					team : <span class="text-white">{JSON.parse(QRCode).team}</span><button class="rounded-x rounded-lg bg-gray-600 p-1 ml-2" use:copy={JSON.parse(QRCode).team} on:svelte-copy={() => alert('Team ID copied to clipboard!')}>
						<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								fill-rule="evenodd"
								d="M15 1.25h-4.056c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433V16a3.751 3.751 0 0 0 3.166 3.705c.137.764.402 1.416.932 1.947c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h3.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982c.602-.602.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-5.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26c-.531-.53-1.183-.795-1.947-.932A3.751 3.751 0 0 0 15 1.25Zm2.13 3.021A2.25 2.25 0 0 0 15 2.75h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812c-.423.423-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.289v6a2.25 2.25 0 0 0 1.521 2.13c-.021-.61-.021-1.3-.021-2.075v-5.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117h3.11c.775 0 1.464 0 2.074.021ZM7.408 6.41c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103h3c1.435 0 2.436.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191v5c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103h-3c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191v-5c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399Z"
								clip-rule="evenodd"
							/></svg
						>
					</button>
				</p>
				<p class="bottom-10 text-base text-slate-500">user : <span class="text-white">{JSON.parse(QRCode).user}</span><button class="rounded-x rounded-lg bg-gray-600 p-1 ml-2" use:copy={JSON.parse(QRCode).user} on:svelte-copy={() => alert('UserID copied to clipboard!')}>
						<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								fill-rule="evenodd"
								d="M15 1.25h-4.056c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433V16a3.751 3.751 0 0 0 3.166 3.705c.137.764.402 1.416.932 1.947c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h3.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982c.602-.602.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-5.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26c-.531-.53-1.183-.795-1.947-.932A3.751 3.751 0 0 0 15 1.25Zm2.13 3.021A2.25 2.25 0 0 0 15 2.75h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812c-.423.423-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.289v6a2.25 2.25 0 0 0 1.521 2.13c-.021-.61-.021-1.3-.021-2.075v-5.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117h3.11c.775 0 1.464 0 2.074.021ZM7.408 6.41c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103h3c1.435 0 2.436.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191v5c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103h-3c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191v-5c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399Z"
								clip-rule="evenodd"
							/></svg
						>
					</button></p> -->
			</div>
		</div>
	</div>
</div>

<!-- <QRCodeImage displayType="canvas" text={inputText} />
<input type="text" bind:value={inputText} placeholder="type your text here" /> -->
<!-- 
<QRCodeImage text="hi" width="233" />
<QRCodeImage text="hi" width="233" height="233" />
<QRCodeImage text="hi" scale="10" displayType="canvas" />
<QRCodeImage displayType="canvas" displayStyle="border-style: dotted;" width="500" displayWidth="400" /> -->
