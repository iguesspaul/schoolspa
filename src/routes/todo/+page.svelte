<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: any;
	import { isOverlayOpen } from '../../backend/stores';
	import Overlay from '../../components/Overlay.svelte';
	import ToDoItem from './ToDoItem.svelte';
	import CreateTask from './CreateTask.svelte';
</script>

<div class="w-full">
	{#if $isOverlayOpen}
		<Overlay>
			<h1>why hello there</h1>
		</Overlay>
	{/if}
	<main class="flex flex-col rounded-lg">
		{#if data.length === 0}
			<p class="text-2xl font-concert-one">Would you look at that!</p>
		{:else}
			{#each data.res as task}
				<ToDoItem data={task} />
			{/each}
		{/if}
	</main>
	<CreateTask />
</div>
