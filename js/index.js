$(document).ready(function() {
    $("#blog-header").click(function() {
        console.log("clicked");
        if($('#blog-list').is(':visible')) {
            console.log("visible");
            $("#blog-list").hide();
        } else {
            console.log("not visible")
            $("#blog-list").show();
        }
    }); 

});
