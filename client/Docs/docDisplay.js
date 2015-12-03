Meteor.subscribe("docs");
Meteor.subscribe("files");
Template.docDisplay.helpers({
   fileID : function(){
      var fid = 0;
      var dId = Docs.find({userId : Meteor.userId()}).fetch();
      console.log("This is the file Id : ",dId.fileId);
      var mapFun = _.map(dId,function(file){
         console.log("In Map function :",file.fileId);
         fid = Files.findOne(file.fileId);
         console.log("got FID :",fid);
         return fid;
      })
   return mapFun;
}
})
