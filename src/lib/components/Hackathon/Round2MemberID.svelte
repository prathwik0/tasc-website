<script>
	import Separator from '$lib/components/ui/separator/separator.svelte';
</script>

<div class="flex items-center justify-center pt-32">
	<div class="mt-5 rounded-2xl bg-[#d2b863] p-0.5 font-jbMedium transition duration-300 md:w-[35rem] lg:w-[50rem]">
		<div class="rounded-2xl bg-slate-950 underline-offset-8 transition duration-300 hover:drop-shadow-[0_0_0.1rem_#460a07]">
			<div class="flex flex-col items-center justify-center rounded-2xl bg-[#d1f2f9] bg-opacity-5 px-5 py-16 font-jbBold text-4xl backdrop-blur-sm sm:px-20">
				<div class="flex flex-col items-center justify-center md:flex-row">
					<div class="text-2xl text-[#fffba4] transition duration-300 lg:text-3xl">Member ID Card</div>
				</div>
				<ul class="mb-6 mt-5 w-fit text-lg md:text-2xl">
					<li class="py-1"><span class="text-slate-500">Name : </span>Prathwik Kushal Kumar</li>
					<li class="py-1"><span class="text-slate-500">Floor Number : </span>03</li>
					<li class="py-1"><span class="text-slate-500">Room Number : </span>03</li>
					<li class="py-1"><span class="text-slate-500">College Name :</span>Sahyadri Engineering College</li>
				</ul>
				<Separator />
				<div class="mt-8 h-64 w-64 rounded-md bg-white md:h-52 md:w-52"></div>
				<p class="mt-2 text-base md:text-lg">QR Code</p>
				<p class="absolute bottom-10 self-start text-base text-slate-500">User ID</p>
			</div>
		</div>
	</div>
</div>
