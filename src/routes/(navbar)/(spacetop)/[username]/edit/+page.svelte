<script lang="ts">
	import { page } from '$app/stores';
	import { userData, userProfileData } from '$lib/firebase/firebase';
	import UpdateBio from '$lib/components/Profile/UpdateBio.svelte';
	import UpdateColor from '$lib/components/Profile/UpdateColor.svelte';
	import UpdateLinks from '$lib/components/Profile/UpdateLinks.svelte';
	import UpdatePhoto from '$lib/components/Profile/UpdatePhoto.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { darkTheme } from '$lib/stores/theme';
	import { backgroundColor } from '$lib/actions/style';
	import UpdatePhone from '$lib/components/Profile/UpdatePhone.svelte';
</script>

<svelte:body
	use:backgroundColor={{
		color_light: $userProfileData?.color_light ?? '',
		color_dark: $userProfileData?.color_dark ?? '',
		darkTheme: $darkTheme
	}}
/>

<div class="flex flex-col items-center justify-center pt-10">
	{#if $userData?.username == $page.params.username}
		<!-- <Separator /> -->

		<div class="mx-2 mb-6 md:mx-4 lg:mx-4">
			<!-- Optionally change this to flexbox with flex-wrap -->
			<div class="grid w-full lg:grid-cols-2">
				<div class="flex justify-center">
					<div class="flex w-full max-w-sm flex-col">
						<div class="mt-6">
							<h1 class="text-2xl">Change your Profile Photo</h1>
							<p>Choose a new photo to change your profile picture</p>
							<UpdatePhoto />
						</div>
						<div class="mt-6">
							<h1 class="text-2xl">Update your bio</h1>
							<UpdateBio />
						</div>
						<div class="mt-6">
							<h1 class="text-2xl">Update your Phone Number</h1>
							<UpdatePhone />
						</div>
					</div>
				</div>

				<div class="flex justify-center">
					<div class="flex w-full max-w-sm flex-col">
						<div class="mt-6">
							<h1 class="text-2xl">Update your social links</h1>
							<p>Drag and drop to reorder your links</p>
							<div class="mt-4">
								<UpdateLinks />
							</div>
						</div>

						<div class="mt-6">
							<h1 class="text-2xl">Pick profile page background-color</h1>
							<div class="mt-4">
								<UpdateColor />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	{:else}
		You aren't authorized to edit this profile
	{/if}
</div>
