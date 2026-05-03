<script lang="ts">
	type Item = {
		title: string;
		subtitle: string;
	};

	const items: Item[] = [
		{
			title: 'Развитие метанавыков',
			subtitle: 'Навыки мышления, наблюдения, коммуникации и самостоятельной работы.',
		},
		{
			title: 'Погружение в Art&Science',
			subtitle: 'Знакомство с практиками на стыке искусства, технологий и науки.',
		},
		{
			title: 'Опыт проектной деятельности',
			subtitle:
				'Путь от идеи и эксперимента до собственной работы, её оформления и публичного показа.',
		},
		{
			title: 'Формирование авторской позиции',
			subtitle: 'Поиск собственного взгляда, темы и способа художественного высказывания.',
		},
		{
			title: 'Включение в контекст современного искусства',
			subtitle: 'Знакомство с актуальными художниками, выставками, институциями и практиками.',
		},
		{
			title: 'Дальнейшее развитие',
			subtitle: 'Понимание следующих шагов для самостоятельного роста и продолжения практики.',
		},
	];

	let activeIndex = $state<number | null>(null);

	function toggleItem(index: number) {
		activeIndex = activeIndex === index ? null : index;
	}
</script>

<section class="program-list" aria-label="Направления программы">
	{#each items as item, index (index)}
		<button
			class="program-item"
			class:active={activeIndex === index}
			onmouseenter={() => (activeIndex = index)}
			onfocus={() => (activeIndex = index)}
			onclick={() => toggleItem(index)}
			type="button"
		>
			<span class="program-title">{item.title}</span>
			<span class="program-subtitle">{item.subtitle}</span>
		</button>
	{/each}
</section>

<style>
	.program-list {
		width: 100%;
		padding: 48px 0;
	}

	.program-item {
		width: 100%;
		border: 0;
		background: transparent;
		color: #111;
		text-align: center;
		cursor: pointer;

		padding: 22px 24px;

		display: flex;
		flex-direction: column;
		align-items: center;

		transition:
			background-color 500ms ease,
			color 500ms ease,
			padding 500ms ease;
	}

	.program-title {
		font-family: 'Times New Roman', serif;
		font-size: clamp(28px, 3vw, 44px);
		line-height: 1.15;
		text-transform: uppercase;
	}

	.program-subtitle {
		max-height: 0;
		opacity: 0;
		overflow: hidden;

		margin-top: 0;

		font-family: Arial, sans-serif;
		font-size: 16px;
		line-height: 1.4;

		transition:
			max-height 350ms ease,
			opacity 270ms ease,
			transform 350ms ease,
			margin-top 300ms ease;
	}

	.program-item:hover,
	.program-item:focus-visible,
	.program-item.active {
		background-color: #061e9f;
		color: #fff;
		padding: 26px 24px 28px;
	}

	.program-item:hover .program-subtitle,
	.program-item:focus-visible .program-subtitle,
	.program-item.active .program-subtitle {
		max-height: 64px;
		opacity: 1;
		transform: translateY(0);
		margin-top: 12px;
	}

	.program-item:focus-visible {
		outline: 2px solid #061e9f;
		outline-offset: 4px;
	}

	@media (hover: hover) {
		.program-item {
			cursor: default;
		}
	}

	@media (max-width: 768px) {
		.program-list {
			padding: 32px 0;
		}

		.program-item {
			padding: 18px 16px;
		}

		.program-title {
			font-size: 28px;
		}

		.program-subtitle {
			font-size: 14px;
			max-width: 320px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.program-item,
		.program-subtitle {
			transition: none;
		}
	}
</style>
