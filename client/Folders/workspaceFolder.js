
Template.workspaceFolder.helpers({
   wsFolder : function(){
      return Folders.find({workspaceId : this.workspaceId});
   }
});

Template.workspaceFolder.onCreated(function(){
   Meteor.subscribe("folders");
});
