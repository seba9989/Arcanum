<script lang="ts">
	import { enhance } from '$app/forms';
	import { cn } from '$lib/utility/cn';
	import type { HTMLFormAttributes } from 'svelte/elements';

	let { children, ...props }: HTMLFormAttributes = $props();
</script>

<form {...props} method="POST" use:enhance class={cn('flex flex-col gap-4', props.class)}>
	{@render children?.()}
</form>
