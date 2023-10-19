<script lang="ts">
	import { NAVITEM } from '$lib/data/NavItems.js';
	import { menuToggle } from '$lib/stores/menuToggle';
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
	<!-- <div class="flex w-full justify-center pt-4">
		<button class="rounded-xl bg-brand px-4 py-2 text-white duration-200 hover:scale-110"> Login </button>
	</div> -->
</div>
