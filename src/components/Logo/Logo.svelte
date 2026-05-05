<script lang="ts">
	import { resolve } from '$app/paths';
	import Logo from '$icons/Logo.svg';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface InteractiveHoverButtonProps extends HTMLAnchorAttributes {
		class?: string;
	}

	let { class: className }: InteractiveHoverButtonProps = $props();
</script>

<a href={resolve('/')} class={className}>
	<img src={Logo} alt="logo" width="87px" height="27px" />
</a>
