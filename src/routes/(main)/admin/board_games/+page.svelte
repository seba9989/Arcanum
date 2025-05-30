<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';
	import PrintModel from '$lib/component/PrintModel/PrintModel.svelte';
	import Form from '$lib/component/Form';

	let { data }: { data: PageData } = $props();

	let xPages = $state(1);
</script>

<ul class="list bg-base-100 rounded-box space-y-2 shadow-md">
	<div class="grid grid-cols-2 gap-2">
		<a href="board_games/create" class="btn btn-primary"> Nowa gra </a>
		<label for="print_modal" class="btn">Wydrukuj naklejki</label>
	</div>
	{#each data.boardGames as boardGame}
		<li class="list-row bg-base-300">
			<div class="list-col-grow text-lg">{boardGame.title}</div>
			<Form.Self action="board_games/{boardGame.id}?/remove" class="btn-error btn-square">
				<Icon class="m-2" height="none" icon="lucide:trash-2" />
			</Form.Self>
		</li>
	{/each}
</ul>

<!-- Models -->
<PrintModel type="board_game" />
