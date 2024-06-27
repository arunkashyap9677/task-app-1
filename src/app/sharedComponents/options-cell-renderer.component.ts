import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-options-cell-renderer',
  template: ` <button mat-button (click)="openDialog()">Options</button> `,
})
export class OptionsCellRendererComponent implements ICellRendererAngularComp {
  private params!: ICellRendererParams;

  constructor(public dialog: MatDialog) {}

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams): boolean {
    this.params = params;
    return true;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(OptionsDialog, {
      width: '250px',
      data: { rowData: this.params.data },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Selected options:', result.selectedOptions);
        // Perform action based on selected options
        // Example: Call a method in your component to perform an action
        this.performAction(result.selectedOptions);
      }
    });
  }

  performAction(selectedOptions: string[]): void {
    // Example action: Log the selected options
    console.log('Performing action with selected options:', selectedOptions);
  }
}

@Component({
  selector: 'options-dialog',
  template: `
    <h1 mat-dialog-title>Options</h1>
    <div mat-dialog-content>
      <p>Option 1 for</p>
      <p>Option 2 for</p>
      <p>Option 3 for</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Close</button>
    </div>
  `,
})
export class OptionsDialog {
  constructor(
    public dialogRef: MatDialogRef<OptionsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
