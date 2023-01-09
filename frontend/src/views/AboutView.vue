<template>
	<div class="">
		<h1>List</h1>
		<h2 v-if="isLoading">Loading...</h2>
		<h2 v-else-if="isError">Error</h2>
		<ul v-else>
			<div>
				<input type="text" placeholder="name" v-model="name" />
				<input type="text" placeholder="age" v-model="age" />
				<button @click="onClickAdd">Add</button>
			</div>
			<li v-for="(item, idx) in list" :key="idx">
				<span>{{ item.name }} - {{ item.age }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	import { onMounted, ref } from 'vue';
	import { QueryClient, useMutation, useQuery } from 'vue-query';

	export default {
		setup() {
			const name = ref('');
			const age = ref('');
			const {
				data: list,
				isLoading,
				isError,
			} = useQuery('get-list', () => {
				return new Promise((resolve, reject) => {
					axios.get('/getList').then((res) => resolve(res));
				});
			});

			const useAddItemMutation = () => {
				return useMutation((item) => axios.post('/addItem', item));
			};

			const { mutate } = useAddItemMutation();

			const onClickAdd = () => {
				mutate(
					{ name: name.value, age: age.value },
					{
						onSuccess() {
							name.value = '';
							age.value = '';
						},
					},
				);
			};

			return {
				isLoading,
				isError,
				list,
				name,
				age,
				//
				onClickAdd,
			};
		},
	};
</script>
