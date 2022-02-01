jQuery.sap.require("cross.fnd.fiori.inbox.ZCA_FIORI_INBOXExtension2.util.ConfirmationDialogManager");
sap.ui.controller("cross.fnd.fiori.inbox.ZCA_FIORI_INBOXExtension2.view.S3Custom", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf cross.fnd.fiori.inbox.ZCA_FIORI_INBOXExtension2.view.S3Custom
	 */
	//	onInit: function() {
	//
	//	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf cross.fnd.fiori.inbox.ZCA_FIORI_INBOXExtension2.view.S3Custom
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf cross.fnd.fiori.inbox.ZCA_FIORI_INBOXExtension2.view.S3Custom
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf cross.fnd.fiori.inbox.ZCA_FIORI_INBOXExtension2.view.S3Custom
	 */
	//	onExit: function() {
	//
	//	},
	oConfirmationDialogManager: cross.fnd.fiori.inbox.ZCA_FIORI_INBOXExtension2.util.ConfirmationDialogManager,

	//	onTaskCollectionFailed: function() {
	//
	//	}
	//	onShowReleaseLoaderOnInfoTab: function(c, e, v) {
	//
	//	}
	//	onShowReleaseLoader: function(c, e, v) {
	//
	//	}
	//	createGenericAttachmentComponent: function(v) {
	//
	//	}
	//	createGenericCommentsComponent: function(v) {
	//
	//	}
	//	handleNavToDetail: function(e) {
	//
	//	}
	//	fnPerpareToRefreshData: function(c, i, s) {
	//
	//	}
	//	fnIsTaskInstanceAllowed: function(i, d) {
	//
	//	}
	//	fnGetUploadUrl: function(c) {
	//
	//	}
	//	fnCreateAttachmentHandle: function(c) {
	//
	//	}
	//	fnRenderComponent: function(c) {
	//
	//	}
	//	generateEscapedComponentKey: function(u) {
	//
	//	}
	//	fnParseComponentParameters: function(r) {
	//
	//	}
	//	fnCloneTaskModel: function(t) {
	//
	//	}
	//	fnShowHideDetailScrollBar: function(s) {
	//
	//	}
	//	switchToOutbox: function() {
	//
	//	}
	//	_updateDetailModel: function(i, m) {
	//
	//	}
	//	refreshData: function(r, d) {
	//
	//	}
	//	fnHandleIntentValidationAndNavigation: function(U, d, D, i, r, s) {
	//
	//	}
	//	fnHandleIntentNavigation: function(p, s, U, r, S) {
	//
	//	}
	//	fnRenderIntentBasedApp: function(p, U, r, s) {
	//
	//	}
	//	updateTask: function(S, T) {
	//
	//	}
	//	updateTaskList: function() {
	//
	//	}
	//	getDescription: function(S, T) {
	//
	//	}
	//	_setScaffoldingExtension: function(s) {
	//
	//	}
	//	_getScaffoldingExtension: function() {
	//
	//	}
	//	isMainScreen: function() {
	//
	//	}
	//	setShowFooter: function(s) {
	//
	//	}
	//	setShowNavButton: function(s, n) {
	//
	//	}
	//	onNavButtonPress: function(e) {
	//
	//	}
	//	fnGetTaskModelClone: function(r) {
	//
	//	}
	//	fnCreateURLParameters: function(d) {
	//
	//	}
	//	fnValidateDecisionOptionsAndCreatButtons: function(d, i, D, U, s) {
	//
	//	}
	//	fnDelegateTaskRefresh: function() {
	//
	//	}
	//	fnNavigateToApp: function(p, e) {
	//
	//	}
	//	_resetCountandDescription: function() {
	//
	//	}
	//	fnViewTaskInDefaultView: function(U, r, s) {
	//
	//	}
	//	fnGetDetailsForSelectedTask: function(U, r, s) {
	//
	//	}
	//	clearCustomAttributes: function() {
	//
	//	}
	//	onAttachmentChange: function(e) {
	//
	//	}
	//	onAttachmentUploadComplete: function(e) {
	//
	//	}
	//	onAttachmentDeleted: function(e) {
	//
	//	}
	//	getXsrfToken: function() {
	//
	//	}
	//	onFileUploadFailed: function(e) {
	//
	//	}
	//	addShareOnJamAndEmail: function(b) {
	//
	//	}
	//	_getDescriptionForShare: function(d) {
	//
	//	}
	//	_getDescriptionForShareInMail: function(d) {
	//
	//	}
	//	getJamSettings: function() {
	//
	//	}
	//	getJamDescription: function() {
	//
	//	}
	//	getMailSubject: function() {
	//
	//	}
	//	getMailBody: function() {
	//
	//	}
	//	_getIntentParam: function(p) {
	//
	//	}
	//	_getIntentWithOutParam: function(p) {
	//
	//	}
	//	_getTrimmedString: function(t) {
	//
	//	}
	//	_handleItemRemoved: function(e) {
	//
	//	}
	//	_handleDetailRefresh: function(e) {
	//
	//	}
	//	_updateHeaderTitle: function(d) {
	//
	//	}
	//	_isTaskConfirmable: function(i) {
	//
	//	}
	//	createDecisionButtons: function(d, u, o) {
	//
	//	}
	//	addEmailAndCallExtentionHookForButtonOptions: function(b, p, n, i) {
	//
	//	}
	//	startForwardFilter: function(l, q) {
	//
	//	}
	//	closeForwardPopUp: function(r) {
	//
	//	}
	//	onForwardPopUp: function() {
	//
	//	}
	//	_getSupportedOpenMode: function(r) {
	//
	//	}
	//	_getParsedParamsForIntent: function(u) {
	//
	//	}
	//	_getCrossNavigationService: function() {
	//
	//	}
	//	_PotentialOwnersSuccess: function(r) {
	//
	//	}
	//	showResubmitPopUp: function() {
	//
	//	}
	//	handleResubmitPopOverOk: function(e) {
	//
	//	}
	//	showEmployeeCard: function(o, c, s) {
	//
	//	}
	//	onEmployeeLaunchTask: function(e) {
	//
	//	}
	//	onEmployeeLaunchCommentSender: function(c, e, E) {
	//
	//	}
	//	handleLogNavigation: function(e) {
	//
	//	}
	//	onEmployeeLaunchCommentIcon: function(e) {
	//
	//	}
	//	onAttachmentShow: function(e) {
	//
	//	}
		// showDecisionDialog: function(f, d, s) {
		// 		var textMsg=this.i18nBundle.getText("XFLD_TextArea_Decision");
		// 		var textTitle=this.i18nBundle.getText("XTIT_SUBMIT_DECISION");
		// 		var textBtn=this.i18nBundle.getText("XBUT_SUBMIT");
		// 		var qtn=this.i18nBundle.getText("XMSG_DECISION_QUESTION", d.DecisionText);
		// 		//sap.ui.getCore().byId('confirmDialogTextarea').setValue("Ha Ha");
		// 		this.oConfirmationDialogManager.showDecisionDialog({
		// 			question: qtn,
		// 			textAreaLabel: textMsg,
		// 			showNote: s,
		// 			title: textTitle,
		// 			confirmButtonLabel: textBtn,
		// 			noteMandatory: d.CommentMandatory,
		// 			confirmActionHandler: jQuery.proxy(function(d, n) {
		// 				this.sendAction(f, d, n);
		// 			}, this, d)
		// 		});
		// }
		//	fnOnNavBackFromLogDescription: function(e) {
		//
		//	}
		//	showConfirmationDialog: function(f, i) {
		//
		//	}
		//	onCommentPost: function(c, e, E) {
		//
		//	}
		//	sendAction: function(f, d, n) {
		//
		//	}
		//	refreshHeaderFooterOptions: function() {
		//
		//	}
		//	fnNavBackToTableVw: function() {
		//
		//	}
		//	fnOnNavBackInMobile: function() {
		//
		//	}
		//	checkStatusAndOpenTaskUI: function() {
		//
		//	}
		//	openTaskUI: function() {
		//
		//	}
		//	fnEmbedApplicationInDetailView: function(p) {
		//
		//	}
		//	updateToggleButtonState: function(e) {
		//
		//	}
		//	onLogBtnPress: function(e) {
		//
		//	}
		//	fnSetFocusOnSideContent: function() {
		//
		//	}
		//	setShowMainContent: function() {
		//
		//	}
		//	setShowSideContent: function(e) {
		//
		//	}
		//	createLogs: function(k) {
		//
		//	}
		//	createWorkflowLogTimeLine: function() {
		//
		//	}
		//	onLogTabSelect: function(c) {
		//
		//	}
		//	fnFetchDataOnLogTabSelect: function(n) {
		//
		//	}
		//	onTabSelect: function(c) {
		//
		//	}
		//	fnDelegateCommentsCreation: function() {
		//
		//	}
		//	fnDelegateAttachmentsCreation: function() {
		//
		//	}
		//	createTimeLine: function() {
		//
		//	}
		//	fnSetIconForCommentsFeedInput: function() {
		//
		//	}
		//	fnCountUpdater: function(k, s, i) {
		//
		//	}
		//	fnHandleAttachmentsCountText: function(e) {
		//
		//	}
		//	fnHandleNoTextCreation: function(e) {
		//
		//	}
		//	fnClearCachedData: function() {
		//
		//	}
		//	fnFetchDataOnTabSelect: function(n) {
		//
		//	}
		//	fnUpdateDataAfterFetchComplete: function(m, d, n, a) {
		//
		//	}
		//	_getIconTabControl: function(n) {
		//
		//	}
		//	fnFetchObjectLinks: function() {
		//
		//	}
		//	onSupportInfoOpenEvent: function(c, e, s) {
		//
		//	}
		//	addAction: function(a, f) {
		//
		//	}
		//	removeAction: function(a) {
		//
		//	}
		//	disableAction: function(a) {
		//
		//	}
		//	disableAllActions: function() {
		//
		//	}
		//	enableAction: function(a) {
		//
		//	}
		//	enableAllActions: function() {
		//
		//	}
		//	_createCustomAttributesElements: function(d, c) {
		//
		//	}
		//	_createCustomAttributesOnDataLoaded: function(c) {
		//
		//	}
		//	_getUploadCollectionControl: function() {
		//
		//	}
		//	_setBusyIncdicatorOnDetailControls: function(c, s) {
		//
		//	}
		//	_processCustomAttributesData: function(i) {
		//
		//	}
		//	_getShowAdditionalAttributes: function() {
		//
		//	}
		//	_getTaskTitleInHeader: function() {
		//
		//	}
		//	_getStandaloneDetailDeep: function() {
		//
		//	}
		//	createCalendarEvent: function() {
		//
		//	}
		//	_getActionHelper: function() {
		//
		//	}

});