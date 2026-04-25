<script lang="ts">
	import { BlurFade } from '$lib/components/magic/blur-fade';
</script>

<div class="relative flex flex-col items-start w-full min-h-screen">
	<BlurFade
		class="absolute h-screen w-screen inset-0 pointer-events-none -z-1"
		blur="4px"
		duration={1}
		delay={0.4}
	>
		<div class="w-full h-full bg-background bg-no-repeat bg-cover"></div>
	</BlurFade>
	<div class="h-screen flex flex-col justify-between px-4 w-full py-7">
		<div class="flex flex-col">
			<BlurFade delay={1.2} offset={40} class="w-full">
				<header class="w-full">
					<nav>
						<div class="flex justify-between items-baseline">
							<span class="text-xl font-bold">Главная</span>
							<span class="text-xl font-bold">О нас</span>

							<span class="text-4xl font-bold">СВЕТПОЗНАНИЯ.</span>

							<span class="text-xl font-bold">Документы</span>
							<span class="text-xl font-bold">Контакты</span>
						</div>
					</nav>
					<BlurFade delay={0.2} duration={0.4} class="w-full">
						<div class="border-b-2 my-2 border-black rounded-s"></div>
					</BlurFade>
				</header>
			</BlurFade>
			<BlurFade
				containerClass="w-fit self-end"
				direction="up"
				delay={1.2}
				offset={280}
				inViewMargin="0px"
			>
				<span class="text-l font-light">2026.</span>
			</BlurFade>
		</div>

		<div class="flex flex-col gap-8">
			<div class="w-5/10">
				<BlurFade direction="up" delay={0.8} offset={80}>
					<span class="text-6xl font-bold">Культурно-исследовательский центр «Свет познания»</span>
				</BlurFade>
			</div>
			<div class="flex justify-between w-full">
				<div class="flex h-full flex-col gap-6 self-center w-fit">
					<BlurFade direction="up" delay={1.2} offset={80}>
						<span class="text-xl">Напишите письмо на почту или в телеграм, чтобы узнать больше</span
						>
					</BlurFade>
					<div class="flex gap-4 w-fit">
						<BlurFade delay={2.4} offset={0}>
							<button class="py-2 px-4 bg-black text-white cursor-progress"
								>Хочу сотрудничать</button
							>
						</BlurFade>
						<BlurFade delay={1.8} offset={0}>
							<div class="py-2 px-4 bg-white black">
								<div class="flex">
									Сейчас
									<BlurFade delay={2} direction="right" offset={20} class="inline-block">
										<span>!</span>
									</BlurFade>
								</div>
							</div>
						</BlurFade>
					</div>
				</div>
				<BlurFade direction="up" delay={1.2} offset={80} containerClass="w-1/2">
					<span class="font-semibold text-2xl w-full">
						Институция в подмосковье, проливающая свет на культуру, науку и искусство.
					</span>
				</BlurFade>
			</div>
		</div>
	</div>
</div>
