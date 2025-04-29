import { AxiosInstance } from "axios";
import { baseAPIClient } from "../baseAPI.client";
import { QuestionModel } from "./questions.types";

export class QuestionsClient {
  baseAPIClient: AxiosInstance

  constructor() {
    this.baseAPIClient = baseAPIClient;
  }

  async getQuestionOfTheDay(): Promise<QuestionModel> {
    // Gets the current date in YYYY-MM-DD format using browser timezone
    const currentDate = new Intl.DateTimeFormat('en-CA').format(new Date());
    const response = await this.baseAPIClient.get('/questions/daily', { params: { requested_date: currentDate } });
    return response.data;
  }
}