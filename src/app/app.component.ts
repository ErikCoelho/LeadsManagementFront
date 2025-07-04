import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lead, ECategoryType } from './models/lead.model';
import { LeadService } from './services/lead.service';
import { LeadCardComponent } from './components/lead-card/lead-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LeadCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Lead Management';
  
  activeTab: 'invited' | 'accepted' = 'invited';
  waitingLeads: Lead[] = [];
  acceptedLeads: Lead[] = [];
  loading = false;
  error: string | null = null;

  constructor(private leadService: LeadService) {}

  ngOnInit(): void {
    this.loadLeads();
  }

  setActiveTab(tab: 'invited' | 'accepted'): void {
    this.activeTab = tab;
    this.loadLeads();
  }

  loadLeads(): void {
    this.loading = true;
    this.error = null;

    if (this.activeTab === 'invited') {
      this.leadService.getWaitingLeads().subscribe({
        next: (leads) => {
          this.waitingLeads = leads;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Erro ao carregar leads aguardando';
          this.loading = false;
          console.error('Error loading waiting leads:', error);
        }
      });
    } else {
      this.leadService.getAcceptedLeads().subscribe({
        next: (leads) => {
          this.acceptedLeads = leads;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Erro ao carregar leads aceitos';
          this.loading = false;
          console.error('Error loading accepted leads:', error);
        }
      });
    }
  }

  onAcceptLead(leadId: string): void {
    this.leadService.updateLead(leadId, { category: ECategoryType.Accepted }).subscribe({
      next: () => {
        // Remove from waiting leads
        this.waitingLeads = this.waitingLeads.filter(lead => lead.id !== leadId);
        // Reload accepted leads if on that tab
        if (this.activeTab === 'accepted') {
          this.loadLeads();
        }
      },
      error: (error) => {
        this.error = 'Erro ao aceitar lead';
        console.error('Error accepting lead:', error);
      }
    });
  }

  onDeclineLead(leadId: string): void {
    this.leadService.updateLead(leadId, { category: ECategoryType.Rejected }).subscribe({
      next: () => {
        // Remove from waiting leads
        this.waitingLeads = this.waitingLeads.filter(lead => lead.id !== leadId);
      },
      error: (error) => {
        this.error = 'Erro ao recusar lead';
        console.error('Error declining lead:', error);
      }
    });
  }

  get currentLeads(): Lead[] {
    return this.activeTab === 'invited' ? this.waitingLeads : this.acceptedLeads;
  }

  get waitingCount(): number {
    return this.waitingLeads.length;
  }

  get acceptedCount(): number {
    return this.acceptedLeads.length;
  }

  trackByLeadId(index: number, lead: Lead): string {
    return lead.id;
  }
}
