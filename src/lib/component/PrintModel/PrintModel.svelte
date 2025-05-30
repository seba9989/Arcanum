<script lang="ts">
	import { page } from '$app/state';
	import type { CodeData } from '$lib/type/codeData';
	import PdfDownload from '../PDFDownload/PDFDownload.svelte';

	type Props = {
		name?: string;
		type: CodeData['type'];
	};

	let { name = 'print_modal', type }: Props = $props();

	let pages = $state(1);
</script>

<input type="checkbox" id={name} class="modal-toggle" />
<div class="modal" role="dialog">
	<div class="modal-box flex gap-2">
		<label class="label w-full">
			Ile stron:
			<input class="input" type="number" bind:value={pages} />
		</label>
		<PdfDownload {pages} {type} />
	</div>
	<label class="modal-backdrop" for={name}>Close</label>
</div>
