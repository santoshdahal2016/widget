(function() {


 if (window.Vue === undefined || window.Vue.version !== '2.5.16') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src",
        "https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              scriptLoadHandler();
          }
      };
    } else {
      script_tag.onload = scriptLoadHandler;
    }

 var script_tag1 = document.createElement('script');
    script_tag1.setAttribute("type","text/javascript");
    script_tag1.setAttribute("src",
        "https://unpkg.com/vue-rate-it/dist/cdn/vue-rate-it.min.js");    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);

} else {
    // The jQuery version on the window is the one we want to use

var script_tag1 = document.createElement('script');
    script_tag1.setAttribute("type","text/javascript");
    script_tag1.setAttribute("src",
        "https://unpkg.com/vue-rate-it/dist/cdn/vue-rate-it.min.js");
         if (script_tag1.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              main();
          }
      };
    } else {
      script_tag1.onload = main;
    }
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag1);  // Try to find the head, otherwise default to the documentElement    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag1);
   
    
}

/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {

var script_tag1 = document.createElement('script');
    script_tag1.setAttribute("type","text/javascript");
    script_tag1.setAttribute("src",
        "https://unpkg.com/vue-rate-it/dist/cdn/vue-rate-it.min.js");    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag1);
  
     if (script_tag1.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              main();
          }
      };
    } else {
      script_tag1.onload = main;
    }
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag1);  // Try to find the head, otherwise default to the documentElement    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag1);
    
}




/******** Our main function ********/
function main() { 
var vm = new Vue({
   el: '#example-widget-container',
   template : '<div  v-bind:style="style"><div style="text-align:  center;font-size:  larger;font-weight: 800;">{{question}}</div><div style="text-align:center">HI sakhdlassa ksajbdkjba ?</div> <star-rating/></div>',
   style : '',
   components:{
    'star-rating': VueRateIt.StarRating
     },


data: {
    question : "Did you like Design ?",
    style : {
        position:'fixed',
        bottom:'0px',
        padding:'5px',
        position:'fixed',
        left:'35%',
        'background-color':'#9e9b9a'
    }
  }})    
}

})(); // We call our anonymous function immediately