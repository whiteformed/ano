<script lang="ts">
	import { getEmblaContext } from './context.js';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import { Button, type Props } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils/classes';

	let {
		ref = $bindable(null),
		class: className,
		variant = 'outline',
		size = 'icon-sm',
		children,
		...restProps
	}: Props = $props();

	const emblaCtx = getEmblaContext('<Carousel.Next/>');
</script>

<Button
	data-slot="carousel-next"
	{variant}
	{size}
	aria-disabled={!emblaCtx.canScrollNext}
	disabled={!emblaCtx.canScrollNext}
	class={cn(
		'w-fit bg-action-primary hactive:bg-action-primary-hover rounded-full absolute cursor-pointer',
		emblaCtx.orientation === 'horizontal' ? '' : 'rotate-90',
		className,
	)}
	onclick={emblaCtx.scrollNext}
	onkeydown={emblaCtx.handleKeyDown}
	bind:ref
	{...restProps}
>
	{#if children}
		{@render children()}
	{:else}
		<ChevronRightIcon />
	{/if}
	<span class="sr-only">Next slide</span>
</Button>
