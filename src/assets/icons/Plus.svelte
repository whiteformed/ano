<script lang="ts">
	import { cn } from '$lib/utils/classes';

	type Props = {
		class?: string;
	};

	let { class: className }: Props = $props();
</script>

<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		d="M15.9937 0V32M32 15.994L0 15.994"
		class={cn('stroke-primary', className)}
		stroke-width="1.5"
	/>
</svg>
