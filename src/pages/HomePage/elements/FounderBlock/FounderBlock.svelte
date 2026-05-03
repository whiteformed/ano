<script lang="ts">
	import Image1 from './images/FounderImage1.png';
	import Image2 from './images/FounderImage2.png';
	import WordDelimiter from '$components/WordDelimiter/WordDelimiter.svelte';
</script>

<WordDelimiter text="Основатель" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-15 mb-50">
	<span class="col-start-3 col-span-6 text-4xl uppercase mb-5">
		Вера Линник — медиахудожник и фотограф, основатель инициативы «Светотворчество». Выпускница
		Школы Родченко и Академии фотографии, член МТС «Таврида.АРТ» и секции science art ТСХР.
	</span>
	<span class="row-start-2 col-start-5 col-span-4 text-2xl mb-10">
		Работает на стыке искусства, науки и философии света, соединяя выставочную практику,
		art&science-исследование и авторские образовательные форматы.
	</span>
	<img src={Image1} alt="" class="row-start-3 col-start-1 col-span-3" />
	<img src={Image2} alt="" class="row-start-3 col-start-5 col-span-3" />
</div>
