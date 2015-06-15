import Ember from "ember";

var NewPostController = {
  needs: ['post'],
  actions: {
    createPost: function () {
      var newPost = this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body')
      });
      newPost.save();
      this.transitionToRoute('posts');
    }
  }
};

export default Ember.ObjectController.extend(NewPostController);
