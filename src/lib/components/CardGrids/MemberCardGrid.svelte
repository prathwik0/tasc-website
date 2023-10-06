<script lang="ts">
	import type MemberData from '$lib/components/types/MemberData';
	export let members: MemberData[];
</script>

<div class="grid-container gap-10 space-y-10 px-6 pb-28 md:space-y-0 md:px-12 lg:px-16">
	{#each members as member}
		<div class={'dark:custom-shadow-black min-w-full rounded-xl bg-muted-light px-5 py-8 shadow-xl duration-200 hover:scale-110 dark:bg-muted-dark dark:drop-shadow-md'}>
			<div class={'flex justify-center'}>
				<img src={member.image} alt={member.name} width={800} height={800} class={'h-36 w-36 rounded-full border border-[#e5c6fc] object-cover dark:border-[#121928] lg:h-44 lg:w-44'} />
			</div>
			<h1 class={'py-4 text-center text-2xl font-bold'}>{member.name}</h1>
			<h2 class={'pb-5 text-center text-lg'}>{member.role}</h2>
			<ul class={'z-50 flex w-full justify-center space-x-5'}>
				{#if member.instagram}
					<a href={`${member.instagram}`} target={'_blank'}>
						<iconify-icon icon="mdi:instagram" height="2.5rem" />
					</a>
				{/if}
				{#if member.github}
					<a href={`${member.github}`} target={'_blank'}>
						<iconify-icon icon="mdi:github" height="2.5rem" />
					</a>
				{/if}
				{#if member.linkedin}
					<a href={`${member.linkedin}`} target={'_blank'}>
						<iconify-icon icon="mdi:linkedin" height="2.5rem" />
					</a>
				{/if}
			</ul>
		</div>
	{/each}
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
		justify-items: center;
		justify-content: end;
		align-content: end;
		row-gap: 4rem;
	}
</style>
