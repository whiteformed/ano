<script lang="ts">
	import { cn } from '$lib/utils/classes';

	type Props = {
		class?: string;
	};

	let { class: className }: Props = $props();
</script>

<svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
	<rect width="4" height="4" class={cn('fill-primary', className)} />
</svg>
