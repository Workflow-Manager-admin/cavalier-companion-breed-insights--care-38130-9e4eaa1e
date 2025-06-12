import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css',
  standalone: true
})
/**
 * The main informational container for Cavalier Companion: Breed Insights & Care.
 * Contains the header, hero image, breed overview, image gallery, and care tips.
 */
export class MainContainerComponent {
  breedOverview = {
    name: 'Cavalier King Charles Spaniel',
    origin: 'United Kingdom',
    temperament: 'Affectionate, Gentle, Friendly, Playful, Adaptable',
    description: `The Cavalier King Charles Spaniel is known for its affectionate nature and elegant appearance. With expressive eyes and beautiful, silky coats, they make wonderful companions and thrive in family environments. The breed is sociable, enjoys company, and adapts well to various living situations.`
  };

  imageGallery = [
    {
      url: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=480&q=80',
      alt: 'Cavalier King Charles Spaniel sitting outdoors'
    },
    {
      url: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=480&q=80',
      alt: 'Cavalier King Charles Spaniel close-up'
    },
    {
      url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=480&q=80',
      alt: 'Cavalier King Charles Spaniel running on grass'
    }
  ];

  careTips = [
    {
      title: 'Grooming',
      details: 'Brush their silky coat several times a week to prevent matting. Check and clean their ears regularly.'
    },
    {
      title: 'Feeding',
      details: 'Feed a balanced, age-appropriate diet. Monitor treats and meal portions to prevent obesity.'
    },
    {
      title: 'Exercise',
      details: 'Daily walks and playtime are essential. Cavaliers enjoy gentle exercise and interactive games.'
    }
  ];
}
