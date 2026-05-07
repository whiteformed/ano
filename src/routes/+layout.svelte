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
</svelte:head>

<Toaster />

{#snippet header()}
	<nav class="w-full">
		<header class="grid grid-cols-8 gap-4 text-base font-normal uppercase">
			<Logo class="col-span-2" />
			<div class="col-span-2 flex justify-start items-center">
				<a href={resolve('/проекты/свет_якутии/')}>Свет Якутии</a>
			</div>
			<div class="col-span-2 text-right flex justify-end items-center">
				<a href={resolve(`${page.url.pathname as '/'}#${CONTACTS_BLOCK_ID}`)}>Контакты</a>
			</div>

			<div class="col-span-2 text-right flex justify-end items-center">
				<span>2026</span>
			</div>
		</header>
	</nav>
{/snippet}

<div class="relative w-full px-15 pt-14 pb-12.5">
	{@render header()}

	<main>
		{@render children()}
	</main>

	<footer class="flex justify-between">
		<div class="col-span-2 flex flex-col items-start">
			<Logo class="col-span-2" />
			<span>2026 Все права защищены</span>
		</div>
		<div class="col-start-6 col-span-2 flex flex-col items-end">
			<span>Политика конфиденциальности</span>
			<span>Согласие на обработку персональных данных</span>
		</div>
	</footer>
</div>
