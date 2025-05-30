<script lang="ts">
	import NavMenuLink from '$lib/component/NavMenuLink/NavMenuLink.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<nav class="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-8">
	<NavMenuLink href="/visitors" icon="lucide:users">Odwiedzający</NavMenuLink>
	<NavMenuLink href="/loans" icon="lucide:package-open">Wypożyczalnia</NavMenuLink>
	{#if data.userIsRoot}
		<div class="indicator col-span-full grid grid-cols-subgrid">
			<span class="indicator-item indicator-center badge badge-ghost">Admin</span>
			<div class="card bg-base-200 col-span-full grid grid-cols-subgrid gap-4 p-4">
				<NavMenuLink href="/admin/users" icon="lucide:users">Użytkownicy</NavMenuLink>
				<NavMenuLink href="/admin/board_games" icon="lucide:dices">Gry Planszowe</NavMenuLink>
			</div>
		</div>
	{/if}
</nav>

