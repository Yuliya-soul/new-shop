import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private fontWeight = "normal";
  private highlight="";

  constructor(private el: ElementRef) { }

  @HostBinding("style.fontWeight") get getFontWeight(){
      return this.fontWeight;
  }

  @HostBinding("style.backgroundColor") get getFontColor(){
    return this.highlight;
  }

  @HostBinding("style.cursor") get getCursor(){
      return "pointer";
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight='#E4E8EE';
     this.fontWeight ="bold";
  }

  @HostListener("mouseleave") onMouseLeave() {
      this.fontWeight = "normal";
      this.highlight='';
  }
}
