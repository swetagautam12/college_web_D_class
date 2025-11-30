$(document).ready(function() {
    $("#styleBtn").click(function() {
        $("#box").css({
            "background-color": "orange",
            "color": "white",
            "font-size": "24px",
            "border": "3px solid red",
            "border-radius": "50px",
            "padding": "20px",
            "text-transform": "uppercase"
        });
    });
});
