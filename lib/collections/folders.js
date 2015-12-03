Folders = new Mongo.Collection("folders");

Folders.attachSchema(new SimpleSchema({
   folderName : {
      type : String,
      label : " Folder Name"
   },
   files : {
      type : [Object],
      optional : true
   },
   'files.$.fileName' : {
      type : String,
      optional : true,
      label : "File Name"
   },
   'files.$.foldername':{
      type : String,
      optional : true,
      label : "Folder Name"
   },
   userId : {
      type : String,
      autoValue : function(){return Meteor.userId()}
   },
   userName : {
      type : String,
      autoValue : function(){return Meteor.user().username}
   },
   workspaceId : {
      type : String
   },
   projectId : {
      type : String
   },
   createdAt : {
      type : Date,
      autoValue : function(){return new Date()}
   }
}))
