import Ember from "ember";

var PostController = {
  isEditing: false,
  actions: {
    edit: function () {
      this.set('isEditing', true);
    },
    doneEditing: function () {
      this.set('isEditing', false);
    },
    addComment: function () {
      var post = this.get('controller.post.model');
      var comment = this.store.createRecord('comment', function () {

        text: this.get('text')
      });
      post.get('comments').pushObject(comment);
      this.transitionToRoute('post', post.id);
    }
  }
};

export default Ember.ObjectController.extend(PostController);
