Meteor.subscribe("project");
Template.editProject.helpers({
   eProjects : function(params){
      console.log("This is my project Id : ",this.projectId);
      var ep = Project.findOne(this.projectId);
      return ep;
   }
});

Template.editProject.events({
   'click #btn-del' : function(event){
      console.log("The project id in events : ",this.projectId);
      var btnRemove = Project.remove(this.projectId);
      if(btnRemove){
         window.alert("Delete Successful");
         FlowRouter.go('/newProject');
      }
      else {
         window.alert("Delete failed");
      }
      return btnRemove;
   }
});
