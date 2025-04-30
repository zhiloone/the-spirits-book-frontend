import { AxiosInstance } from "axios";
import { baseAPIClient } from "../baseAPI.client";
import { QuestionModel } from "./questions.types";
import { getCurrentDateString } from "@/utils";

export class QuestionsClient {
  baseAPIClient: AxiosInstance

  constructor() {
    this.baseAPIClient = baseAPIClient;
  }

  async getQuestionOfTheDay(): Promise<QuestionModel> {
    const currentDate = getCurrentDateString("en-CA");  // YYYY-MM-DD
    const response = await this.baseAPIClient.get('/questions/daily', { params: { requested_date: currentDate } });
    return response.data;
  }
}