<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';

	type Props = HTMLAnchorAttributes & {
		class?: ClassNameValue;
		children: Snippet;
	};

	const { children, class: classNameValue, ...props }: Props = $props();
</script>

<a
	class={twMerge('w-fit text-blue-400 hover:opacity-85 active:opacity-85', classNameValue)}
	{...props}
>
	{@render children()}
</a>
