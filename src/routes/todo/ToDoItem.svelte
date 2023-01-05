<script lang="ts">
	import Icon from '@iconify/svelte';
	import { closeTask } from '$lib/closeTask';
	import { invalidateAll } from '$app/navigation';
	import { PUBLIC_APIKEY } from '$env/static/public';
	export let task: any;

	async function closeButton() {
		await closeTask(task.id, PUBLIC_APIKEY);
		await invalidateAll();
	}
</script>

<div
	class="flex flex-col items-center justify-center w-1/3 mx-3 mb-4 delay-[50] transition rounded-lg h-auto bg-slate-200 hover:bg-slate-400 hover:shadow-md hover:shadow-slate-700 hover:scale-110"
>
	<p class="my-2 text-xl text-zinc-800 font-concert-one p-3 text-center">
		Task: {task.content}
	</p>
	<p class="mb-4 text-xl text-zinc-800 font-concert-one">
		{task.description}
	</p>
	<button
		on:click={async () => {
			await closeButton();
		}}
		class="flex items-center mb-4 justify-center w-[5%]"
	>
		<Icon class="w-full h-full rounded-full text-zinc-800 hover:text-zinc-900" icon="icon-park-solid:check-one" />
	</button>
</div>
