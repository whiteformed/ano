<script lang="ts">
	import Image1 from './images/IntroImage1.png';
	import Image2 from './images/IntroImage2.png';
	import Image3 from './images/IntroImage3.png';
	import { Button } from '$components/Button';
	import ArrowRight from '$icons/ArrowRight.svg';
</script>

<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 gap-y-10 mt-22 mb-29.5">
	<div class="col-start-3 h-fit col-span-4 flex flex-col">
		<span class="font-ivy-headline-light text-[90px] uppercase">Светотворчество</span>
		<span class="text-2xl mt-1.25 whitespace-pre-line leading-7.25">
			{`Культурно-просветительская инициатива, исследующая свет
            как универсальный принцип культуры, знания и созидания`}
		</span>
		<Button class="w-fit mt-8 bg-action-primary hover:opacity-90 active:opacity-80">
			<span class="uppercase text-secondary flex items-center gap-2.5">
				обсудить сотрудничество
				<img src={ArrowRight} class="inline" alt="" />
			</span>
		</Button>
	</div>
	<img src={Image1} alt="" class="row-start-2 col-span-2" />
	<img src={Image2} alt="" class="row-start-2 col-span-4" />
	<img src={Image3} alt="" class="row-start-2 col-span-2" />
</div>
