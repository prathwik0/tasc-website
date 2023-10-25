<script>
	import AboutSection from '$lib/components/Others/AboutSection.svelte';
</script>

<div>
	<div class="flex min-h-screen flex-grow flex-col">
		<div class="flex flex-grow flex-col justify-center">
			<div class="h-16 w-full"></div>

			<div class="title bg-gradient-to-r from-[hsl(257,54%,51%)] to-[#CC4FAD] bg-clip-text text-transparent dark:from-[#835FDC] dark:to-[#CC4FAD]">
				Turing <br /> Artificial <br class="sm:hidden" /> Intelligence <br /> Student <br class="sm:hidden" />Committee
			</div>

			<p class="mx-1 text-lg font-semibold lg:text-2xl">Department of Artificial Intelligence and Machine Learning</p>
		</div>
		<a href="/#about" class="flex h-24 flex-grow-0 items-end justify-center">
			<div class="flex animate-bounce justify-center">
				<iconify-icon icon="solar:arrow-down-linear" height="4rem"></iconify-icon>
			</div>
		</a>
	</div>

	<div id="about" class="bg-muted py-10">
		<AboutSection />
	</div>
</div>

<style>
	.title {
		font-weight: 900;
		font-size: calc(100vw / 6.9);

		flex-shrink: 0;
		line-height: 1;
	}
	@media (min-width: 640px) {
		.title {
			font-size: calc(100vw / 11);
		}
	}
</style>
