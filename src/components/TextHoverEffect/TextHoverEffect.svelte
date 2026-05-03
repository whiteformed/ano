<script lang="ts">
	import { Accordion } from 'bits-ui';
	import { slide } from 'svelte/transition';

	let value = $state<string>('');

	type Props = {
		texts: { title: string; description: string }[];
	};
	let { texts = [] }: Props = $props();

	let activeId = $state<number | null>(null);
	let timeoutId = $state<NodeJS.Timeout>();
	let animationFrameId = $state<number>();
	let isAnimating = $state(false);

	// svelte-ignore state_referenced_locally
	let elements = $state<HTMLElement[]>(Array(texts.length).fill(null));
	let highlightStyle = $state<string>('');

	// Handle scramble animation
	$effect(() => {
		if (activeId === null || !isAnimating) return;

		const animate = () => {
			if (activeId === null || !(() => isAnimating)()) return;

			const card = elements[activeId];
			const containerRect = card.parentElement?.getBoundingClientRect();

			if (!containerRect) return;

			const cardRect = card.getBoundingClientRect();
			highlightStyle = `
                top: ${cardRect.top - containerRect.top}px;
                height: ${cardRect.height}px;
            `;

			requestAnimationFrame(animate);
		};

		animationFrameId = requestAnimationFrame(animate);

		return () => {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	});
</script>

<div class="relative">
	<!-- Animated horizontal line -->
	<div class="absolute inset-0 -inset-x-20">
		<div
			class="absolute top-0 w-full h-0 bg-action-primary transition-all duration-300"
			style={highlightStyle}
		></div>
	</div>
	<Accordion.Root bind:value type="single" class="relative w-full flex flex-col">
		{#each texts as item, index (item.title)}
			{@const visible = value === item.title}
			<Accordion.Item
				bind:ref={elements[index]}
				value={item.title}
				onmouseenter={() => {
					activeId = index;
					clearTimeout(timeoutId);
					isAnimating = true;

					timeoutId = setTimeout(() => {
						value = item.title;
					}, 0);
				}}
				onmouseleave={() => {
					clearTimeout(timeoutId);
					activeId = null;
					value = '';
					highlightStyle = '';
				}}
				class={['relative py-5 text-black', visible && 'text-secondary']}
			>
				<Accordion.Header>
					<Accordion.Trigger
						class="flex w-full justify-center select-none items-center transition-all cursor-pointer"
					>
						<span class="font-ivy-headline-light text-[50px] uppercase text-trim-trim-both">
							{item.title}
						</span>
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content
					forceMount
					class="flex justify-center data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
				>
					{#snippet child({ props, open })}
						{#if open}
							<div
								{...props}
								in:slide={{ duration: 100 }}
								ontransitionend={() => {
									if (animationFrameId) {
										cancelAnimationFrame(animationFrameId);
									}
								}}
							>
								<span
									class={[
										'subtitle text-2xl opacity-0 transition-opacity grid grid-rows-[0]',
										visible && 'opacity-100 grid-rows-[1fr]',
										item.description && 'pt-6',
									]}
								>
									{item.description}
								</span>
							</div>
						{/if}
					{/snippet}
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</div>
