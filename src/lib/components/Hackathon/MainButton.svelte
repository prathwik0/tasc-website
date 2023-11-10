<script>
	export let hrefId = '/';
</script>

<div class="flex flex-col items-center justify-center duration-300 hover:scale-105">
	<div class="rounded-[15px] bg-gradient-to-tr from-[rgb(236,66,55)] via-[#d2b863] to-[#33b6d8] p-[1px] font-jbMedium transition duration-300 hover:bg-gradient-to-tr hover:drop-shadow-[0_0_0.2rem_#d2b863]">
		<div class="rounded-[14px] bg-[#0f0913] py-3 underline-offset-8 transition duration-300 hover:drop-shadow-[0_0_0.2rem_#460a07]">
			<div class=" transition duration-300 hover:drop-shadow-[0_0_0.2rem_#d2b863]">
				<div class="px-3 py-1 text-sm underline-offset-8 transition duration-300 hover:drop-shadow-[0_0_0.2rem_#460a07] md:text-xl"><slot /></div>
			</div>
		</div>
	</div>
</div>
