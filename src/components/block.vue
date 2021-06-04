<template>
	<div class="blook" v-if="showBlock" @click="stopTimer">
		Click me
	</div>
</template>

<script setup>
	import {
    defineEmit,
		defineProps,
		onMounted,
		onUnmounted,
		onUpdated,
		ref,
	} from "@vue/runtime-core"

	const showBlock = ref(false)
	const timer = ref(null)
	const reactionTime = ref(0)

	const props = defineProps({
		delay: Number,
	})

  const emits = defineEmit(['end'])

	onMounted(() => {
		console.log("component mounted!")
		setTimeout(() => {
			showBlock.value = true
			startTimer()
		}, props.delay)
	})

	onUpdated(() => {
		console.log("component updated!")
	})

	onUnmounted(() => {
		console.log("component unmounted!")
	})

	const startTimer = () => {
		timer.value = setInterval(() => {
      reactionTime.value += 10
    }, 10)
	}

	const stopTimer = () => {
    clearInterval(timer.value)
    console.log(reactionTime.value);
    emits('end', reactionTime.value)
  }
</script>

<style>
	.blook {
		width: 400px;
		border-radius: 20px;
		background-color: #0faf87;
		color: white;
		text-align: center;
		padding: 100px;
		margin: 40px;
	}
</style>
