import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-profile';

  modalImageSrc: string = '';
  modalImageAlt: string = '';

  openModal(imageSrc: string, imageAlt: string): void {
    this.modalImageSrc = imageSrc;
    this.modalImageAlt = imageAlt;

    // Ativando o modal
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const bootstrapModal = new bootstrap.Modal(modalElement);
      bootstrapModal.show();
    }
  }
}
