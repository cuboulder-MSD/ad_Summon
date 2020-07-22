<div class="invisiblepanel">
<script>$("div.invisiblepanel").parent().parent().css("display", "none");
/*
This JavaScript will add a COVID-19 alert for physical items. Code addapted from California College of the Arts Libraries
*/ 
$(document).ready(function(){
            $(".Z3988").parent().each(function() {
                    var a = angular.element(this).scope().vm.doc,
                        b = a.content_type;
                    a && ("Book" === b || "Video Recording" === b || "Film" === b || "Music Score" === b) && $(this).append("<span class=\"availability\" style=\"margin-left:1em\"><i class=\"uxf-icon uxf-attention\"></i> Item may be available for contactless pickup</span>")
                
            })
});</script>
</div>
