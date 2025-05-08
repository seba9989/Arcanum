<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { enhance } from '$app/forms';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<nav class="navbar bg-base-300 drop-shadow-base-200 justify-center drop-shadow-xl">
	<a href="/">
		<img
			class="h-10"
			src="http://arcanum.org.pl/wp-content/uploads/2024/03/arcanum-logo-strona-black.png"
			alt="SKGF ARCANUM"
		/>
	</a>
</nav>
<div class=" flex h-full flex-col p-4">
	{@render children()}
</div>
