Template.docDisplay.helpers({
   fileId : function(){
      var dId = Docs.find({userId : Meteor.userId()}).fetch();
      console.log("This is the file Id : ",dId.fileId);
      var fid;
      while(dId.length > 0){
         console.log("This is the file Id to find FID ",dId.fileId);
          fid = Files.findOne({ _id : dId.fileId});
         return fid;
      }
   }
   // docId : function(){
   //    var nId = Session.get('newId');
   //    var fid = Files.findOne({ _id : '7HJbpopPdCd4WBTDG'});
   //    return fid;
   // }
})
