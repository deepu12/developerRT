
Template.workspaceProject.helpers({
   wsProjects : function(){
      console.log("Work space project Id :",this.workspaceId);
      wsp = Project.find({workspaceId : this.workspaceId});
      return wsp;
   }
});

Template.workspaceProject.onCreated(function(){
   var self = this;
   this.autorun(function(){
      self.subscribe("project", Meteor.userId());
   })
   Meteor.subscribe("workspace");
});
