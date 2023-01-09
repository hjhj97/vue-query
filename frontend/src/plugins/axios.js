import router from '@/router';
import stores from '@/stores';
import axios from 'axios';

//axios.defaults.baseURL = 'https:///backevent.com/api'; // for deploy

axios.interceptors.response.use(
	(response) => {
		// interceptor를 통해 백엔드 API로부터 받은 값을 먼저 처리함
		// 2xx 범위에 있는 상태코드는 여기에서 실행됨

		return response;
	},
	(error) => {
		// 2xx 외의 범위에 있는 상태코드는 여기에서 실행됨
		//console.log(error);
		return error;
	},
);

export default axios;
