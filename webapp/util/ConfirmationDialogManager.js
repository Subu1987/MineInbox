/*
 * Copyright (C) 2009-2020 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.define([
	"sap/ui/base/Object",
	"sap/m/Button",
	"sap/m/Dialog",
	"sap/m/Text",
	"sap/m/TextArea",
	"sap/m/Label"
], function(Object, Button, Dialog, Text, TextArea, Label) {
	"use strict";
	return {
		getI18nBundle: function() {
			return sap.ca.scfld.md.app.Application.getImpl().AppI18nModel.getResourceBundle();
		},
		showDecisionDialog: function(oDialogSettings) {
			oDialogSettings = this._initializeDialogSettings(oDialogSettings);
			var oDialog = this._createConfirmationDialog(oDialogSettings.noteMandatory, oDialogSettings.question, oDialogSettings.title, oDialogSettings.confirmButtonLabel, oDialogSettings.showNote, oDialogSettings.textAreaLabel);
			oDialog.getBeginButton().attachPress(jQuery.proxy(function(oEvent) {
						var sNote;
						if(oDialogSettings.showNote){
							sNote = sap.ui.getCore().byId('confirmDialogTextarea').getValue();
						}
						if(!sNote){
							sNote = "";
						}
						oDialogSettings.confirmActionHandler(sNote);
						oEvent.getSource().getParent().close();
					}, this));
			oDialog.open();
		},
		
		_initializeDialogSettings: function(oDialogSettings){
			return jQuery.extend({
				noteMandatory: false,
				question: "",
				title: "",
				confirmButtonLabel: "",
				showNote: false,
				confirmActionHandler : function(){ 
					return;
				}
			},oDialogSettings);
		},
		
		_createConfirmationDialog: function(bNoteMandatory, sQuestion, sTitle, sButtonLabel, bShowNote, sTextAreaLabel){
			var aContent;
			var option="";
			if(sQuestion.indexOf("Approve") != -1){
				option="Approved";
				bNoteMandatory=false;
			}else if(sQuestion.indexOf("Reject") != -1){
				option="Rejected";
				bNoteMandatory=false;
			} 
			//console.log("Option collected: "+option);
			if(bShowNote){
				aContent = [
					new Text("confirmDialogText", {
						text: sQuestion
					}),
					new sap.m.FlexBox({
						items: [
							new Label("label_confirmDialogTextarea",{
								labelFor: "confirmDialogTextarea", 
								text: sTextAreaLabel,
								required : bNoteMandatory
							}),						
							new TextArea("confirmDialogTextarea", {
								liveChange: function(oEvent) {
									var sText = oEvent.getParameter('value');
									var oDialogControl = oEvent.getSource().getParent().getParent();
								
									if (bNoteMandatory) {
										oDialogControl.getBeginButton().setEnabled(sText.trim().length > 0);
									}
								},
								value:option,
								maxLength: 10000,
								width: '100%',
								placeholder: this.getI18nBundle().getText(bNoteMandatory ? "XMSG_COMMENT_MANDATORY" : "XMSG_COMMENT_OPTIONAL")
							})
						],
						direction: "Column"
					})   
				];
			}else{
				aContent = [
					new Text("confirmDialogText", {
						text: sQuestion
					})
				];
			}
			
			var oDialog = new Dialog({
				title: sTitle,
				type: 'Message',
				content: aContent,             
				beginButton: new Button({
					text: sButtonLabel,
					tooltip:this.getI18nBundle().getText("submit.request"),
					enabled: !bNoteMandatory
				}),
				endButton: new Button({
					text: this.getI18nBundle().getText("XBUT_CANCEL"),
					tooltip:this.getI18nBundle().getText("cancel.request"),
					press: function(oEvent) {
						oDialog.close();
					}
				}),
				afterClose: function(oEvent) {
					oEvent.getSource().destroyContent();
				}
			});
			oDialog.addAriaDescribedBy("confirmDialogText");
			return oDialog;
		}
	};
}, true);