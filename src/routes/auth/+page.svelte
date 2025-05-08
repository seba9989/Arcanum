<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<div class="grid h-screen items-center justify-center">
	<form method="POST" action="?/login" use:enhance>
		<h1 class="text-3xl font-bold">Tylko dla Helperów</h1>

		<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
			<legend class="fieldset-legend">Login</legend>

			<input name="username" type="text" class="input" placeholder="Login" />

			<input name="password" type="password" class="input" placeholder="Password" />

			<button class="btn btn-neutral mt-4">Login</button>
		</fieldset>
	</form>
</div>

<!-- <h1>Login/Register</h1>
<form method="post" action="?/login" use:enhance>
	<label>
		Username
		<input name="username" />
	</label>
	<label>
		Password
		<input type="password" name="password" />
	</label>
	<button>Login</button>
	<button formaction="?/register">Register</button>
</form>
<p style="color: red">{form?.message ?? ''}</p> -->
