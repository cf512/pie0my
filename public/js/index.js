var API = {
    getPies: function() {
        return $.ajax({
            url: "feed",
            type: "GET"
        });
    },
    deletePie: function(id) {
        return $.ajax({
            url: "pie/" + id,
            type: "DELETE"
        });
    },
    refillPies: function () {
        return $.ajax({
            url: "pies/refill",
            type: "GET"
        });
    }
};

$(".pie-eat").on("click", function(){
    var obj = {
        id: $("#pie-d").html()
    };
    API.deletePie(obj.id).then(function(){
        console.log("deleted");
        location.reload();
    });
});

$(".pie-refill").on("click", function(){
    API.refillPies().then(function(){
        console.log("refilled");
        location.reload();
    });
});