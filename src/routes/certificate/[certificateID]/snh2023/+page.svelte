<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import type { LayoutData } from '../$types';
	export let data: LayoutData;
</script>

<div class="flex h-screen items-center justify-center">
	<div class="flex h-3/4 w-2/3 flex-col items-center rounded-md border border-white bg-white p-20 text-black">
		<h2 class="text-6xl font-medium text-slate-600">Certificate of SNH2023</h2>
		<p class="mt-6 text-lg text-slate-800">This certificate is presented to</p>
		<div class="mt-8 text-4xl font-medium text-green-500">
			{data.name}
		</div>
		<Separator class="mt-2 h-[1px] w-2/3 bg-slate-700" />

		<p class="mt-6 text-2xl text-slate-800">For their active participation in</p>
		<div class="text-3xl font-medium">{data.occasion}</div>
		<!-- <p class="mt-6 text-2xl text-slate-800">Held in between {data.issueDate + ' '} and {data.issueDate.getDate() + ' ' + months[data.issueDate.getMonth()] + ' ' + data.issueDate.getFullYear()}</p> -->

		<div></div>
		<div>{data.role}</div>
		<div>{data.userID}</div>
		<div>{data.certificateID}</div>
	</div>
</div>
