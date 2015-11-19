Template.editProject.helpers({
   eProjects : function(params){
      console.log("This is my project Id : ",this.projectId);
      var ep = Project.findOne(this.projectId);
      return ep;
   }
})
