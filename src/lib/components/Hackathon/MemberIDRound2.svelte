<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { QRCodeImage } from 'svelte-qrcode-image';
	import type { TeamDataSNH2023 } from '$lib/components/types/TeamData';

	export let data: TeamDataSNH2023;
	export let userID: string;

	let QRCode: string;

	$: QRCode = JSON.stringify({
		team: 'asdf',
		user: userID
	});
</script>

<div class="flex items-center justify-center pt-32">
	<div class="mt-5 rounded-2xl bg-[#d2b863] p-0.5 font-jbMedium transition duration-300 md:w-[35rem] lg:w-[50rem]">
		<div class="rounded-2xl bg-slate-950 underline-offset-8 transition duration-300 hover:drop-shadow-[0_0_0.1rem_#460a07]">
			<div class="flex flex-col items-center justify-center rounded-2xl bg-[#d1f2f9] bg-opacity-5 px-5 py-16 font-jbBold text-4xl backdrop-blur-sm sm:px-20">
				<div class="flex flex-col items-center justify-center md:flex-row">
					<div class="text-2xl text-[#fffba4] transition duration-300 lg:text-3xl">Member ID Card</div>
				</div>
				<ul class="mb-6 mt-5 w-fit text-lg md:text-2xl">
					<li class="py-1"><span class="text-slate-500">Name : </span>{data.teamName}</li>
					<li class="py-1"><span class="text-slate-500">Floor Number : </span>{'asdf'}</li>
					<li class="py-1"><span class="text-slate-500">Room Number : </span></li>
					<li class="py-1"><span class="text-slate-500">College Name : </span>{data.college}</li>
					<li class="py-1"><span class="text-slate-500">Status : You are </span>{data[userID].status}</li>
				</ul>
				<Separator />
				<QRCodeImage text={QRCode} errorCorrectionLevel="H" />
				<p class="text-xs">{QRCode}</p>
				<!-- <div class="mt-8 h-64 w-64 rounded-md bg-white"></div> -->
				<p class="mt-2 text-base md:text-lg">QR Code</p>
				<p class="absolute bottom-10 self-start text-base text-slate-500">User ID</p>
			</div>
		</div>
	</div>
</div>

<!-- <QRCodeImage displayType="canvas" text={inputText} />
<input type="text" bind:value={inputText} placeholder="type your text here" /> -->

<!-- <QRCodeImage text="hi" width="233" />
<QRCodeImage text="hi" width="233" height="233" />
<QRCodeImage text="hi" scale="10" displayType="canvas" />
<QRCodeImage displayType="canvas" displayStyle="border-style: dotted;" width="500" displayWidth="400" /> -->
