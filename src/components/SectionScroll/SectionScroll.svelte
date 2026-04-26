<script lang="ts">
	import gsap from 'gsap';
	import { Observer } from 'gsap/Observer';
	import { onMount, type Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();

	onMount(() => {
		gsap.registerPlugin(Observer);

		let sections = document.querySelectorAll<HTMLElement>('section'),
			outerWrappers = gsap.utils.toArray<HTMLElement>('.outer'),
			innerWrappers = gsap.utils.toArray<HTMLElement>('.inner'),
			currentIndex = -1;

		let animating = false;

		gsap.set(outerWrappers, { yPercent: 100 });
		gsap.set(innerWrappers, { yPercent: -100 });

		function gotoSection(index: number, direction: number) {
			animating = true;
			let tl = gsap.timeline({
				defaults: { duration: 1.25, ease: 'power1.inOut' },
				onComplete: () => (animating = false),
			});
			if (currentIndex >= 0) {
				// The first time this function runs, current is -1
				gsap.set(sections[currentIndex], { zIndex: 0 });
			}
			gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
			tl.fromTo(
				[outerWrappers[index], innerWrappers[index]],
				{
					yPercent: (i) => (i ? -100 * direction : 100 * direction),
				},
				{
					yPercent: 0,
				},
				0,
			);
		}

		Observer.create({
			type: 'wheel,touch,pointer',
			wheelSpeed: -1,
			onDown: () => !animating && gotoSection(currentIndex - 1, -1),
			onUp: () => !animating && gotoSection(currentIndex + 1, 1),
			tolerance: 10,
			preventDefault: true,
		});
	});
</script>

<div class="h-screen">
	{@render children()}
</div>
