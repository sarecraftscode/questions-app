import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
    selector: 'app-pricing-page',
    templateUrl: './pricing-page.component.html',
    standalone: true,
    imports: [RouterLink]
})
export class PricingPageComponent {}
