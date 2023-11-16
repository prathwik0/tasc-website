<script>
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Table from '$lib/components/ui/table';

	export let title = '';
	export let description = '';
	export let PID = '';
	export let startup = '';
	export let startupDescription = '';
</script>

<Dialog.Root>
	<Dialog.Trigger class="flex h-[20rem] w-full items-center justify-center  rounded-2xl border-[1px] border-[#d2b863] px-6 py-4">
		<div class="flex flex-col items-center">
			<h3 class="text-md text-center font-semibold text-gray-500 md:text-lg">{PID}</h3>
			<p class="text-center text-lg md:text-2xl">{title}</p>
		</div>
	</Dialog.Trigger>

	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>{PID}</Dialog.Title>
		</Dialog.Header>
		{#if startup == ''}
			<h3 class="px-2 text-[15px] text-[#d2b863] md:text-xl">This problem statement qualifies for all cash prizes <span class="font-bold">EXCEPT</span> Internships</h3>
		{/if}
		<Table.Root class="text-[13px] md:text-lg">
			<Table.Body>
				<Table.Row>
					<Table.Cell>Problem Statement</Table.Cell>
					<Table.Cell>{title}</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Description</Table.Cell>
					<Table.Cell>{description}</Table.Cell>
				</Table.Row>
				{#if startup !== ''}
					<Table.Row>
						<Table.Cell>Startup</Table.Cell>
						<Table.Cell>{startup}</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>About</Table.Cell>
						<Table.Cell>{startupDescription}</Table.Cell>
					</Table.Row>
				{/if}
			</Table.Body>
		</Table.Root>
	</Dialog.Content>
</Dialog.Root>
