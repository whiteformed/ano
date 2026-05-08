<script lang="ts">
	import Image1 from './images/MethodImage1.webp';
	import Image2 from './images/MethodImage2.webp';
	import Image3 from './images/MethodImage3.webp';
	import WordDelimiter from '$components/WordDelimiter/WordDelimiter.svelte';
	import { cn } from '$lib/utils/classes';
	import type { ClassValue } from 'clsx';

	type CardProps = { title: string; subtitle: string; src: string; class: ClassValue };
</script>

{#snippet card({ title, subtitle, src, class: className }: CardProps)}
	<div class={cn('flex flex-col gap-9 justify-between bg-card-background', className)}>
		<div class="flex flex-col gap-2 pt-8 pr-12 pl-8">
			<span class="font-ivy-headline-light text-[32px] uppercase text-trim-trim-both">
				{title}
			</span>
			<span class="text-xl whitespace-pre-wrap">{subtitle}</span>
		</div>
		<img {src} alt="" />
	</div>
{/snippet}

<WordDelimiter text="Метод" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-15 mb-50">
	{@render card({
		title: 'Наблюдать',
		subtitle: 'Природные и научные явления света',
		src: Image1,
		class: 'col-span-2',
	})}

	{@render card({
		title: 'Исследовать',
		subtitle: 'Свет как материал, образ и язык',
		src: Image2,
		class: 'col-span-2 col-start-3',
	})}

	{@render card({
		title: 'Создавать и показывать',
		subtitle: 'Индивидуальные и коллективные художественные работы',
		src: Image3,
		class: 'col-span-3 col-start-6',
	})}
</div>
