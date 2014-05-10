EmberMarkdownProcessor.IndexRoute = Ember.Route.extend({
    
    model: function () {
        return EmberMarkdownProcessor.markdownModel.create();
    }
});
