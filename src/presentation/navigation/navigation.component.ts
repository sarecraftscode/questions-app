import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { QuestionState } from '../state/question.state';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class NavigationComponent {
  constructor(
    private router: Router,
    private state: QuestionState,
  ) {}

  goToQuestions() {
    this.state.resetCategory();
    this.router.navigate(['/questions']);
  }
}
