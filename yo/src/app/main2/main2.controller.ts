/// <reference path="../../../typings/main.d.ts"/>

import { WebDevTecService, ITecThing } from '../components/webDevTec/webDevTec.service';
import { FakeData } from '../components/fakeData/fakeData.service';
import { IMasterScope } from '../model/IMasterScope';
import dx = DevExpress.ui;


export class Main2Controller {
  public awesomeThings: ITecThing[];
  public webDevTec: WebDevTecService;
  public classAnimation: string;
  public creationDate: number;
  public toastr: any;

  /* @ngInject */
  constructor ($rootScope : IMasterScope, $timeout: angular.ITimeoutService, webDevTec: WebDevTecService, toastr: any, fakeData : FakeData) {
    this.awesomeThings = new Array();
    this.webDevTec = webDevTec;
    this.classAnimation = '';
    this.creationDate = 1461251426292;
    this.toastr = toastr;
    this.activate($timeout);
    
    if($rootScope.idArquivo == null) {
        $rootScope.idArquivo = 0;
    } else {
        $rootScope.idArquivo = $rootScope.idArquivo + 1;
    }
    
    DevExpress.ui.dialog.alert("main2 - teste masterScope - " + $rootScope.idArquivo, 'Showwww');
  }

  /** @ngInject */
  activate($timeout: angular.ITimeoutService) {
    this.getWebDevTec();

    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }

  getWebDevTec() {
    this.awesomeThings = this.webDevTec.tec;
  }
}
