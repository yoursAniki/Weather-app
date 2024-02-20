<script lang="ts" setup>
import { inject } from "vue";

import type { MyData } from "/types/types.ts";

const city = inject("city") as MyData;
</script>

<template>
	<div>
		<input
			v-model="city.message"
			class="text-black relative rounded transition bg-transparent border-2 border-slate-700 focus:outline-none focus:bg-opacity-15 focus:bg-slate-200 py-1 px-2 placeholder:text-black"
			type="text"
			placeholder="Input your city"
		/>
		<div class="absolute text-slate-800">
			You want to check weather at
			{{ city.message == "" ? "your city" : "<" + city.message + ">" }}
		</div>
	</div>
</template>

<style></style>
