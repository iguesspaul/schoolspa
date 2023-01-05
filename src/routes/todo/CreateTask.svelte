<script>
	import Icon from '@iconify/svelte';
	import { isOverlayOpen } from '$lib/stores';
</script>

<button
	class="relative flex items-center justify-center w-16 h-16 mb-3 mr-3 overflow-hidden transition-transform duration-300 ease-in-out delay-75 rounded-full shadow-lg bg-slate-100 group active:scale-90"
	on:click={() => {
		isOverlayOpen.set(true);
	}}
>
	<!--all classes needed for the transition-->
	<div class="w-[180%] absolute left-0 top-0 flex items-center justify-center">
		<div
			class="w-full aspect-square origin-left transition duration-300 -translate-x-full bg-slate-600 group-enabled:group-hover:translate-x-[-40%]"
		/>
	</div>
	<Icon class="z-10 w-3/4 h-3/4 text-zinc-800" icon="icon-park-solid:add-one" />
</button>
