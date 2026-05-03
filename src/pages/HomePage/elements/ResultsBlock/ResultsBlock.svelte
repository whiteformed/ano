<script lang="ts">
	import { RESULTS_TEXTS } from './constants';
	import WordDelimiter from '$components/WordDelimiter/WordDelimiter.svelte';
	import Plus from '$icons/Plus.svelte';
	import { Accordion } from 'bits-ui';

	let value = $state<string>();
</script>

<WordDelimiter text="Результат занятий" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-8.5 mb-50">
	<div class="col-start-3 col-span-6">
		<Accordion.Root bind:value class="w-full" type="single">
			{#each RESULTS_TEXTS as item (item.title)}
				{@const isOpen = value === item.title}
				<Accordion.Item value={item.title} class="border-primary border-b last:border-none">
					<Accordion.Header>
						<Accordion.Trigger
							class={[
								'flex w-full select-none hover:text-action-primary items-center justify-between cursor-pointer',
								'hover:[&>span>svg>path]:stroke-action-primary',
							]}
						>
							<span
								class="w-fit font-ivy-headline-light text-left text-[50px] uppercase text-trim-trim-both mt-10 mb-10"
							>
								{item.title}
							</span>
							<span
								class={[
									'size-8 items-center justify-center transition-all duration-200',
									isOpen && 'rotate-45',
								]}
							>
								<Plus />
							</span>
						</Accordion.Trigger>
					</Accordion.Header>
					<Accordion.Content
						hiddenUntilFound
						class={[
							'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden whitespace-pre-wrap',
							isOpen && 'mb-10',
						]}
					>
						<span class={['text-2xl transition-opacity']}>
							{item.description}
						</span>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
</div>
