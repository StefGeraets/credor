import { Class } from "../global";
import { API_URL } from "./constants";

export const API = {
  doRequest: async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      );
    }
    const data = response.json();

    return data;
  },
};

export const getByClass = async (playerClass: Class) => {
  return await API.doRequest(
    `${API_URL}/classes/${playerClass.toLocaleLowerCase()}`
  );
};

export const getByClassLevel = async (
  playerClass: Class,
  level: number
): Promise<any> => {
  return API.doRequest(
    `${API_URL}/classes/${playerClass.toLowerCase()}/levels/${level}`
  );
};

export const getProficiencyBonus = async (
  playerClass: Class,
  level: number
) => {
  let profBonus = 0;
  await getByClassLevel(playerClass, level).then((data) => {
    profBonus = data.prof_bonus as number;
  });
  return profBonus;
};
