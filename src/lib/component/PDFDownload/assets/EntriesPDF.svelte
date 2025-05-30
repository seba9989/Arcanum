<script>
	import { genCode } from '$lib/utility/genCode';
</script>

<div class="grid aspect-[210/297] h-full w-[1050px] grid-cols-2 gap-0.5 bg-gray-950">
	{#each { length: 14 }}
		<div class="flex flex-col justify-center bg-gray-800 p-4">
			<h1 class="m-auto w-fit text-4xl font-bold text-white">Odwiedzający</h1>
			<div class="w-full bg-white p-2">
				{@html genCode({ type: 'visitor' })}
			</div>
		</div>
	{/each}
</div>
<div class="grid aspect-[210/297] h-full w-[1050px] grid-cols-2 gap-0.5 bg-gray-950">
	{#each { length: 14 }}
		<div class="flex flex-col justify-center bg-gray-600 p-4">
			<img src="/img/arcanum-logo-strona-black.png" alt="" class="m-auto w-3/4" />
		</div>
	{/each}
</div>
