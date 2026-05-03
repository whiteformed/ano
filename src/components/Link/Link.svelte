<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type Props = HTMLAnchorAttributes & {
		class?: string;
		children: Snippet;
	};

	const { children, class: classNameValue, ...props }: Props = $props();
</script>

<a
	class={cn('w-fit text-action-primary hover:opacity-85 active:opacity-85', classNameValue)}
	{...props}
>
	{@render children()}
</a>
