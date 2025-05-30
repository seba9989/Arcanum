<script lang="ts">
	import type { HTMLFormAttributes } from 'svelte/elements';
	import Form from '..';

	let { children, class: className, ...props }: HTMLFormAttributes = $props();
</script>

<Form {...props} class="contents">
	<Form.Submit class={className}>
		{@render children?.()}
	</Form.Submit>
</Form>
