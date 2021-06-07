<template>
	<div>
		<form @submit.prevent="save">
			<label>Email</label>
			<input type="email" required v-model="email" />

			<label>Password</label>
			<input type="password" required v-model="password" />

			<label>Role:</label>
			<select v-model="role">
				<option value="Developer">web Developer</option>
				<option value="Designer">web Designer</option>
			</select>

			<label>Skills</label>
			<input type="text" v-model="tempSkills" @keyup="addSkills" />
			<div v-for="skill in skills" :key="skill" class="pill"><span @click="deleteSkill(skill)">{{ skill }}</span></div>

			<div class="terms">
				<input type="checkbox" required v-model="terms" />
				<label>Accept Terms and Conditions</label>
			</div>

			<!-- <div>
				<input type="checkbox" value="Juan" v-model="names" />
				<label>Juan</label>
			</div>
			<div>
				<input type="checkbox" value="Pedro" v-model="names" />
				<label>Pedro</label>
			</div>
			<div>
				<input type="checkbox" value="Fernando" v-model="names" />
				<label>Fernando</label>
			</div>
			<div>
				<input type="checkbox" value="Julian" v-model="names" />
				<label>Julian</label>
			</div> -->

			<p><button type="submit">Save</button></p>
		</form>
	</div>
</template>

<script setup>
	import { ref } from "@vue/reactivity"

	const email = ref("")
	const password = ref("")
	const role = ref("")
	const terms = ref(false)
	const names = ref([])
	const tempSkills = ref("")
	const skills = ref([])

	const addSkills = (e) => {
		if (e.key === "," && tempSkills.value) {
			if (!skills.value.includes(tempSkills.value)) {
				skills.value.push(tempSkills.value)
			}

			tempSkills.value = ""
		}
	}

	const deleteSkill = (value) => {
		skills.value = skills.value.filter(item => {
			return value !== item
		})
	}

	const save = () => {
		console.log(email.value)
		console.log(password.value)
		console.log(role.value)
		console.log(terms.value)
		console.log(names.value)
		console.log(tempSkills.value)
		console.log(skills.value)
	}
</script>

<style scoped>
	form {
		max-width: 420px;
		margin: 30px;
		background: white;
		text-align: left;
		padding: 40px;
		border-radius: 10px;
	}

	label {
		color: #aaa;
		display: inline-block;
		margin: 25px 0 15px;
		font-size: 0.6em;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-weight: blod;
	}

	input,
	select {
		display: block;
		padding: 10px 6px;
		width: 100%;
		box-sizing: border-box;
		border: none;
		border-bottom: 1px solid #ddd;
		color: #555;
	}

	input[type="checkbox"] {
		display: inline-block;
		width: 16px;
		margin: 0 10px 0 0;
		position: relative;
		top: 2px;
	}

	.pill {
		display: inline-block;
		margin: 20px 10px 0 0;
		padding: 6px 12px;
		background: #eee;
		border-radius: 20px;
		font-size: 12px;
		letter-spacing: 1px;
		font-weight: blod;
		color: #777;
		cursor: pointer;
	}
</style>
