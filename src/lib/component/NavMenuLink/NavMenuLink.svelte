<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	const { href, icon, children }: { href: string; icon: string; children: Snippet } = $props();
</script>

<a {href} class="card bg-base-300 w-full space-y-4 p-4 shadow-sm drop-shadow-xl">
	<div class="card bg-base-100 aspect-square items-center justify-center">
		<Icon class="w-2/3" height="none" {icon} />
	</div>
	<span class="m-auto">
		{@render children()}
	</span>
</a>
