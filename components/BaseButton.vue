<script lang="ts" setup>
const emits = defineEmits(["click-request"]);

const click = () => {
	emits("click-request");
};
</script>

<template>
	<button
		@click="click"
		class="text-black cursor-pointer font-medium border-2 rounded transition border-slate-700 px-2 hover:bg-slate-200 hover:bg-opacity-15 active:bg-slate-200 active:bg-opacity-25 disabled:bg-opacity-0 disabled:cursor-default"
	>
		<!-- Слот для текста кнопки -->
		<slot></slot>
	</button>
</template>

<style></style>
