<script lang="ts">
	import { resolve } from '$app/paths';
	import Logo from '$icons/Logo.svelte';
	import { cn } from '$lib/utils/classes';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface InteractiveHoverButtonProps extends HTMLAnchorAttributes {
		class?: string;
	}

	let { class: className }: InteractiveHoverButtonProps = $props();
</script>

<a href={resolve('/')} class={cn('w-fit dark:[&>svg>path]:fill-primary', className)}>
	<Logo />
</a>
