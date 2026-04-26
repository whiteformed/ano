<script lang="ts">
	import {
		defaultContainerVariants,
		defaultItemAnimationVariants,
		defaultItemVariants,
		staggerTimings,
	} from './constants';
	import { type AnimationType, type AnimationVariant } from './types';
	import { cn } from '$lib/utils';
	import type { MotionProps, Variants } from 'motion-sv';
	import { motion, AnimatePresence } from 'motion-sv';

	interface TextAnimateProps extends MotionProps {
		/**
		 * The text content to animate
		 */
		content: string;
		/**
		 * The class name to be applied to the component
		 */
		class?: string;
		/**
		 * The class name to be applied to each segment
		 */
		segmentClass?: string;
		/**
		 * The delay before the animation starts
		 */
		delay?: number;
		/**
		 * The duration of the animation
		 */
		duration?: number;
		/**
		 * Custom motion variants for the animation
		 */
		variants?: Variants;
		/**
		 * The element type to render
		 */
		// as?: ElementType;
		/**
		 * How to split the text ("text", "word", "character")
		 */
		by?: AnimationType;
		/**
		 * Whether to start animation when component enters viewport
		 */
		startOnView?: boolean;
		/**
		 * Whether to animate only once
		 */
		once?: boolean;
		/**
		 * The animation preset to use
		 */
		animation?: AnimationVariant;
		/**
		 * Whether to enable accessibility features (default: true)
		 */
		accessible?: boolean;
	}

	// as = "span",
	let {
		content,
		class: className = '',
		segmentClass = '',
		delay = 0,
		duration = 0.3,
		variants,
		by = 'word',
		startOnView = true,
		once = false,
		animation = 'fadeIn',
		accessible = true,
	}: TextAnimateProps = $props();

	let segments: string[] = $derived.by(() => {
		if (!content) return [];
		let text = content;
		switch (by) {
			case 'word':
				return text.split(/(\s+)/);

			case 'character':
				return text.split('');

			case 'line':
				// split by \n or \r\n or \\n
				// trim each line
				return (
					text.split('\\n').map((line) => line.trim()) ||
					text.split('\n').map((line) => line.trim())
				);

			case 'text':
			default:
				return [text];
		}
	});

	let finalVariants = $derived(
		variants
			? {
					container: {
						hidden: { opacity: 0 },
						show: {
							opacity: 1,
							transition: {
								opacity: { duration: 0.01, delay },
								delayChildren: delay,
								staggerChildren: duration / segments.length,
							},
						},
						exit: {
							opacity: 0,
							transition: {
								staggerChildren: duration / segments.length,
								staggerDirection: -1,
							},
						},
					},
					item: variants,
				}
			: animation
				? {
						container: {
							...defaultItemAnimationVariants[animation].container,
							show: {
								...defaultItemAnimationVariants[animation].container.show,
								transition: {
									delayChildren: delay,
									staggerChildren: duration / segments.length,
								},
							},
							exit: {
								...defaultItemAnimationVariants[animation].container.exit,
								transition: {
									staggerChildren: duration / segments.length,
									staggerDirection: -1,
								},
							},
						},
						item: defaultItemAnimationVariants[animation].item,
					}
				: { container: defaultContainerVariants, item: defaultItemVariants },
	);

	// $inspect(segments, "Segments");
	// $inspect(content, "Content");
</script>

<AnimatePresence mode="popLayout">
	<motion.div
		variants={finalVariants.container as Variants}
		initial="hidden"
		whileInView={startOnView ? 'show' : undefined}
		animate={startOnView ? undefined : 'show'}
		exit="exit"
		inViewOptions={{ once }}
		aria-label={accessible ? segments.join(' ') : undefined}
		class={cn('whitespace-pre-wrap', className)}
	>
		{#if accessible}
			<span class="sr-only">{content}</span>
		{/if}
		{#each segments as segment, i (i)}
			<motion.span
				variants={finalVariants.item}
				custom={i * staggerTimings[by]}
				class={cn(
					by === 'line' ? 'block' : 'inline-block whitespace-pre',
					by === 'character' && '',
					segmentClass,
				)}
				aria-hidden={accessible ? true : undefined}
			>
				{segment}
			</motion.span>
		{/each}
	</motion.div>
</AnimatePresence>
