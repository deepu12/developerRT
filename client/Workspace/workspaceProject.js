Meteor.subscribe("workspace");
Template.workspaceProject.helpers({
   wsProjects : function(){
      console.log("Work space project Id :",this.workspaceId);
      wsp = Project.find({workspaceId : this.workspaceId});
      return wsp;
   }
})
