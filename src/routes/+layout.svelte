<script lang="ts">
	import type { LayoutProps } from './$types';
	import { page } from '$app/state';
	import favicon from '$images/favicon.png';
	import { Toaster } from '$lib/components/ui/sonner';
	import '$styles/index.css';

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

	<link
		rel="preload"
		as="font"
		fetchpriority="high"
		href="/fonts/ivy-presto/ivy-presto-headline-light.otf"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		fetchpriority="high"
		href="/fonts/neoris/TT Neoris Trial Light.ttf"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		fetchpriority="high"
		href="/fonts/neoris/TT Neoris Trial Variable.ttf"
		crossorigin="anonymous"
	/>
</svelte:head>

<Toaster />

{@render children()}
