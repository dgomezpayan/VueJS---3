<template>
	<div class="home">
		<FilterNav :current="current" @filterChange="current = $event" />
		<div v-if="projects.length">
			<div v-for="project in filteredProjects" :key="project.id">
				<SingleProject
					:project="project"
					@delete="handleDelete"
					@complete="handleComplete"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
	// challenge
	//   - when the filter changes, only show those projects
	//   - e.g. if we click 'completed' only show completed project
	//   - use a computed property to do this
	import SingleProject from "../components/SingleProyect"
	import FilterNav from "../components/FilterNav"
	import { ref } from "@vue/reactivity"
	import { computed, onMounted } from "@vue/runtime-core"

	const projects = ref([])
	const current = ref("all")

	onMounted(() => {
		fetch("http://localhost:3000/projects")
			.then((res) => res.json())
			.then((data) => (projects.value = data))
			.catch((err) => console.log(err))
	})

	const handleDelete = (id) => {
		projects.value = projects.value.filter((project) => {
			return project.id !== id
		})
	}

	const handleComplete = (id) => {
		let p = projects.value.find((project) => {
			return project.id === id
		})
		p.complete = !p.complete
	}

	const filteredProjects = computed(() => {
		if (current.value === "completed") {
			return projects.value.filter((project) => project.complete)
		}
		if (current.value === "ongoing") {
			return projects.value.filter((project) => !project.complete)
		}
		return projects.value
	})

	// export default {
	// 	name: "Home",
	// 	components: { SingleProject, FilterNav },
	// 	data() {
	// 		return {
	// 			projects: [],
	// 			current: "all",
	// 		}
	// 	},
	// 	mounted() {
	// 		fetch("http://localhost:3000/projects")
	// 			.then((res) => res.json())
	// 			.then((data) => (this.projects = data))
	// 			.catch((err) => console.log(err))
	// 	},
	// 	methods: {
	// 		handleDelete(id) {
	// 			this.projects = this.projects.filter((project) => {
	// 				return project.id !== id
	// 			})
	// 		},
	// 		handleComplete(id) {
	// 			let p = this.projects.find((project) => {
	// 				return project.id === id
	// 			})
	// 			p.complete = !p.complete
	// 		},
	// 	},
	// 	computed: {
	// 		filteredProjects() {
	// 			if (this.current === "completed") {
	// 				return this.projects.filter((project) => project.complete)
	// 			}
	// 			if (this.current === "ongoing") {
	// 				return this.projects.filter((project) => !project.complete)
	// 			}
	// 			return this.projects
	// 		},
	// 	},
	// }
</script>
