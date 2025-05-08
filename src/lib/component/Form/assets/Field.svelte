<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let { type = 'text', ...props }: HTMLInputAttributes & { name: string } = $props();
</script>

<input {...props} {type} class="input w-full" />
