<script lang="ts">
	import { isOverlayOpen } from '../../backend/stores';
	import Overlay from '../../components/Overlay.svelte';
	import ToDoItem from './ToDoItem.svelte';
	import CreateTask from './CreateTask.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#if $isOverlayOpen}
	<Overlay>
		<h1>why hello there</h1>
	</Overlay>
{/if}

<div class="flex flex-col items-center justify-center h-full">
	{#each data.res as task}
		<ToDoItem {task} />
	{:else}
		<p class="text-xl font-concert-one">Looks like we're done for the day!</p>
	{/each}
	<CreateTask />
</div>
