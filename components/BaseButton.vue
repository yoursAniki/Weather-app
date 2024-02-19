<script lang="ts" setup>
import { defineEmits } from "vue";

const emits = defineEmits<{
	click: () => void;
}>();

const click = () => {
	emits("click-request");
};
</script>

<template>
	<button
		@click="click"
		class="font-medium border-2 rounded transition border-slate-700 px-2 hover:bg-slate-200 hover:bg-opacity-15 active:bg-slate-200 active:bg-opacity-25"
	>
		Choose
	</button>
</template>

<style></style>
