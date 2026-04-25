<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	type Props = {
		visible: boolean;
		ref?: HTMLElement;
		children: Snippet;
	};
	let { visible = $bindable(), ref = $bindable(), children }: Props = $props();

	function handleClose() {
		visible = false;
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			handleClose();
		}
	}

	function portal(node: HTMLElement) {
		const body = document.body;
		body.appendChild(node);
		body.style.overflow = 'hidden';

		node.focus();

		return () => {
			if (body.contains(node)) {
				body.removeChild(node);
			}
			body.style.overflow = 'initial';
		};
	}
</script>

{#if visible}
	<div
		bind:this={ref}
		{@attach portal}
		class="backdrop-blur z-10 fixed top-0 left-0 right-0 bottom-0 w-full flex items-center justify-center focus:outline-none"
		role="dialog"
		onclick={handleClose}
		onkeydown={handleKeyDown}
		tabindex="-1"
	>
		<div class="flex justify-center items-center w-full h-full" in:fly={{ y: 300, duration: 300 }}>
			{@render children()}
		</div>
	</div>
{/if}
