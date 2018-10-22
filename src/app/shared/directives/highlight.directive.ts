import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('bold');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('normal');
  }

  highlight(weight) {
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', weight);
  }
}
