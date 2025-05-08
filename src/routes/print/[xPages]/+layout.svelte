<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { afterNavigate, goto } from '$app/navigation';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	let lastPage = '';
	afterNavigate((event) => {
		lastPage = event.from?.url.href ?? '/';
	});

	onMount(() => {
		window.print();

		addEventListener('afterprint', (event) => {
			nav_back();
		});
	});

	function nav_back() {
		goto(lastPage);
	}
</script>

<button class="btn-error btn print:hidden" onclick={nav_back}>Back</button>
{#each { length: data.xPages }}
	{@render children()}
{/each}
