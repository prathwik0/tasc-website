<script>
	// @ts-ignore
	import { concurrent } from 'svelte-typewriter';
	import RegisterButton from './RegisterButton.svelte';
</script>

<div class="flex h-screen items-center justify-center">
	<div class="absolute inset-0 -z-20 overflow-hidden"></div>
	<link class="flex h-screen items-center justify-center" />
	<div class="absolute inset-0 -z-20 overflow-hidden"></div>
	<a href="#date" class="float1 absolute bottom-0 z-40 py-10">
		<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
			<path fill="currentColor" d="M11 4h2v12h2v2h-2v2h-2v-2H9v-2h2V4zM7 14v2h2v-2H7zm0 0v-2H5v2h2zm10 0v2h-2v-2h2zm0 0v-2h2v2h-2z" />
		</svg>
	</a>
	<div class="absolute top-0 flex h-screen items-center">
		<div class="mb-20 flex flex-col items-center md:mb-0 md:pt-5">
			<!-- <img src="/assets/logo/main-logo-new.png" width={500} height={500} alt="background" class="-z-10 hidden w-[50rem] md:flex lg:w-[60rem]" /> -->
			<!-- <img src="/assets/logo/logo-vertical.png" width={500} height={500} alt="background" class="-z-10 flex md:hidden" /> -->
			<h1 use:concurrent={{ interval: 100 }} class="my-10 py-5 text-center font-jbExtrabold text-5xl md:py-10 md:text-6xl">Smart Nitte Hackathon 2023</h1>
			<div class="flex flex-col items-center pt-2 font-jbExtrabold">
				<!-- <div class="text-3x md:text-4xl">
					<p use:concurrent={{ interval: 100, mode: 'loop' }}>Smart Nitte Hackathon 2023</p>
				</div> -->
				<RegisterButton />
			</div>
		</div>
	</div>
</div>
