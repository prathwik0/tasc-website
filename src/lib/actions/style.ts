/** @type {import('svelte/action').Action<HTMLElement, string>}  */
export function backgroundColor(node: any, backgroundColor: string) {
	node.style['background-color'] = backgroundColor;

	return {
		update(backgroundColor: string) {
			node.style['background-color'] = backgroundColor;
		}
	};
}
