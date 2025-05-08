<script lang="ts">
	import { genCode } from '$lib/utility/genCode';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const onePage = 12;
</script>

<div class=" hidden h-[calc(100vh_-_0.5px)] grid-cols-2 gap-[0.25mm] bg-gray-700 print:grid">
	{#each { length: onePage }}
		<div class="grid items-center bg-gray-600 p-4">
			<div class="flex h-full flex-col gap-2">
				<h1 class="m-auto w-fit text-4xl font-bold text-white">Odwiedzający</h1>
				<div class="w-full bg-white p-2">
					{@html genCode({ type: 'visitor' })}
				</div>
			</div>
		</div>
	{/each}
</div>
<div class=" hidden h-[calc(100vh_-_0.5px)] grid-cols-2 gap-[0.25mm] bg-gray-700 print:grid">
	{#each { length: onePage }}
		<div class="grid items-center border-black bg-gray-600 p-4">
			<div class="flex h-full flex-col gap-2">
				<img
					src="http://arcanum.org.pl/wp-content/uploads/2024/03/arcanum-logo-strona-black.png"
					alt=""
					class="m-auto w-3/4"
				/>
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

	@page {
		size: A4;
		margin: 0;
	}

	h1 {
		font-family: 'Pacifico', cursive;
		font-weight: 400;
		font-style: normal;
	}
</style>
