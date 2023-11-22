<script lang="ts">
	import { QRCodeImage } from 'svelte-qrcode-image';
	import { onMount } from 'svelte';
	import TeamIdRound2 from '$lib/components/Hackathon/TeamIDRound2.svelte';
	import MemberID from '$lib/components/Hackathon/MemberIDRound2.svelte';

	let inputText: string = ' ';

	onMount(async () => {
		inputText = '';
	});
</script>

<svelte:head>
	<title>QR Code Generator</title>
</svelte:head>

<a href="/">back</a>

<section>
	<QRCodeImage displayType="canvas" text={inputText} />

	<input type="text" bind:value={inputText} placeholder="type your text here" />
</section>

<QRCodeImage text="https://github.com/prathwik0" errorCorrectionLevel="H" />
<!-- <QRCodeImage text="hi" width="233" />
<QRCodeImage text="hi" width="233" height="233" />
<QRCodeImage text="hi" scale="10" displayType="canvas" />
<QRCodeImage displayType="canvas" displayStyle="border-style: dotted;" width="500" displayWidth="400" /> -->

<MemberID></MemberID>
<TeamIdRound2></TeamIdRound2>
