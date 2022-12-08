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

$("#pie-wheel").on("click", function(event){
    event.preventDefault();

    const element = document.getElementById("pie-wheel");

    let deg = 0;
    let id = setInterval(frame, 10);
    
    function frame() {
        if (deg === 360) {
            clearInterval(id);
        } else {
            deg++;
            element.style.transform = `rotate(${deg}deg)`;
        }
    }
});