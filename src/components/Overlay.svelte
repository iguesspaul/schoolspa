<script>
	import Icon from '@iconify/svelte';
	import { isOverlayOpen } from '../backend/stores';
</script>

<div class="fixed top-0 left-0 flex items-center justify-center w-screen h-screen">
	<div
		class="relative flex items-center justify-center w-1/5 rounded-lg h-1/5 bg-slate-600"
	>
		<button
			class="absolute top-0 right-0 m-2 rounded-full "
			on:click={() => isOverlayOpen.set(false)}
		>
			<Icon class="text-red-600 w-5 h-5" icon="icon-park-solid:close-one" />
		</button>
		<div class="text-xl font-concert-one text-slate-100">
			<slot />
		</div>
	</div>
</div>
