export interface ICategoryResponse extends ISubCategories {
  subCategories: ISubCategories[];
}

interface ISubCategories {
  id: string;
  name: string;
}
