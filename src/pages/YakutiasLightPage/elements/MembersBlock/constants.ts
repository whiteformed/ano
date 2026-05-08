import VeraLinnik from './images/VeraLinnik.webp';
import KonstantinScherbakov from './images/KonstantinScherbakov.webp';
import LyubovIzbitskih from './images/LyubovIzbitskih.webp';
import EgorZadeba from './images/EgorZadeba.webp';
import NyurguyanaUgrinova from './images/NyurguyanaUgrinova.webp';
import AnastasiaDorbasova from './images/AnastasiaDorbasova.webp';
import AlbinaPermyakova from './images/AlbinaPermyakova.webp';

type Tag = 'Искусство' | 'Наука' | 'Коммуникации' | 'Культура';

export const TEAM_MEMBERS_LIST: {
	name: string;
	description: string;
	photo: string;
	tag: Tag;
	className: string;
}[] = [
	{
		photo: VeraLinnik,
		name: 'Вера Линник',
		description:
			'Автор и ведущая проекта. Медиахудожник и фотограф, основатель инициативы «Светотворчество». Выпускница Школы Родченко и Академии фотографии, член МТС «Таврида.АРТ» и секции science art ТСХР.',
		tag: 'Искусство',
		className: 'row-start-1 col-start-2',
	},
	{
		photo: KonstantinScherbakov,
		name: 'Константин Щербаков',
		description:
			'Научное сопровождение проекта. Специалист в области лазерных технологий, оптики и материаловедения. Связан с НИТУ МИСИС, РУДН и НИЯУ МИФИ.',
		tag: 'Наука',
		className: 'row-start-1 col-start-4',
	},
	{
		photo: LyubovIzbitskih,
		name: 'Любовь Избицких',
		description:
			'Коммуникации и PR. Руководитель проектов в области коммуникаций. Курирует PR-направления в Ozon.',
		tag: 'Коммуникации',
		className: 'row-start-1 col-start-6',
	},
	{
		photo: EgorZadeba,
		name: 'Егор Задеба',
		description:
			'Научный наставник. Кандидат физико-математических наук, доцент НИЯУ МИФИ, старший научный сотрудник комплекса НЕВОД. Член Координационного совета по делам молодёжи в научной и образовательной сферах при Совете при Президенте РФ по науке и образованию.',
		tag: 'Наука',
		className: 'row-start-2 col-start-1',
	},
	{
		photo: NyurguyanaUgrinova,
		name: 'Нюргуяна Угринова',
		description:
			'Культурный и экологический наставник. Главный специалист Министерства экологии, природопользования и лесного хозяйства Республики Саха (Якутия). Куратор слёта «Зелёные пионеры Якутии».',
		tag: 'Культура',
		className: 'row-start-2 col-start-3',
	},
	{
		photo: AnastasiaDorbasova,
		name: 'Анастасия Дарбасова',
		description:
			'Наставник по содержательной и просветительской части. Детский писатель, экопросветитель и педагог. Автор экопроекта «Экофэнтези Розовая чайка».',
		tag: 'Культура',
		className: 'row-start-2 col-start-5',
	},
	{
		photo: AlbinaPermyakova,
		name: 'Альбина Пермякова',
		description:
			'Наставник по общественным коммуникациям и партнёрскому взаимодействию. Член общественной организации «Командарм», движения «Союз русских женщин» и общественного совета Постпредства РС(Я) при Президенте РФ.',
		tag: 'Культура',
		className: 'row-start-2 col-start-7',
	},
];
