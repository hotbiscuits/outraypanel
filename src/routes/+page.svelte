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
</script>

<body>
	<div class="flex h-screen items-center justify-center">
		<div class="w-1/3">
			<div
				class="m-6 flex min-h-[200px] flex-col items-center justify-center rounded-md bg-white sm:p-8"
			>
				<p class="pb-2">Bibendum Parser Login</p>
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
</body>

<style>
	body {
		/* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
		/* background: linear-gradient(-45deg, #fc2a05, #ce3972e3, #0d4458, #23d5ab); */

		/* background: radial-gradient(#ee7752, #e73c7e, #23a6d5, #23d5ab); */
		/* DARKER BELOW */
		background: radial-gradient(#fc2a05, #ce3972e3, #0d4458, #23d5ab);
		background-size: 400% 400%;
		animation: gradient 15s ease infinite;
		height: 100vh;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.invalid {
		border-color: red;
	}
</style>
