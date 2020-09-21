sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/routing/History',
    'sap/ui/core/UIComponent',
  ], function(Controller, History, UIComponent) {
    "use strict";
  
    return Controller.extend("client.controller.BaseController", {
      onInit() {
        this.oDeviceModel = this.getOwnerComponent().getModel('device');
        this.getView().addStyleClass(this._getDensityClass());
      },
      _getDensityClass() {
        this.oDeviceModel = this.getOwnerComponent().getModel('device');
        return this.oDeviceModel.getProperty('/support/touch')? 'sapUiSizeCozy' : 'sapUiSizeCompact';
      },
      getModel(sName) {
        return this.getView().getModel(sName);
      },
      setModel(oModel, sName) {
        return this.getView().setModel(oModel, sName);
      },
      getResourceBundle() {
        return this.getOwnerComponent().getModel("i18n").getResourceBundle();
      },
      navTo(psTarget, pmParameters, pbReplace) {
        this.getRouter().navTo(psTarget, pmParameters, pbReplace);
      },
      getRouter() {
        return UIComponent.getRouterFor(this);
      },
      onNavBack() {
        const sPreviousHash = History.getInstance().getPreviousHash();
        if (sPreviousHash !== undefined) window.history.back();
        else this.getRouter().navTo('home', {}, true );
      },
    });
  });