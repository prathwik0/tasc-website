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
/* Fixed by kausthubh by adding loading spinners */

/** @type {import('svelte/action').Action<HTMLElement, string>}  */
export function hackathonStyles(node: any) {
	// console.log('created');
	node.classList.add('hackathon');
	node.style['background-color'] = '#020817';
	node.style['color'] = 'white';
	node.style['scroll-behaviour'] = 'smooth';
	node.style['scroll-padding-top'] = '5rem';

	return {
		destroy() {
			// console.log('destroyed');
			node.classList.remove('hackathon');
			node.style['background-color'] = '';
			node.style['color'] = '';
			node.style['scroll-behaviour'] = '';
			node.style['scroll-padding-top'] = '';
		}
	};
}
