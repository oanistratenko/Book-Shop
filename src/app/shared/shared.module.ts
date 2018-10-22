import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ValidatorsDirective } from './directives/validators.directive';
import { PhonePipe } from './pipes/phone.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent, ValidatorsDirective, PhonePipe, HighlightDirective],
  exports: [FooterComponent, ValidatorsDirective, PhonePipe, HighlightDirective]
})
export class SharedModule { }
