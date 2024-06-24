import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class TaskFilterComponent {
  dropdownOpen = false;
  selectedFilter: string | null = null;
isModalVisible: any;
onModalClosed: any;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectFilter(filter: string) {
    if (this.selectedFilter === filter) {
      this.selectedFilter = null;
    } else {
      this.selectedFilter = filter;
    }
  }

  clearFilter() {
    this.selectedFilter = null;
  }
}
