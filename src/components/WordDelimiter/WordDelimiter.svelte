<script lang="ts">
	type Props = {
		text: string;
	};

	const TOTAL = 21;
	const CENTRAL_POSITION = Math.floor(TOTAL / 2);
	const { text }: Props = $props();
</script>

<div class="w-full flex flex-col justify-center items-center z-1 select-none">
	<div class="w-full flex gap-5 justify-center items-center overflow-hidden">
		{#each { length: TOTAL }, index}
			<span class={['font-neoris-light text-xl whitespace-pre', index !== CENTRAL_POSITION && 'opacity-50']}>{text}</span>
		{/each}
	</div>
	<div class="mt-1 h-5 w-px bg-gray-500 top-0 bottom-0"></div>
	<div class="w-full h-px bg-gray-500"></div>
</div>
