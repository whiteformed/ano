<script lang="ts">
	import Image1 from './images/ShowcaseImage1.png';
	import ImageSide from './images/ShowcaseImageSide.png';
	import WordDelimiter from '$components/WordDelimiter/WordDelimiter.svelte';
	import ArrowRight from '$icons/ArrowRight.svg';
	import * as Carousel from '$lib/components/ui/carousel';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context';
	import { cn } from '$lib/utils';

	let api = $state<CarouselAPI>();

	const count = $derived(api ? api.scrollSnapList().length : 0);
	let current = $state(0);

	$effect(() => {
		if (api) {
			current = api.selectedScrollSnap() + 1;
			api.on('select', () => {
				current = api!.selectedScrollSnap() + 1;
			});
		}
	});
</script>

<WordDelimiter text="Реализованный кейс" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-15 mb-50">
	<div class="col-start-3 col-span-3 flex flex-col gap-6 mb-10">
		<span class="font-ivy-headline-light text-[40px] text-trim-trim-both uppercase">
			Сколка 2024-2025
		</span>
		<span class="text-2xl">
			Лаборатория светотворчества в школе Сколка: серия коллективных световых работ, выставка в
			кампусе школы, участие в фестивале научного искусства «Частоты 6.0» и коллаборация с НИЯУ МИФИ
			в павильоне «АТОМ».
		</span>
	</div>
	<img src={ImageSide} alt="" class="row-start-2 col-span-2" />
	<Carousel.Root
		opts={{ loop: true }}
		setApi={(emblaApi) => (api = emblaApi)}
		class="row-start-2 col-span-6"
	>
		<Carousel.Content>
			{#each Array(5)}
				<Carousel.Item>
					<img src={Image1} alt="" />
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<div class="flex flex-col gap-4">
			<div class="flex justify-between text-xl">
				<span>{current}/{count}</span>
				<span>2025</span>
			</div>

			<div class={cn('relative h-2 w-1/5 bg-card-background')}>
				<span
					class={[
						'h-full animate-in fade-in transition-all absolute duration-300 ease-linear bg-action-primary',
					]}
					style={`width: ${(current / count) * 100}%;`}
				>
				</span>
			</div>
		</div>

		<Carousel.Previous class="bg-action-primary w-15 h-15 inset-s-auto -top-10 right-20">
			<img src={ArrowRight} alt="" class="rotate-180" />
		</Carousel.Previous>
		<Carousel.Next class="bg-action-primary w-15 h-15 -top-10 right-0">
			<img src={ArrowRight} alt="" />
		</Carousel.Next>
	</Carousel.Root>
</div>
