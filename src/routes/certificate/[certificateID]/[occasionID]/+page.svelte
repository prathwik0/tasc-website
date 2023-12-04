<script lang="ts">
	import { Button } from '$lib/components/ui/custom_button';
	import * as htmlToImage from 'html-to-image';
	let hidden = true;
	let certificate: HTMLDivElement;
	import { Separator } from '$lib/components/ui/separator';
	import type { LayoutData } from '../$types';
	export let data: LayoutData;

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

<div class="flex h-screen flex-col items-center justify-center">
	<div class="flex h-3/4 w-2/3 flex-col items-center overflow-scroll rounded-md border border-white bg-white p-20 text-black">
		<h2 class=" text-3xl font-medium text-slate-600 md:text-6xl">Certificate of Achievement</h2>
		<p class="mt-6 text-lg text-slate-800">This certificate is presented to</p>
		<div class="mt-6 text-4xl font-medium text-green-500">
			{data.name}
		</div>
		<Separator class="mt-2 h-[1px] w-2/3 bg-slate-700" />

		<p class="mt-6 text-2xl text-slate-800">For their active participation in</p>
		<div class="text-3xl font-medium">{data.occasionName}</div>
		<p class="text-2xl text-slate-800">and being a <span>{data.class}.</span></p>

		<p class="mt-6 text-2xl text-slate-800">Certificate was issued on {data.issueDate.toDate()}</p>

		<div>{data.certificateID}</div>
	</div>
	<Button on:click={printCertificate} class="m-6">Download Certificate</Button>
</div>

<!-- Certificate with static dimensions for download -->
<div class="overflow-x-hidden">
	<div class:hidden bind:this={certificate} class="relative z-10 flex w-[1024px] flex-col items-center rounded-md border border-white bg-white p-20 text-black">
		<h1 class=" text-3xl font-medium text-slate-600 md:text-6xl">Certificate of Achievement</h1>
		<p class="mt-6 text-lg text-slate-800">This certificate is presented to</p>
		<div class="mt-6 text-4xl font-medium text-green-500">
			{data.name}
		</div>
		<Separator class="mt-2 h-[1px] w-2/3 bg-slate-700" />

		<p class="mt-6 text-2xl text-slate-800">For their active participation in</p>
		<div class="text-3xl font-medium">{data.occasionName}</div>
		<p class="text-2xl text-slate-800">and being a <span>{data.class}.</span></p>

		<div class="mt-2 max-w-lg text-lg">Individual was a <span class="font-medium">{data.class}</span>, and their efforts are appreciated through this certificate</div>

		<div class="pt-10 text-sm text-slate-950">{data.certificateID}</div>

		<div class="mb-6 flex w-full justify-between">
			{#each data.issuerNames as name, i}
				<div class="flex flex-col">
					<p class="mt-4 font-bold underline underline-offset-1">{data.issuerDesignations[i]}</p>
					<img src={'/' + data.issuerSignatures[i]} class="w-48" alt="sign" />
				</div>
			{/each}
		</div>
	</div>
</div>
