<script lang="ts">
	import Image1 from './images/ValueImage1.webp';
	import Image2 from './images/ValueImage2.webp';
	import Image3 from './images/ValueImage3.webp';
	import Image4 from './images/ValueImage4.webp';
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

<WordDelimiter text="Ценность" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-15 mb-50">
	{@render card({
		title: 'Новый образ региона',
		src: Image1,
		class: 'col-span-2',
	})}

	{@render card({
		title: 'Вовлечение детей и молодежи',
		src: Image2,
		class: 'col-start-3 col-span-2',
	})}

	{@render card({
		title: 'Связь науки, культуры и территории',
		src: Image3,
		class: 'col-start-5 col-span-2',
	})}

	{@render card({
		title: 'Современный формат просвещения',
		src: Image4,
		class: 'col-start-7 col-span-2',
	})}
</div>
