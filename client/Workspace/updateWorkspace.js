Template.updateWorkspace.helpers({
   workSp : function(params){
      console.log("This is my workspace Id : ",this.workspaceId);
      myworkSpace = WorkSpace.findOne(this.workspaceId);
      return myworkSpace;
   }
});
Template.updateWorkspace.events({
   'click #btn-del' : function(event){
      console.log("The workspace id in events : ",this.workspaceId);
      var btnRemove = WorkSpace.remove(this.workspaceId);
      if(btnRemove){
         window.alert("Delete Successful");
         FlowRouter.go('/workSpace');
      }
      else {
         window.alert("Delete failed");
      }
      return btnRemove;
   }
});

Template.updateWorkspace.onCreated(function(){
   Meteor.subscribe("workspace");
});
