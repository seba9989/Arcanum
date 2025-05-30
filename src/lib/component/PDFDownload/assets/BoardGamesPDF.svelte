<script>
	import { genCode } from '$lib/utility/genCode';
</script>

<div class="grid aspect-[210/297] h-full w-[1050px] grid-cols-2 gap-0.5 bg-gray-950">
	{#each { length: 26 }}
		<div class="flex items-center justify-center bg-white">
			<div class="w-full bg-white p-2">
				{@html genCode({ type: 'visitor' })}
			</div>
		</div>
	{/each}
</div>
