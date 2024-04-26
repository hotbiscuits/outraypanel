<script lang="ts">
	import { Section, Register } from 'flowbite-svelte-blocks';
	import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	//@ts-ignore
	import { goto } from '$app/navigation'; // Import the goto function for navigation
	// @ts-ignore
	import { createPinInput, melt } from '@melt-ui/svelte';

	const pinInput = createPinInput({
		defaultValue: ['', '', '', '']
	});

	const {
		elements: { root, input },
		states: { valueStr }
	} = pinInput;

	$: if ($valueStr) {
		setTimeout(() => {
			if ($valueStr === '1332') {
				goto('/user'); // Navigate to the user/ page
			}
		}, 0);
	}

	//@ts-ignore
	import Logo from '$lib/logo.svelte';
</script>

<div class="h-screen bg-stone-700">
	<div class="flex h-fit w-full items-center justify-center bg-stone-700">
		<div class="h-3/4 w-1/3">
			<Section name="login" class="w-1/2">
				<Register href="/123" class="pt-4">
					<svelte:fragment slot="top">
						<Logo width="100" height="100" class="rounded-full border-8 border-black bg-white" />
					</svelte:fragment>
					<div class="space-y-4 p-6 sm:p-8 md:space-y-6">
						<form class="flex flex-col space-y-6" action="/">
							<h3 class="p-0 text-xl font-medium text-gray-900 dark:text-white">
								Dashboard Login wtf
							</h3>
							<Label class="space-y-2">
								<span>Username</span>
								<Input type="email" name="email" placeholder="name@company.com" required />
							</Label>
							<Label class="space-y-2">
								<span>Password</span>
								<Input type="password" name="password" placeholder="•••••" required />
							</Label>
							<div class="flex items-start">
								<Checkbox>Remember me</Checkbox>
								<a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
									>Forgot password?</a
								>
							</div>
							<Button type="submit" class="w-full">Sign in</Button>
							<p class="text-sm font-light text-gray-500 dark:text-gray-400">
								Don’t have an account yet? <a
									href="/user"
									class="font-medium text-primary-600 hover:underline dark:text-primary-500"
									>Sign up</a
								>
							</p>
						</form>
					</div>
				</Register>
			</Section>
			<div class="m-6 flex flex-col items-center justify-center rounded-md bg-white sm:p-8">
				<p class="pb-2">PIN Bypass</p>
				<div use:melt={$root} class="flex w-1/2 items-center justify-center gap-2">
					{#each Array.from({ length: 4 }) as _}
						<input
							class="text-magnum-900 square-12 w-12 rounded-md bg-white text-center text-lg shadow-sm"
							use:melt={$input()}
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
