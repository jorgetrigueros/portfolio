Function.registerNamespace('Mavention.GlobalNavigation');
 
Mavention.GlobalNavigation.MenuItem = function(title, url) {
    this.title = title;
    this.url = url;
};
 
Mavention.GlobalNavigation.viewModel = {
    globalMenuItems: new Array()
};
 
Mavention.GlobalNavigation.init = function(termStoreName, termSetId) {
    SP.SOD.executeOrDelayUntilScriptLoaded(function() {
        'use strict';
        var nid = SP.UI.Notify.addNotification("<img src='/_layouts/15/images/loadingcirclests16.gif?rev=23' style='vertical-align:bottom; display:inline-block; margin-" + (document.documentElement.dir == "rtl" ? "left" : "right") + ":2px;' />&nbsp;<span style='vertical-align:top;'>Loading navigation...</span>", false);
 
        SP.SOD.registerSod('sp.taxonomy.js', SP.Utilities.Utility.getLayoutsPageUrl('sp.taxonomy.js'));
        SP.SOD.executeFunc('sp.taxonomy.js', false, Function.createDelegate(this, function () {
            var context = SP.ClientContext.get_current();
            var taxonomySession = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
            var termStore = taxonomySession.get_termStores().getByName(termStoreName);
            var termSet = termStore.getTermSet(termSetId);
            var terms = termSet.getAllTerms();
            context.load(terms);
            context.executeQueryAsync(Function.createDelegate(this, function(sender, args) {
                var termsEnumerator = terms.getEnumerator();
                var menuItems = new Array();
                 
                while (termsEnumerator.moveNext()) {
                    var currentTerm = termsEnumerator.get_current();
                    Mavention.GlobalNavigation.viewModel.globalMenuItems.push(new Mavention.GlobalNavigation.MenuItem(currentTerm.get_name(), currentTerm.get_localCustomProperties()['_Sys_Nav_SimpleLinkUrl']));
                }
                 
                ko.applyBindings(Mavention.GlobalNavigation.viewModel);
                SP.UI.Notify.removeNotification(nid);
            }), Function.createDelegate(this, function(sender, args) {
                alert('The following error has occured while loading global navigation: ' + args.get_message());
            }));
        }));
    }, 'core.js');
};