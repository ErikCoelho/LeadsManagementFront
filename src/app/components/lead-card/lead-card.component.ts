import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lead, ECategoryType } from '../../models/lead.model';

@Component({
  selector: 'app-lead-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lead-card.component.html',
  styleUrl: './lead-card.component.css'
})
export class LeadCardComponent {
  @Input() lead!: Lead;
  @Input() showActions: boolean = true;
  @Output() accept = new EventEmitter<string>();
  @Output() decline = new EventEmitter<string>();

  get isWaiting(): boolean {
    return this.lead.category === ECategoryType.Waiting;
  }

  get formattedDate(): string {
    return new Date(this.lead.dataCriacao).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }

  get categoryIcon(): string {
    switch (this.lead.category) {
      case ECategoryType.Waiting:
        return '🕐';
      case ECategoryType.Accepted:
        return '✅';
      case ECategoryType.Rejected:
        return '❌';
      default:
        return '📋';
    }
  }

  get hasDiscount(): boolean {
    return this.lead.price > 500 && this.isWaiting;
  }

  onAccept(): void {
    this.accept.emit(this.lead.id);
  }

  onDecline(): void {
    this.decline.emit(this.lead.id);
  }
} 