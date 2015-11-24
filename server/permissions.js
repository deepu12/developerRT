Project.allow({
   'insert' : function(userId, doc){
      return userId;
   },
   'update' : function(userId, doc, fields, modifier){
      return userId == doc.userId;
   },
   'remove' : function(userId, doc){
      return false;
   }
});

WorkSpace.allow({
   'insert' : function(userId, doc){
      return userId;
   },
   'update' : function(userId, doc, fields, modifier){
      return userId == doc.userId;
   },
   'remove' : function(userId, doc){
      return false;
   }
});

Docs.allow({
   'insert' : function(userId, doc){
      return userId;
   },
   'update' : function(userId, doc, fields, modifier){
      return userId == doc.userId;
   },
   'remove' : function(userId, doc){
      return false;
   }
});
