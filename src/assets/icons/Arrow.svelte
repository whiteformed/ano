<script lang="ts">
	import { cn } from '$lib/utils/classes';

	type Props = {
		class?: string;
	};

	let { class: className }: Props = $props();
</script>

<svg width="438" height="9" viewBox="0 0 438 9" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		d="M438 4.33008L430.5 -4.91142e-05V8.66021L438 4.33008ZM0 4.33008V5.08008H431.25V4.33008V3.58008H0V4.33008Z"
		class={cn('fill-primary', className)}
	/>
</svg>
