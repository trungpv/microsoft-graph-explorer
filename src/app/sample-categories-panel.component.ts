// ------------------------------------------------------------------------------
//  Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.  See License in the project root for license information.
// ------------------------------------------------------------------------------

import { Component, AfterViewInit } from '@angular/core';
import { GraphExplorerComponent } from "./GraphExplorerComponent";
import { SampleQueryCategory } from "./base";
import { SampleCategories, saveCategoryDisplayState } from "./getting-started-queries";

declare let mwf:any;

@Component({
  selector: 'sample-categories-panel',
  styleUrls: ['./sample-categories-panel.component.css'],
  templateUrl: './sample-categories-panel.component.html',
})
export class SampleCategoriesPanelComponent extends GraphExplorerComponent implements AfterViewInit {

    ngAfterViewInit(): void {
        mwf.ComponentFactory.create([{
            'component': mwf.Toggle,
        }])
    }

    toggleCategory(category:SampleQueryCategory) {
        category.enabled = !category.enabled;
        saveCategoryDisplayState(category);
    }

    categories:SampleQueryCategory[] = SampleCategories;
}