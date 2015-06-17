

Router.route('/', function(){
     this.render('login');
 });

Router.route('/item', function(){
     this.render('simplewebpage');
 });

if (Meteor.isClient) {
    
  Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('login');
  } else {
    this.render('simplewebpage');
  }
});
    
 Template.login.rendered = function(){
     new WOW().init();
 }
 
 Template.login.events({
     'click #secondBtn': function(){
         window.location="http://www.xiangrenzheng.com";
     }
 });
 
 Template.simplewebpage.events({
     'click button':function(){
         var vid = document.getElementById("bgvid");
         var pausedbutton = document.getElementById("pausedbtn");
         if(vid.paused){vid.play(); pausedbutton.innerHTML = "Pause"; }else{vid.pause(); pausedbutton.innerHTML = "Paused"};
     },
     
 });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
