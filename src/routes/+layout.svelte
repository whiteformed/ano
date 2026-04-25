<script lang="ts">
	import type { LayoutProps } from './$types';
	import './layout.css';
	import { page } from '$app/state';
	import favicon from '$images/favicon.png';

	const { children }: LayoutProps = $props();

	function getTitleByPathName(path: typeof page.url.pathname) {
		switch (path) {
			default:
				return 'СВЕТПОЗНАНИЯ.';
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/png" />
	<title>{getTitleByPathName(page.url.pathname)}</title>
	<meta name="description" content="Свет науки, культуры и искусства" />

	<meta property="og:site_name" content="СВЕТПОЗНАНИЯ." />
	<meta property="og:title" content="СВЕТПОЗНАНИЯ." />
	<meta property="og:description" content="Свет науки, культуры и искусства" />
	<meta property="og:url" content="https://светпознания.рф/" />
	<meta property="og:image" content={favicon} />

	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="светпознания.рф" />
	<meta property="og:type" content="website" />
</svelte:head>

<main>
	{@render children()}
</main>
