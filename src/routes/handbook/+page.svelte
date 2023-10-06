<script>
	import { page } from '$app/stores';
	let pageNumber = $page.url.searchParams.get('page') ?? 1;
</script>

<div class="flex max-h-screen flex-grow">
	<iframe class="aspect-video flex-grow md:pb-12" title="handbook" src="https://heyzine.com/flip-book/d49adcee6e.html#page/{pageNumber}" />
</div>
