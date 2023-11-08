<script>
	import { page } from '$app/stores';
	let pageNumber = $page.url.searchParams.get('page') ?? 1;
</script>

<div class="flex min-h-screen flex-grow flex-col pt-6">
	<div class="h-16 w-full"></div>
	<iframe class="flex-grow" title="handbook" src="https://heyzine.com/flip-book/d49adcee6e.html#page/{pageNumber}" />
</div>
