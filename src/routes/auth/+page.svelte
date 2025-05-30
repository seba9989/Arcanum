<script lang="ts">
	import Form from '$lib/component/Form';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<div class="grid h-screen items-center justify-center">
	<Form method="POST" action="?/login">
		<h1 class="text-center text-3xl font-bold">Tylko dla Helperów</h1>

		<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
			<Form.Field name="username" placeholder="Login" />
			<Form.Field name="password" placeholder="Password" />

			<Form.Submit class="btn-primary">Login</Form.Submit>
		</fieldset>
	</Form>
</div>
