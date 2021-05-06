$(document).ready(function() {  
    setTimeout(function() {
        myscope = angular.element('html').scope();
        localCustomizations();
    }, 1000);

  // call for summon local custimzation 
  function localCustomizations() {
     
 /*
This JavaScript will keep the Prospector link from making the search bar disappear on iphones
-nt
*/ 
$('div.input-group').css( "width", "120%" );


/*
This JavaScript will place the Interlibrary Loan button on the main page. Thanks to Auraria for the script
-nt
*/ 

    $('span.input-group-btn').append('<button id="ill-search" style="margin-left:1em;" class="btn btn-link" type="button">Interlibrary Loan</button>');      
    // Build the URL for the 'Interlibrary Loan' button
    $('button#ill-search').click(function() {
      //Send to Borrowing for ILLiad
      window.open('https://www.colorado.edu/libraries/services/borrowing-other-libraries-and-document-delivery-service?utm_source=OneSearch&utm_medium=Link&utm_campaign=InterlibraryLoan');
    });

/*
This JavaScript will add BrowZine functionality to the results list
*/ 

window.browzine = {
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
This JavaScript will add a COVID-19 alert link for All Print Items Currently Unavailable Link on print books. Code adapted from California College of the Arts Libraries
*/ 
    var e = angular.module("summonApp"),
        f = angular.element("html").scope().$root;
    f.$on("apiSuccess", function() {
        setTimeout(function() { // broken link button
            $(".Z3988").parent().each(function() {
                if (-1 === $(this).text().indexOf("All Physical") && -1 === $(this).text().indexOf("Find Similar")) {
                    var a = angular.element(this).scope().doc,
                        b = a.content_type;
                    a && ("Book" === b || "Video Recording" === b || "Film" === b || "Journal" === b || "Music Score" === b) && $(this).append("<span class=\"availability\" style=\"margin-left:1em\"><a class=\"availabilityLink reportBroken\" href=\"https://www.colorado.edu/libraries/spring20-updates#Remote-Access-to-Libraries-Collections\" target=\"_blank\"><i class=\"uxf-icon uxf-attention\"></i> All Physical Items Currently Unavailable</a></span>")
                }
            })
        })
    })
	
/*
This JavaScript file will enable the Access and Discovery group to track virtual pages and click events in the Summon interface through Google Analytics deployed through Google Tag Manager. The file will also hold our BrowZine integration, which allows users direct PDF downloads and journal browsing capabilities from directly in BrowZine. The address is referenced from the Summon Console by Nicole Trujillo
-rl
*/ 

$(document).ready(function(){
$( "body" ).prepend( "<script>var vPagePath = window.location.href;dataLayer = [{'virtualURL': vPagePath}];</script><noscript><iframe src='//www.googletagmanager.com/ns.html?id=GTM-5QJLPW4' height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5QJLPW4');</script>");
}); 

/*
The following JavaScript is from Brian Holda at Davenport University. -NT
*/ 

//begin jQuery document.ready
$(document).ready(function () {
	
//add Summon breadcrumbs
  function addBreadcrumbs() {
    //create breadcrumbs
    var cuBreadcrumbsHtml = "\n        <!-- CU Libraries Breadcrumbs-->\n        <ol class=\"summonBreadcrumbs text-left\" aria-label=\"Breadcrumbs\">\n            <li><a href=\"https://www.colorado.edu/libraries/\">Library Home</a></li>\n            <li>OneSearch</li>\n        </ol>\n      ";
    
    //insert breadcrumbs
    var siteHeaderDiv = document.querySelector(".siteHeader");
    siteHeaderDiv.insertAdjacentHTML("afterbegin", cuBreadcrumbsHtml);
  } //end function

  addBreadcrumbs(); 
		
//add seperate css file	
  var cssPath = "https://cubl-static.s3-us-west-2.amazonaws.com/summon/";
  $("head").append('<link rel="stylesheet" type="text/css" href="' + cssPath + 'cubsummon.css" />'); // Accessibility titles

}); //end jQuery document.ready

/*
End Timeout fuction to allow for local customization
*/
  }
});
