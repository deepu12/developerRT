Template.workspaceMembers.helpers({
   wsMembers : function(){
      console.log("The workspace Id is coming",this.workspaceId);
      var wsMem = WorkSpace.find(this.workspaceId);
      return wsMem;
   }
});

Template.workspaceMembers.onCreated(function(){
   Meteor.subscribe("workspace");
});
