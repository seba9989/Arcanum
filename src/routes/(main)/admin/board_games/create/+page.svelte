<script lang="ts">
	import Form from '$lib/component/Form/index';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Form>
	<Form.Field name="title" placeholder="Nazwa gry" />
	<Form.CodeScanner type="board_game" name="id" />
	<Form.Submit>Stwórz</Form.Submit>
</Form>
