<script lang="ts" setup>
const props = defineProps<{
	city: string;
	deg: number;
	condition: string;
	humidity: number;
	wind: number;
}>();
</script>

<template>
	<div>
		
	</div>
	<div
		class="bg-black bg-opacity-30 rounded-3xl h-80 max-w-[312px] w-full min-h-full text-white"
	>
		<div class="py-7 px-5 flex flex-col h-full relative">
			<img
				class="select-none cursor-pointer absolute right-2 top-3 h-4 w-5"
				src="/Menu.png"
				alt="menu"
			/>
			<div class="flex justify-around">
				<img
					class="select-none max-h-14"
					src="/weather/Group 114.png"
					alt="sunny"
				/>
				<div>
					<div class="font-medium text-lg">{{ city }}</div>
					<div class="text-sm">Monday 01/17/2022</div>
				</div>
			</div>
			<div class="flex items-center flex-col flex-auto justify-center">
				<div class="text-7xl">{{ deg }}</div>
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
</template>

<style></style>
