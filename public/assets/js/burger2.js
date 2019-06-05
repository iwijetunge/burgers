$(document).on("click", ".devour", function() {    
    const burgerId = $(this)[0].id;
    console.log("burgerId: ", burgerId);

    const putURL = "/burgers/" + burgerId;

    console.log("putURL: ", putURL);

    $.ajax({
        method: "PUT",
        url: putURL
    }).then(data => {
        console.log("data: ", data);
        location.assign("/");
    })
});

$(document).on("click", "#create-button", function(){
    const burger_name = $("#burger-create").val().trim();

    console.log("burger_name: ", burger_name);

    $.ajax({
        method: "POST",
        url: "/burgers",
        data: {burger_name: burger_name}
    }).then(data => {
        console.log("data: ", data);
        location.assign("/");
    })
})