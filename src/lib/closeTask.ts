import { TodoistApi } from '@doist/todoist-api-typescript';
export async function closeTask(id: string, apikey: any) {
	const api = new TodoistApi(apikey);
	await api
		.closeTask(id)
		.then((isSuccess) => console.log(`Did the task close: ${isSuccess}`))
		.catch((error) => console.log(error));
}
