export interface ICategoryResponse extends ISubCategories {
  subCategories: ISubCategories[];
}

export interface ISubCategories {
  id: string;
  name: string;
}
