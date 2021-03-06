/* ==================================================================================================== */
/* File Browser Module	 																				*/
/* ==================================================================================================== */

/* Module imports */
import { IonicModule, IonicErrorHandler } from "ionic-angular";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, ModuleWithProviders, ErrorHandler } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
/* Service imports */
import { FileBrowser } from "../services/file-browser.service";
import { NodeSortingService } from "../services/node-sorting.service";
/* State imports */
import { FileBrowserState } from "../states/file-browser.state";
/* Component imports */
import { FileBrowserActionSheetComponent } from "../components/file-browser-action-sheet/file-browser-action-sheet.component";
import { FileBrowserActionSheetMobileComponent } from "../components/file-browser-action-sheet/file-browser-action-sheet-mobile.component";
import { FileBrowserAlertComponent } from "../components/file-browser-alert/file-browser-alert.component";
import { FileBrowserContainerComponent } from "../components/file-browser-container/file-browser-container.component";
import { FileBrowserContainerCoreComponent } from "../components/file-browser-container/file-browser-container-core.component";
import { FileBrowserContainerMobileComponent } from "../components/file-browser-container/file-browser-container-mobile.component";
import { FileBrowserHeaderComponent } from "../components/file-browser-header/file-browser-header.component";
import { FileBrowserHistoryComponent } from "../components/file-browser-history/file-browser-history.component";
import { FileBrowserIconComponent } from "../components/file-browser-icon/file-browser-icon.component";
import { FileBrowserListComponent } from "../components/file-browser-list/file-browser-list.component";
import { FileBrowserListMobileComponent } from "../components/file-browser-list/file-browser-list-mobile.component";
import { FileBrowserTreeComponent } from "../components/file-browser-tree/file-browser-tree.component";

@NgModule({
	imports: [
		IonicModule,
		BrowserModule,
		BrowserAnimationsModule,
		NgxsModule.forRoot([FileBrowserState]),
		NgxsLoggerPluginModule.forRoot()
	],
	declarations: [
		FileBrowserActionSheetComponent,
		FileBrowserActionSheetMobileComponent,
		FileBrowserAlertComponent,
		FileBrowserContainerComponent,
		FileBrowserContainerCoreComponent,
		FileBrowserContainerMobileComponent,
		FileBrowserHeaderComponent,
		FileBrowserHistoryComponent,
		FileBrowserIconComponent,
		FileBrowserListComponent,
		FileBrowserListMobileComponent,
		FileBrowserTreeComponent
	],
	exports: [
		FileBrowserActionSheetComponent,
		FileBrowserActionSheetMobileComponent,
		FileBrowserAlertComponent,
		FileBrowserContainerComponent,
		FileBrowserContainerCoreComponent,
		FileBrowserContainerMobileComponent,
		FileBrowserHeaderComponent,
		FileBrowserHistoryComponent,
		FileBrowserIconComponent,
		FileBrowserListComponent,
		FileBrowserListMobileComponent,
		FileBrowserTreeComponent
	],
	entryComponents: [
		FileBrowserContainerComponent,
		FileBrowserContainerCoreComponent,
		FileBrowserContainerMobileComponent
	]
})
export class FileBrowserModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: FileBrowserModule,
			providers: [
				FileBrowser,
				NodeSortingService,
				{ provide: ErrorHandler, useClass: IonicErrorHandler }
			]
		};
	}
}
