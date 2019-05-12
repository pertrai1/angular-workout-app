import { Component } from '@angular/core';

import { Store } from 'store';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ScheduleService, ScheduleItem } from '../../../shared/services/schedule/schedule.service';
import { Meal, MealsService } from '../../../shared/services/meals/meals.service';
import { Workout, WorkoutsService } from '../../../shared/services/workouts/workouts.service';

@Component({
	selector: 'schedule',
	styleUrls: ['schedule.component.scss'],
	template: `
		<div class="schedule">

			<schedule-calendar
				[date]="date$ | async"
				[items]="schedule$ | async"
				(change)="changeDate($event)"
				(select)="changeSection($event)">
			</schedule-calendar>

			<schedule-assign
				*ngIf="open"
				[section]="selected$ | async"
				[list]="list$ | async"
				(update)="assignItem($event)"
				(cancel)="closeAssign()">
			</schedule-assign>

		</div>
	`
})
export class ScheduleComponent {

	open = false;

	date$: Observable<Date>;
	list$: Observable<Meal[] | Workout[]>;
	selected$: Observable<any>;
	schedule$: Observable<ScheduleItem[]>;
	subscriptions: Subscription[] = [];

	constructor(
		private mealService: MealsService,
		private scheduleService: ScheduleService,
		private store: Store,
		private workoutService: WorkoutsService
	) {}

	ngOnInit() {
		this.date$ = this.store.select('date');
		this.schedule$ = this.store.select('schedule');
		this.selected$ = this.store.select('selected');
		this.list$ = this.store.select('list');

		this.subscriptions = [
			this.scheduleService.schedule$.subscribe(),
			this.scheduleService.selected$.subscribe(),
			this.scheduleService.list$.subscribe(),
			this.scheduleService.items$.subscribe(),
			this.mealService.meals$.subscribe(),
			this.workoutService.workouts$.subscribe()
		];
	}

	ngOnDestroy() {
		this.subscriptions.forEach(sub => sub.unsubscribe());
	}

	changeDate(date: Date) {
		this.scheduleService.updateDate(date);
	}

	changeSection(event: any) {
		this.open = true;
		this.scheduleService.selectSection(event);
	}

	assignItem(items: string[]) {
		this.scheduleService.updateItems(items);
		this.closeAssign();
	}

	closeAssign() {
		this.open = false;
	}
}
