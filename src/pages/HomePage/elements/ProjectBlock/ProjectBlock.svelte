<script lang="ts">
	import Image1 from './images/ProjectImage1.png';
	import Image2 from './images/ProjectImage2.png';
	import Image3 from './images/ProjectImage3.png';
	import WordDelimiter from '$components/WordDelimiter/WordDelimiter.svelte';
</script>

<WordDelimiter text="О ПРОЕКТЕ" />
<div class="grid grid-cols-8 auto-rows-min grid-flow-col gap-x-4 mt-15 mb-30">
	<div class="col-span-2 flex flex-col gap-4.5">
		<img src={Image1} alt="" />
		<div class="flex justify-between text-xl">
			<span>Имя Фамилия “Название”</span>
			<span>2025</span>
		</div>
	</div>
	<div class="col-start-5 col-span-4 flex flex-col gap-3 text-2xl leading-7.5">
		<span>
			Светотворчество — образовательно-культурная инициатива и программа арт-лабораторий,
			развивающая современную культуру света через искусство, исследование и просвещение. Это
			выставки, лаборатории и публичные программы, в которых свет становится художественным языком,
			способом познания и живым опытом восприятия.
		</span>
		<span>
			Проект развивается в логике Десятилетия науки и технологий, соединяя исследование света,
			художественный эксперимент и современные форматы просвещения.
		</span>
	</div>
	<span class="col-start-3 col-span-6 text-[32px] leading-10 whitespace-pre-line uppercase mt-31">
		{`миссия – Исследовать свет как универсальный принцип культуры, знания
        и созидания через лаборатории, выставки и просветительские форматы.`}
	</span>
	<span class="col-start-5 col-span-4 text-2xl leading-7.5 whitespace-pre-line mt-3">
		{`Соединять науку о свете, культурное наследие и художественную
        практику в образовательных и публичных проектах.`}
	</span>
	<div class="col-start-2 col-span-7 grid grid-cols-subgrid grid-flow-row gap-x-4 mt-10">
		<img src={Image2} alt="" class="col-span-3" />
		<img src={Image3} alt="" class="col-start-4 col-span-4" />
	</div>
</div>
