<script lang="ts">
	import Image1 from './images/ValueImage1.png';
	import Image2 from './images/ValueImage2.png';
	import Image3 from './images/ValueImage3.png';
	import Image4 from './images/ValueImage4.png';
	import WordDelimiter from '$components/WordDelimiter/WordDelimiter.svelte';
	import { cn } from '$lib/utils/classes';
	import type { ClassValue } from 'tailwind-variants';

	type CardProps = { title: string; src: string; class: ClassValue };
</script>

{#snippet card({ title, src, class: className }: CardProps)}
	<div class={cn('row-start-3 flex flex-col gap-6 justify-between', className)}>
		<span class="font-ivy-headline-light text-[40px] uppercase text-trim-trim-both">
			{title}
		</span>
		<img {src} alt="" />
	</div>
{/snippet}

<WordDelimiter text="Ценность" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-15 mb-50">
	<span class="col-start-3 col-span-5 text-4xl uppercase text-trim-trim-start">
		Участники работают со светом и фотографией в затемнённой студии
	</span>
	<span class="row-start-2 col-start-5 col-span-4 text-2xl mt-3 mb-20">
		и проходят путь от наблюдения природных и научных явлений к созданию собственных художественных
		работ. Проект строится на соединении искусства, науки и технологий.
	</span>
	{@render card({
		title: 'Свет науки',
		src: Image1,
		class: 'col-span-2',
	})}

	{@render card({
		title: 'Свет недр',
		src: Image2,
		class: 'col-start-3 col-span-2',
	})}

	{@render card({
		title: 'Свет природы',
		src: Image3,
		class: 'col-start-5 col-span-2',
	})}

	{@render card({
		title: 'Свет будущего',
		src: Image4,
		class: 'col-start-7 col-span-2',
	})}
</div>
