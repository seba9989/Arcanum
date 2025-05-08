<script lang="ts">
	import Form from '$lib/component/Form';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Form>
	<Form.CodeScanner type="board_game" placeholder="UUID - Gry" name="boardGameId" />
	<Form.CodeScanner type="visitor" placeholder="UUID - Odwiedzającego" name="visitorId" />
	<Form.Submit>Wypożycz</Form.Submit>
</Form>
