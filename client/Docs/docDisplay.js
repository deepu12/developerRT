Template.docDisplay.helpers({
   fileID : function(){
      var dId = Docs.find({userId : Meteor.userId()}).fetch();
      console.log("This is the file Id : ",dId.fileId);
      var mapFun = _.map(dId,function(file){
         console.log("In Map function :",file.fileId);
         var fid = Files.findOne(file.fileId);
         console.log("got FID :",fid);
         return fid;
      })
      return mapFun;

      // while(dId.length > 0){
      //    console.log("This is the file Id to find FID ",dId.fileId);
      //     fid = Files.findOne({ _id : dId.fileId});
      //    return fid;
      // }
   }
   // docId : function(){
   //    var nId = Session.get('newId');
   //    var fid = Files.findOne({ _id : '7HJbpopPdCd4WBTDG'});
   //    return fid;
   // }
})
