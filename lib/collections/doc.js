Docs = new Mongo.Collection("docs");
Docs.attachSchema(new SimpleSchema({
  // name: {
  //   type: String
  // },
  fileId: {
    type: String
  },
  userId : {
     type : String,
     autoValue : function(){return Meteor.userId()}
  },
  username : {
     type : String,
     autoValue : function(){return Meteor.user().username}
 }
}));

Files = new FS.Collection("files", {
  stores: [new FS.Store.GridFS("filesStore")]
});

Files.allow({
  download: function () {
    return true;
  }
  });
