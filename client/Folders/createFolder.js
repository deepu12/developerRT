Template.createFolder.helpers({
   cfWorkspace : function(){
      return WorkSpace.find({userId : Meteor.userId()}).map(function (wId){
         return {label : wId.name, value : wId._id};
      })
   },
   cfProjects : function(){
      return Project.find({userId : Meteor.userId()}).map(function (pId){
         return {label : pId.name, value : pId._id};
      })
   }
});
