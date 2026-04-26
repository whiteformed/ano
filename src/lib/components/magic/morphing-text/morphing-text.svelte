<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount, onDestroy } from 'svelte';

	interface MorphingTextProps {
		texts: string[];
		autoplay?: boolean;
		class?: string;
	}

	let { texts, autoplay = false, class: className }: MorphingTextProps = $props();

	const morphTime = 1.5;
	const cooldownTime = 0.5;

	let textIndex = $state(0);
	let morph = $state(0);
	let cooldown = $state(0);
	let time = $state(new Date());

	let currentTextRef: HTMLSpanElement | null = $state(null);
	let text1Ref: HTMLSpanElement | null = $state(null);
	let text2Ref: HTMLSpanElement | null = $state(null);

	let text1Content = $state('');
	let text2Content = $state('');

	let animationFrameId: number | null = null;

	const setStyles = (fraction: number) => {
		if (!autoplay && animationFrameId && textIndex + 1 > texts.length) {
			cancelAnimationFrame(animationFrameId);
			return;
		}

		if (!text1Ref || !text2Ref) return;
		if (!currentTextRef || !text1Ref || !text2Ref) return;
		const currentWidth = text1Ref.getBoundingClientRect().width;
		const tartgetWidth = text2Ref.getBoundingClientRect().width;
		const widthDiff = tartgetWidth - currentWidth;
		currentTextRef.style.width = `${Math.max(currentWidth + widthDiff * fraction)}px`;

		text2Ref.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
		text2Ref.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

		const invertedFraction = 1 - fraction;
		text1Ref.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
		text1Ref.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

		text1Content = texts[textIndex % texts.length];
		text2Content = texts[(textIndex + 1) % texts.length];
	};

	const doMorph = () => {
		morph -= cooldown;
		cooldown = 0;

		let fraction = morph / morphTime;

		if (fraction > 1) {
			cooldown = cooldownTime;
			fraction = 1;
		}

		setStyles(fraction);

		if (fraction === 1) {
			textIndex++;
		}
	};

	const doCooldown = () => {
		morph = 0;
		if (text1Ref && text2Ref) {
			text2Ref.style.filter = 'none';
			text2Ref.style.opacity = '100%';
			text1Ref.style.filter = 'none';
			text1Ref.style.opacity = '0%';
		}
	};

	const animate = () => {
		animationFrameId = requestAnimationFrame(animate);

		const newTime = new Date();
		const dt = (newTime.getTime() - time.getTime()) / 1000;
		time = newTime;

		cooldown -= dt;

		if (cooldown <= 0) {
			doMorph();
		} else {
			doCooldown();
		}
	};

	onMount(() => {
		animate();
	});

	onDestroy(() => {
		if (animationFrameId !== null) {
			cancelAnimationFrame(animationFrameId);
		}
	});
</script>

<span
	class={cn(
		'relative inline-flex align-baseline w-fit text-center leading-none filter-[url(#threshold)]',
		className,
	)}
>
	<span bind:this={currentTextRef} class="invisible">{text2Content}</span>
	<span bind:this={text1Ref} class="absolute inset-x-0 top-0 inline-block w-fit">
		{text1Content}
	</span>
	<span bind:this={text2Ref} class="absolute inset-x-0 top-0 inline-block w-fit">
		{text2Content}
	</span>

	<svg id="filters" class="fixed h-0 w-0" preserveAspectRatio="xMidYMid slice">
		<defs>
			<filter id="threshold">
				<feColorMatrix
					in="SourceGraphic"
					type="matrix"
					values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
				/>
			</filter>
		</defs>
	</svg>
</span>
