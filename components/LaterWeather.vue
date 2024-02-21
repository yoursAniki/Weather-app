<script lang="ts" setup>
defineProps<{
	deg: number;
	condition: string;
	humidity: number;
	wind: number;
	date: string;
}>();
</script>
<template>
	<div class="bg-black bg-opacity-30 rounded-2xl min-h-full min-w-full w-9">
		<div
			class="h-full p-1 text-xs flex flex-col items-center text-white justify-between"
		>
			<div class="grow">{{ date }}</div>
			<div class="grow">{{ deg }}&#176;</div>
			<div class="text-center grow">{{ condition }}</div>
			<div class="flex gap-3 grow">
				<div>{{ humidity }}%</div>
				<div>{{ wind }}m/s</div>
			</div>
		</div>
	</div>
</template>