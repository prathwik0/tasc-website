<script lang="ts">
	import { Button } from '$lib/components/ui/custom_button';
	import { Separator } from '$lib/components/ui/separator';
	import * as htmlToImage from 'html-to-image';
	import type { LayoutData } from '../$types';
	export let data: LayoutData;

	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	let issueDate: Date = data.issueDate.toDate();
	let startDate: Date = data.startDate.toDate();
	let endDate: Date = data.endDate.toDate();
	let hidden = true;
	let certificate: HTMLDivElement;

	async function printCertificate() {
		hidden = false;
		setTimeout(() => {
			htmlToImage.toPng(certificate, { quality: 0.95 }).then(function (dataUrl) {
				var link = document.createElement('a');
				link.download = `${data.certificateID}.png`;
				link.href = dataUrl;
				link.click();
				hidden = true;
			});
		}, 0);
	}
</script>

<!-- <h1 class="animate-pulse pt-10 text-center text-4xl drop-shadow-[0_0_.3rem_#ffffff]">Issued Certificate</h1> -->
<div class="mx-2 mt-6 flex h-screen flex-col items-center justify-center">
	<div class="relative z-10 flex max-h-[90dvh] w-full flex-col items-center overflow-scroll border-8 border-double border-purple-600 bg-white px-20 py-10 text-center text-black md:py-16 lg:w-2/3">
		<img src="/backgroundCertificate.png" class="absolute top-0 -z-10 h-full w-full object-cover opacity-60" alt="" />
		<div class="flex w-full items-center justify-evenly gap-3 sm:gap-0">
			<img src="/nitte-logo.png" class="mb-4 w-20 md:w-32" alt="logo" />
			<img src="/TASCLogo.png" class="mb-4 w-20 md:w-28" alt="logo" />
			<img src="/assets/logo/snhDark.jpg" class="mb-4 w-12 md:w-20" alt="logo" />
		</div>
		<h2 class="mt-4 text-3xl font-medium italic text-slate-800 sm:text-4xl md:text-6xl">Certificate of Achievement</h2>
		<p class="mt-4 text-base italic text-slate-800 sm:text-lg md:mt-6">This certificate is presented to</p>
		<div class="mt-4 text-center text-xl font-medium text-purple-800 md:mt-6 md:text-4xl">
			{data.name}
		</div>
		<Separator class="z-50 mt-2 h-[1.25px] w-full bg-slate-700 md:mt-4 md:w-2/3" />
		<p class="mt-4 max-w-xl text-base italic text-slate-800 sm:text-lg md:mt-6">
			in recognition of their active participation in <span class="font-bold">"{data.occasionName}"</span>, which was held from

			{#if endDate}
				<span class="font-bold">"{startDate.getDate() + '-' + endDate.getDate() + ' ' + months[endDate.getMonth()] + ', ' + endDate.getFullYear()}"</span>
			{:else}
				<span class="font-bold">"{startDate.getDate() + ', ' + startDate.getFullYear()}"</span>"
			{/if}
		</p>

		<div class="mt-2 max-w-lg text-sm italic sm:text-base md:text-lg">Individual was a <span class="font-medium">{data.class}</span>, and their efforts are appreciated through this certificate</div>
		<!-- <div class="text-sm sm:text-base">{data.userID}</div> -->
		<!-- <div class="mt-2 text-sm sm:text-base md:text-lg">Issued by <span class="font-bold">TASC @ 2023</span></div> -->
		<div class="pt-10 text-sm text-slate-950">{data.certificateID}</div>
		<div class="m-4 flex w-full justify-between md:m-0">
			<p class="mt-4 font-bold underline underline-offset-1">Head of Dept.</p>
			<p class="mt-4 self-start font-bold underline underline-offset-1">Principal</p>
		</div>
		<img src="/signature/principal.png" class="absolute bottom-6 right-16 -z-50 w-24" alt="sign" />
		<img src="/signature/hod.png" class="absolute bottom-6 left-20 -z-50 w-28" alt="sign" />
	</div>
	<Button on:click={printCertificate} class="mx-auto mt-20 flex sm:my-10">Download Certificate</Button>
</div>

<!-- Just for downloading the proper dimensions of a Certificate! -->
<div class="overflow-x-hidden">
	<div class:hidden bind:this={certificate} class="relative z-10 flex w-[1024px] flex-col items-center border-8 border-double border-purple-600 bg-white px-20 py-10 text-center text-black">
		<img src="/backgroundCertificate.png" class="absolute top-0 -z-10 h-full w-full object-cover opacity-60" alt="" />
		<div class="flex w-full items-center justify-evenly">
			<img src="/nitte-logo.png" class="mb-4 w-32" alt="logo" />
			<img src="/TASCLogo.png" class="mb-4 w-28" alt="logo" />
			<img src="/assets/logo/snhDark.jpg" class="mb-4 w-20" alt="logo" />
		</div>
		<h2 class="mt-4 text-6xl font-medium italic text-slate-800">Certificate of Achievement</h2>
		<p class="mt-6 text-lg italic text-slate-800">This certificate is presented to</p>
		<div class="mt-6 text-center text-4xl font-medium text-purple-800">
			{data.name}
		</div>
		<Separator class="z-50 mt-4 h-[1.25px] w-2/3 bg-slate-700" />
		<p class="mt-6 max-w-xl text-lg italic text-slate-800">
			in recognition of their active participation in <span class="font-bold">"{data.occasionName}"</span>, a technical event held on

			{#if endDate}
				<span class="font-bold">"{startDate.getDate() + '-' + endDate.getDate() + ' ' + months[endDate.getMonth()] + ', ' + endDate.getFullYear()}"</span>
			{:else}
				<span class="font-bold">"{startDate.getDate() + ', ' + startDate.getFullYear()}"</span>"
			{/if}
		</p>

		<div class="mt-2 max-w-lg text-lg italic">Individual was a <span class="font-medium">{data.class}</span>, and their efforts are appreciated through this certificate</div>
		<!-- <div class="text-sm sm:text-base">{data.userID}</div> -->
		<!-- <div class="mt-2 text-sm sm:text-base md:text-lg">Issued by <span class="font-bold">TASC @ 2023</span></div> -->
		<div class="pt-10 text-sm text-slate-950">{data.certificateID}</div>
		<div class="mb-6 flex w-full justify-between">
			<p class="mt-4 font-bold underline underline-offset-1">Head of Dept.</p>
			<p class="mt-4 self-start font-bold underline underline-offset-1">Principal</p>
		</div>
		<img src="/signature/principal.png" class="absolute bottom-6 right-16 -z-50 w-24" alt="sign" />
		<img src="/signature/hod.png" class="absolute bottom-6 left-20 -z-50 w-28" alt="sign" />
	</div>
</div>
