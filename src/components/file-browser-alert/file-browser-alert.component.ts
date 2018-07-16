/* ==================================================================================================== */
/* File Browser Alert Component                                     									*/
/* ==================================================================================================== */

import { Component } from "@angular/core";
import { AlertController } from "ionic-angular";
import { Store } from "@ngxs/store";
import {
	NewFolder,
	Rename,
	Delete,
	DeleteNodes
} from "../../states/file-browser.actions";

@Component({
	selector: "file-browser-alert",
	templateUrl: "file-browser-alert.html"
})
export class FileBrowserAlertComponent {
	constructor(public store: Store, public alertCtrl: AlertController) {}

	presentAlert(type, node) {
		let alert;
		switch (type) {
			case "new-folder": {
				alert = this.alertCtrl.create({
					title: "New Folder",
					message: "Enter the new folder name.",
					inputs: [
						{
							name: "folder_name",
							placeholder: "New Folder"
						}
					],
					buttons: [
						{
							text: "Cancel",
							role: "cancel"
						},
						{
							text: "Create",
							handler: data => this.newFolder(data, node)
						}
					]
				});
				break;
			}
			case "new-file": {
				alert = this.alertCtrl.create({
					title: "New File",
					message: "Enter the new file name.",
					inputs: [
						{
							name: "filename",
							placeholder: "New File"
						}
					],
					buttons: [
						{
							text: "Cancel",
							role: "cancel"
						},
						{
							text: "Create",
							handler: data => console.log(data)
						}
					]
				});
				break;
			}
			case "rename": {
				alert = this.alertCtrl.create({
					title: "Rename",
					message: "Enter a new name.",
					inputs: [
						{
							name: "name",
							placeholder: "Name"
						}
					],
					buttons: [
						{
							text: "Cancel",
							role: "cancel"
						},
						{
							text: "Rename",
							handler: data => this.rename(data, node)
						}
					]
				});
				break;
			}
			case "delete": {
				alert = this.alertCtrl.create({
					title: "Delete",
					message: "Are you sure to delete?",
					buttons: [
						{
							text: "No"
						},
						{
							text: "Yes",
							handler: () => this.delete(node)
						}
					]
				});
				break;
			}
		}

		alert.present();
	}

	newFolder(data, node) {
		this.store.dispatch(new NewFolder(node, data.folder_name));
	}

	rename(data, node) {
		this.store.dispatch(new Rename(node, data.name));
	}

	delete(node) {
		// this.store.dispatch(new Delete(node));
		this.store.dispatch(new DeleteNodes());
	}
}
