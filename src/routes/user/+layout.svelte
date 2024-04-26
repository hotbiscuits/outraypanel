<script>
	import { page } from '$app/stores';
</script>

<div class="h-screen w-full">
	<div class="body">
		<body>
			<div class="h-3"></div>
			<div class=" mx-16 my-3 min-h-[600px] rounded-lg border bg-white p-8">
				<!-- Page Content -->
				<slot />
				<!-- Page Content -->
			</div>
			<div class="h-3"></div>
		</body>
	</div>
</div>

<style>
	body {
		/* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
		background: linear-gradient(-45deg, #fc2a05, #ce3972e3, #0d4458, #23d5ab);

		/* background: radial-gradient(#ee7752, #e73c7e, #23a6d5, #23d5ab); */
		/* DARKER BELOW */
		/* background: radial-gradient(#fc2a05, #ce3972e3, #0d4458, #23d5ab); */
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
