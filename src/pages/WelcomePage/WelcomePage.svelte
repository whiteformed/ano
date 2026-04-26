<script>
	import Lotus from '$images/favicon.png';
	import { BlurFade } from '$lib/components/magic/blur-fade';
	import { DitherShader } from '$lib/components/magic/dither-shader';
	import { HyperText } from '$lib/components/magic/hyper-text';
</script>

<div class="bg-background h-screen w-screen flex justify-center items-center">
	<BlurFade delay={0.2} offset={40} duration={0.4} class="h-fit w-fit flex flex-col items-center">
		<HyperText text="СВЕТПОЗНАНИЯ." class="w-fit text-4xl md:text-6xl" />

		<!-- <span class="font-mono text-6xl self-start">
			СВЕТ<MorphingText texts={['ПОЗНАНИЯ.', 'НАУКИ.', 'КУЛЬТУРЫ.', 'ИСКУССТВА.']} />
            </span> -->
		<!-- <span class="font-mono text-6xl self-start">
			СВЕТ<RotatingText words={['ПОЗНАНИЯ', 'НАУКИ', 'КУЛЬТУРЫ', 'ИСКУССТВА']} />
		</span> -->

		<DitherShader src={Lotus} class="h-40 w-40" />
	</BlurFade>
</div>
