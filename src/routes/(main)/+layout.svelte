<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { enhance } from '$app/forms';
	import Form from '$lib/component/Form';
	import Icon from '@iconify/svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<nav class="navbar bg-base-300 drop-shadow-base-200 grid grid-cols-3 drop-shadow-xl">
	<div></div>
	<a class="justify-self-center" href="/">
		<img
			class="h-10"
			src="http://arcanum.org.pl/wp-content/uploads/2024/03/arcanum-logo-strona-black.png"
			alt="SKGF ARCANUM"
		/>
	</a>
	<Form.Self action="/auth?/logout" class="btn-square justify-self-end">
		<Icon icon="lucide:log-out" />
	</Form.Self>
</nav>
<div class=" flex h-full flex-col p-4">
	{@render children()}
</div>
