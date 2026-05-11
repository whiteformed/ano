<script lang="ts">
	import Image1 from './images/ThemesImage1.webp';
	import Image2 from './images/ThemesImage2.webp';
	import Image3 from './images/ThemesImage3.webp';
	import Image4 from './images/ThemesImage4.webp';
	import { Image } from '$components/Image';
	import { WordDelimiter } from '$components/WordDelimiter';
	import { cn } from '$lib/utils/classes';
	import type { ClassValue } from 'tailwind-variants';

	type CardProps = { title: string; src: string; class: ClassValue };
</script>

{#snippet card({ title, src, class: className }: CardProps)}
	<div class={cn('row-start-3 flex flex-col gap-6 justify-between', className)}>
		<span class="font-ivy-headline-light text-[32px] uppercase text-trim-trim-both">
			{title}
		</span>
		<Image {src} />
	</div>
{/snippet}

<WordDelimiter text="Темы" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-15 mb-50">
	<span class="col-start-3 col-span-5 text-3xl uppercase text-trim-trim-start">
		Участники работают со светом и фотографией в затемнённой студии
	</span>
	<span class="row-start-2 col-start-5 col-span-4 text-xl mt-3 mb-20">
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
