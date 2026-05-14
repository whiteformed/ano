<script>
	import {
		ContactsBlock,
		ThemesBlock,
		TimelineBlock,
		IntroBlock,
		MethodBlock,
		MembersBlock,
		ProjectBlock,
		ResultsBlock,
		CulturalAgendaBlock,
	} from './elements';
	import MIFILogo from '$icons/MIFILogo.svelte';
	import YakutiaLogo from '$icons/YakutiaLogo.svelte';
</script>

<IntroBlock />
<ProjectBlock />
<CulturalAgendaBlock />
<MethodBlock />
<ThemesBlock />
<ResultsBlock />
<TimelineBlock />
<MembersBlock />
<ContactsBlock featuredLogos={[YakutiaLogo, MIFILogo]} />
