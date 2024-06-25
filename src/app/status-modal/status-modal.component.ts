import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-status-modal',
  templateUrl: './status-modal.component.html',
  styleUrls: ['./status-modal.component.css']
})
export class StatusModalComponent implements OnInit {

  status: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.status = 'Open'; // Default status
  }

  closeModal() {
    this.activeModal.close();
  }

  selectStatus(status: string) {
    this.status = status;
    // You can also close the modal or do further processing here
    this.activeModal.close(this.status);
  }
}
