import { AxiosInstance } from "axios";
import { baseAPIClient } from "../baseAPI.client";
import { QuestionModel } from "./questions.types";

export class QuestionsClient {
  baseAPIClient: AxiosInstance

  constructor() {
    this.baseAPIClient = baseAPIClient;
  }

  async getQuestionOfTheDay(): Promise<QuestionModel> {
    const response = await this.baseAPIClient.get('/questions/daily');
    return response.data;
  }
}