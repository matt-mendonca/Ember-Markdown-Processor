EmberMarkdownProcessor.IndexRoute = Ember.Route.extend({
    
    model: function () {
        return EmberMarkdownProcessor.markdownModel.create({
            markdown: "#h1\n##h2\np text"
        });
    }
});
