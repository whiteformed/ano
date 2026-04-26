<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let mouseX = $state(0);
	let mouseY = $state(0);
	let targetX = $state(0);
	let targetY = $state(0);
	let animationFrame = $state<number>();
	let canvasElement = $state<HTMLCanvasElement>();

	function handleMouseMove(event: MouseEvent) {
		targetX = event.clientX;
		targetY = event.clientY;
	}

	function handleResize() {
		if (canvasElement) {
			canvasElement.width = window.innerWidth;
			canvasElement.height = window.innerHeight;
		}
	}

	onMount(() => {
		if (!canvasElement) {
			return;
		}

		const canvas = canvasElement;
		const ctx = canvasElement.getContext('2d');

		if (!canvas || !ctx) return;

		const drawLight = () => {
			// Smooth easing
			mouseX += (targetX - mouseX) * 0.03;
			mouseY += (targetY - mouseY) * 0.03;

			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Create multiple light layers
			const gradient1 = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 250);
			gradient1.addColorStop(0, 'rgba(255, 200, 150, 0.1)');
			gradient1.addColorStop(0.5, 'rgba(200, 150, 100, 0.04)');
			gradient1.addColorStop(1, 'rgba(0, 0, 0, 0)');

			const gradient2 = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 400);
			gradient2.addColorStop(0, 'rgba(150, 150, 255, 0.05)');
			gradient2.addColorStop(1, 'rgba(0, 0, 0, 0)');

			ctx.fillStyle = gradient2;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			ctx.fillStyle = gradient1;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			animationFrame = requestAnimationFrame(drawLight);
		};

		handleResize();
		animationFrame = requestAnimationFrame(drawLight);
	});

	onDestroy(() => {
		if (animationFrame) {
			cancelAnimationFrame(animationFrame);
		}
	});
</script>

<svelte:window onmousemove={handleMouseMove} onresize={handleResize} />

<canvas bind:this={canvasElement} class="fixed inset-0 pointer-events-none z-1"></canvas>
