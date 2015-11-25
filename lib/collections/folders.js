Folders = new Mongo.Collection("folders");

Folders.attachSchema(new SimpleSchema{
   folders : {
      type : String,
      label : " Folder Name"
   },
   files : {
      type : [Object]
   },
   'files.$.fileName' : {
      type : String,
      label : "File Name"
   },
   userId : {
      type : String,
      autoValue : function(){return Meteor.userId()}
   }
})
