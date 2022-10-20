<script>
	import Cancel from 'iconoir/icons/cancel.svg';
	import { isOverlayOpen } from '../backend/stores';
</script>

<div class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
	<div class="bg-slate-600 w-1/5 h-1/5 relative flex justify-center items-center rounded-lg">
		<button
			class="rounded-full absolute top-0 right-0 bg-red-400 m-2 "
			on:click={() => isOverlayOpen.set(false)}
		>
			<img src={Cancel} alt="cancel" />
		</button>
        <div class="font-concert-one text-xl text-slate-100">
            <slot />
        </div>
	</div>
</div>
