<script lang="ts">
	import { RESULTS } from './constants';
	import { Image } from '$components/Image';
	import { WordDelimiter } from '$components/WordDelimiter';
</script>

<WordDelimiter text="Результат" />
<div class="grid grid-cols-8 auto-rows-[minmax(0,264px)] grid-flow-col gap-x-4 mt-15 mb-50">
	{#each RESULTS as { title, src }, index (title)}
		<div
			class={`row-start-${index + 1} col-start-3 col-span-6 flex items-center gap-10 w-full not-first:pt-1.5 not-last:pb-1.5 not-last:border-b`}
		>
			<Image {src} class="max-h-63" />
			<span class="font-ivy-headline-light text-[32px] uppercase text-trim-trim-both">{title}</span>
		</div>
	{/each}
</div>
