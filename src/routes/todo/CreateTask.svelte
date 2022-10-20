<script>
	import Plus from 'iconoir/icons/plus.svg';
	import { isOverlayOpen } from '../../backend/stores';
</script>

<button
	class="group overflow-hidden w-14 h-14 hover:w-16 hover:h-16 duration-300 ease-in-out delay-75 rounded-full absolute bottom-0 right-0 mb-2 mr-2 bg-gray-500 flex justify-center items-center"
	on:click={() => {
		isOverlayOpen.set(true);
	}}
>
	<div class="w-[180%] h-full absolute left-0 top-0 flex items-center justify-center">
		<div
			class="w-full aspect-square origin-left transition -translate-x-full bg-gray-600 group-enabled:group-hover:translate-x-[-40%]"
		/>
	</div>
	<img class="w-3/4 h-3/4 z-10" src={Plus} alt="plus" />
</button>
