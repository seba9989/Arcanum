<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	import Form from '$lib/component/Form';
	import Icon from '@iconify/svelte';

	let { data }: { data: PageData } = $props();
</script>

<ul class="list bg-base-100 rounded-box space-y-2 shadow-md">
	<div class="grid grid-cols-2 gap-2">
		<a href="loans/create" class="btn btn-primary"> Nowi odwiedzający </a>
	</div>
	{#each data.loans as loan}
		<li class="list-row bg-base-300">
			<div class="list-col-grow text-lg">{loan.boardGame?.title}</div>
			<Form.Self action="loans/{loan.id}?/remove" class="btn-square btn-error">
				<Icon class="" icon="lucide:trash-2" />
			</Form.Self>
		</li>
	{/each}
</ul>
