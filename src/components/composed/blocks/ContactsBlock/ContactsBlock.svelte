<script lang="ts">
	import { CONTACTS_BLOCK_ID } from './constants';
	import { CONTACTS } from './constants';
	import Link from '$components/Link/Link.svelte';
	import { WordDelimiter } from '$components/WordDelimiter';
	import MIFILogo from '$icons/MIFILogo.svelte';
</script>

<WordDelimiter text="Контакты" />
<div class="grid grid-cols-8 grid-flow-col gap-x-4 mt-15 mb-30" id={CONTACTS_BLOCK_ID}>
	{#each CONTACTS as item, index (index)}
		<div
			class={[
				`row-start-1 col-start${4 * index} col-span-4`,
				'flex flex-col py-9.5 pr-12 pl-8 text-xl bg-card-background whitespace-pre-wrap',
			]}
		>
			<span class="font-ivy-headline-light text-[32px] uppercase mb-3">{item.title}</span>
			<span>{item.name}</span>
			<a href={`mailto:${item.email}`}>{item.email}</a>
			<a href={`tel:${item.phone}`}>{item.phone}</a>
			{#if item.website}
				<Link href={`https://${item.website}`} target="_blank">{item.website}</Link>
			{/if}
		</div>
	{/each}
	<div class="row-start-2 col-start-1 w-fit h-fit mt-20">
		<MIFILogo />
	</div>
</div>
