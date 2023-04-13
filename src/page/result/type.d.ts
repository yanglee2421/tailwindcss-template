export {};

export interface GlobalState {
  tab: number;
  isProd: boolean;
}

export interface Product {
  Title?: string;
  Keywords?: string[];
  Description?: string;
}

export interface formData {
  Product?: Product;
  Description?: string;
  Language?: string;
  Words?: number;
  Generate?: string[];
}

export interface Result {
  isLoading: boolean;
  isSuccess: boolean;
  data: Product;
  isError: boolean;
  error: any;
}
