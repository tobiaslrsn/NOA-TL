export interface IRepo {
  full_name: string;
  description: string;
  stargazers_count: number;
}

export const repositoryDefaultValues: IRepo = {
  full_name: "",
  description: "",
  stargazers_count: 0,
};
