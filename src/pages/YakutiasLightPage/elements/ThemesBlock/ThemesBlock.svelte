<script lang="ts">
	import { CARDS, type Card } from './constants';
	import { Image } from '$components/Image';
	import { WordDelimiter } from '$components/WordDelimiter';
	import { cn } from '$lib/utils/classes';
</script>

{#snippet card({ title, subtitle, tags, src, class: className }: Card)}
	<div class={cn('flex gap-4', className)}>
		<Image {src} />
		<div class="flex flex-col justify-between">
			<div class="flex flex-col gap-2">
				<span class="font-ivy-headline-light text-[32px] uppercase text-trim-trim-both">
					{title}
				</span>
				<span class="text-2xl">{subtitle}</span>
			</div>

			<div class="flex gap-3">
				{#each tags as tag, index (index)}
					<div class="w-fit px-3 py-1.5 border rounded-4xl">
						<span class="text-m uppercase">{tag}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/snippet}

<WordDelimiter text="Темы" />
<div class="grid grid-cols-8 grid-flow-col gap-x-4 gap-y-20 mt-15 mb-50">
	{#each CARDS as cardProps (cardProps.title)}
		{@render card(cardProps)}
	{/each}
</div>
