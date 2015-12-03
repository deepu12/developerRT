Meteor.subscribe("folders");
Template.workspaceFolder.helpers({
   wsFolder : function(){
      return Folders.find({workspaceId : this.workspaceId});
   }
})
