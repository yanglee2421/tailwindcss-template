// Pinia Imports
import { createPinia } from "pinia";
import persist from "pinia-plugin-persist";

export const Pinia = createPinia();
Pinia.use(persist);
