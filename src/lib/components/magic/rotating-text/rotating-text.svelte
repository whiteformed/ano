<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	interface Props {
		words?: string[];
		duration?: number;
		class?: string;
	}

	let { words = [], duration = 2500, class: className = '' }: Props = $props();

	let index = $state(0);
	let chnageIndex = () => {
		index = (index + 1) % words.length;
	};
	onMount(() => {
		let interval = setInterval(chnageIndex, duration);
		return () => clearInterval(interval);
	});
</script>

<div class="relative inline-flex align-baseline overflow-hidden">
	{#key index}
		<div
			in:fly={{ y: -50, delay: 200 }}
			out:fly={{ y: 40, duration: 200 }}
			class={cn(className, 'absolute inset-0 text-center')}
		>
			{words[index]}
		</div>
	{/key}

	<span class="invisible">
		{words[index]}
	</span>
</div>
