<script lang="ts">
	import { enhance } from '$app/forms';
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';
	import PrintModel from '$lib/component/PrintModel/PrintModel.svelte';
	import Form from '$lib/component/Form';

	let { data }: { data: PageData } = $props();

	let xPages = $state(1);
</script>

<ul class="list bg-base-100 rounded-box space-y-2 shadow-md">
	<div class="grid grid-cols-2 gap-2">
		<a href="visitors/create" class="btn btn-primary"> Nowi odwiedzający </a>
		<label for="print_modal" class="btn">Wydrukuj wejściówki</label>
	</div>
	{#each data.visitors as visitor}
		<li class="list-row bg-base-300">
			<div class="list-col-grow text-lg">{visitor.firstName} {visitor.lastName}</div>
			<Form.Self action="visitors/{visitor.id}?/remove" class="btn-error btn-square">
				<Icon class="h-full p-2" height="none" icon="lucide:trash-2" />
			</Form.Self>
		</li>
	{/each}
</ul>

<!-- Models -->
<PrintModel type="visitor" />
