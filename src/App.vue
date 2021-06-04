<template>
	<h1>Reaction Timer</h1>
	<button @click="startPlay" :disabled="isPlaying">play</button>

	<Block v-if="isPlaying" :delay="delay" @end="endGame" />

	<Results v-if="showScore" :score="score"/>
</template>

<script setup>
	import Block from "./components/block"
  import Results from "./components/Results"
	import { ref } from "vue"

	const isPlaying = ref(false)
	const showScore = ref(false)
	const delay = ref(null)
	const score = ref(null)

	const startPlay = () => {
		delay.value = 2000 + Math.random() * 5000
		isPlaying.value = true
		showScore.value = false
	}

	const endGame = (value) => {
		console.log("value Block", value)

		score.value = value
		showScore.value = true
		isPlaying.value = false
	}
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #444;
		margin-top: 60px;
	}

  button { 
    background-color:#0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    margin:10px;

  }
  button[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
  }
</style>
