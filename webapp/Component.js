sap.ui.define([
    'sap/ui/core/UIComponent'
  ], function(UIComponent) {
    'use strict';
  
    return UIComponent.extend('ui5.template.Component', {
  
      metadata: {
        manifest: 'json'
      },
  
      init() {
        UIComponent.prototype.init.apply(this, arguments);  
        this.getRouter().initialize();
      }
    });
  });
  