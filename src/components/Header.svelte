<script lang="ts">
	import Icon from '@iconify/svelte';
	import { isHeaderOpen } from '../backend/stores';
	
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

</script>

<header class="absolute top-0 flex flex-col w-full">
	{#if $isHeaderOpen}
		<header
			transition:slide="{{delay: 90, duration: 400, easing: quintOut }}"
			class="flex flex-row items-center justify-between w-full p-2 mb-4 transition border-b-2 border-gray-800"
		>
			<button>
				<Icon class="w-6 h-6 text-zinc-800" icon="icon-park-solid:align-text-left-one" />
			</button>
			<h1 class="text-xl font-concert-one text-zinc-800">DoAll</h1>
			<button>
				<Icon class="w-6 h-6 text-zinc-800" icon="icon-park-solid:file-question" />
			</button>
		</header>
	{/if}
	<button
		class="flex justify-center mt-2"
		on:click={() => {
			isHeaderOpen.set(!$isHeaderOpen);
		}}
	>
		<Icon class="w-[2%] h-[2%] text-zinc-800 " icon="icon-park-solid:activity-source" />
	</button>
</header>
