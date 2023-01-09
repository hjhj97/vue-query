import { defineStore } from 'pinia';

export const useAccountStore = defineStore('account', {
	state: () => {
		return {
			id: 0,
		};
	},
	actions: {
		setId(payload) {
			this.id = payload;
		},
	},
});
