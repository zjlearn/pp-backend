import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatToolbarModule, MatIconModule,
  MatCardModule, MatSidenavModule, MatInputModule, MatTooltipModule, MatOptionModule, MatSelectModule, MatStepperModule,
  MatListModule, MatProgressBarModule, MatPaginatorModule, MatProgressSpinnerModule, MatCheckboxModule, MatSortModule, MatTableModule,
  MatTabsModule, MatButtonToggleModule, MatMenuModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatStepperModule,
    MatListModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonToggleModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatStepperModule,
    MatListModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonToggleModule,
    BrowserAnimationsModule
  ],
  declarations: []
})
export class MaterialModule {
}
