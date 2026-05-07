<script lang="ts">
	import { LIST_ITEMS } from './constants';
	import Image1 from './images/PartnersImage1.png';
	import { ContactButton } from '$components/composed/ContactButton';
	import WordDelimiter from '$components/WordDelimiter/WordDelimiter.svelte';
</script>

<WordDelimiter text="Для партнеров" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-15 mb-50">
	<div class="col-start-1 col-span-4">
		<img src={Image1} alt="" />
	</div>
	<div class="col-start-5 col-span-4 bg-card-background pl-8 pt-8 pr-12">
		<ul class="mb-4">
			{#each LIST_ITEMS as item, index (index)}
				<li class="text-4xl whitespace-pre-wrap uppercase mb-6">{item}</li>
			{/each}
		</ul>
		<ContactButton class="ml-6 my-8" />
	</div>
</div>

<style>
	ul {
		padding-left: 1.5em;

		li {
			position: relative;

			&::before {
				content: '▪';
				position: absolute;
				font-size: 0.6em;
				transform: translate(-1.5em, 0.4em);
				display: inline-block;
			}
		}
	}
</style>
