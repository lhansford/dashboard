import { NASA_IMAGE_ENDPOINT, YNAB_API_URL, YNAB_BUDGET_ID, YNAB_INDIVIDUAL_ITEMS_CATEGORY_ID } from '../constants/constants';

export interface INasaImageResponse {
  explanation: string;
  title: string;
  url: string;
  hdurl: string;
}

interface IYnabCategoryResponse {
  data: {
    category_groups: {
      id: string;
      categories: IYnabCategory[];
    }[];
  }
}

export interface IYnabCategory {
  name: string;
  goal_target: number;
  balance: number;
  goal_percentage_complete: null | number;
};

export const getBackgroundImage = async (): Promise<INasaImageResponse> => {
  const response = await fetch(`${NASA_IMAGE_ENDPOINT}?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
  const text = await response.text();
  return JSON.parse(text) as INasaImageResponse;
}

export const getBudgetCategories = async (): Promise<IYnabCategory[]> => {
  const response = await fetch(`${YNAB_API_URL}/budgets/${YNAB_BUDGET_ID}/categories`, {
    headers: { Authorization: `Bearer ${process.env.REACT_APP_YNAB_ACCESS_TOKEN}` },
  });
  const { data: { category_groups: groups } } = await response.json() as IYnabCategoryResponse;
  const group = groups.find(({ id }) => id === YNAB_INDIVIDUAL_ITEMS_CATEGORY_ID);
  return group ? group.categories : [];
}
