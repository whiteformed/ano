<script lang="ts">
	import { STAGES } from './constants';
	import WordDelimiter from '$components/WordDelimiter/WordDelimiter.svelte';
	import Arrow from '$icons/Arrow.svelte';
	import { BlurFade } from '$lib/components/magic/blur-fade';
</script>

<WordDelimiter text="Как мы работаем" />
<div class="grid grid-cols-8 grid-flow-col gap-x-4 mt-15 mb-50">
	{#each STAGES as { className, title }, index (index)}
		<div
			class={[
				className,
				'col-span-2 w-full self-start z-1 select-none text-4xl text-center uppercase',
			]}
		>
			<BlurFade
				class="flex flex-col justify-center items-center [&>svg]:w-full"
				direction="up"
				delay={(index + 1) * 0.2}
			>
				<span class={['font-ivy-headline-light text-[50px] mt-3']}>{index + 1}</span>
				<div class="h-4 w-[1.5px] -mb-0.5 bg-primary"></div>
				<Arrow />
				<span class={['mt-2']}>{title}</span>
			</BlurFade>
		</div>
	{/each}
</div>
