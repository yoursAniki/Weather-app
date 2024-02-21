<script lang="ts" setup>
import axios from "axios";
import autoAnimate from "@formkit/auto-animate";

interface CityResponse {
	name: string;
}

let info: CityResponse | null = null;

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
	weatherId: string;
}

interface IParams {
	day1: { dt_txt: string };
	day2: { dt_txt: string };
	day3: { dt_txt: string };
	day4: { dt_txt: string };
}

// Иконки для погоды с их id
const weatherIcons: Record<string, string> = {
	"01d": "/weather/clear-sky.png", // ясное небо (день)
	"01n": "/weather/clear-sky.png", // ясное небо (ночь)
	"02d": "/weather/few-clouds.png", // небольшая облачность (день)
	"02n": "/weather/few-clouds.png", // небольшая облачность (ночь)
	"03d": "/weather/few-clouds.png", // рассеянные облака (день)
	"03n": "/weather/few-clouds.png", // рассеянные облака (ночь)
	"04d": "/weather/broken-clouds.png", // облачно (день)
	"04n": "/weather/broken-clouds.png", // облачно (ночь)
	"09d": "/weather/shower-rain.png", // дождь (день)
	"09n": "/weather/shower-rain.png", // дождь (ночь)
	"10d": "/weather/rain.png", // дождь (день)
	"10n": "/weather/rain.png", // дождь (ночь)
	"11d": "/weather/thunderstorm.png", // гроза (день)
	"11n": "/weather/thunderstorm.png", // гроза (ночь)
	"13d": "/weather/snow.png", // снег (день)
	"13n": "/weather/snow.png", // снег (ночь)
	"50d": "/weather/mist.png", // туман (день)
	"50n": "/weather/mist.png", // туман (ночь)
};

const weatherCards: IWeatherCard[] = [];
const refWeatherCards = ref(weatherCards);

let error: string = "";
const refError = ref(error);

// Добавление карточки с погодой
const addCity = () => {
	if (city.message.trim().length < 2) {
		refError.value = "You need to enter a name with a length of more than 1.";
		return;
	}
	refError.value = "";

	// Обрезаем данную в API дату до более короткой (год/месяц/число)
	const cutToSpace = (str: string): string => {
		const currentDate: string = str;
		const index: number = currentDate.indexOf(" ");
		const result: string = currentDate.substring(0, index);
		return result;
	};

	axios
		.get(
			`https://api.openweathermap.org/data/2.5/forecast?q=${city.message}&units=metric&lang=ru&appid=b93ead9e942361f9190e775a6220a511`
		)

		.then(res => {
			info = res.data;
			city.message = "";

			// Фильтрация по датам обеспечивающая корректное отображение только 4 различных дней
			const daysMap = new Map<string, any>();

			for (const item of info.list) {
				const itemDate = new Date(item.dt_txt).toDateString();
				if (!daysMap.has(itemDate)) {
					daysMap.set(itemDate, item);
				}
				if (daysMap.size > 3) {
					break;
				}
			}

			const days = Array.from(daysMap.values());
			refWeatherCards.value.push({
				id: id++,
				city: info.city.name,
				deg: Math.round(days[0].main.temp),
				condition: days[0].weather[0].description,
				humidity: days[0].main.humidity,
				wind: days[0].wind.speed,
				date: cutToSpace(days[0].dt_txt),
				weatherId: days[0].weather[0].icon,
				nextDay: {
					deg: Math.round(days[1].main.temp),
					condition: days[1].weather[0].description,
					humidity: days[1].main.humidity,
					wind: days[1].wind.speed,
					date: cutToSpace(days[1].dt_txt),
				},
				thirdDay: {
					deg: Math.round(days[2].main.temp),
					condition: days[2].weather[0].description,
					humidity: days[2].main.humidity,
					wind: days[2].wind.speed,
					date: cutToSpace(days[2].dt_txt),
				},
				fourthDay: {
					deg: Math.round(days[3].main.temp),
					condition: days[3].weather[0].description,
					humidity: days[3].main.humidity,
					wind: days[3].wind.speed,
					date: cutToSpace(days[3].dt_txt),
				},
			});
		})
		.catch(error => {
			console.error("Error fetching data:", error);
			// Обработка ошибок:
			refError.value = "The name of the city was entered incorrectly.";
		});
};

const city = reactive<MyData>({ message: "" });

provide("city", city);

// Подключение анимаций из библиотеки AutoAnimate
const animation = ref();
onMounted(() => {
	autoAnimate(animation.value);
});

// Удаление всех карточек
const deleteAllCards = () => {
	refWeatherCards.value.splice(0, refWeatherCards.value.length);
	id = 0;
};

// Удаление конкретной карточки
const deleteCard = cardId => {
	console.log(cardId);
	refWeatherCards.value.splice(cardId, 1);
	id--;
};
</script>

<template>
	<div
		class="flex flex-col items-center gap-5 h-full min-h-[500px] justify-center"
	>
		<div
			ref="animation"
			class="flex gap-2 carousel w-full relative justify-start"
		>
			<!-- Рендер главной и дочерних погодных карточек -->
			<TodayWeather
				class="carousel-item w-full max-w-96 flex items-center justify-center"
				v-for="card in refWeatherCards"
				:key="card.id"
				:city="card.city"
				:deg="card.deg"
				:condition="card.condition"
				:humidity="card.humidity"
				:wind="card.wind"
				:date="card.date"
				@delete-request="deleteCard(card.id)"
				:id="'item' + card.id"
			>
				<!-- Не совсем соответствует тз, но я решил, что это тоже неплохое решение -->
				<!-- Рендер дочерних карточек с погодой (на следующие три дня) -->
				<template v-slot:cards>
					<LaterWeather
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
				</template>
				<!-- Рендер иконок в зависимости от погодных условий -->
				<template v-slot:weather-icon>
					<img
						v-if="card.weatherId === '01d' || card.weatherId === '01n'"
						:src="weatherIcons['01d']"
						alt="clear sky"
					/>
					<img
						v-else-if="card.weatherId === '02d' || card.weatherId === '02n'"
						:src="weatherIcons['02d']"
						alt="few clouds"
					/>
					<img
						v-else-if="card.weatherId === '03d' || card.weatherId === '03n'"
						:src="weatherIcons['03d']"
						alt="scattered clouds"
					/>
					<img
						v-else-if="card.weatherId === '04d' || card.weatherId === '04n'"
						:src="weatherIcons['04d']"
						alt="broken clouds"
					/>
					<img
						v-else-if="card.weatherId === '09d' || card.weatherId === '09n'"
						:src="weatherIcons['09d']"
						alt="shower rain"
					/>
					<img
						v-else-if="card.weatherId === '10d' || card.weatherId === '10n'"
						:src="weatherIcons['10d']"
						alt="rain"
					/>
					<img
						v-else-if="card.weatherId === '11d' || card.weatherId === '11n'"
						:src="weatherIcons['11d']"
						alt="thunderstorm"
					/>
					<img
						v-else-if="card.weatherId === '13d' || card.weatherId === '13n'"
						:src="weatherIcons['13d']"
						alt="snow"
					/>
					<img
						v-else-if="card.weatherId === '50d' || card.weatherId === '50n'"
						:src="weatherIcons['50d']"
						alt="mist"
					/>
				</template>
			</TodayWeather>
		</div>
		<div
			class="flex justify-center w-full py-2 gap-2 absolute bottom-0 flex-wrap"
		>
			<a
				v-for="card in refWeatherCards"
				:href="'#item' + card.id"
				class="btn btn-xs"
				>{{ card.id + 1 }}</a
			>
		</div>
		<div class="flex gap-1 flex-col items-center mt-auto pb-4 relative">
			<!-- Отображение ошибки ввода -->
			<p class="text-red-900">{{ refError }}</p>
			<div class="flex">
				<BaseInput @click-request="addCity()" />
				<div
					class="absolute -bottom-2 text-slate-800 min-w-[200px] text-nowrap text-center"
				>
					You want to check weather at
					{{ city.message == "" ? "your city" : "<" + city.message + ">" }}
				</div>
				<BaseButton v-if="city.message.length > 0" @click-request="addCity()"
					>Add</BaseButton
				>
				<BaseButton v-else disabled @click-request="addCity()">Add</BaseButton>
			</div>
			<BaseButton
				v-show="weatherCards.length > 0"
				@click-request="deleteAllCards()"
				class="absolute -bottom-10"
			>
				Delete all
			</BaseButton>
		</div>
	</div>
</template>
