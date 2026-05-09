<script lang="ts">
	import type { LayoutProps } from './$types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { Logo } from '$components/composed/Logo';
	import favicon from '$images/favicon.webp';
	import { Toaster } from '$lib/components/ui/sonner';
	import { CONTACTS_BLOCK_ID } from '$pages/HomePage/constants';
	import '$styles/index.css';
	import { onMount } from 'svelte';

	const { children }: LayoutProps = $props();

	function getTitleByPathName(path: typeof page.url.pathname) {
		switch (path) {
			case encodeURI('/проекты/свет_якутии/'):
				return 'Свет Якутии | светпознания.рф';
			default:
				return 'Главная | светпознания.рф';
		}
	}

	onMount(() => {
		const { hash } = document.location;
		const decodedHash = decodeURIComponent(hash);
		const scrollTo = hash && document.getElementById(decodedHash.slice(1));
		if (scrollTo) scrollTo.scrollIntoView({ behavior: 'smooth' });
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/png" />
	<title>{getTitleByPathName(page.url.pathname)}</title>
	<meta name="description" content="Свет науки, культуры и искусства" />

	<meta property="og:site_name" content="светпознания.рф" />
	<meta property="og:title" content="светпознания.рф" />
	<meta property="og:description" content="Свет науки, культуры и искусства" />
	<meta property="og:url" content="https://светпознания.рф/" />
	<meta property="og:image" content={favicon} />

	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="светпознания.рф" />
	<meta property="og:type" content="website" />

	<meta name="yandex-verification" content="108b5807338a9466" />
	<meta name="google-site-verification" content="UPG59Fh6at4hZm9pO0rVK2wpNF-znBv2wXi5miWy60A" />
</svelte:head>

<Toaster />

{#snippet header()}
	<nav class="w-full">
		<header class="flex justify-between items-center pt-8 px-10 pb-7">
			<a href={resolve('/проекты/свет_якутии/')} class="uppercase">Свет Якутии</a>
			<Logo />
			<a href={resolve(`${page.url.pathname as '/'}#${CONTACTS_BLOCK_ID}`)} class="uppercase">
				Контакты
			</a>
		</header>
	</nav>
{/snippet}

{#snippet footer()}
	<footer
		class="flex justify-between items-center pt-8 px-10 pb-7 text-[16px] border-t border-primary/30"
	>
		<Logo />
		<div class="w-6/10 flex justify-between items-center">
			<span>Политика конфиденциальности</span>
			<span>Согласие на обработку персональных данных</span>
			<span class="opacity-50">2026 Все права защищены</span>
		</div>
	</footer>
{/snippet}

{@render header()}
<div class="relative w-full px-10">
	<main>
		{@render children()}
	</main>
</div>
{@render footer()}
