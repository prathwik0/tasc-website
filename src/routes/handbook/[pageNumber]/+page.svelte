<script>
	import { page } from '$app/stores';
	const pageNumber = $page.params.pageNumber;
</script>

<div class="flex flex-grow">
	<iframe class="aspect-video flex-grow" title="handbook" src="https://heyzine.com/flip-book/d49adcee6e.html#page/${pageNumber}" />
</div>
