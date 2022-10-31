<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: any;
	import { isOverlayOpen } from '../../backend/stores';
	import Overlay from '../../components/Overlay.svelte';
	import ToDoItem from './ToDoItem.svelte';
	import CreateTask from './CreateTask.svelte';
</script>

{#if $isOverlayOpen}
	<Overlay>
		<h1>why hello there</h1>
	</Overlay>
{/if}

<div class="flex flex-col items-center justify-center h-full">
	{#if data.length === 0}
		<p class="text-2xl">Would you look at that!</p>
	{:else}
		{#each data.res as task}
			<ToDoItem data={task} />
		{/each}
	{/if}
	<CreateTask />
</div>
