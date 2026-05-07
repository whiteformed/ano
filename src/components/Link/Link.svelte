<script lang="ts">
	import { cn } from '$lib/utils/classes';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type Props = HTMLAnchorAttributes & {
		class?: string;
		children: Snippet;
	};

	const { children, class: classNameValue, ...props }: Props = $props();
</script>

<a class={cn('w-fit text-action-primary hactive:opacity-85', classNameValue)} {...props}>
	{@render children()}
</a>
