import { InjectionToken } from "@angular/core";
import { QuestionRepository } from "./core/repositories/question.repository";


export const IQuestionRepository = new InjectionToken<QuestionRepository>('QuestionRepository');


