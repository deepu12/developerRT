
Template.userFolders.helpers({
   uFolders : function(){
      var uf = Folders.find({userId : Meteor.userId()});
      return uf;
   },
   fdata : function(){
      var fd = Folders.findOne({userId : Meteor.userId(), parentId : "root"});
      return fd;
   }
});
Template.userFolders.onCreated(function(){
      Meteor.subscribe("folders");
      Meteor.subscribe("files");
});
// globalDep = new Tracker.Dependency();
Template.userFolders.onRendered(function () {
  //  $('#tree').jstree({
  // "core" : {
  //   "animation" : 0,
  //   "check_callback" : true,
  //   "themes" : { "stripes" : true },
  //   'data' : {
  //     'url' : function (node) {
  //       return node.id === '#' ?
  //         'ajax_demo_roots.json' : 'ajax_demo_children.json';
  //     },
  //     'data' : function (node) {
  //       return { 'id' : node.id };
  //     }
  //   }
  // },
  // "types" : {
  //   "#" : {
  //     "max_children" : 1,
  //     "max_depth" : 4,
  //     "valid_children" : ["root"]
  //   },
  //   "root" : {
  //     "icon" : "/static/3.2.1/assets/images/tree_icon.png",
  //     "valid_children" : ["default"]
  //   },
  //   "default" : {
  //     "valid_children" : ["default","file"]
  //   },
  //   "file" : {
  //     "icon" : "glyphicon glyphicon-file",
  //     "valid_children" : []
  //   }
  // },
  // "plugins" : [
  //   "contextmenu", "dnd", "search",
  //   "state", "types", "wholerow"
  // ]
  //  }),
   $("#myModal").modal();
});
// $(document).ready( function() {
//     $('#folder').fileTree({ root: '' }, function(file) {
//         alert(file);
//     });
// });
