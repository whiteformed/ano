<script lang="ts">
	import { CARDS } from './constants';
	import WordDelimiter from '$components/WordDelimiter/WordDelimiter.svelte';
</script>

<WordDelimiter text="Формат реализации" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-15 mb-50">
	<span class="col-start-3 col-span-5 text-4xl uppercase text-trim-trim-start mb-10.5">
		Подходит для школ, музеев, культурных институций, фестивалей, образовательных и
		междисциплинарных программ
	</span>
	{#each CARDS as item, index (index)}
		<div
			class={[
				`col-start${4 / (index + 1)} col-span-2 row-start-2`,
				'flex flex-col gap-4 py-9.5 pr-12 pl-8 text-2xl bg-card-background whitespace-pre-wrap',
			]}
		>
			<span class="font-ivy-headline-light text-[40px] uppercase">{item.title}</span>
			<ul class="list-[square] list-outside pl-8">
				{#each item.bullets as bullet (bullet)}
					<li class="text-2xl whitespace-pre-wrap marker:text-m">{bullet}</li>
				{/each}
			</ul>
			<span>{item.subtitle}</span>
		</div>
	{/each}
</div>
