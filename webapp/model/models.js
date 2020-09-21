sap.ui.define([
  'sap/ui/model/json/JSONModel',
  'sap/ui/Device',
  'ui5/template/model/store'
], function (JSONModel, Device,
            Store) {
  'use strict';
  return {
    createDeviceModel() {
      const oModel = new JSONModel(Device);
      oModel.setDefaultBindingMode('OneWay');
      return oModel;
    },
    createStore() {
      const oStore = new Store({
        data: []
      });
      return oStore;
    }
  };
});
