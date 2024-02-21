<script lang="ts" setup>
const emits = defineEmits(["delete-request"]);

defineProps<{
	city: string;
	deg: number;
	condition: string;
	humidity: number;
	wind: number;
	date: string;
}>();

const deleteCard = () => {
	emits("delete-request");
};
</script>

<template>
	<div class="flex flex-col h-full min-h-[420px]">
		<div class="justify-center gap-1 sm:flex hidden h-full m-auto">
			<!-- Слот для дочерних погодных карт -->
			<slot name="cards"></slot>
		</div>
		<div
			class="bg-black bg-opacity-30 rounded-3xl h-80 max-w-[312px] w-full min-h-full text-white mt-1"
		>
			<div class="py-7 px-5 flex flex-col h-full relative">
				<div class="dropdown absolute cursor-pointer left-2 top-3 h-4 w-6">
					<div tabindex="0" role="button" class="m-1">
						<img class="select-none" src="/Menu.png" alt="menu" />
					</div>
					<ul
						tabindex="0"
						class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-52 bg-opacity-95"
					>
						<li
							@click="deleteCard()"
							class="rounded transition hover:bg-black bg-opacity-80 pl-2 active:bg-black active:opacity-60"
						>
							Delete
						</li>
					</ul>
				</div>
				<div class="flex justify-around">
					<div class="select-none max-h-14">
						<!-- Слот для иконки -->
						<slot name="weather-icon"></slot>
					</div>
					<div>
						<div class="font-medium text-lg">{{ city }}</div>
						<div class="text-sm">{{ date }}</div>
					</div>
				</div>
				<div class="flex items-center flex-col flex-auto justify-center">
					<div class="text-7xl">{{ deg }}&#176;</div>
					<div class="text-sm">{{ condition }}</div>
				</div>
				<div class="flex justify-between flex-wrap text-xs">
					<div class="flex">
						<img class="select-none pr-1" src="/water.png" alt="water" />
						<div class="mr-1 flex items-center">Humidity</div>
						<div class="flex items-center">{{ humidity }}%</div>
					</div>
					<!-- <div class="flex items-center">|</div> -->
					<div class="flex">
						<img class="select-none pr-1" src="/windy.png" alt="wind" />
						<div class="mr-1 flex items-center">Wind</div>
						<div class="flex items-center">{{ wind }}m/s</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>
