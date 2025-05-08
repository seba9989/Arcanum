<script lang="ts">
	import { page } from '$app/state';

	type Props = {
		name?: string;
		print?: string;
	};

	let { name = 'print_modal', print = page.url.pathname }: Props = $props();

	let xPages = $state(1);
</script>

<input type="checkbox" id={name} class="modal-toggle" />
<div class="modal" role="dialog">
	<div class="modal-box flex gap-2">
		<label class="label">
			Ile stron:
			<input class="input" type="number" bind:value={xPages} />
		</label>
		<a class="btn btn-primary" href="/print/{xPages}{print}">Print</a>
	</div>
	<label class="modal-backdrop" for={name}>Close</label>
</div>
