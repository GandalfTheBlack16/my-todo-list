export interface TaskListApi {
    id: number;
    name: string;
    tasks: TaskApi[];
    createdAt: string;
    updatedAt: string;
}

export interface TaskApi {
    id: number;
    title: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
}