/// <reference path="../../../typings/main.d.ts"/>

import { WebDevTecService, ITecThing } from '../components/webDevTec/webDevTec.service';
import { FakeData } from '../components/fakeData/fakeData.service';
import { IMasterScope } from '../model/IMasterScope';
import dx = DevExpress.ui;


export class MainController {
  public awesomeThings: ITecThing[];
  public webDevTec: WebDevTecService;
  public classAnimation: string;
  public creationDate: number;
  public toastr: any;
  public dxFileUpOptions : dx.dxFileUploaderOptions;
  public dxFileUpBtnOptions : dx.dxButtonOptions;
  public tokenSMS : string;

  public dxGridOptions : dx.dxDataGridOptions;
  public dxGridDetailOptions : dx.dxDataGridOptions;
  public dxGridCompletedValue : any;
  public fakeData : FakeData;
  public fileInput : HTMLInputElement;
  public fileList : FileList;

  /* @ngInject */
  constructor ($rootScope : IMasterScope, $timeout: angular.ITimeoutService, webDevTec: WebDevTecService, toastr: any, fakeData : FakeData) {
    this.awesomeThings = new Array();
    this.webDevTec = webDevTec;
    this.classAnimation = '';
    this.creationDate = 1461251426292;
    this.toastr = toastr;
    this.activate($timeout);
    this.fakeData = fakeData;
    this.dxFileUpOptions = {};
    this.dxFileUpBtnOptions = {};
    this.dxGridOptions = {};
    
    this.startDxComponents();
    
    if($rootScope.idArquivo == null) {
        $rootScope.idArquivo = 0;
    } else {
        $rootScope.idArquivo = $rootScope.idArquivo + 1;
        DevExpress.ui.dialog.alert("main1 - teste masterScope - " + $rootScope.idArquivo, 'Showwww');
    }
  }

  /** @ngInject */
  activate($timeout: angular.ITimeoutService) {
    this.getWebDevTec();

    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  startDxComponents() {

    // =====================================================

    this.tokenSMS = '';
    this.dxFileUpOptions.labelText = 'ou arraste aqui';
    this.dxFileUpOptions.accept = '*.*';
    this.dxFileUpOptions.name = 'myFiles[]';
    this.dxFileUpOptions.values = [];
    this.dxFileUpOptions.uploadMode = 'uploadMode';
    this.dxFileUpOptions.multiple = true;
    this.dxFileUpOptions.showFileList = true;
    this.dxFileUpOptions.selectButtonText = 'Selecionar arquivos';
    this.dxFileUpOptions.readyToUploadMessage = "Pronto"

    this.dxFileUpBtnOptions.text = 'Enviar arquivos';
    this.dxFileUpBtnOptions.type = 'success';

    // =====================================================

    this.dxGridOptions.dataSource = {};
    this.dxGridOptions.dataSource.store = {};
    this.dxGridOptions.dataSource.store.type = 'array';
    this.dxGridOptions.dataSource.store.key = 'ID';
    this.dxGridOptions.dataSource.store.data = this.fakeData.getEmployees();
    //this.dxGridOptions.grouping.autoExpandAll = false;

    this.dxGridOptions.columns = [{
                                      dataField: "Prefix",
                                      caption: "Title",
                                      width: 70
                                  },
                                  "FirstName",
                                  "LastName", {
                                      dataField: "Position",
                                      width: 170
                                  }, {
                                      dataField: "State",
                                      width: 125
                                  }, {
                                      dataField: "BirthDate",
                                      dataType: "date"
                                  }
                              ];

    this.dxGridOptions.masterDetail = {};
    this.dxGridOptions.masterDetail.enabled = true;
    this.dxGridOptions.masterDetail.template = 'detail';

    this.dxGridCompletedValue = function(rowData) {
        return rowData.Status == "Completed";
    };

    /*
    dx-data-grid="{
				dataSource: data.Tasks,
				columnAutoWidth: true,
                columns: ['Subject', {
                    dataField: 'StartDate',
                    dataType: 'date'
                }, {
                    dataField: 'DueDate',
                    dataType: 'date'
                }, 'Priority', {
                    caption: 'Completed',
                    dataType: 'boolean',
                    calculateCellValue: $parent.completedValue
                }]                
			}"
    
    
    
    
    $scope.gridOptions = {
        dataSource: {
            store: {
                type: "array",
                key: "ID",
                data: employees
            }
        },
        columns: [{
                dataField: "Prefix",
                caption: "Title",
                width: 70
            },
            "FirstName",
            "LastName", {
                dataField: "Position",
                width: 170
            }, {
                dataField: "State",
                width: 125
            }, {
                dataField: "BirthDate",
                dataType: "date"
            }
        ],
        masterDetail: {
            enabled: true,
            template: "detail"
        }
    };

    $scope.completedValue = function(rowData) {
        return rowData.Status == "Completed";
    };
    */
  }

  testeFormSubmit() {
    
    //this.fileInput = <HTMLInputElement> document.getElementsByName(this.dxFileUpOptions.name)[0];
    //this.fileList = this.fileInput.files;
    
    var uploadForm : HTMLFormElement = <HTMLFormElement> document.getElementById('upForm');
    this.fakeData.uploadFiles(uploadForm);
    DevExpress.ui.dialog.alert("chamada rest efetuada! ", 'Showwww');
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }

  getWebDevTec() {
    this.awesomeThings = this.webDevTec.tec;
  }
}
