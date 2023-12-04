<script>
	import { Timeline, TimelineItem } from 'flowbite-svelte';
	import { CalendarCheckIcon } from 'lucide-svelte';
	// @ts-ignore
	import { concurrent } from 'svelte-typewriter';
</script>

<div class="pb-16 text-center font-jbExtrabold text-4xl md:py-0 md:pt-10 md:text-5xl">
	<p use:concurrent={{ interval: 100 }}>Hackathon Timeline</p>
</div>
<div class="flex w-full justify-center">
	<Timeline order="vertical">
		<div class="flex flex-col md:my-20">
			<TimelineItem date="23-09-2003">
				<svelte:fragment slot="icon">
					<span class="ring-whit flex h-6 w-6 items-center justify-center rounded-full">
						<CalendarCheckIcon class="text-primary-600 dark:text-primary-400 h-3 w-3" />
					</span>
				</svelte:fragment>
				<div class="gradient_border w-96 cursor-default bg-[#d1f2f9] bg-opacity-5 p-10 backdrop-blur-sm transition duration-300 md:hover:scale-[102%]">
					<h3 class="font-jbExtrabold text-xl text-[#fffba4] md:text-[24px]">Hackfest</h3>
					<ul class="mt-5 space-y-2">
						<li class="pb-1 font-jbRegular text-sm text-secondary md:text-[16px]">Hello World</li>
					</ul>
				</div>
			</TimelineItem>
			<TimelineItem>
				<svelte:fragment slot="icon">
					<span class="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900">
						<CalendarCheckIcon class="text-primary-600 dark:text-primary-400 h-3 w-3" />
					</span>
				</svelte:fragment>
				<div class="gradient_border w-96 cursor-default bg-[#d1f2f9] bg-opacity-5 p-10 backdrop-blur-sm transition duration-300 md:hover:scale-[102%]">
					<h3 class="font-jbExtrabold text-xl text-[#fffba4] md:text-[24px]">Hackfest</h3>
					<ul class="mt-5 space-y-2">
						<li class="pb-1 font-jbRegular text-sm text-secondary md:text-[16px]">Hello World</li>
					</ul>
				</div>
			</TimelineItem>
		</div>
	</Timeline>
</div>
