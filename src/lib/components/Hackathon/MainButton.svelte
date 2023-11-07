<script>
	export let hrefId = '/';
</script>

<div class="my-5 flex flex-col items-center justify-center">
	<div class="rounded-2xl bg-gray-600 from-[#ec4237] via-[#d2b863] to-[#33b6d8] p-0.5 font-jbMedium transition duration-300 hover:bg-gradient-to-tr hover:drop-shadow-[0_0_0.2rem_#d2b863]">
		<div class="rounded-2xl bg-[#0f0913] py-3 underline-offset-8 transition duration-300 hover:drop-shadow-[0_0_0.2rem_#460a07]">
			<div class=" transition duration-300 hover:drop-shadow-[0_0_0.2rem_#d2b863]">
				<a href={hrefId} class=" px-5 py-5 underline-offset-8 transition duration-300 hover:drop-shadow-[0_0_0.2rem_#460a07]"> <slot /> </a>
			</div>
		</div>
	</div>
</div>
