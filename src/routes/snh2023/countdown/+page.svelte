<script>
	let startDate = new Date('2023-11-25T11:00:00').getTime();
	let endDate = new Date('2023-11-26T11:00:00').getTime();
	let started = false;
	let finished = false;
	let timeLeft = calculateTimeToStart();
	let timeRemaining = calculateTimeRemaining();

	function calculateTimeToStart() {
		const currentTime = Date.now();
		const remaining = Math.max(0, startDate - currentTime);

		const seconds = Math.floor(remaining / 1000);
		const days = Math.floor(seconds / 86400);
		const hours = Math.floor((seconds % 86400) / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const remainingSeconds = seconds % 60;

		return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
	}

	function calculateTimeRemaining() {
		const currentTime = Date.now();
		const remaining = Math.max(0, endDate - currentTime);

		const seconds = Math.floor(remaining / 1000);
		const days = Math.floor(seconds / 86400);
		const hours = Math.floor((seconds % 86400) / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const remainingSeconds = seconds % 60;

		return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
	}

	import { onMount } from 'svelte';
	onMount(() => {
		const timer = setInterval(() => {
			timeLeft = calculateTimeToStart();
			timeRemaining = calculateTimeRemaining();
			if (Date.now() >= startDate) {
				started = true;
			}
			if (timeRemaining === '00:00:00') {
				clearInterval(timer);
				finished = true;
			}
		}, 1000);

		return () => clearInterval(timer);
	});
</script>

<div>
	<div class="flex h-screen flex-col items-center justify-center">
		<div class="z-40 pt-5 text-center font-jbExtrabold text-2xl md:text-4xl">
			{#if started && !finished}
				<p class="flex flex-col space-y-6">
					<span class="text-5xl">Hackathon will end in</span>
					<span class="text-9xl text-[#fffba4]">{timeRemaining}</span>
				</p>
			{:else if !started && !finished}
				<p class="flex flex-col space-y-6">
					<span class="text-5xl">Hackathon will start in</span>
					<span class="text-9xl text-[#fffba4]">{timeLeft}</span>
				</p>
			{:else if finished}
				<span class="text-9xl text-[#fffba4]">Time's up</span>
			{/if}
		</div>
	</div>
</div>
