$(document).ready(function(){
    $.ajax({
        method: "GET",
        url: "/api/activity",
    }).then(function(response){
        console.log(response);
        for(var i = 0; i < response.length; i++){
            var news = response[i].action;
            var tickerItem = $('<div class="ticker__item">' + news + '</div>');
            $(".ticker").append(tickerItem);
        }
    })
})