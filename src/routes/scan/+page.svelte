<script lang="ts">
	import { Html5Qrcode } from 'html5-qrcode';
	import { onMount } from 'svelte';
	import { writeBatch, doc, arrayUnion, Timestamp } from 'firebase/firestore';
	import { db } from '$lib/firebase/firebase';

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
		console.log(decodedResult);

		await updateStatus(decodedText);
	}

	async function updateStatus(decodedText: string) {
		const data = JSON.parse(decodedText);
		console.log(data);

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
		{#if scanning}
			<button on:click={stop}>stop</button>
		{:else}
			<button on:click={start}>start</button>
		{/if}
		{#if status === 'inside'}
			<button
				on:click={() => {
					status = 'outside';
				}}
			>
				Going Out
			</button>
		{:else}
			<button
				on:click={() => {
					status = 'inside';
				}}
			>
				Coming In
			</button>
		{/if}
		<reader id="reader" />
		{#if scanning}
			<button on:click={stop}>stop</button>
		{:else}
			<button on:click={start}>start</button>
		{/if}
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
		min-height: 500px;
		background-color: black;
	}
</style>
