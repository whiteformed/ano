<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';

	type Props = HTMLAttributes<HTMLSpanElement> & {
		class?: ClassNameValue;
		children: Snippet;
	};

	const { children, class: classNameValue, ...props }: Props = $props();
</script>

<span
	class={twMerge('inline-block rounded bg-cyan-950 p-1 text-cyan-400 opacity-80', classNameValue)}
	{...props}
>
	{@render children()}
</span>
