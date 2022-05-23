import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'new-shop';

  @ViewChild('appTitle', { static: false })
  nameParagraph!: ElementRef;

  ngAfterViewInit(): void {
    this.change();
  }

  private change(): void {
    if (this.nameParagraph !== undefined) {
      this.nameParagraph.nativeElement.textContent = 'Welcome to our shop ';
    }
  }
}
