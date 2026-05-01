<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface InteractiveHoverButtonProps extends HTMLButtonAttributes {
		children: Snippet;
		class?: string;
	}

	let { children, class: className, ...props }: InteractiveHoverButtonProps = $props();
</script>

<button
	class={cn(
		'bg-button-background w-fit h-fit cursor-pointer rounded-full border text-center px-[24.5px] py-3',
		className,
	)}
	{...props}
>
	{@render children()}
</button>
