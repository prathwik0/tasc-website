<script>
	export let platform = 'none';
	export let url = '/';
	export let title = 'A cool title';
	export let disabled = false;
</script>

{#if disabled}
	<div class="flex w-full max-w-sm bg-muted text-center">
		<a href={url}>
			<img src={'/custom.svg'} alt={platform} width="32" height="32" class="mx-4 my-2 w-8" />
		</a>
		<span class="m-2 text-center text-lg font-bold">{title}</span>
	</div>
{:else}
	<a href={url} class="flex w-full max-w-sm bg-muted text-center">
		<img src={'/custom.svg'} alt={platform} width="32" height="32" class="mx-4 my-2 w-8" />
		<span class="m-2 text-center text-lg font-bold">{title}</span>
	</a>
{/if}
