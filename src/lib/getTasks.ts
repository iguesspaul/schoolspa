import { TodoistApi } from '@doist/todoist-api-typescript';

export async function getTasks(apikey: any) {
	const api = new TodoistApi(apikey);
	const res = await api
		.getTasks()
		.then((tasks) => tasks)
		.catch((error) => {
			console.log(error);
			throw error(404);
		});
	return { res: res };
}
