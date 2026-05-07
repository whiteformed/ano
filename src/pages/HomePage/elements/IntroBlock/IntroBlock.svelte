<script lang="ts">
	import Image1 from './images/IntroImage1.png';
	import Image2 from './images/IntroImage2.png';
	import Image3 from './images/IntroImage3.png';
	import { ContactButton } from '$components/composed/ContactButton';
	import { BlurFade } from '$lib/components/magic/blur-fade';
	import { DiaTextReveal } from '$lib/components/magic/dia-text-reveal';
</script>

<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 gap-y-10 mt-22 mb-30">
	<div class="col-start-3 h-fit col-span-4 flex flex-col">
		<DiaTextReveal text="Светотворчество" class="font-ivy-headline-light text-[90px] uppercase" />
		<BlurFade containerClass="row-start-2 col-span-2" delay={0.6}>
			<span class="text-2xl mt-1.25">
				Культурно-просветительская инициатива, исследующая свет как универсальный принцип культуры,
				знания и созидания
			</span>
		</BlurFade>
		<BlurFade containerClass="row-start-2 col-span-2" delay={1.5}>
			<ContactButton class="mt-8" />
		</BlurFade>
	</div>
	<BlurFade containerClass="row-start-2 col-span-2" delay={0.7}>
		<img src={Image1} alt="" />
	</BlurFade>
	<BlurFade containerClass="row-start-2 col-span-4" delay={0.7}>
		<img src={Image2} alt="" />
	</BlurFade>
	<BlurFade containerClass="row-start-2 col-span-2" delay={0.7}>
		<img src={Image3} alt="" />
	</BlurFade>
</div>
