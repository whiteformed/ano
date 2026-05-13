<script lang="ts">
	import { CARDS, type Card } from './constants';
	import { WordDelimiter } from '$components/WordDelimiter';
	import SquareDot from '$icons/SquareDot.svelte';
</script>

{#snippet listSnippet(texts: string[])}
	<div class="flex flex-col gap-2">
		{#each texts as text (text)}
			<div class="flex items-center gap-1.5 flex-nowrap">
				<div class="w-fit h-fit px-1.5 py-2"><SquareDot /></div>
				<span class="text-xl whitespace-pre-wrap">{text}</span>
			</div>
		{/each}
	</div>
{/snippet}

{#snippet cardSnippet({ title, bullets, subtitle, subBullets }: Card)}
	<div class="flex flex-col gap-4">
		<span class="font-ivy-headline-light text-[32px] uppercase">{title}</span>

		{@render listSnippet(bullets)}
		{#if subtitle && subBullets}
			<div class="flex flex-col gap-1.5">
				<span class="uppercase">{subtitle}</span>
				{@render listSnippet(subBullets)}
			</div>
		{/if}
	</div>
{/snippet}

<WordDelimiter text="Формат реализации" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-15 mb-50">
	<span class="col-start-3 col-span-5 text-3xl uppercase text-trim-trim-start mb-10.5">
		Подходит для школ, музеев, культурных институций, фестивалей, образовательных и междисциплинарных программ
	</span>
	{#each CARDS as block, index (index)}
		<div
			class={[
				`col-span-2 row-start-2`,
				'pt-8 px-8 pb-10 text-xl bg-card-background whitespace-pre-wrap',
			]}
		>
			{#if Array.isArray(block)}
				<div class="flex flex-col gap-6">
					{#each block as card, index (index)}
						{@render cardSnippet(card)}
					{/each}
				</div>
			{:else}
				{@render cardSnippet(block)}
			{/if}
		</div>
	{/each}
</div>
