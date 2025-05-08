<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	let { data }: { data: PageData } = $props();
</script>

<ul class="list bg-base-100 rounded-box space-y-2 shadow-md">
	<li class="pb-2">
		<label for="new_user_modal" class="btn btn-primary">Utwórz</label>
	</li>
	{#each data.users as user}
		<li class="list-row bg-base-300">
			<!-- <div class="tooltip" data-tip="edit user">
				<a class="btn btn-square btn-soft" href="users/{user.id}">
					<Icon class="m-2" height="none" icon="lucide:arrow-up-right" />
				</a>
			</div> -->
			<div class="list-col-grow text-lg">{user.username}</div>
			<form action="users/{user.id}?/remove" method="POST" use:enhance>
				<button type="submit" class="btn btn-error btn-square">
					<Icon class="m-2" height="none" icon="lucide:trash-2" />
				</button>
			</form>
		</li>
	{/each}
</ul>

<input type="checkbox" id="new_user_modal" class="modal-toggle" />
<div class="modal" role="dialog">
	<div class="modal-box">
		<form action="?/create" method="post" class="space-y-4" use:enhance>
			<input name="username" type="text" class="input w-full" placeholder="Login" />
			<input name="password" type="text" class="input w-full" placeholder="Password" />
			<div class="flex justify-end gap-4">
				<label for="new_user_modal" class="btn btn-error">Close</label>
				<button type="submit" class="btn btn-primary">Stwórz</button>
			</div>
		</form>
	</div>
</div>
