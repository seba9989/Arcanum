<script lang="ts">
	import { genCode } from '$lib/utility/genCode';
	import type { PageData } from '../board_game/$types';

	let { data }: { data: PageData } = $props();

	const onePage = 22;
</script>

<div class=" hidden h-[calc(100vh_-_0.5px)] grid-cols-2 gap-[0.25mm] bg-black print:grid">
	{#each { length: onePage }}
		<div class="grid items-center bg-white p-4">
			{@html genCode({ type: 'board_game' })}
		</div>
	{/each}
</div>
