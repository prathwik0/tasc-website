<script>
	export let hrefId = '/';
</script>

<div class="flex flex-col items-center justify-center">
	<div class="rounded-2xl bg-gray-600 p-0.5 font-jbMedium">
		<div class="rounded-2xl bg-[#020817] py-3 underline-offset-8">
			<div class=" transition duration-300">
				<a href={hrefId} class=" px-5 py-5 underline-offset-8 transition duration-300"> <slot /> </a>
			</div>
		</div>
	</div>
</div>
