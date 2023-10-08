<script lang="ts">
	import { user } from '$lib/firebase/firebase';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
</script>

{#if $user}
	<slot />
{:else}
	<Card.Root class="m-2">
		<Card.Header class="space-y-1">
			<Card.Title class="text-2xl">You aren't logged in</Card.Title>
			<Card.Description>If you already have an account click the login button below. Else click the SignUp button to redirect you to SignUp page.</Card.Description>
		</Card.Header>

		<Card.Content class="flex flex-row flex-wrap justify-center gap-4">
			<Button class="w-48" variant="outline" href="/login">Login</Button>
			<Button class="w-48" variant="outline" href="/create-account/signup">SignUp</Button>
		</Card.Content>
	</Card.Root>
{/if}
