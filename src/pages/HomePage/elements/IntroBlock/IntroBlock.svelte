<script lang="ts">
	import Image1 from './images/IntroImage1.webp';
	import Image2 from './images/IntroImage2.webp';
	import Image3 from './images/IntroImage3.webp';
	import { ContactButton } from '$components/composed/ContactButton';
	import { Image } from '$components/Image';
	import { BlurFade } from '$lib/components/magic/blur-fade';
	import { DiaTextReveal } from '$lib/components/magic/dia-text-reveal';
</script>

<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 gap-y-10 mt-21.5 mb-50">
	<div class="col-start-3 h-fit col-span-4 flex flex-col">
		<DiaTextReveal text="Светотворчество" class="font-ivy-headline-light text-[82px] uppercase" />
		<BlurFade containerClass="row-start-2 col-span-2" delay={0.6}>
			<span class="text-xl mt-1.5">
				Культурно-просветительская инициатива, исследующая свет как универсальный принцип культуры,
				знания и созидания
			</span>
		</BlurFade>
		<BlurFade containerClass="row-start-2 col-span-2" delay={1.5}>
			<ContactButton class="mt-8.5" />
		</BlurFade>
	</div>
	<BlurFade containerClass="row-start-2 col-span-2" delay={0.7}>
		<Image src={Image1} fetchpriority="high" />
	</BlurFade>
	<BlurFade containerClass="row-start-2 col-span-4" delay={0.7}>
		<Image src={Image2} fetchpriority="high" />
	</BlurFade>
	<BlurFade containerClass="row-start-2 col-span-2" delay={0.7}>
		<Image src={Image3} fetchpriority="high" />
	</BlurFade>
</div>
