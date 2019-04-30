import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WorkoutsComponent } from './containers/workouts/workouts.component';

export const ROUTES: Routes = [
	{ path: 'workouts', component: WorkoutsComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES)
	],
	declarations: [
		WorkoutsComponent
	]
})
export class WorkoutsModule {}
