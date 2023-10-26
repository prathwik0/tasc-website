<script lang="ts">
	import UserAuthForm from '$lib/components/Auth/user-auth-form.svelte';
	import LoginSignout from '$lib/components/Auth/SignInOut.svelte';
	import { userLoaded } from '$lib/firebase/firebase';
</script>

<div class="container relative grid min-h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
	<!-- <Button href="/login" variant="ghost" class="absolute right-4 top-4 md:right-8 md:top-8">Login</Button> -->

	<div class="absolute right-4 top-4 md:right-8 md:top-8">
		<LoginSignout />
	</div>

	<div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
		<div
			class="absolute inset-0 bg-cover"
			style="
				background-image:
					url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80);"
		/>
		<a href="/" class="relative z-20 flex items-center text-lg font-medium">TASC</a>
		<!-- <div class="relative z-20 mt-auto">
			<blockquote class="space-y-2">
				<p class="text-lg">&ldquo;We appreciate you checking out TASC!&rdquo;</p>
				<footer class="text-sm">HoD AIML</footer>
			</blockquote>
		</div> -->
	</div>

	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			{#if $userLoaded}
				<div class="flex flex-col space-y-2 text-center">
					<h1 class="text-2xl font-semibold tracking-tight">Create an account</h1>

					<p class="text-sm text-muted-foreground">Signup using Google to create a new account</p>
				</div>
				<UserAuthForm />
				<p class="px-8 text-center text-sm text-muted-foreground">
					By creating an account, you agree to our{' '}
					<a href="/terms" class="underline underline-offset-4 hover:text-primary"> Terms of Service </a>{' '}
					and{' '}
					<a href="/privacy" class="underline underline-offset-4 hover:text-primary"> Privacy Policy </a>
					.
				</p>
			{:else}
				loading
			{/if}
		</div>
	</div>
</div>
