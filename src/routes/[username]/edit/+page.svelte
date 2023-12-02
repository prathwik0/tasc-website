<script lang="ts">
	import { page } from '$app/stores';
	import { backgroundColor } from '$lib/actions/style';
	import UpdateBio from '$lib/components/Profile/UpdateBio.svelte';
	import UpdateCollege from '$lib/components/Profile/UpdateCollege.svelte';
	import UpdateColor from '$lib/components/Profile/UpdateColor.svelte';
	import UpdateLinks from '$lib/components/Profile/UpdateLinks.svelte';
	import UpdatePhone from '$lib/components/Profile/UpdatePhone.svelte';
	import UpdatePhoto from '$lib/components/Profile/UpdatePhoto.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { userData, userProfileData } from '$lib/firebase/firebase';
	import { darkTheme } from '$lib/stores/theme';
</script>

<svelte:body
	use:backgroundColor={{
		color_light: $userProfileData?.color_light ?? '',
		color_dark: $userProfileData?.color_dark ?? '',
		darkTheme: $darkTheme
	}}
/>

{#if $userData?.username == $page.params.username}
	<section class="mt-4 flex w-full justify-center px-2 sm:px-0">
		<div class="mx-auto flex flex-1 flex-col gap-x-8 rounded-2xl border border-white bg-white bg-opacity-5 p-10 text-center shadow-[0_0_.9rem_#ffffff] md:mx-4 md:max-w-6xl lg:flex-row">
			<div class="flex flex-col lg:w-1/2">
				<UpdatePhoto />
				<Separator class="my-4 dark:bg-slate-400" />
				<UpdatePhone />
			</div>
			<div class="mt-4 flex flex-col md:mt-0 lg:w-1/2">
				<UpdateBio />
				<Separator class="my-4 dark:bg-slate-300" />
				<UpdateLinks />
			</div>
			<div class="mt-4 flex flex-col md:mt-0 lg:w-1/2">
				<UpdateColor />
				<Separator class="my-4 dark:bg-slate-400" />
				<UpdateCollege />
			</div>
		</div>

		<!-- <div>
			<h1 class="text-2xl">Update your College/Institution</h1>
			<UpdateCollege />
		</div>

		<div>
			<h1 class="text-2xl">Pick profile page background-color</h1>
			<div class="mt-4">
				<UpdateColor />
			</div>
		</div> -->
	</section>
{:else}
	You aren't authorized to edit this profile
{/if}
