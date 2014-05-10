EmberMarkdownProcessor.IndexView = Ember.View.extend({
    templateName: 'index',
    didInsertElement: function() {
        jQuery(document).foundation();    
    }
});