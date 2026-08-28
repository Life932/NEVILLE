import { events } from "./events";
import { publications } from "./publications";
import { initiatives } from "./initiatives";

export const allActivities = [...events, ...publications, ...initiatives];
export { events, publications, initiatives };
