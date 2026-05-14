<script lang="ts">
	import Image1 from './images/ProjectImage1.webp';
	import Image2 from './images/ProjectImage2.webp';
	import { Image } from '$components/Image';
	import { WordDelimiter } from '$components/WordDelimiter';
</script>

<WordDelimiter text="О проекте" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-15 mb-50">
	<span class="col-start-3 col-span-6 text-3xl uppercase">
		Свет Якутии — флагманский проект программы «Светотворчество».
	</span>
	<div class="col-start-5 col-span-4 flex flex-col gap-3 mt-3 text-xl">
		<span>
			Это лаборатория для детей 10-16 лет, где искусство, наука и работа с территорией соединяются
			в современный визуальный язык. Итог проекта — серия работ «Свет Якутии глазами детей». Проект
			реализуется в контексте Десятилетия науки и технологий и года культуры Республики Саха
			(Якутия) 2026.
		</span>
		<span>
			Проект пройдёт в июле 2026 года в Якутске в рамках слёта «Зелёные пионеры» при поддержке
			Министерства экологии, природопользования и лесного хозяйства Республики Саха (Якутия).
		</span>
	</div>
	<div class="col-start-1 col-span-8 grid grid-cols-subgrid grid-flow-row gap-x-4 mt-10">
		<Image src={Image1} class="col-start-1 col-span-2" />
		<Image src={Image2} class="col-start-4 col-span-5" />
	</div>
</div>
