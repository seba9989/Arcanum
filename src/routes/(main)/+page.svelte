<script lang="ts">
	import { enhance } from '$app/forms';
	import NavMenuLink from '$lib/component/NavMenuLink/NavMenuLink.svelte';
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';

	let { data }: { data: PageData } = $props();
</script>

<nav class="grid grid-cols-2 gap-4">
	<NavMenuLink href="/visitors" icon="lucide:users">Odwiedzający</NavMenuLink>
	<NavMenuLink href="/loans" icon="lucide:package-open">Wypożyczalnia</NavMenuLink>
	<form action="/auth?/logout" method="post" use:enhance>
		<button
			type="submit"
			class="card bg-base-300 w-full cursor-pointer space-y-4 p-4 shadow-sm drop-shadow-xl"
		>
			<div class="card bg-base-100 aspect-square items-center justify-center">
				<Icon class="w-2/3" height="none" icon="lucide:log-out" />
			</div>
			<span class="m-auto"> Wyloguj </span>
		</button>
	</form>
	{#if data.userIsRoot}
		<div class="indicator col-span-2 grid grid-cols-subgrid">
			<span class="indicator-item indicator-center badge badge-ghost">Admin</span>
			<div class="card bg-base-200 col-span-2 grid grid-cols-subgrid gap-4 p-4">
				<NavMenuLink href="/admin/users" icon="lucide:users">Użytkownicy</NavMenuLink>
				<NavMenuLink href="/admin/board_games" icon="lucide:dices">Gry Planszowe</NavMenuLink>
			</div>
		</div>
	{/if}
</nav>
