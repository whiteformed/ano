<script lang="ts">
	import Image1 from './images/ProjectImage1.webp';
	import Image2 from './images/ProjectImage2.webp';
	import Image3 from './images/ProjectImage3.webp';
	import { Image } from '$components/Image';
	import { WordDelimiter } from '$components/WordDelimiter';
</script>

<WordDelimiter text="О проекте" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-15 mb-50">
	<div class="col-span-2 flex flex-col gap-3">
		<Image src={Image1} />
		<div class="flex flex-col">
			<span class="text-xl">«Огни Пространства»</span>
			<div class="flex justify-between text-m">
				<span>Федор Понаморенко, Анна и Елизавета Симоновы</span>
				<span>2025</span>
			</div>
		</div>
	</div>
	<div class="col-start-5 col-span-4 flex flex-col gap-3 text-xl">
		<span>
			Светотворчество — образовательно-культурная инициатива и программа арт-лабораторий, в которых
			свет, энергия становятся самим языком искусства и познания.
		</span>
		<span> Это выставки, лаборатории и публичные программы. </span>
		<span>
			Проект развивается в логике Десятилетия науки и технологий, соединяя исследование света,
			художественный эксперимент и современные форматы просвещения.
		</span>
	</div>
	<span class="col-start-3 col-span-6 text-3xl uppercase mt-29">
		миссия – Исследовать свет как универсальный принцип культуры, знания и созидания через
		лаборатории, выставки и просветительские форматы.
	</span>
	<span class="col-start-5 col-span-4 text-xl mt-4">
		Соединять науку о свете, культурное наследие и художественную практику в образовательных
		и публичных проектах.
	</span>
	<div class="col-start-2 col-span-7 grid grid-cols-subgrid grid-flow-row gap-x-4 mt-10">
		<Image src={Image2} class="col-span-3" />
		<Image src={Image3} class="col-start-4 col-span-4" />
	</div>
</div>
