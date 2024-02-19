<script lang="ts" setup></script>

<template>
	<section class="background h-screen w-screen p-8">
		<div>
			<slot />
		</div>
	</section>
</template>

<style scoped>
.background {
	background: rgb(101, 49, 189);
	background: linear-gradient(
		70deg,
		rgba(101, 49, 189, 1) 0%,
		rgba(105, 156, 253, 1) 25%,
		rgba(120, 120, 245, 1) 50%,
		rgba(130, 225, 255, 1) 75%,
		rgba(164, 164, 255, 1) 100%
	);
}
</style>
