/* ==================================================================================================== */
/* Node Sorting Service 																				*/
/* ==================================================================================================== */
/* Service to sort nodes in ascending or descending order                                               */
/* ==================================================================================================== */

/* Module imports */
import { Injectable } from "@angular/core";
/* State imports */
import { NodeEntity } from "../states/file-browser.model";

@Injectable()
export class NodeSortingService {
	private nodes: NodeEntity[];

	constructor() {}

	compareNamesAsc(a, b) {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	}

	compareNamesDesc(a, b) {
		if (a.name < b.name) return 1;
		if (a.name > b.name) return -1;
		return 0;
	}

	sortNodes(sort, array) {
		this.nodes = array;

		const folderNodes = this.nodes.filter(a => a.type === "folder");
		const otherNodes = this.nodes.filter(a => a.type !== "folder");

		switch (sort) {
			case "asc": {
				folderNodes.sort(this.compareNamesAsc);
				otherNodes.sort(this.compareNamesAsc);
				this.nodes = folderNodes.concat(otherNodes);
				break;
			}
			case "desc": {
				folderNodes.sort(this.compareNamesDesc);
				otherNodes.sort(this.compareNamesDesc);
				this.nodes = folderNodes.concat(otherNodes);

				break;
			}
			default: {
				folderNodes.sort(this.compareNamesAsc);
				otherNodes.sort(this.compareNamesAsc);
				this.nodes = folderNodes.concat(otherNodes);
				break;
			}
		}

		return this.nodes;
	}
}
