<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { type = 'checkbox', ...props }: HTMLInputAttributes & { name: string } = $props();
</script>

<input {...props} {type} class="checkbox" />
