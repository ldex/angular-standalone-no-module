import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { NgIf } from "@angular/common";

@Component({
    selector: "app-error-dialog",
    templateUrl: "./error-dialog.component.html",
    styleUrls: ["./error-dialog.component.css"],
    standalone: true,
    imports: [MatDialogModule, NgIf, MatButtonModule]
})
export class ErrorDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { message: string; status?: number }
  ) {}
}
