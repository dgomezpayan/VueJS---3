<template>
	<h1>Jobs</h1>
	<div v-for="job in jobs" :key="job.id">
		<router-link :to="{ name: 'jobDetails', params: { id: job.id } }">
			<h3>{{ job.title }}</h3>
		</router-link>
	</div>
</template>

<script setup>
	import { ref } from "@vue/reactivity"

	const jobs = ref([
		{ title: "jobs1", id: 1, detail: "example for job1" },
		{ title: "jobs2", id: 2, detail: "example for job2" },
		{ title: "jobs3", id: 3, detail: "example for job3" },
	])
</script>
