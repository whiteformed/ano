<script lang="ts">
	import type { Picture } from '@sveltejs/enhanced-img';
	import Carousel from '$components/Carousel/Carousel.svelte';
	import CarouselSlide from '$components/Carousel/CarouselSlide.svelte';
	import Modal from '$components/Modal.svelte';
	import type { EmblaCarouselType } from 'embla-carousel';
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { twMerge, type ClassNameValue } from 'tailwind-merge';
	import { v4 as uuidv4 } from 'uuid';

	type Props = Omit<HTMLImgAttributes, 'src'> & {
		src: string | Picture;
		class?: ClassNameValue;
		groupId?: string;
		useViewer?: boolean;
	};

	const {
		src,
		alt,
		class: classNameValue,
		useViewer = false,
		groupId = uuidv4(),
		draggable = false,
		...props
	}: Props = $props();

	const DATA_GROUP_ATTR = 'data-image-group';

	let ref = $state<HTMLElement>();
	let modalRef = $state<HTMLElement>();
	let carouselApi = $state<EmblaCarouselType>();

	const dataAttributes = $derived({
		...(groupId && { [DATA_GROUP_ATTR]: groupId }),
	});
	const imageGroup = $derived(
		[...document.querySelectorAll(`[${DATA_GROUP_ATTR}="${groupId}"]`)].map((node) =>
			node.cloneNode(true),
		),
	);

	let visible = $state(false);

	function handleToggle() {
		visible = !visible;
	}

	function renderNode(nodeToRender: Node) {
		return (node: HTMLElement) => {
			node.appendChild(nodeToRender);
		};
	}

	$effect(() => {
		if (!carouselApi || !modalRef) return;

		function handleKeyDown(event: KeyboardEvent) {
			const key = event.key;
			const prev = key === 'ArrowLeft';
			const next = key === 'ArrowRight';

			if (prev || next) {
				if (prev) carouselApi?.scrollPrev();
				if (next) carouselApi?.scrollNext();
			}
		}

		modalRef.addEventListener('keydown', handleKeyDown);

		return () => {
			modalRef?.removeEventListener('keydown', handleKeyDown);
		};
	});
</script>

{#snippet image()}
	<enhanced:img
		bind:this={ref}
		{src}
		{alt}
		class={twMerge(classNameValue, useViewer && 'cursor-pointer')}
		{draggable}
		onclick={handleToggle}
		{...dataAttributes}
		{...props}
	/>
{/snippet}

{#if useViewer}
	<Modal bind:visible bind:ref={modalRef}>
		<div class="h-full w-full max-w-8/10 max-h-8/10 not-md:max-w-full">
			<Carousel bind:emblaApi={carouselApi} options={{ autoPlay: false }}>
				{#each imageGroup as image, index (index)}
					<CarouselSlide>
						<div {@attach renderNode(image)}></div>
					</CarouselSlide>
				{/each}
			</Carousel>
		</div>
	</Modal>
{/if}
{@render image()}
