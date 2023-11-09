<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import * as Dialog from '.';
	import { cn, flyAndScale } from '$lib/utils';
	import { X } from 'lucide-svelte';

	type $$Props = DialogPrimitive.ContentProps;

	let className: $$Props['class'] = undefined;
	export let transition: $$Props['transition'] = flyAndScale;
	export let transitionConfig: $$Props['transitionConfig'] = {
		duration: 200
	};
	export { className as class };
</script>

<Dialog.Portal>
	<Dialog.Overlay />
	<DialogPrimitive.Content {transition} {transitionConfig} class={cn('fixed left-[50%] top-[50%] z-50 grid max-h-[40rem] w-[20rem] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-scroll rounded-2xl border-[1px] border-[#d2b863] bg-background py-4 shadow-lg md:w-[60rem] md:p-6 ', className)} {...$$restProps}>
		<slot />
		<DialogPrimitive.Close class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
			<X class="h-4 w-4" />
			<span class="sr-only">Close</span>
		</DialogPrimitive.Close>
	</DialogPrimitive.Content>
</Dialog.Portal>
