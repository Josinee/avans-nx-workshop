import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealDetailComponent } from './meal/meal-detail/meal-detail.component';
import { MealListComponent } from './meal/meal-list/meal-list.component';

import { MealService } from './meal/meal.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [CommonModule, HttpClientModule, MealDetailComponent],
    declarations: [MealListComponent],
    providers: [MealService],
    exports: [MealListComponent, MealDetailComponent],
})

export class FeaturesModule {}