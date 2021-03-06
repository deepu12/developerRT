Folders = new Mongo.Collection("folders");
Folders.attachSchema(new SimpleSchema({
   name : {
      type : String,
      label : " Folder Name"
   },
   parentId : {
      type : String
   },
   userId : {
      type : String,
      autoValue : function(){return Meteor.userId()}
   },
   createdAt : {
      type : Date,
      autoValue : function(){return new Date()}
   }
}))
