import {CommandesState} from "./commandeorderSlice";
const API_URL = "http://localhost:3000";
export async function fetchCommandeOrders() {
    return fetch(`${API_URL}/commandeorders.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .catch((error) => {
          console.log("Error: ", error);
          return {} as CommandesState;
        });
}
