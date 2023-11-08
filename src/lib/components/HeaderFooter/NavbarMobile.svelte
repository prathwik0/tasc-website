<script lang="ts">
	import { NAVITEM } from '$lib/data/NavbarItems.js';
	import { menuToggle } from '$lib/stores/menuToggle';
	import AuthButton from '../Auth/AuthButton.svelte';
	const toggleMenu = () => {
		menuToggle.set(!$menuToggle);
	};
</script>

<div class={`absolute right-0 top-0 h-[100vh] rounded-l-xl bg-primary-dark dark:bg-primary-light ${$menuToggle ? '' : 'hidden'} px-10`}>
	<button on:click={toggleMenu} class="right-0 top-0 flex w-full justify-end py-5">
		<iconify-icon icon="ep:close" height="2rem" width="2rem" class="text-white dark:text-black" />
	</button>
	<ul class="space-y-16 pt-32">
		{#each NAVITEM as item}
			<a href={`${item.href}`}>
				<li class="mb-5 text-center text-3xl font-bold text-white dark:text-black"><button on:click={toggleMenu}>{item.title}</button></li>
			</a>
		{/each}
	</ul>
	<AuthButton />
</div>
