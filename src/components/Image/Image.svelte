<script lang="ts">
	import { cn } from '$lib/utils/classes';
	import type { HTMLImgAttributes } from 'svelte/elements';

	type Props = Omit<HTMLImgAttributes, 'src'> & {
		src: string;
		class?: string;
		groupId?: string;
		useViewer?: boolean;
	};

	const {
		src,
		alt = '',
		class: classNameValue,
		useViewer = false,
		draggable = false,
		...props
	}: Props = $props();
</script>

{#snippet image()}
	<img
		{src}
		{alt}
		class={cn(classNameValue, useViewer && 'cursor-pointer')}
		{draggable}
		{...props}
	/>
{/snippet}

{@render image()}
