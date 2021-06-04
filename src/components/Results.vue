<template>
	<div>
		<p>Reaction Time: {{ score }} ms</p>
		<p class="rank">{{rank}}</p>
	</div>
</template>

<script setup>
	import { defineProps, onMounted, ref } from "@vue/runtime-core"

	const props = defineProps({
		score: Number,
	})

	const rank = ref(null)

  onMounted(() => {
    if(props.score < 250){
      rank.value = 'Ninja Fingers'
    }
    else if(props.score < 400){
      rank.value = 'Rapid Reflexes'
    } else {
      rank.value = 'snail pace...'
    }
  })
</script>

<style scoped>
 .rank {
   font: size 1.4rem;
   color: #0faf87;
   font-weight: bold;
 }
</style>
