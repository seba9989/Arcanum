<script lang="ts">
	import { enhance } from '$app/forms';
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';
	import PrintModel from '$lib/component/PrintModel/PrintModel.svelte';

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
			<!-- <div class="tooltip" data-tip="edit user">
				<a class="btn btn-square btn-soft" href="users/{user.id}">
					<Icon class="m-2" height="none" icon="lucide:arrow-up-right" />
				</a>
			</div> -->
			<div class="list-col-grow text-lg">{boardGame.title}</div>
			<form action="board_games/{boardGame.id}?/remove" method="POST" use:enhance>
				<button type="submit" class="btn btn-error btn-square">
					<Icon class="m-2" height="none" icon="lucide:trash-2" />
				</button>
			</form>
		</li>
	{/each}
</ul>

<!-- Models -->
<PrintModel />
