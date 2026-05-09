<script lang="ts">
	import Image1 from './images/CulturalAgendaImage1.webp';
	import Image2 from './images/CulturalAgendaImage2.webp';
	import { Image } from '$components/Image';
	import { WordDelimiter } from '$components/WordDelimiter';
</script>

<WordDelimiter text="Культурная повестка" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-15 mb-50">
	<span class="col-start-3 col-span-6 text-3xl uppercase mb-4">
		Философски проект продолжает линию экспериментальных традиций XX века, в которых свет, энергия
		становятся самим языком искусства и познания — от Баухауза и русского авангарда до космизма и
		междисциплинарных световых исследований НИИ «Прометей».
	</span>
	<span class="row-start-2 col-start-5 col-span-3 text-xl mb-9">
		Во всех этих линиях свет выступает не только физическим явлением, но и языком искусства,
		познания и образа будущего, что делает проект созвучным и современной научно-культурной
		повестке.
	</span>
	<Image src={Image1} class="row-start-3 col-start-1 col-span-4" />
	<Image src={Image2} class="row-start-3 col-start-5 col-span-3" />
</div>
