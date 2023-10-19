<script lang="ts">
	import { page } from '$app/stores';
	import { userData } from '$lib/firebase/firebase';

	import Layout from './Layout.svelte';

	import UpdatePhoto from '$lib/components/Profile/UpdatePhoto.svelte';
	import UpdateBio from '$lib/components/Profile/UpdateBio.svelte';
	import UpdateLinks from '$lib/components/Profile/UpdateLinks.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
</script>

<Layout>
	<div slot="navbar">
		<h1 class="text-center text-2xl">Edit your Profile</h1>

		<div class="hidden justify-center md:flex">
			Profile Link:
			<a href={`/${$userData?.username}`}>
				https://localhost:5173/{$userData?.username}
			</a>
		</div>
	</div>

	{#if $userData?.username == $page.params.username}
		<Separator />

		<div class="mx-2 mb-6 md:mx-4 lg:mx-4">
			<div class="grid w-full lg:grid-cols-2">
				<div class="flex justify-center">
					<div class="flex flex-col sm:max-w-sm">
						<div class="mt-6">
							<h1 class="text-2xl">Change your Profile Photo</h1>
							<p>Choose a new photo to change your profile picture</p>
							<UpdatePhoto />
						</div>
						<div class="mt-6">
							<h1 class="text-2xl">Update your bio</h1>
							<UpdateBio />
						</div>
					</div>
				</div>

				<div class="flex justify-center">
					<div class="mt-6 w-full max-w-sm">
						<h1 class="text-2xl">Update your social links</h1>
						<p>Drag and drop to reorder your links</p>
						<div class="mt-4">
							<UpdateLinks />
						</div>
					</div>
				</div>
			</div>
		</div>
	{:else}
		You aren't authorized to edit this profile
	{/if}
</Layout>
