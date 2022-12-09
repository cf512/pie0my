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

$(".spin-wheel").on("click", function (event) {
    event.preventDefault();
    let deg = 0;

    $("#howMany").html("<div class='spinner-border spinner-border-sm' role='status'><span class='visually-hidden'>Loading...</span></div>");

    var buttonSpinCount = $(this).attr("value");
    var rotations = buttonSpinCount ? buttonSpinCount : 1;

    const element = document.getElementById("pie1");
    const element2 = document.getElementById("pie2");
    let wheel = setInterval(spin, 10);

    function spin() {
        if (deg === (360 * rotations)) {
            clearInterval(wheel);
        } else {
            deg++;
            if (deg % 360 === 0){
                var rotationCount = deg / 360;
                $("#howMany").html(rotationCount);
            }
            element.style.transform = `rotate(${deg}deg)`;
            element2.style.transform = `rotate(${deg}deg)`;
        }
    }
});

$("#toggle-apple-pie").on("click", function (event){
    event.preventDefault();
    $(".pie-space").attr("hidden", true);
    $(".cherry-pie").attr("hidden", true);
    $(".apple-pie").attr("hidden", false);
});

$("#toggle-both-pies").on("click", function (event){
    event.preventDefault();
    $(".apple-pie").attr("hidden", false);
    $(".pie-space").attr("hidden", false);
    $(".cherry-pie").attr("hidden", false);
});

$("#toggle-cherry-pie").on("click", function (event){
    event.preventDefault();
    $(".pie-space").attr("hidden", true);
    $(".apple-pie").attr("hidden", true);
    $(".cherry-pie").attr("hidden", false);
});