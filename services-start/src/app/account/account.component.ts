import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoggingService} from './services/logging/logging.service';
import {AccountsService} from './services/accounts/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(private accountsServices: AccountsService) {
  }

  onSetTo(status: string) {
    this.accountsServices.updateStatus(this.id, status);
  }
}
