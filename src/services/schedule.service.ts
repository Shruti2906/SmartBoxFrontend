import axios from "axios";
import { environment } from "../environments/environment";
import storageService from "./storage.service";

const useScheduleService = axios.create({
  baseURL: environment.BASE_URL,
  headers: {
    authorization: storageService.getToken(),
  },
});

export const ScheduleService = {
  addTabletSchedule: async (tablet: {
    medicineName: string;
    day: string[] | never[];
    time: string;
    compartment: string;
    dose: string;
  }) => {
    try {
      const response = await useScheduleService.post(
        "/schedule/addTabletSchedule",
        tablet
      );
      console.log("success");
      return response.data;
    } catch (error) {
      console.log("error");
      throw new Error(
        (error as any).response?.data?.message || "failed to add schedule"
      );
    }
  },
};
