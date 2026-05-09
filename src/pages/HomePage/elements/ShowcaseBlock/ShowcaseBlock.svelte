<script lang="ts">
	import { SHOWCASES } from './constants';
	import ImageSide from './images/ShowcaseImageSide.webp';
	import { Image } from '$components/Image';
	import { WordDelimiter } from '$components/WordDelimiter';
	import ArrowRight from '$icons/ArrowRight.svelte';
	import { Lens } from '$lib/components/magic/lens';
	import * as Carousel from '$lib/components/ui/carousel';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context';
	import { cn } from '$lib/utils/classes';

	let api = $state<CarouselAPI>();

	const count = $derived(api ? api.scrollSnapList().length : 0);
	let current = $state(0);
	let currentShowcase = $derived(SHOWCASES[current]);

	$effect(() => {
		if (api) {
			current = api.selectedScrollSnap();
			api.on('select', () => {
				current = api!.selectedScrollSnap();
			});
		}
	});
</script>

<WordDelimiter text="Реализованный кейс" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-15 mb-50">
	<div class="col-start-3 col-span-3 flex flex-col gap-6 mb-9">
		<span class="font-ivy-headline-light text-[32px] text-trim-trim-both uppercase">
			Сколка 2024-2025
		</span>
		<span class="text-xl">
			{`Лаборатория светотворчества в школе Сколка: серия коллективных световых
            работ, выставка в кампусе школы, участие в фестивале научного искусства
            «Частоты 6.0» и коллаборация с НИЯУ МИФИ в павильоне «АТОМ».`}
		</span>
	</div>
	<Image src={ImageSide} class="row-start-2 col-span-2" />
	<Carousel.Root
		opts={{ loop: true }}
		setApi={(emblaApi) => (api = emblaApi)}
		class="row-start-2 col-span-6"
	>
		<Carousel.Content>
			{#each SHOWCASES as { src }, index (index)}
				<Carousel.Item>
					<Lens zoomFactor={1.5} lensSize={200}>
						<Image {src} />
					</Lens>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<div class="flex justify-between mt-6">
			<div class="flex flex-col justify-between">
				<span class="text-xl">{currentShowcase.artist}, «{currentShowcase.title}»</span>
				<div class={cn('relative h-2 w-100 bg-card-background')}>
					<span
						class={[
							'h-full animate-in fade-in transition-all absolute duration-300 ease-linear bg-action-primary',
						]}
						style={`width: ${((current + 1) / count) * 100}%;`}
					>
					</span>
				</div>
			</div>

			<div class="flex gap-4">
				<Carousel.Previous class="relative w-12 h-12 [&>svg]:rotate-180">
					<ArrowRight />
				</Carousel.Previous>
				<Carousel.Next class="relative w-12 h-12">
					<ArrowRight />
				</Carousel.Next>
			</div>
		</div>
	</Carousel.Root>
</div>
