<script lang="ts">
	import { BlurFade } from '$lib/components/magic/blur-fade';
	import { useInView, type UseInViewOptions } from 'motion-sv';
	import { quintOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';

	type Props = {
		text: string;
	};

	const TOTAL = 21;
	const CENTRAL_POSITION = Math.floor(TOTAL / 2);
	const { text }: Props = $props();

	let containerRef: HTMLDivElement | null = $state(null);
	const containerWidth = new Tween(0, {
		duration: 700,
		easing: quintOut,
	});

	let view = useInView(
		() => containerRef!,
		() =>
			({
				once: true,
				amount: 0.1,
				margin: '-100px',
			}) as UseInViewOptions,
	);

	$effect(() => {
		if (view.current) {
			containerWidth.target = 100;
		}
	});
</script>

<BlurFade inViewMargin="-100px">
	<div
		bind:this={containerRef}
		class="w-full flex flex-col justify-center items-center z-1 select-none"
	>
		<div
			class="flex flex-col justify-center items-center overflow-hidden"
			style:width={`${containerWidth.current}%`}
			style:opacity={`${containerWidth.current / 100}`}
		>
			<div class="flex gap-5 justify-center items-center overflow-hidden uppercase">
				{#each { length: TOTAL }, index}
					<span
						class={[
							'font-neoris-light text-xl whitespace-pre',
							index !== CENTRAL_POSITION && 'opacity-17',
						]}
					>
						{text}
					</span>
				{/each}
			</div>
			<div class="mt-1 h-5 w-px bg-primary top-0 bottom-0"></div>
			<div class="w-full h-px bg-primary"></div>
		</div>
	</div>
</BlurFade>
