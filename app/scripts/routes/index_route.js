EmberMarkdownProcessor.IndexRoute = Ember.Route.extend({
    
    model: function () {
        return EmberMarkdownProcessor.markdownModel.create({
            markdown: "this is example text\n#h1\n##h2\np text"
        });
    }
});
