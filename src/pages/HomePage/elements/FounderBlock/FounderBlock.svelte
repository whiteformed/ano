<script lang="ts">
	import Image1 from './images/FounderImage1.webp';
	import Image2 from './images/FounderImage2.webp';
	import { Image } from '$components/Image';
	import { WordDelimiter } from '$components/WordDelimiter';
</script>

<WordDelimiter text="Основатель" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-15 mb-50">
	<span class="col-start-3 col-span-6 text-3xl uppercase mb-5">
		Вера Линник — медиахудожник и фотограф, основатель инициативы «Светотворчество». Выпускница
		Школы Родченко и Академии фотографии, член МТС «Таврида.АРТ» и секции science art
		Творческого Союза Художников России.
	</span>
	<span class="row-start-2 col-start-5 col-span-4 text-xl mb-10">
		Работает на стыке искусства, науки и философии света, соединяя выставочную практику,
		art&science-исследование и авторские образовательные форматы.
	</span>
	<Image src={Image1} class="row-start-3 col-start-1 col-span-3" />
	<Image src={Image2} class="row-start-3 col-start-5 col-span-3" />
</div>
