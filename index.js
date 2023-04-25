



$(".btn").on("click", () => {

    var heroId = Math.round(Math.random() * 88);
    const url = `https://akabab.github.io/starwars-api/api/id/${heroId}.json`;

    $.get(url, (data) => {

        $(".starChrName").text(data.name)
        $(".starChrImg").html(`<img class="rounded-circle img" src="${data.image}">`)

    })

});