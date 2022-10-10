<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: any;
	import ToDoItem from './ToDoItem.svelte';
</script>

<div class="w-full relative">
	<div class="flex flex-col rounded-lg">
		{#if data.length === 0}
			<h1 class="text-2xl font-concert-one">Would you look at that!</h1>
		{:else}
			{#each data.res as task}
				<ToDoItem data={task} />
			{/each}
		{/if}
	</div>
</div>
