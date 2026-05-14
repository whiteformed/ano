<script>
	import {
		ContactsBlock,
		CulturalAgendaBlock,
		FormatBlock,
		FounderBlock,
		HowWeOperateBlock,
		IntroBlock,
		MethodBlock,
		PartnersBlock,
		ProjectBlock,
		ResultsBlock,
		ShowcaseBlock,
	} from './elements';
	import MIFILogo from '$icons/MIFILogo.svelte';
</script>

<IntroBlock />
<ProjectBlock />
<MethodBlock />
<ShowcaseBlock />
<ResultsBlock />
<PartnersBlock />
<FormatBlock />
<CulturalAgendaBlock />
<HowWeOperateBlock />
<FounderBlock />
<ContactsBlock featuredLogos={[MIFILogo]} />
