<script lang="ts">
	import Menu from 'iconoir/icons/menu.svg';
	import MenuScale from 'iconoir/icons/menu-scale.svg';
	import QuestionMark from 'iconoir/icons/question-mark-circle.svg';

	let menuSrc: string = Menu;

	function handleMouseOver() {
		menuSrc = MenuScale;
	}

	function handleMouseExit() {
		menuSrc = Menu;
	}
</script>

<div
	class="top-0 flex flex-row items-center justify-between w-full p-2 mb-4 border-b-2 border-gray-800"
>
	<button>
		<img
			src={menuSrc}
			on:mouseover={handleMouseOver}
			on:focus
			on:mouseout={handleMouseExit}
			on:blur
			alt="menu"
		/>
	</button>
	<h1 class="text-xl font-concert-one">DoAll</h1>
	<button>
		<img src={QuestionMark} alt="help" />
	</button>
</div>
