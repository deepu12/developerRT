Template.addFiles.helpers({
   aFiles : function(params){
      console.log("This is my folder Id:",this.folderId);
      var af = Folders.findOne(this.folderId);
      return af;
   }
})
