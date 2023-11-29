<script>
	import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-svelte';
	import Github from '../docs/icons/github.svelte';

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
			<InstagramIcon class="w-5" />
			<span class="hidden sm:block">{title}</span>
		{:else if title === 'Twitter'}
			<TwitterIcon class="w-5" />
			<span class="hidden sm:block">{title}</span>
		{:else if title === 'LinkedIn'}
			<LinkedinIcon class="w-5" />
			<span class="hidden sm:block">{title}</span>
		{:else if title === 'GitHub'}
			<GithubIcon class="w-5" />
			<span class="hidden sm:block">{title}</span>
		{:else}
			<img src={'/custom.svg'} alt={platform} width="10" height="10" />
			<span class="hidden sm:block">{title}</span>
		{/if}
	</a>
{/if}
