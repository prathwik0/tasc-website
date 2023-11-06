<script>
	import AboutSection from './AboutSection.svelte';
</script>

<div>
	<div class="h-screen">
		<div class="flex h-[90vh] items-center justify-center">
			<div class="space-y-6 px-4">
				<h1 class="bg-gradient-to-r from-[#835FDC] to-[#CC4FAD] bg-clip-text text-center text-[40px] font-extrabold text-transparent md:text-6xl lg:text-8xl">
					Turing <br /> Artificial Intelligence <br /> Student Committee
				</h1>

				<p class="text-smA text-center font-semibold md:text-lg lg:text-2xl">Department of Artificial Intelligence and Machine Learning</p>
			</div>
		</div>

		<a href="/#about">
			<div class={'flex animate-bounce justify-center pb-16'}>
				<iconify-icon icon="solar:arrow-down-linear" height="4rem"></iconify-icon>
			</div>
		</a>
	</div>

	<div id="about" class="bg-muted py-10">
		<AboutSection />
	</div>
</div>
