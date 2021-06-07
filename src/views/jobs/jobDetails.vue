<template>
	<h1>jobs detaile page</h1>
	<p>The job id is {{ id }}</p>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRoute } from 'vue-router'

const route = useRoute()
const id = ref(route.params.id)

</script>
