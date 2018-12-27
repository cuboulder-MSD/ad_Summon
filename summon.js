/*
This JavaScript will add BrowZine functionality to the results list
*/ 

var browzine = {
  api: "https://api.thirdiron.com/public/v1/libraries/105",
  apiKey: "8ccc925e-d8d0-439e-93de-70661233eee4",
  journalWording: "View the Journal",
  articleWording: "View Complete Issue",
  journalBrowZineWebLinkText: "Browse Now",
  articleBrowZineWebLinkText: "Browse Now",
};
 
browzine.script = document.createElement("script");
browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/summon/browzine-summon-adapter.js";
document.head.appendChild(browzine.script);

/*
This JavaScript file will enable the Access and Discovery group to track virtual pages and click events in the Summon interface through Google Analytics deployed through Google Tag Manager. The file will also hold our BrowZine integration, which allows users direct PDF downloads and journal browsing capabilities from directly in BrowZine. The address is referenced from the Summon Console by Nicole Trujillo
-rl
*/ 

$(document).ready(function(){
$( "body" ).prepend( "<script>var vPagePath = window.location.href;dataLayer = [{'virtualURL': vPagePath}];</script><noscript><iframe src='//www.googletagmanager.com/ns.html?id=GTM-5QJLPW4' height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5QJLPW4');</script>");
}); 

/*
This JavaScript will place the Prospector button on the main page. Thanks to Auraria for the script
-nt
*/ 
    $('span.input-group-btn').append('<button id="prospector-search" style="margin-left:1em;" class="btn btn-default" type="button">Search Prospector</button>');      
    // Build the URL for the 'Search Prospector' button
    $('button#prospector-search').click(function() {
      // grab search term from summon url
      var hash = window.location.hash.slice(1);
      var array = hash.split("&");
      var values, form_data = {};

      for (var i = 0; i < array.length; i += 1) {
        values = array[i].split("=");
        form_data[values[0]] = values[1];
      }
      var searchterm = form_data['q'];
      //search in propsector encore instead in classic Sierra WebPac
      window.location.href = 'https://encore.coalliance.org/iii/encore/search/C__S' +searchterm +'__Orightresult';
    });