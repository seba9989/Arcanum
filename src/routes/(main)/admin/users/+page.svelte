<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import Form from '$lib/component/Form';

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
			<Form.Self action="users/{user.id}?/remove" class="btn-error btn-square">
				<Icon class="m-2" height="none" icon="lucide:trash-2" />
			</Form.Self>
		</li>
	{/each}
</ul>

<input type="checkbox" id="new_user_modal" class="modal-toggle" />
<div class="modal" role="dialog">
	<div class="modal-box">
		<Form action="?/create">
			<Form.Field name="username" placeholder="Login" class="w-full" />
			<Form.Field name="password" placeholder="Password" class="w-full" />
			<Form.Submit class="btn-primary self-end">Stwórz</Form.Submit>
		</Form>
	</div>
	<label class="modal-backdrop" for="new_user_modal"></label>
</div>
