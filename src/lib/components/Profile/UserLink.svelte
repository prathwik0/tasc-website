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
	<a href={url} class="flex h-10 max-w-sm items-center justify-center gap-x-2 rounded-lg border border-white border-opacity-0 text-center transition-all duration-300 hover:scale-105 sm:w-36 sm:border-opacity-100">
		{#if title === 'Instagram'}
			<iconify-icon icon="mdi:instagram" height="20" />
			<span class="hidden sm:block">{title}</span>
		{:else if title === 'Twitter'}
			<iconify-icon icon="simple-icons:x" height="16" />
			<span class="hidden sm:block">{title}</span>
		{:else if title === 'LinkedIn'}
			<iconify-icon icon="mdi:linkedin" height="20" />
			<span class="hidden sm:block">{title}</span>
		{:else if title === 'GitHub'}
			<iconify-icon icon="mdi:github" height="20" />
			<span class="hidden sm:block">{title}</span>
		{:else}
			<iconify-icon icon="mdi:github" height="5rem" width="5rem" />
			<!-- <img src={'/custom.svg'} alt={platform} width="10" height="10" /> -->
			<span class="hidden sm:block">{title}</span>
		{/if}
	</a>
{/if}
