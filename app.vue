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
	date: string;
	nextDay: object;
	thirdDay: object;
	fourthDay: object;
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

	const cutToSpace = (str: string): string => {
		const currentDate: string = str;
		const index: number = currentDate.indexOf(" ");
		const result: string = currentDate.substring(0, index);
		return result;
	};

	// if (refWeatherCards.value.length === 3) {
	// 	refWeatherCards.value.shift();
	// }

	axios
		.get(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city.message}&units=metric&lang=ru&appid=b93ead9e942361f9190e775a6220a511`
		)

		.then(res => {
			info = res.data;
			city.message = "";
			console.log(info);
			refWeatherCards.value.push({
				id: id++,
				city: info.city.name,
				deg: Math.round(info.list[0].main.temp),
				condition: info.list[0].weather[0].description,
				humidity: info.list[0].main.humidity,
				wind: info.list[0].wind.speed,
				date: cutToSpace(info.list[0].dt_txt),
				nextDay: {
					deg: Math.round(info.list[9].main.temp),
					condition: info.list[9].weather[0].description,
					humidity: info.list[9].main.humidity,
					wind: info.list[9].wind.speed,
					date: cutToSpace(info.list[9].dt_txt),
				},
				thirdDay: {
					deg: Math.round(info.list[17].main.temp),
					condition: info.list[17].weather[0].description,
					humidity: info.list[17].main.humidity,
					wind: info.list[17].wind.speed,
					date: cutToSpace(info.list[17].dt_txt),
				},
				fourthDay: {
					deg: Math.round(info.list[25].main.temp),
					condition: info.list[25].weather[0].description,
					humidity: info.list[25].main.humidity,
					wind: info.list[25].wind.speed,
					date: cutToSpace(info.list[25].dt_txt),
				},
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

const deleteAllCards = () => {
	refWeatherCards.value.splice(0, refWeatherCards.value.length);
	id = 0;
};

const deleteCard = cardId => {
	console.log(cardId);
	refWeatherCards.value.splice(cardId, 1);
	id--;
};
</script>

<template>
	<NuxtLayout>
		<div
			class="flex flex-col items-center gap-5 h-full min-h-[450px] justify-center"
		>
			<div
				ref="animation"
				class="flex gap-2 carousel w-full relative justify-start"
			>
				<TodayWeather
					class="carousel-item w-full max-w-96 h-full flex items-center justify-center"
					v-for="card in refWeatherCards"
					:key="card.id"
					:city="card.city"
					:deg="card.deg"
					:condition="card.condition"
					:humidity="card.humidity"
					:wind="card.wind"
					:date="card.date"
					@delete-request="deleteCard(card.id)"
					><LaterWeather
						:deg="card.nextDay.deg"
						:condition="card.nextDay.condition"
						:humidity="card.nextDay.humidity"
						:wind="card.nextDay.wind"
						:date="card.nextDay.date"
					/>

					<LaterWeather
						:deg="card.thirdDay.deg"
						:condition="card.thirdDay.condition"
						:humidity="card.thirdDay.humidity"
						:wind="card.thirdDay.wind"
						:date="card.thirdDay.date"
					/>

					<LaterWeather
						:deg="card.fourthDay.deg"
						:condition="card.fourthDay.condition"
						:humidity="card.fourthDay.humidity"
						:wind="card.fourthDay.wind"
						:date="card.fourthDay.date"
					/>
				</TodayWeather>
				<!-- <div class="flex justify-center w-full py-2 gap-2 absolute bottom-0">
					<a
						v-for="card in refWeatherCards"
						:href="'#item' + card.id"
						class="btn btn-xs"
						>{{ card.id }}</a
					>
				</div> -->
			</div>
			<div class="flex gap-1 flex-col items-center mt-auto">
				<p class="text-red-900">{{ refError }}</p>
				<div class="flex">
					<BaseInput @click-request="addCity()" />
					<BaseButton v-if="city.message.length > 0" @click-request="addCity()"
						>Add</BaseButton
					>
					<BaseButton v-else disabled @click-request="addCity()"
						>Add</BaseButton
					>
				</div>
			</div>
			<BaseButton @click-request="deleteAllCards()" class="absolute bottom-28">
				Delete all
			</BaseButton>
		</div>
	</NuxtLayout>
</template>
