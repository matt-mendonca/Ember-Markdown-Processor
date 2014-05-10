EmberMarkdownProcessor.IndexController = Ember.ObjectController.extend({
  actions: {
    clear: function() {
      this.set('markdown', '');
    },

    selectAll: function(selector) {
      $(selector).select();
    }
  }
});