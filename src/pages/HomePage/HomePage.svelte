<script>
	import { IntroBlock, ProjectBlock } from './elements';
	import Logo from '$icons/Logo.svg';
</script>

<div class="relative w-full px-15 py-14">
	<nav class="w-full">
		<header class="grid grid-cols-8 gap-4 text-base font-normal uppercase">
			<img src={Logo} alt="logo" width="87px" height="27px" class="col-span-2" />

			<div class="col-span-2 flex justify-start items-center">
				<span>Свет Якутии</span>
			</div>
			<div class="col-span-2 text-right flex justify-end items-center">
				<span>Контакты</span>
			</div>

			<div class="col-span-2 text-right flex justify-end items-center">
				<span>2026</span>
			</div>
		</header>
	</nav>
	<IntroBlock />
	<ProjectBlock />
</div>
