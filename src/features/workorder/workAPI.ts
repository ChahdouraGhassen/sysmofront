import {WorksState} from "./workorderSlice";
const API_URL = "http://localhost:3000";
export async function fetchWorkorders() {
    return fetch(`${API_URL}/bondetravails.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .catch((error) => {
          console.log("Error: ", error);
          return {} as WorksState;
        });
}
