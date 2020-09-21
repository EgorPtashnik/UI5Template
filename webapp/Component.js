sap.ui.define([
    'sap/ui/core/UIComponent',
    'ui5/template/model/models'
  ], function(UIComponent, models) {
    'use strict';
  
    return UIComponent.extend('ui5.template.Component', {
  
      metadata: {
        manifest: 'json'
      },
  
      init() {
        UIComponent.prototype.init.apply(this, arguments);  
        this.getRouter().initialize();

        this.setModel(models.createDeviceModel(), 'device');
      }
    });
  });
  