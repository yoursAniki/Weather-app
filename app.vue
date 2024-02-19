<script lang="ts" setup>
import { ref, provide, reactive } from "vue";
import axios from "axios";

import type { MyData } from "./types/types";

let id: number = 0;

interface IWeatherCard {
	id: number;
}

const weatherCards: IWeatherCard[] = [];

const refWeatherCards = ref(weatherCards);

const addCity = () => {
	refWeatherCards.value.push({
		id: ++id,
	});
	console.log(refWeatherCards.value);
};

const city = reactive<MyData>({ message: "" });

provide("city", city);
</script>

<template>
	<NuxtLayout>
		<div class="flex flex-col items-center gap-5 pt-16">
			<div class="flex gap-2">
				<TodayWeather v-for="card in refWeatherCards" />
			</div>
			<div class="flex gap-1">
				<BaseInput />
				<BaseButton
					v-if="city.message.length > 0"
					@click-request="addCity()"
				/>
				<BaseButton v-else disabled />
			</div>
		</div>
	</NuxtLayout>
</template>
