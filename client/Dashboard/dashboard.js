//  Template.dashboard.helpers({
//    getFEContext: function () {
//    var self = this;
//    $('.selector').froalaEditor('codeView.toggle');
//    return {
//      // Set html content
//      _value: self.myDoc.myHTMLField,
//
//      // Set some FE options
//      toolbarInline: true,
//      initOnClick: false,
//      tabSpaces: false,
//
//      // FE save.before event handler function:
//      "_onsave.before": function (e, editor) {
//       // Get edited HTML from Froala-Editor
//       var newHTML = editor.html.get();
//       // Do something to update the edited value provided by the Froala-Editor plugin, if it has changed:
//       if (!_.isEqual(newHTML, self.myDoc.myHTMLField)) {
//          console.log("onSave HTML is :"+newHTML);
//          myCollection.update({_id: self.myDoc._id}, {
//            $set: {myHTMLField: newHTML}
//          });
//       }
//       return false; // Stop Froala Editor from POSTing to the Save URL
//      },
//    }
//    $('.selector').froalaEditor('codeView.toggle');
//  },
// })
