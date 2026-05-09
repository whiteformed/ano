<script lang="ts">
	import Button from '$components/Button/Button.svelte';
	import ArrowRight from '$icons/ArrowRight.svelte';
	import { VERA_LINN_TELEGRAM } from '$lib/constants';
	import { cn } from '$lib/utils/classes';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface InteractiveHoverButtonProps extends HTMLAnchorAttributes {
		class?: string;
	}

	let { class: className }: InteractiveHoverButtonProps = $props();
</script>

<a href={VERA_LINN_TELEGRAM} rel="external" target="_blank">
	<Button class={cn('w-fit bg-action-primary hactive:bg-action-primary-hover', className)}>
		<span class="uppercase text-action-secondary flex items-center gap-2.5">
			обсудить сотрудничество
			<ArrowRight />
		</span>
	</Button>
</a>
