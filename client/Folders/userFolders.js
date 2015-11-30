Template.userFolders.helpers({
   uFolders : function(){
      var uf = Folders.find({userId : Meteor.userId()});
      return uf;
   }
})
