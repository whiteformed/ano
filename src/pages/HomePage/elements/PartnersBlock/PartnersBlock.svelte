<script lang="ts">
	import { LIST_ITEMS } from './constants';
	import Image1 from './images/PartnersImage1.webp';
	import { ContactButton } from '$components/composed/ContactButton';
	import WordDelimiter from '$components/WordDelimiter/WordDelimiter.svelte';
	import SquareDot from '$icons/SquareDot.svelte';
</script>

<WordDelimiter text="Для партнеров" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-15 mb-50">
	<div class="col-start-1 col-span-4">
		<img src={Image1} alt="" />
	</div>
	<div class="col-start-5 col-span-4 h-fit bg-card-background pt-8 pr-12 pb-10 pl-8">
		<ul class="mb-4">
			{#each LIST_ITEMS as item, index (index)}
				<div class="flex items-center gap-1.5 flex-nowrap not-last:mb-6">
					<div class="w-fit h-fit px-1.5 py-2"><SquareDot /></div>
					<li class="text-3xl whitespace-pre-wrap uppercase">{item}</li>
				</div>
			{/each}
		</ul>
		<ContactButton class="mt-8" />
	</div>
</div>
