<script lang="ts">
	import { TEAM_MEMBERS_LIST } from './constants';
	import { Image } from '$components/Image';
	import { WordDelimiter } from '$components/WordDelimiter';
	import { cn } from '$lib/utils/classes';
</script>

<WordDelimiter text="Команда и наставники" />
<div class="grid grid-cols-8 grid-flow-col gap-x-4 gap-y-8 mt-15 mb-50">
	{#each TEAM_MEMBERS_LIST as { photo, name, description, tag, className } (name)}
		<div class={cn('col-start-1 col-span-2 flex flex-col bg-card-background', className)}>
			<Image src={photo} />
			<div class="h-full flex flex-col justify-between pt-7 pr-7 pb-5 pl-4">
				<div class="flex flex-col">
					<span class="w-fit font-ivy-headline-light text-3xl uppercase text-trim-trim-both mb-4">
						{name}
					</span>
					<span class="text-xl mb-6">
						{description}
					</span>
				</div>
				<div class="w-fit px-3 py-1.5 border rounded-4xl">
					<span class="text-s uppercase">{tag}</span>
				</div>
			</div>
		</div>
	{/each}
</div>
