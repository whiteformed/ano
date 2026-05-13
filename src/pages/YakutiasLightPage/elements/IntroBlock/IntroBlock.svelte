<script lang="ts">
	import Image1 from './images/IntroImage1.webp';
	import Image2 from './images/IntroImage2.webp';
	import Image3 from './images/IntroImage3.webp';
	import { ContactButton } from '$components/composed/ContactButton';
	import { Image } from '$components/Image';
</script>

<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 gap-y-10 mt-21.5 mb-50">
	<div class="col-start-3 h-fit col-span-4 flex flex-col">
		<span class="font-ivy-headline-light text-[82px] uppercase">Свет Якутии</span>
		<span class="text-xl mt-1.5 row-start-2 col-span-4">
			Художественно-образовательная лаборатория, в которой дети создают образ региона через свет,
			новые медиа и современные художественные практики.
		</span>
		<ContactButton class="mt-8.5" />
	</div>
	<Image src={Image1} fetchpriority="high" class="row-start-2 col-span-2" />
	<Image src={Image2} fetchpriority="high" class="row-start-2 col-span-3" />
	<Image src={Image3} fetchpriority="high" class="row-start-2 col-span-3" />
</div>
