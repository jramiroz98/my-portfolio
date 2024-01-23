<script lang="ts">
	import { onMount } from 'svelte';
	import { Progress } from '$lib/components/ui/progress';
	export let value = 8;
	export let image =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png';
	export let name = 'Svelte';
	onMount(() => {
		const timer = setTimeout(() => (value = 66), 500);
		return () => clearTimeout(timer);
	});
</script>

<div class="flex space-x-4">
	<div class="w-12">
		<img src={image} alt="svelte logo" class="" />
	</div>
	<div class="w-full">
		<h3 class="mb-2 scroll-m-20 text-xl font-semibold tracking-tight">{name}</h3>
		<Progress {value} max={100} class="h-3 w-[100%]" />
	</div>
</div>
