<script lang="ts">
	import Image1 from './images/IntroImage1.webp';
	import Image2 from './images/IntroImage2.webp';
	import Image3 from './images/IntroImage3.webp';
	import { ContactButton } from '$components/composed/ContactButton';
</script>

<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 gap-y-10 mt-22 mb-30">
	<div class="col-start-3 h-fit col-span-4 flex flex-col">
		<span class="font-ivy-headline-light text-[90px] uppercase">Свет Якутии</span>
		<span class="text-2xl mt-1.25 row-start-2 col-span-4">
			Художественно-образовательная лаборатория, в которой дети создают образ региона через свет,
			новые медиа и современные художественные практики.
		</span>
		<ContactButton class="mt-8" />
	</div>
	<img src={Image1} alt="" class="row-start-2 col-span-2" />
	<img src={Image2} alt="" class="row-start-2 col-span-3" />
	<img src={Image3} alt="" class="row-start-2 col-span-3" />
</div>
