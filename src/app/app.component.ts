import { Component } from '@angular/core';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InvestmentResultsComponent, UserInputComponent, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  // resultsData?: {
  //   year: number,
  //   totalAmountInvested: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number
  // }[];
}
