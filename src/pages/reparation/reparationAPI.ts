import { ReparationState } from "./reparationSlice";
const API_URL = "http://localhost:3000/api/v1";

export async function fetchReparations() {
    return fetch(`${API_URL}/reparations.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log("Error: ", error);
        return {} as ReparationState;
      });
  }