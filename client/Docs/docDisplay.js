Template.docDisplay.helpers({
   fileId : function(){
      var dId = Docs.find({userId : Meteor.userId()});
      console.log("This is the Image Id : ",dId.fileId);
      Session.set('newId',dId.fileId);
      return dId;
   },
   docId : function(){
      var nId = Session.get('newId');
      var fid = Files.findOne(nId);
      return fid;
   }
})
