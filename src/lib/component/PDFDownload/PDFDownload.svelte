<script lang="ts">
	import type { Attachment } from 'svelte/attachments';
	import type { CodeData } from '$lib/type/codeData';

	import jsPDF from 'jspdf';
	import html2canvas from 'html2canvas-pro';

	import Icon from '@iconify/svelte';
	import BoardGamesPdf from './assets/BoardGamesPDF.svelte';
	import EntriesPdf from './assets/EntriesPDF.svelte';

	type Props = {
		type: CodeData['type'];
		pages: number;
	};
	const { type, pages }: Props = $props();

	let download = $state(false);

	const html: Attachment = (element) => {
		savePdf(element as HTMLElement);
	};

	const savePdf = async (element: Element) => {
		const pdf = new jsPDF({
			orientation: 'portrait',
			unit: 'mm',
			format: 'a4'
		});

		for (const children of element.children) {
			const canvas = await html2canvas(children as HTMLElement, {
				width: 1050,
				height: 1485,
				scale: 2,
				useCORS: true
			});
			const imgData = canvas.toDataURL('image/png');

			pdf.addPage();
			pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
		}

		pdf.deletePage(1);
		pdf.autoPrint();
		pdf.save(`Wejściówki.pdf`);
		download = false;
	};
</script>

<button onclick={() => (download = true)} class="btn btn-primary">
	{#if download}
		<Icon icon="lucide:loader-circle" class="animate-spin" />
	{:else}
		Drukuj
	{/if}
</button>

{#if download}
	<div class="absolute h-0 w-0 overflow-hidden">
		<div id="pdfIndex" {@attach html}>
			{#each { length: pages }}
				{#if type === 'board_game'}
					<BoardGamesPdf />
				{:else if type === 'visitor'}
					<EntriesPdf />
				{/if}
			{/each}
		</div>
	</div>
{/if}

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

	:global(#pdfIndex h1) {
		font-family: 'Pacifico', cursive;
		font-weight: 400;
		font-style: normal;
	}
</style>
