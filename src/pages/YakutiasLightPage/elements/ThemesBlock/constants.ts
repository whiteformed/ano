import Image1 from './images/ThemesImage1.webp';
import Image2 from './images/ThemesImage2.webp';
import Image3 from './images/ThemesImage3.webp';
import Image4 from './images/ThemesImage4.webp';
import type { ClassValue } from 'clsx';

export type Card = {
	title: string;
	subtitle: string;
	tags: string[];
	src: string;
	class: ClassValue;
};
export const CARDS: Card[] = [
	{
		title: 'Свет науки',
		subtitle:
			'Популяризация науки через современный визуальный язык. Работа с молодёжью и участие в федеральной просветительской повестке Десятилетия Науки и Технологий.',
		tags: ['научная коммуникация', 'атомная энергия'],
		src: Image1,
		class: 'col-span-4',
	},

	{
		title: 'Свет недр',
		subtitle:
			'Для индустриальных и ресурсных компаний. Современное культурное осмысление территории, природных ресурсов и технологического развития региона.',
		tags: ['территория', 'культурный имидж'],
		src: Image2,
		class: 'col-start-5 col-span-4',
	},

	{
		title: 'Свет природы',
		subtitle:
			'Экопросвещение, поддержка подростковых инициатив и формирование современного экологического образа региона.',
		tags: ['экопросвещение', 'региональный образ'],
		src: Image3,
		class: 'row-start-2 col-start-1 col-span-4',
	},

	{
		title: 'Свет будущего',
		subtitle:
			'Выставки, публичные программы и современные форматы работы с молодёжной аудиторией в рамках культурной повестки 2026 года.',
		tags: ['современный формат', 'культурная повестка'],
		src: Image4,
		class: 'row-start-2 col-start-5 col-span-4',
	},
];
