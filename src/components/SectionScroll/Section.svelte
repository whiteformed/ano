<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<section>
	<div class="outer">
		<div class="inner">
			{@render children()}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		user-select: none;
		height: 100%;
		width: 100%;
		top: 0;
		position: fixed;
		visibility: hidden;

		.outer,
		.inner {
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
	}
</style>
