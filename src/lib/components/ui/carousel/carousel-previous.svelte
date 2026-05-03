<script lang="ts">
	import { getEmblaContext } from './context.js';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import { Button, type Props } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		variant = 'outline',
		size = 'icon-sm',
		children,
		...restProps
	}: Props = $props();

	const emblaCtx = getEmblaContext('<Carousel.Previous/>');
</script>

<Button
	data-slot="carousel-previous"
	{variant}
	{size}
	aria-disabled={!emblaCtx.canScrollPrev}
	disabled={!emblaCtx.canScrollPrev}
	class={cn(
		'w-fit bg-action-primary hover:opacity-90 active:opacity-80 rounded-full absolute cursor-pointer',
		emblaCtx.orientation === 'horizontal'
			? '-inset-s-12 top-1/2 -translate-y-1/2'
			: 'inset-s-1/2 -top-12 -translate-x-1/2 rotate-90',
		className,
	)}
	onclick={emblaCtx.scrollPrev}
	onkeydown={emblaCtx.handleKeyDown}
	{...restProps}
	bind:ref
>
	{#if children}
		{@render children()}
	{:else}
		<ChevronLeftIcon />
	{/if}
	<span class="sr-only">Previous slide</span>
</Button>
