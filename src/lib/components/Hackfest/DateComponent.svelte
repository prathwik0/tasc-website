<script>
	let revealDate = new Date('2023-11-25T11:00:00').getTime();
	let isRevealed = false;
	let timeRemaining = calculateTimeRemaining();

	function calculateTimeRemaining() {
		const currentTime = Date.now();
		const remaining = Math.max(0, revealDate - currentTime);

		const seconds = Math.floor(remaining / 1000);
		const days = Math.floor(seconds / 86400);
		const hours = Math.floor((seconds % 86400) / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const remainingSeconds = seconds % 60;

		return `${days < 10 ? '0' : ''}${days}:${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
	}

	import { onMount } from 'svelte';
	onMount(() => {
		const timer = setInterval(() => {
			timeRemaining = calculateTimeRemaining();

			if (timeRemaining === '00:00:00:00') {
				clearInterval(timer);
				isRevealed = true;
			}
		}, 1000);

		return () => clearInterval(timer);
	});
</script>

<div>
	<div class="mx-10 my-20 flex h-full flex-col items-center justify-center py-20">
		<h1 class="z-40 text-center font-jbExtrabold text-2xl md:text-4xl">November 25th and 26th, 2023</h1>
		<div class="z-40 pt-5 text-center font-jbExtrabold text-2xl md:text-4xl">
			{#if !isRevealed}
				CountDown - <span class="text-[#fffba4]">{timeRemaining}</span>
			{:else}
				<div class="text-[#fffba4]">The hackathon is now ongoing!</div>
			{/if}
		</div>
	</div>
</div>
