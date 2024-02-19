<script lang="ts" setup>
let city: string = "";

const refCity = ref(city);
</script>

<template>
	<input
		v-model="refCity"
		class="rounded transition bg-transparent border-2 border-slate-700 focus:outline-none focus:bg-opacity-15 focus:bg-slate-200 py-1 px-2 placeholder:text-black"
		type="text"
		placeholder="Input your city"
	/>
</template>

<style></style>
