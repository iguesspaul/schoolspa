import { TodoistApi } from '@doist/todoist-api-typescript';

export async function getTasks(apikey: any) {
	const api = new TodoistApi(apikey);
	const res: any = await api
		.getTasks()
		.then((tasks) => tasks)
		.catch((error) => console.log(error));
	const length: number = res.length;
	return { res, length };
}
