<script lang="ts" setup>
import { defineEmits } from "vue";

import { inject } from "vue";

import type { MyData } from "/types/types.ts";

const emits = defineEmits(["click-request"]);

const click = () => {
	emits("click-request");
};

const city = inject("city") as MyData;
</script>

<template>
	<div>
		<input
			v-model="city.message"
			@keyup.enter="click"
			class="text-black relative rounded transition bg-transparent border-2 border-slate-700 focus:outline-none focus:bg-opacity-15 focus:bg-slate-200 py-1 px-2 placeholder:text-black"
			type="text"
			placeholder="Enter your city"
		/>
	</div>
</template>
