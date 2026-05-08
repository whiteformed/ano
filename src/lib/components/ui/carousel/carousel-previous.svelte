<script lang="ts">
	import { getEmblaContext } from './context.js';
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
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

	const emblaCtx = getEmblaContext('<Carousel.Previous/>');
</script>

<Button
	data-slot="carousel-previous"
	{variant}
	{size}
	aria-disabled={!emblaCtx.canScrollPrev}
	disabled={!emblaCtx.canScrollPrev}
	class={cn(
		'w-fit bg-action-primary hactive:bg-action-primary-hover rounded-full absolute cursor-pointer',
		emblaCtx.orientation === 'horizontal' ? '' : 'rotate-90',
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
