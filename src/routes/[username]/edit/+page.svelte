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
	<div class="mx-2 mb-6 grid place-content-center gap-x-16 gap-y-6 border border-white p-4 text-center md:mx-4 lg:mx-4 lg:grid-cols-2">
		<div class="">
			<UpdatePhoto />
		</div>

		<div>
			<h1 class="text-2xl">Update your social links</h1>
			<p>Drag and drop to reorder your links</p>
			<div class="mt-4">
				<UpdateLinks />
			</div>
		</div>

		<div>
			<h1 class="text-2xl">Update your bio</h1>
			<UpdateBio />
		</div>

		<div>
			<h1 class="text-2xl">Update your Phone Number</h1>
			<UpdatePhone />
		</div>

		<div>
			<h1 class="text-2xl">Update your College/Institution</h1>
			<UpdateCollege />
		</div>

		<div>
			<h1 class="text-2xl">Pick profile page background-color</h1>
			<div class="mt-4">
				<UpdateColor />
			</div>
		</div>
	</div>
{:else}
	You aren't authorized to edit this profile
{/if}
