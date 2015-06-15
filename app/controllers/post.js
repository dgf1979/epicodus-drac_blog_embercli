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
      var post = this.get('model');
      var comment = this.store.createRecord('comment', {
        text: this.get('text')
      });
      post.get('comments').pushObject(comment);
      console.log("client-side pre-save");
      var res = comment.save();
      console.log("client-side post-save: " + res);
      //post.save();
      //this.transitionToRoute('post', post.id);
    }
  }
};

export default Ember.ObjectController.extend(PostController);
