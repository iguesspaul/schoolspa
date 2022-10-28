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

{#if data.length === 0}
	<div class="flex items-center justify-center">
		<p class="text-2xl">Would you look at that!</p>
	</div>
{:else}
	<div class="flex flex-col items-center justify-center h-full">
		{#each data.res as task}
			<ToDoItem data={task} />
		{/each}
	</div>
{/if}

<CreateTask />
