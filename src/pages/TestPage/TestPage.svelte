<script lang="ts">
	import * as SectionScroll from '$components/SectionScroll';
	import Lotus from '$images/favicon.png';
	import { BlurFade } from '$lib/components/magic/blur-fade';
	import { DitherShader } from '$lib/components/magic/dither-shader';
	import { HyperText } from '$lib/components/magic/hyper-text';

	let sections = [
		{
			title: 'Section 0',
			color: '#ff6b6b',
			content: 'Welcome to smooth scrolling!',
			colorMode: 'original',
		},
		{
			title: 'Section 1',
			color: '#4ecdc4',
			content: 'Smooth transitions between sections',
			colorMode: 'grayscale',
		},
		{
			title: 'Section 2',
			color: '#45b7d1',
			content: 'Powered by GSAP and Svelte 5',
			colorMode: 'duotone',
		},
		{
			title: 'Section 3',
			color: '#96ceb4',
			content: 'Enjoy the smooth experience!',
			invert: true,
		},
	];
</script>

<SectionScroll.Root>
	{#each sections as section, index (index)}
		<SectionScroll.Item>
			<div class="h-full">
				<div
					class="h-screen w-screen flex justify-center items-center"
					style="background-color: {section.color}"
				>
					<BlurFade
						delay={0.1}
						offset={40}
						duration={0.4}
						class="h-fit w-fit flex flex-col items-center"
					>
						<HyperText text={section.title} class="w-fit text-4xl md:text-6xl" />
						<DitherShader
							src={Lotus}
							class="h-40 w-40"
							colorMode={section.colorMode as 'custom'}
							invert={section.invert}
						/>
						{section.content}
					</BlurFade>
				</div>
			</div>
		</SectionScroll.Item>
	{/each}
</SectionScroll.Root>
