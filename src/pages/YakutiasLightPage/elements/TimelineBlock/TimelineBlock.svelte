<script lang="ts">
	import { STAGES } from './constants';
	import WordDelimiter from '$components/WordDelimiter/WordDelimiter.svelte';
	import Arrow from '$icons/Arrow.svelte';
	import { BlurFade } from '$lib/components/magic/blur-fade';
</script>

<WordDelimiter text="Таймлайн" />
<div class="grid grid-cols-8 grid-flow-col gap-x-4 mt-15 mb-50">
	{#each STAGES as { title, description, className }, index (index)}
		<div class={[className, 'col-span-2 w-full self-start z-1 select-none text-3xl text-center']}>
			<BlurFade
				class="flex flex-col justify-center items-center [&>svg]:w-full"
				direction="up"
				delay={(index + 1) * 0.2}
			>
				<span class={['text-3xl mt-3 uppercase']}>{title}</span>
				<div class="h-4 w-[1.5px] -mb-0.5 bg-primary"></div>
				<Arrow />
				<span class={['mt-2 text-xl']}>{description}</span>
			</BlurFade>
		</div>
	{/each}
</div>
