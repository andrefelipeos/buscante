import {
  AnimationTriggerMetadata, animate, style, transition, trigger
} from "@angular/animations";

export const loadingCardsAnimationTrigger: AnimationTriggerMetadata = trigger(
  'loadingCardsAnimation',
  [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-50px)' }),
      animate(500, style({ opacity: 1, transform: 'none' }))
    ])
  ]
);
