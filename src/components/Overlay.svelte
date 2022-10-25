<script>
	import Cancel from 'iconoir/icons/cancel.svg';
	import { isOverlayOpen } from '../backend/stores';
</script>

<div class="fixed top-0 left-0 flex items-center justify-center w-screen h-screen">
	<div
		class="relative flex items-center justify-center w-1/5 rounded-lg h-1/5 bg-slate-600/[.6] shadow-clay"
	>
		<button
			class="absolute top-0 right-0 m-2 bg-red-700 rounded-full "
			on:click={() => isOverlayOpen.set(false)}
		>
			<img src={Cancel} alt="cancel" />
		</button>
		<div class="text-xl font-concert-one text-slate-100">
			<slot />
		</div>
	</div>
</div>
