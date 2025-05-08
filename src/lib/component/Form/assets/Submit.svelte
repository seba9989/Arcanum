<script lang="ts">
	import { cn } from '$lib/utility/cn';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let { children, class: className, ...props }: HTMLButtonAttributes = $props();
</script>

<button {...props} type="submit" class={cn('btn btn-primary', className)}>
	{@render children?.()}
</button>
