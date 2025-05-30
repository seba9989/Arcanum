<script lang="ts">
	import { cn } from '$lib/utility/cn';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type Props = HTMLButtonAttributes;
	let { children, class: className, ...props }: Props = $props();
</script>

<button {...props} type="submit" class={cn('btn', className)}>
	{@render children?.()}
</button>
