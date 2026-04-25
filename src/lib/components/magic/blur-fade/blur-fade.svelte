<script lang="ts">
	import { cn } from '$lib/utils';
	import {
		motion,
		AnimatePresence,
		useInView,
		type Variants,
		type UseInViewOptions,
		type Easing,
	} from 'motion-sv';
	import type { Snippet } from 'svelte';

	type MarginType = string;

	interface BlurFadeProps {
		children: Snippet;
		class?: string;
		containerClass?: string;
		variant?: Variants;
		exit?: boolean;
		duration?: number;
		delay?: number;
		offset?: number;
		direction?: 'up' | 'down' | 'left' | 'right';
		ease?: Easing;
		triggerOnView?: boolean;
		inViewMargin?: MarginType;
		blur?: string;
		once?: boolean;
	}

	let {
		children,
		class: className,
		containerClass: containerClassName,
		variant,
		exit = false,
		duration = 0.4,
		delay = 0,
		offset = 6,
		direction = 'down',
		ease = 'easeOut',
		triggerOnView = true,
		inViewMargin = '-50px',
		blur = '0',
		once = true,
	}: BlurFadeProps = $props();

	let containerRef: HTMLDivElement | null = $state(null);
	let view = useInView(
		() => containerRef!,
		() =>
			({
				once,
				amount: 0.1,
				margin: inViewMargin,
			}) as UseInViewOptions,
	);

	const defaultVariants = $derived.by<Variants>(() => {
		return {
			hidden: {
				[direction === 'left' || direction === 'right' ? 'x' : 'y']:
					direction === 'right' || direction === 'down' ? -offset : offset,
				opacity: 0,
				filter: `blur(${blur})`,
			},
			visible: {
				[direction === 'left' || direction === 'right' ? 'x' : 'y']: 0,
				opacity: 1,
				filter: `blur(0px)`,
			},
		};
	});

	const combinedVariants = $derived(variant || defaultVariants);
	const shouldAnimate = $derived(!triggerOnView || view.current);
</script>

<div bind:this={containerRef} class={cn(containerClassName)}>
	<AnimatePresence>
		<motion.div
			initial="hidden"
			animate={shouldAnimate ? 'visible' : 'hidden'}
			exit={exit ? 'hidden' : undefined}
			variants={combinedVariants}
			transition={{
				delay,
				duration,
				ease,
			}}
			class={cn(className)}
		>
			{@render children()}
		</motion.div>
	</AnimatePresence>
</div>
