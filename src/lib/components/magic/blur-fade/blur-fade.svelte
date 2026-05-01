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
	import type { SvelteHTMLElements } from 'svelte/elements';

	interface BlurFadeProps {
		children: Snippet;
		as?: keyof SvelteHTMLElements;
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
		inViewMargin?: string;
		blur?: string;
		once?: boolean;
	}

	let {
		children,
		as = 'div',
		class: className,
		containerClass: containerClassName,
		variant,
		exit = false,
		duration = 0.3,
		delay = 0,
		offset = 6,
		direction = 'down',
		ease = 'easeOut',
		triggerOnView = true,
		inViewMargin = '-50px',
		blur = '0px',
		once = true,
	}: BlurFadeProps = $props();

	let MotionComponent = $derived(motion[as]);

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
		<MotionComponent
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
		</MotionComponent>
	</AnimatePresence>
</div>
