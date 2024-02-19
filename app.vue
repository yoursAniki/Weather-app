<script lang="ts" setup>
import axios from "axios";
import autoAnimate from "@formkit/auto-animate";

import { ref, provide, reactive } from "vue";

interface CityResponse {
	name: string;
}

let info: CityResponse | null = null;

import type { MyData } from "./types/types";

let id: number = 0;

interface IWeatherCard {
	id: number;
	city: string;
	deg: number;
	condition: string;
	humidity: number;
	wind: number;
}

const weatherCards: IWeatherCard[] = [];

const refWeatherCards = ref(weatherCards);

let error: string = "";
const refError = ref(error);

const addCity = () => {
	if (city.message.trim().length < 2) {
		refError.value = "You need enter name with length more than 1";
		return;
	}
	refError.value = "";

	axios
		.get(
			`https://api.openweathermap.org/data/2.5/weather?q=${city.message}&units=metric&lang=ru&appid=b93ead9e942361f9190e775a6220a511`
		)
		.then(res => {
			info = res.data;
			city.message = "";
			console.log(info);
			refWeatherCards.value.push({
				id: ++id,
				city: info.name,
				deg: info.main.feels_like,
				condition: info.weather[0].description,
				humidity: info.main.humidity,
				wind: info.wind.speed,
			});
		})
		.catch(error => {
			console.error("Error fetching data:", error);
			// Обработка ошибок:
			refError.value = "An error occurred while fetching data";
		});
};

const city = reactive<MyData>({ message: "" });

provide("city", city);

const animation = ref();

onMounted(() => {
	autoAnimate(animation.value);
});
</script>

<template>
	<NuxtLayout>
		<div class="flex flex-col items-center gap-5 pt-16 h-full min-h-[450px]">
			<div ref="animation" class="flex gap-2">
				<TodayWeather
					v-for="card in refWeatherCards"
					:key="card.id"
					:city="card.city"
					:deg="card.deg"
					:condition="card.condition"
					:humidity="card.humidity"
					:wind="card.wind"
				/>
			</div>
			<div class="flex gap-1 flex-col items-center mt-auto">
				<p class="text-red-900">{{ refError }}</p>
				<div class="flex">
					<BaseInput />
					<BaseButton v-if="city.message.length > 0"
						@click-request="addCity()">Add</BaseButton>
						<BaseButton v-else disabled @click-request="addCity()">Add</BaseButton>
					
			</div>
		</div>
	</NuxtLayout>
</template>
