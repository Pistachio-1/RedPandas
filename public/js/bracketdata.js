

$.get("/api/brackets", function(data) {
    for (var i = 0; i < data.length; i++) {
    console.log(data[i].user_name)
    }
});