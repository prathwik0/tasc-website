<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { buttonVariants, type Props, type Events } from '.';

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export let builders: $$Props['builders'] = [];
	export { className as class };
</script>

<ButtonPrimitive.Root {builders} class={cn(buttonVariants({ variant, size, className }), 'mb-4 h-12 w-60 rounded-2xl bg-gray-600 p-4 font-jbMedium text-[#94A3B8] md:h-14 md:w-80')} {...$$restProps} on:click on:keydown>
	<slot />
</ButtonPrimitive.Root>
