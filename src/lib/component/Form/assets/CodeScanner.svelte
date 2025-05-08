<script lang="ts">
	import { codeDataValid, type CodeData } from '$lib/type/codeData';
	import { BarqodeStream, type DetectedBarcode } from 'barqode';
	import Field from './Field.svelte';

	type Props = { name: string; type?: CodeData['type']; placeholder?: string };
	let { name, type, placeholder = 'UUID' }: Props = $props();

	let codeData: CodeData | undefined = $state();

	let isModelOpen = $state(false);

	let isLoading = $state(true);

	function onDetect(detectedCodes: DetectedBarcode[]) {
		for (const detectedCode of detectedCodes) {
			const data = JSON.parse(detectedCode.rawValue);

			if (codeDataValid(data, { type })) {
				codeData = data;

				isModelOpen = false;
				break;
			}
		}
	}

	let capabilities: MediaTrackCapabilities | undefined = $state();
</script>

<div class="flex gap-2">
	<Field {name} inert value={codeData?.uuid} {placeholder} />
	<label for={name} class="btn btn-primary"> Ze skanuj </label>
</div>

<!-- Model -->
<input bind:checked={isModelOpen} type="checkbox" id={name} class="modal-toggle" />
<div class="modal" role="dialog">
	<div
		class="modal-box flex gap-2"
		style="aspect-ratio: {capabilities?.height?.max} / {capabilities?.width?.max};"
	>
		<BarqodeStream
			formats={['pdf417']}
			paused={!isModelOpen}
			onCameraOn={(capabilities) => {
				capabilities = capabilities;
				return (isLoading = false);
			}}
			{onDetect}
		>
			{#if isLoading}
				<div class="flex h-full items-center justify-center">Loading...</div>
			{/if}
		</BarqodeStream>
	</div>
	<label class="modal-backdrop" for={name}></label>
</div>
