<script lang="ts">
	import MainButton from '$lib/components/Hackathon/MainButton.svelte';
	import Button from '$lib/components/ui/buttonHackathon/button.svelte';
	import { db } from '$lib/firebase/firebase';
	import { Timestamp, arrayUnion, doc, writeBatch } from 'firebase/firestore';
	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';

	let scanning = false;
	let html5Qrcode: Html5Qrcode;

	let status: 'inside' | 'outside' = 'outside';

	onMount(init);
	function init() {
		html5Qrcode = new Html5Qrcode('reader');
	}

	function start() {
		html5Qrcode.start(
			{ facingMode: 'environment' },
			{
				fps: 10,
				qrbox: { width: 250, height: 250 }
			},
			onScanSuccess,
			onScanFailure
		);
		scanning = true;
	}

	async function stop() {
		await html5Qrcode.stop();
		scanning = false;
	}

	async function onScanSuccess(decodedText: string, decodedResult: any) {
		alert(`Scanned Value = ${decodedText}`);
		// console.log(decodedResult);
		await updateStatus(decodedText);
	}

	async function updateStatus(decodedText: string) {
		const data = JSON.parse(decodedText);
		// console.log(data);

		const team: string = data.team;
		const user: string = data.user;

		const batch = writeBatch(db);
		const teamRef = doc(db, 'snh2023final', team);

		batch.update(teamRef, {
			[user + '.status']: status,
			[user + '.timestamp']: Timestamp.now(),
			[user + '.scanned']: true,
			[user + '_history']: arrayUnion({
				status: status,
				timestamp: Timestamp.now()
			})
		});

		await batch.commit();
		alert('Status updated');
	}

	function onScanFailure(error: any) {
		console.warn(`Code scan error = ${error}`);
	}
</script>

<div>
	<div class="scanner">
		<div class="mt-4 flex gap-4">
			{#if scanning}
				<button on:click={stop}><MainButton><div class="w-20 p-0">Stop</div></MainButton></button>
			{:else}
				<button on:click={start}><MainButton><div class="w-20 p-0">Start</div></MainButton></button>
			{/if}
			{#if status === 'inside'}
				<button
					on:click={() => {
						status = 'outside';
					}}
					><MainButton><div class="w-20 p-0">Going Out</div></MainButton>
				</button>
			{:else}
				<button
					on:click={() => {
						status = 'inside';
					}}
				>
					<MainButton><div class="w-20 p-0">Coming In</div></MainButton>
				</button>
			{/if}
		</div>
		<reader id="reader" />
	</div>
</div>

<style>
	.scanner {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}
	reader {
		width: 100%;
		min-height: 250px;
		background-color: black;
	}
</style>
