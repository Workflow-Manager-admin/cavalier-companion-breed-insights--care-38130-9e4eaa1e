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

  // Enhanced: Care Tips grouped by category for visual clarity
  careTipsIntro: string = "Cavalier King Charles Spaniels are loving and adaptable, but like all breeds, they thrive with dedicated care and attention. Here are some essential tips—grouped by category—to help your companion stay happy and healthy:";

  careTipCategories = [
    {
      name: 'Grooming',
      icon: '🧴',
      tips: [
        "Brush their silky coat 3–4 times a week to prevent matting and tangles.",
        "Bathe every 4–6 weeks using a gentle dog shampoo.",
        "Check and clean ears weekly to avoid infections.",
        "Trim nails regularly."
      ]
    },
    {
      name: 'Feeding',
      icon: '🍗',
      tips: [
        "Feed a high-quality, age-appropriate diet, split into 2 meals per day.",
        "Monitor calorie intake and limit treats to maintain a healthy weight.",
        "Avoid feeding table scraps."
      ]
    },
    {
      name: 'Exercise',
      icon: '🐾',
      tips: [
        "Provide daily walks (at least 30 minutes).",
        "Offer plenty of playtime—Cavaliers enjoy interactive games and gentle activities.",
        "Ensure secure spaces for safe off-leash play."
      ]
    },
    {
      name: 'Health',
      icon: '❤️',
      tips: [
        "Schedule regular veterinary checkups.",
        "Keep up with vaccinations and parasite prevention.",
        "Brush their teeth regularly to maintain dental health.",
        "Monitor for signs of heart or eye conditions common to the breed."
      ]
    }
  ];
}
