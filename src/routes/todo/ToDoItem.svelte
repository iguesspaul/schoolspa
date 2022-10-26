<script lang="ts">
	import Icon from '@iconify/svelte';
	import { closeTask } from '../../backend/closeTask';
	import { invalidateAll } from '$app/navigation';
	import { PUBLIC_APIKEY } from '$env/static/public';
	export let data: any;

	let show: boolean = false;

	function changeShow() {
		show = !show;
	}

	async function closeButton() {
		await closeTask(data.id, PUBLIC_APIKEY);
		await invalidateAll();
	}
</script>

<div class="flex flex-row justify-between">
	<div
		class="flex flex-row w-1/3 h-16 mx-3 mb-4 delay-75 rounded-lg bg-slate-200 hover:bg-slate-400 hover:shadow-md hover:shadow-slate-700"
	>
		<button
			on:click={changeShow}
			class="w-5/6 my-2 text-xl text-center border-r-2 text-zinc-800 font-concert-one border-r-slate-800"
		>
			{data.content}
		</button>
		<button
			on:click={async () => {
				await closeButton();
			}}
			class="flex items-center justify-center w-1/6"
		>
			<Icon class="rounded-full h-1/2 w-1/2" icon="icon-park-solid:check-one" />
		</button>
	</div>
	{#if show === true}
		<div class="w-1/2 mx-3 mb-1 rounded-lg bg-slate-200 shadow-sm p-3 animate__animated animate__bounce ">
			<h1 class="text-xl text-center font-concert-one text-gray-700">
				Description: {data.description}
			</h1>
			<h1 class="text-xl text-center font-concert-one text-zinc-800">Priority: {data.priority}</h1>
		</div>
	{/if}
</div>
