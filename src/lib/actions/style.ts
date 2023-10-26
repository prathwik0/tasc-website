/** @type {import('svelte/action').Action<HTMLElement, string>}  */
export function backgroundColor(node: any, color: { color_light: string; color_dark: string; darkTheme: boolean }) {
	// console.log('created');
	node.style['background-color'] = color.darkTheme ? color.color_dark : color.color_light;

	return {
		update(color: { color_light: string; color_dark: string; darkTheme: boolean }) {
			node.style['background-color'] = color.darkTheme ? color.color_dark : color.color_light;
		},
		destroy() {
			// console.log('destroyed');
			node.style['background-color'] = '';
		}
	};
}


/*
 * todo: fix the race condition
 * currently while navigating to a new page, the background color is set
 * before the destroy method is called on the previous page
 * hence. the background color is set to default
 */
