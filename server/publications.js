Meteor.publish('project', function (){
   return Project.find();
});
Meteor.publish('docs', function(){
   return Docs.find();
});
Meteor.publish('folders', function(){
   return Folders.find();
});
Meteor.publish('workspace', function(){
   return WorkSpace.find();
});
Meteor.publish('files', function(){
   return Files.find();
});
