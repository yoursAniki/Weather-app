<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";

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
</script>

<template>
	<NuxtLayout>
		<div class="flex flex-col items-center gap-5 pt-16">
			<div class="flex gap-2">
				<TodayWeather v-for="card in refWeatherCards" />
			</div>
			<div class="flex gap-1">
				<BaseInput />
				<BaseButton @click-request="addCity()" />
			</div>
		</div>
	</NuxtLayout>
</template>
