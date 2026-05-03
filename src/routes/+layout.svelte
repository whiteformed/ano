<script lang="ts">
	import type { LayoutProps } from './$types';
	import { page } from '$app/state';
	import Logo from '$icons/Logo.svg';
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

<div class="relative w-full px-15 pt-14 pb-12.5">
	<nav class="w-full">
		<header class="grid grid-cols-8 gap-4 text-base font-normal uppercase">
			<img src={Logo} alt="logo" width="87px" height="27px" class="col-span-2" />

			<div class="col-span-2 flex justify-start items-center">
				<span>Свет Якутии</span>
			</div>
			<div class="col-span-2 text-right flex justify-end items-center">
				<span>Контакты</span>
			</div>

			<div class="col-span-2 text-right flex justify-end items-center">
				<span>2026</span>
			</div>
		</header>
	</nav>

	<main>
		{@render children()}
	</main>

	<footer class="flex justify-between">
		<div class="col-span-2 flex flex-col items-start">
			<img src={Logo} alt="logo" width="87px" height="27px" class="col-span-2" />
			<span>2026 Все права защищены</span>
		</div>
		<div class="col-start-6 col-span-2 flex flex-col gap-1 items-end">
			<span>Политика конфиденциальности</span>
			<span>Согласие на обработку персональных данных</span>
		</div>
	</footer>
</div>
