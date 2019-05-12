import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ScheduleAssignComponent } from './components/schedule-assign/schedule-assign.component';
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';
import { ScheduleDaysComponent } from './components/schedule-days/schedule-days.component';
import { ScheduleControlsComponent } from './components/schedule-controls/schedule-controls.component';
import { ScheduleSectionComponent } from './components/schedule-section/schedule-section.component';
import { ScheduleComponent } from './containers/schedule/schedule.component';


export const ROUTES: Routes = [
	{ path: '', component: ScheduleComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
		SharedModule
	],
	declarations: [
		ScheduleAssignComponent,
		ScheduleComponent,
		ScheduleCalendarComponent,
		ScheduleControlsComponent,
		ScheduleDaysComponent,
		ScheduleSectionComponent
	]
})
export class ScheduleModule {}
