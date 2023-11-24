<script>
	import { qualified } from '$lib/data/Qualified';
</script>

<div class="mx-auto grid max-w-[90vw] grid-cols-1 gap-x-8 gap-y-4 pb-8 pt-16 md:grid-cols-2 md:pt-20 lg:grid-cols-3 lg:pt-24">
	{#each qualified as q}
		<div class="flex flex-col gap-y-5 rounded-2xl border border-[#d2b863] bg-[#0a101f] p-4">
			<h3 class="text-center font-jbBold text-xl text-white md:text-2xl">{q.PID}</h3>
			<ul class="list-disc px-10">
				{#each q.teams as team}
					<li class="font-jbRegular text-lg md:text-xl">{team}</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
