<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';
	import type { CodeData } from '$lib/type/codeData';
	import Form from '$lib/component/Form';

	let { data, form }: { data: PageData; form: ActionData } = $props();

	let codeData: CodeData | undefined = $state();
</script>

<!-- <form method="POST" class="flex flex-col gap-4 *:w-full" use:enhance>
	<input name="firstName" class="input" placeholder="Imie" type="text" />
	<input name="lastName" class="input" placeholder="Nazwisko" type="text" />
	<input name="phoneNumber" class="input" placeholder="Telefon" type="tel" />
	<dir class="flex gap-2">
		<input name="id" class="input" placeholder="UUID" type="text" inert value={codeData?.uuid} />
	</dir>
	<div>
		<label class="label">
			<input name="child" class="checkbox" type="checkbox" /> - Dziecko
		</label>
	</div>
	{form?.message}

	<CodeDataScanner bind:codeData />

	<button type="submit" class="btn btn-primary"> Create </button>
</form> -->
<Form>
	<Form.Field name="firstName" placeholder="Imie" />
	<Form.Field name="lastName" placeholder="Nazwisko" />
	<Form.Field name="phoneNumber" type="tel" placeholder="Telefon" />
	<Form.CodeScanner name="id" />
	<!-- TODO: <Form.Checkbox name="child" /> -->
	<Form.Submit>Stwórz</Form.Submit>
</Form>
