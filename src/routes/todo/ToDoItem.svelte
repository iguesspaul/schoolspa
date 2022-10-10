<script lang="ts">
	import Check from 'iconoir/icons/check.svg';
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
		invalidateAll();
	}
</script>

<div class="flex flex-row justify-between">
	<div class="w-1/3 mx-3 mb-4 bg-gray-600 hover:bg-gray-800 rounded-lg flex flex-row">
		<button
			on:click={changeShow}
			class="my-2 text-stone-100 hover:text-stone-200 font-concert-one text-center w-5/6 border-r-2 border-r-slate-300"
		>
			{data.content}
		</button>
		<button
			on:click={async () => {
				await closeButton();
			}}
			class="w-1/6 flex justify-center items-center"
		>
			<img class="rounded-full bg-gray-500" src={Check} alt="close task" />
		</button>
	</div>
	{#if show === true}
		<div class="w-1/2 bg-gray-700 rounded-lg mx-3 mb-1">
			<h1 class="font-concert-one text-center text-stone-100">Description: {data.description}</h1>
			<h1 class="font-concert-one text-center text-stone-100">Priority: {data.priority}</h1>
		</div>
	{/if}
</div>
