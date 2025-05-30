<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import type { CodeData } from '$lib/type/codeData';
	import Form from '$lib/component/Form';

	let { data, form }: { data: PageData; form: ActionData } = $props();

	let codeData: CodeData | undefined = $state();
</script>

<Form>
	<Form.Field name="firstName" placeholder="Imie" />
	<Form.Field name="lastName" placeholder="Nazwisko" />
	<Form.Field name="phoneNumber" type="tel" placeholder="Telefon" />
	<Form.CodeScanner name="id" />
	<!-- TODO: <Form.Checkbox name="child" /> -->
	<Form.Submit>Stwórz</Form.Submit>
</Form>
