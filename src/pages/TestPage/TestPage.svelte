<script>
	import { GlowingEffect } from '$components/GlowingEffect';
	import WordDelimiter from '$components/WordDelimiter/WordDelimiter.svelte';
	import Lotus from '$images/favicon.png';
	import { BlurFade } from '$lib/components/magic/blur-fade';
	import { DitherShader } from '$lib/components/magic/dither-shader';
	import { HyperText } from '$lib/components/magic/hyper-text';
	import { LightRays } from '$lib/components/magic/light-rays';

	// import { MorphingText } from '$lib/components/magic/morphing-text';
	// import { RotatingText } from '$lib/components/magic/rotating-text';
</script>

<div class="relative bg-background h-screen w-screen flex flex-col justify-center items-center">
	<LightRays class="bg-background" />
	<BlurFade
		delay={0.2}
		offset={40}
		duration={0.4}
		containerClass="w-full h-full flex flex-col justify-center items-center"
		class="h-full flex flex-col justify-center items-center"
	>
		<!-- СВЕТ<MorphingText words={['НАУКИ.', 'КУЛЬТУРЫ.', 'ИСКУССТВА.', 'ПОЗНАНИЯ.']} /> -->

		<!-- <span class="font-mono text-4xl md:text-6xl">СВЕТ</span>
		<RotatingText
			class="font-mono text-4xl md:text-6xl"
			words={['НАУКИ', 'КУЛЬТУРЫ', 'ИСКУССТВА', 'ПОЗНАНИЯ']}
			duration={1000}
		/> -->
		<div class="flex flex-col justify-center items-center flex-1">
			<HyperText text="СВЕТПОЗНАНИЯ." />

			<div class="relative rounded-xl">
				<GlowingEffect
					borderWidth={2}
					spread={40}
					glow={true}
					disabled={false}
					proximity={64}
					inactiveZone={0.01}
				/>

				<DitherShader src={Lotus} class="h-40 w-40 rounded-xl overflow-hidden" />
			</div>
		</div>
	</BlurFade>
	<WordDelimiter text="ПОНЯТИЕ" />
</div>
