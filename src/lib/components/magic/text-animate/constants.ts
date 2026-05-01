import type { Variants } from 'motion-sv';
import type { AnimationType, AnimationVariant } from './types';

export const staggerTimings: Record<AnimationType, number> = {
	text: 0.06,
	word: 0.05,
	character: 0.03,
	line: 0.06,
} as const;

export const defaultContainerVariants = {
	hidden: { opacity: 1 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0,
			staggerChildren: 0.05,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
} as const;
export const defaultItemVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
} as const;

export const defaultItemAnimationVariants: Record<
	AnimationVariant,
	{ container: Variants; item: Variants }
> = {
	fadeIn: {
		container: defaultContainerVariants,
		item: {
			hidden: { opacity: 0, y: 40 },
			show: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.3,
				},
			},
			exit: {
				opacity: 0,
				y: 40,
				transition: { duration: 0.3 },
			},
		},
	},
	blurIn: {
		container: defaultContainerVariants,
		item: {
			hidden: { opacity: 0, filter: 'blur(2px)' },
			show: {
				opacity: 1,
				filter: 'blur(0px)',
				transition: {
					duration: 0.3,
				},
			},
			exit: {
				opacity: 0,
				filter: 'blur(10px)',
				transition: { duration: 0.3 },
			},
		},
	},
	blurInUp: {
		container: defaultContainerVariants,
		item: {
			hidden: { opacity: 0, filter: 'blur(2px)', y: 40 },
			show: {
				opacity: 1,
				filter: 'blur(0px)',
				y: 0,
				transition: {
					y: { duration: 0.3 },
					opacity: { duration: 0.4 },
					filter: { duration: 0.3 },
				},
			},
			exit: {
				opacity: 0,
				filter: 'blur(10px)',
				y: 40,
				transition: {
					y: { duration: 0.3 },
					opacity: { duration: 0.4 },
					filter: { duration: 0.3 },
				},
			},
		},
	},
	blurInDown: {
		container: defaultContainerVariants,
		item: {
			hidden: { opacity: 0, filter: 'blur(10px)', y: -40 },
			show: {
				opacity: 1,
				filter: 'blur(0px)',
				y: 0,
				transition: {
					y: { duration: 0.3 },
					opacity: { duration: 0.4 },
					filter: { duration: 0.3 },
				},
			},
		},
	},
	slideUp: {
		container: defaultContainerVariants,
		item: {
			hidden: { y: 40, opacity: 0 },
			show: {
				y: 0,
				opacity: 1,
				transition: {
					duration: 0.3,
				},
			},
			exit: {
				y: -40,
				opacity: 0,
				transition: {
					duration: 0.3,
				},
			},
		},
	},
	slideDown: {
		container: defaultContainerVariants,
		item: {
			hidden: { y: -40, opacity: 0 },
			show: {
				y: 0,
				opacity: 1,
				transition: { duration: 0.3 },
			},
			exit: {
				y: 40,
				opacity: 0,
				transition: { duration: 0.3 },
			},
		},
	},
	slideLeft: {
		container: defaultContainerVariants,
		item: {
			hidden: { x: 20, opacity: 0 },
			show: {
				x: 0,
				opacity: 1,
				transition: { duration: 0.3 },
			},
			exit: {
				x: -40,
				opacity: 0,
				transition: { duration: 0.3 },
			},
		},
	},
	slideRight: {
		container: defaultContainerVariants,
		item: {
			hidden: { x: -40, opacity: 0 },
			show: {
				x: 0,
				opacity: 1,
				transition: { duration: 0.3 },
			},
			exit: {
				x: 20,
				opacity: 0,
				transition: { duration: 0.3 },
			},
		},
	},
	scaleUp: {
		container: defaultContainerVariants,
		item: {
			hidden: { scale: 0.5, opacity: 0 },
			show: {
				scale: 1,
				opacity: 1,
				transition: {
					duration: 0.3,
					scale: {
						type: 'spring',
						damping: 15,
						stiffness: 300,
					},
				},
			},
			exit: {
				scale: 0.5,
				opacity: 0,
				transition: { duration: 0.3 },
			},
		},
	},
	scaleDown: {
		container: defaultContainerVariants,
		item: {
			hidden: { scale: 1.5, opacity: 0 },
			show: {
				scale: 1,
				opacity: 1,
				transition: {
					duration: 0.3,
					scale: {
						type: 'spring',
						damping: 15,
						stiffness: 300,
					},
				},
			},
			exit: {
				scale: 1.5,
				opacity: 0,
				transition: { duration: 0.3 },
			},
		},
	},
} as const;
