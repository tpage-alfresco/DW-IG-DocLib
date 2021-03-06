import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
// import {RmFilePlanComponent} from 'ig-components/rm-file-plan';
import {DocumentList} from 'ng2-alfresco-documentlist';
import {AlfrescoApiService} from 'ng2-alfresco-core';

declare let __moduleName: string;

@Component({
    moduleId: __moduleName,
    selector: 'files-component',
    templateUrl: 'rm.component.html',
    styleUrls: ['rm.component.css']
})
export class RMComponent {
    currentPath: string = '/Sites/rm/documentLibrary';

    fileNodeId: any;
    fileShowed: boolean = false;
    versioning: boolean = false;
    jsAPI: any;
    breadcrumbPath: string;

    acceptedFilesType: string = '.jpg,.pdf,.js';

    @ViewChild(DocumentList)
    documentList: DocumentList;

    constructor(private router: Router,
                private apiService: AlfrescoApiService) {
        this.jsAPI = apiService.getInstance();
    }

    showFile(event) {
        if (event.value.entry.isFile) {
            this.fileNodeId = event.value.entry.id;
            this.fileShowed = true;
        } else {
            this.fileShowed = false;
        }
    }

    onFolderChanged(event?: any) {
        if (event) {
            this.currentPath = event.path;
            this.breadcrumbPath = event.path.replace('/Sites/rm/documentLibrary', '');
        }
    }
}
