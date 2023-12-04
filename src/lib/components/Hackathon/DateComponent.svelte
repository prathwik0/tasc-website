<script>
	let revealDate = new Date('2023-11-25T11:00:00').getTime();
	let endDate = new Date('2023-11-26T11:00:00').getTime();
	let revealed = true;
	let completed = true;
	let timeRemaining = calculateTimeRemaining();

	function calculateTimeRemaining() {
		const currentTime = Date.now();
		let remaining = Math.max(0, revealDate - currentTime);

		if (remaining == 0) {
			remaining = endDate - currentTime;
		}

		const seconds = Math.abs(Math.floor(remaining / 1000));
		const days = Math.abs(Math.floor(seconds / 86400));
		const hours = Math.abs(Math.floor((seconds % 86400) / 3600));
		const minutes = Math.abs(Math.floor((seconds % 3600) / 60));
		const remainingSeconds = Math.abs(seconds % 60);

		return `${days}:${hours}:${minutes}:${remainingSeconds}`;
	}

	import { onMount } from 'svelte';
	onMount(() => {
		const timer = setInterval(() => {
			timeRemaining = calculateTimeRemaining();

			if (timeRemaining === '00:00:00:00') {
				clearInterval(timer);
				revealed = true;
			}
		}, 1000);

		return () => clearInterval(timer);
	});
</script>

<div class="mx-10 flex h-full flex-col items-center justify-center">
	<h1 class="z-40 text-center font-jbExtrabold text-2xl md:text-4xl">Conducted on November 25th and 26th, 2023</h1>
	<div class="z-40 pt-5 text-center font-jbExtrabold text-2xl md:text-4xl">
		{#if !revealed}
			CountDown - <span class="text-[#fffba4]">{timeRemaining}</span>
		{:else if !completed}
			<div class="text-[#fffba4]">The hackathon is now going on!</div>
		{:else}
			Days since the hackathon - <span class="text-[#fffba4]">{timeRemaining}</span>
		{/if}
	</div>
</div>
