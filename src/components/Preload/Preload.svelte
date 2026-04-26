<script lang="ts">
	type Resource = { href: string };
	type Props = {
		images: Resource[];
	};

	const { images }: Props = $props();
</script>

<svelte:head>
	{#each images as image, index (index)}
		<link rel="preload" as="image" {...image} />
	{/each}
</svelte:head>
