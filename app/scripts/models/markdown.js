EmberMarkdownProcessor.markdownModel = Ember.Object.extend({
    markdown: null,
    html: function() {
        var html = null;

        if(this.get('markdown')) {
            html = window.markdown.toHTML(this.get('markdown'));
        }
        
        return html;
    }.property('markdown')
});