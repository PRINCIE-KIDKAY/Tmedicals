import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  images: any[] = [
    {
      src: '../assets/Tms pictures/WhatsApp Image 2024-04-27 at 13.02.35 (1).jpeg',
      alt: 'Image 1',
      title: 'Image 1',
      description: 'Description of Image 1'
    },
    // Add more image objects here following the same structure
    {
      src: '../assets/Tms pictures/trailer4.jpeg',
      alt: 'Image 2',
      title: 'Image 2',
      description: 'Description of Image 2'
    },

    {
      src: '../assets/Tms pictures/WhatsApp Image 2024-04-25 at 13.39.42 (1).jpeg',
      alt: 'Image 3',
      title: 'Image 3',
      description: 'Description of Image 3'
    },

    {
      src: '../assets/Tms pictures/WhatsApp Image 2024-04-25 at 13.36.24 (1).jpeg',
      alt: 'Image 4',
      title: 'Image 4',
      description: 'Description of Image 4'
    },

    {
      src: '../assets/Tms pictures/WhatsApp Image 2024-04-25 at 13.37.57 (1).jpeg',
      alt: 'Image 5',
      title: 'Image 5',
      description: 'Description of Image 5'
    },
    
    {
      src: '../assets/Tms pictures/WhatsApp Image 2024-04-27 at 13.02.33.jpeg',
      alt: 'Image 6',
      title: 'Image 6',
      description: 'Description of Image 6'
    },

    {
      src: '../assets/Tms pictures/WhatsApp Image 2024-04-27 at 13.10.56.jpeg',
      alt: 'Image 7',
      title: 'Image 7',
      description: 'Description of Image 7'
    },

    {
      src: '../assets/Tms pictures/trailer2.jpeg',
      alt: 'Image 8',
      title: 'Image 8',
      description: 'Description of Image 8'
    },

    {
      src: '../assets/Tms pictures/WhatsApp Image 2024-04-27 at 13.02.35.jpeg',
      alt: 'Image 9',
      title: 'Image 9',
      description: 'Description of Image 9'
    },

    {
      src: '../assets/Tms pictures/WhatsApp Image 2024-04-27 at 13.02.35 (2).jpeg',
      alt: 'Image 10',
      title: 'Image 10',
      description: 'Description of Image 10'
    },

    {
      src: '../assets/Tms pictures/WhatsApp Image 2024-04-27 at 13.10.57.jpeg',
      alt: 'Image 11',
      title: 'Image 11',
      description: 'Description of Image 11'
    },

    {
      src: '../assets/Tms pictures/WhatsApp Image 2024-04-27 at 13.02.35 (1).jpeg',
      alt: 'Image 12',
      title: 'Image 12',
      description: 'Description of Image 12'
    },
    // ... and so on
  ];
}

