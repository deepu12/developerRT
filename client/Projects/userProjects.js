Template.userProjects.helpers({
   uProjects : function(){
      var pro = Project.find({userId : Meteor.userId()});
      return pro;
   }
})
