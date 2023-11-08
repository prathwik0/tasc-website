<script lang="ts">
	import MainButton from '$lib/components/Hackathon/MainButton.svelte';
	import { copy } from 'svelte-copy';
	import type { PageData } from './$types';
	import LeaveTeam from '$lib/components/Hackathon/LeaveTeam.svelte';

	export let data: PageData;
</script>

<!-- Not in a team -->
<div class="flex h-full min-h-screen w-full flex-col items-center justify-center space-y-6">
	<h2 class="pt-4 font-jbExtrabold text-4xl">Your Team</h2>

	<div class="gradient_border mx-5 w-auto cursor-default rounded-2xl bg-[#d1f2f9] bg-opacity-5 p-10 backdrop-blur-sm transition duration-300 md:w-[600px]">
		<ul class="mt-5 space-y-2">
			<p class="font-jbRegular text-lg sm:text-2xl">Team Name : <span class="text-[#fffba4]">{data.teamName}</span></p>
			<p class="flex items-center space-x-4 font-jbRegular text-lg sm:text-2xl">
				Team ID :
				<span class="pl-3 text-[#fffba4]">{data.teamURL}</span>

				<button class="rounded-x rounded-lg bg-gray-600 p-1" use:copy={data.teamURL} on:svelte-copy={() => alert('Team ID copied to clipboard!')}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							fill-rule="evenodd"
							d="M15 1.25h-4.056c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433V16a3.751 3.751 0 0 0 3.166 3.705c.137.764.402 1.416.932 1.947c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h3.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982c.602-.602.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-5.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26c-.531-.53-1.183-.795-1.947-.932A3.751 3.751 0 0 0 15 1.25Zm2.13 3.021A2.25 2.25 0 0 0 15 2.75h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812c-.423.423-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.289v6a2.25 2.25 0 0 0 1.521 2.13c-.021-.61-.021-1.3-.021-2.075v-5.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117h3.11c.775 0 1.464 0 2.074.021ZM7.408 6.41c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103h3c1.435 0 2.436.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191v5c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103h-3c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191v-5c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399Z"
							clip-rule="evenodd"
						/></svg
					>
				</button>
			</p>

			<p class="font-jbRegular text-lg sm:text-2xl">
				Team Secret :
				<span class="text-[#fffba4]">{data.teamSecret}</span>
				<button class="rounded-x rounded-lg bg-gray-600 p-1" use:copy={data.teamSecret} on:svelte-copy={() => alert('Team Secret copied to clipboard!')}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							fill-rule="evenodd"
							d="M15 1.25h-4.056c-1.838 0-3.294 0-4.433.153c-1.172.158-2.121.49-2.87 1.238c-.748.749-1.08 1.698-1.238 2.87c-.153 1.14-.153 2.595-.153 4.433V16a3.751 3.751 0 0 0 3.166 3.705c.137.764.402 1.416.932 1.947c.602.602 1.36.86 2.26.982c.867.116 1.97.116 3.337.116h3.11c1.367 0 2.47 0 3.337-.116c.9-.122 1.658-.38 2.26-.982c.602-.602.86-1.36.982-2.26c.116-.867.116-1.97.116-3.337v-5.11c0-1.367 0-2.47-.116-3.337c-.122-.9-.38-1.658-.982-2.26c-.531-.53-1.183-.795-1.947-.932A3.751 3.751 0 0 0 15 1.25Zm2.13 3.021A2.25 2.25 0 0 0 15 2.75h-4c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812c-.423.423-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.289v6a2.25 2.25 0 0 0 1.521 2.13c-.021-.61-.021-1.3-.021-2.075v-5.11c0-1.367 0-2.47.117-3.337c.12-.9.38-1.658.981-2.26c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117h3.11c.775 0 1.464 0 2.074.021ZM7.408 6.41c.277-.277.665-.457 1.4-.556c.754-.101 1.756-.103 3.191-.103h3c1.435 0 2.436.002 3.192.103c.734.099 1.122.28 1.399.556c.277.277.457.665.556 1.4c.101.754.103 1.756.103 3.191v5c0 1.435-.002 2.436-.103 3.192c-.099.734-.28 1.122-.556 1.399c-.277.277-.665.457-1.4.556c-.755.101-1.756.103-3.191.103h-3c-1.435 0-2.437-.002-3.192-.103c-.734-.099-1.122-.28-1.399-.556c-.277-.277-.457-.665-.556-1.4c-.101-.755-.103-1.756-.103-3.191v-5c0-1.435.002-2.437.103-3.192c.099-.734.28-1.122.556-1.399Z"
							clip-rule="evenodd"
						/></svg
					>
				</button>
			</p>

			<h2 class="bg-gradient-to-tr pt-4 font-jbExtrabold text-2xl drop-shadow-[0_0_0.15rem_#d2b863]">Team Members</h2>
			<div class="flex flex-col space-y-2">
				{#each data.memberInfo as memberInfo}
					{#if memberInfo.id == data.leader}
						<p class="font-jbRegular text-lg text-[#fffba4] sm:text-2xl">👑 {memberInfo.name}</p>
					{:else}
						<p class="font-jbRegular text-lg text-[#fffba4] sm:text-2xl">♟️ {memberInfo.name}</p>
					{/if}
				{/each}
			</div>

			{#if data.memberCount == 3}
				<p class="font-semibold text-[#fffba4]">Team is full!</p>
			{:else}
				<p>You need to add {3 - data.memberCount} more {data.memberCount == 2 ? 'member' : 'members'}</p>
			{/if}
		</ul>
	</div>

	<MainButton>Solution Submission (soon...)</MainButton>
	<LeaveTeam teamID={data.teamURL} memberInfo={data.memberInfo} leader={data.leader} />
</div>
