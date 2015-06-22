$.get("/nameindex", function(filenames){
    $("#main").html(
        Mustache.render(
            "{{#.}}<img src='/files/{{.}}' height=100>{{/.}}",
            filenames.split(", "))
        );
});
