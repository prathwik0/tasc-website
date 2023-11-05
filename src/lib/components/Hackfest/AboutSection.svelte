<script>
	// @ts-ignore
	import { concurrent } from 'svelte-typewriter';
</script>

<div>
	<div class="mb-20 px-10 md:px-20 lg:px-32">
		<h1 use:concurrent={{ interval: 100 }} class="my-10 py-5 text-center font-jbExtrabold text-4xl md:py-10 md:text-5xl">About Hack Rush</h1>
		<div>
			<div class="font-jbRegular leading-8 md:text-lg">
				{'Hacktober Fest is a premier flagship event organised by '}
				<span class="transition duration-300 hover:drop-shadow-[0_0_0.2rem_#d2b863]">
					<a class="leading-8 underline underline-offset-4 drop-shadow-[0_0_0.2rem_#460a07] transition duration-300" href="https://www.sosc.org.in/" target="_blank">TASC nitte</a>{' '}
				</span>
				every year. Conducted exclusively in the month of October, Hacktober Fest is a 2-day event, with a wide reach across several colleges in the region, witnessing participation from over 100+ teams and over 1000 participants.
			</div>
			<div class="pt-10 font-jbRegular leading-8 md:text-lg">The event shall include a 24-hour hackathon, wherein students shall have a wide variety of themes. Festering an atmosphere of learning, exploring and networking, Hacktober Fest is one-of-a-kind in terms of hackathons, being organised completely by students.</div>
			<div class="pt-10 font-jbRegular leading-8 md:text-lg">Hacktober Fest is gearing up to be one of the most anticipated and exciting hackathons of the year!</div>
		</div>
	</div>
</div>
