<script>
	import Plus from 'iconoir/icons/plus.svg';
	import { isOverlayOpen } from '../../backend/stores';
</script>

<button
	class="absolute bottom-0 right-0 flex items-center justify-center w-16 h-16 mb-2 mr-2 overflow-hidden duration-300 ease-in-out delay-75 rounded-full shadow-clay bg-slate-500 group hover:w-16 hover:h-16"
	on:click={() => {
		isOverlayOpen.set(true);
	}}
>
	<div class="w-[180%] h-full absolute left-0 top-0 flex items-center justify-center">
		<div
			class="w-full aspect-square origin-left transition -translate-x-full bg-slate-600 group-enabled:group-hover:translate-x-[-40%]"
		/>
	</div>
	<img class="z-10 w-3/4 h-3/4" src={Plus} alt="plus" />
</button>
