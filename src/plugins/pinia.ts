// Pinia Imports
import { createPinia } from "pinia";
import persist from "pinia-plugin-persist";

export const pinia = createPinia();
pinia.use(persist);
