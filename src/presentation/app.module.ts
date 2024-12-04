import { InjectionToken } from "@angular/core";
import { QuestionRepository } from "../domain/repositories/question.repository";


export const IQuestionRepository = new InjectionToken<QuestionRepository>('QuestionRepository');


