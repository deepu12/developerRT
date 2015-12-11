Template.viewFiles.helpers({
   vfiles : function(){
      var vf = Files.find({folderId : this._id});
      return vf;
   },
   vfolders : function(){
      var vFold = Folders.find({parentId : this._id});
      return vFold;
   }
});

Template.vFolders.events({
   "click .folder-item" : function(event, template){
      event.stopPropagation();
      var clist = event.currentTarget;
      var fid = $(clist).attr('fid');
      var folder = Folders.findOne(fid);
      var fidsel = '#'+fid;
      console.log("current target " + fid);

      // $('.subfolders').hide();
      if($(fidsel).is(":empty")){
         console.log("fidsel empty " + fid);
         $(fidsel).show();
         Blaze.renderWithData(Template.viewFiles, folder, $(fidsel)[0]);
      }else{
         console.log("fidsel not empty");
         $(fidsel).hide();
         $(fidsel).empty();
      }
      // $('#' + fid).css("height", "0");
      // $('#' + fid).animate({
      //    height: "100%"
      // }, 3000, function(){});
   }
});
