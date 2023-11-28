<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import { Button } from '$lib/components/ui/custom_button';
	import type { PageData } from './$types';
	export let data: PageData;
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	let issueDate: Date = data.issueDate.toDate();
	let startDate: Date = data.startDate.toDate();
	let endDate: Date = data.endDate.toDate();

	const printCertificate = () => {
		window.print();
	};
</script>

<svelte:head>
	<title>Certificate | TASC</title>
	<meta name="description" content={data.occasion} />
</svelte:head>

<div class="mt-20 flex max-h-screen items-center justify-center">
	<div class="relative flex w-full flex-col items-center border-8 border-double border-purple-600 bg-white px-20 py-10 text-center text-black md:py-16 lg:w-2/3">
		<img src="/backgroundCertificate.png" class="-z-9 absolute top-0 h-full w-full object-cover opacity-60" alt="" />
		<div class="flex w-full items-center justify-around">
			<img src="/nitte-logo.png" class="mb-4 w-20 md:w-28" alt="logo" />
			<img src="/TASCLogo.png" class="mb-4 w-20 md:w-28" alt="logo" />
		</div>
		<h2 class="z-10 mt-4 text-3xl font-medium italic text-slate-800 sm:text-4xl md:text-6xl">Certificate of Achievement</h2>
		<p class="z-10 mt-4 text-base italic text-slate-800 sm:text-lg md:mt-6">This certificate is presented to</p>
		<div class="z-10 mt-4 text-center text-xl font-medium text-purple-800 md:mt-6 md:text-4xl">
			{data.name} some really long name ig what if its too big
		</div>
		<Separator class="mt-2 h-[1.25px] w-full bg-slate-700 md:mt-4 md:w-2/3" />
		<p class="z-10 mt-4 max-w-xl text-base italic text-slate-800 sm:text-lg md:mt-6">
			in recognition of their active participation in <span class="font-bold">"{data.occasion}"</span>, a technical event held on

			{#if endDate}
				<span class="font-bold">"{startDate.getDate() + '-' + endDate.getDate() + ' ' + months[endDate.getMonth()] + ', ' + endDate.getFullYear()}"</span>
			{:else}
				<span class="font-bold">"{startDate.getDate() + ', ' + startDate.getFullYear()}"</span>"
			{/if}
		</p>

		<div class="z-10 mt-2 max-w-lg text-sm italic sm:text-base md:text-lg">Individual was a <span class="font-medium">{data.role}</span>, and their efforts are appreciated through this certificate</div>
		<!-- <div class="text-sm sm:text-base">{data.userID}</div> -->
		<!-- <div class="mt-2 text-sm sm:text-base md:text-lg">Issued by <span class="font-bold">TASC @ 2023</span></div> -->
		<div class="z-10 pt-10 text-sm text-slate-950">{data.certificateID}</div>
	</div>
</div>
<Button on:click={printCertificate} class="mx-auto mt-20 flex sm:my-10">Print Certificate</Button>
