$(function () {
  let selectBike = $(".listNav");

  // Create Card
  function createCard(data) {
    return $(`<div class="col-md-3 col-sm-6 mx-3 my-3 px-0 item">
    <div class="card item-card card-block">
		<img class="card-img-top p-4" src="./img/${data.image}.png" style='height:250px'>
		<div class="card-body bg-warning">
		  <h2 class="item-card-title">${data.name}</h2>
		  <p class="card-text">${data.price} $</p>
    </div>
    </div>
	  </div>`);
  }

  $.get("https://json-project3.herokuapp.com/products", function (data) {
    data.forEach((el) => {
      $("#cards").append(createCard(el));
    });

    //FILTER CARDS

    allCard = data;
    filterArrMale = data.filter((el) => el.gender == "MALE");
    filterArrFemale = data.filter((el) => el.gender == "FEMALE");
    filterLeGrandBikes = data.filter((el) => el.brand == "LE GRAND BIKES");
    filterKrossBikes = data.filter((el) => el.brand == "KROSS");
    filterExplorerBikes = data.filter((el) => el.brand == "EXPLORER");
    filterVisitorBikes = data.filter((el) => el.brand == "VISITOR");
    filterPonyBikes = data.filter((el) => el.brand == "PONY");
    filterForseBikes = data.filter((el) => el.brand == "FORCE");
    filterEbikeBikes = data.filter((el) => el.brand == "E-BIKES");
    filterIdealBikes = data.filter((el) => el.brand == "IDEAL");

    // count ALL CARDS

    let all = $(data).length;
    $(".badge1").text(all);

    let maleAll = $(filterArrMale).length;
    $(".badge2").text(maleAll);

    let femaleAll = $(filterArrFemale).length;
    $(".badge3").text(femaleAll);

    let leGrand = $(filterLeGrandBikes).length;
    $(".badge4").text(leGrand);

    let cross = $(filterKrossBikes).length;
    $(".badge5").text(cross);

    let explorer = $(filterExplorerBikes).length;
    $(".badge6").text(explorer);

    let visit = $(filterVisitorBikes).length;
    $(".badge7").text(visit);

    let pony = $(filterPonyBikes).length;
    $(".badge8").text(pony);

    let forse = $(filterForseBikes).length;
    $(".badge9").text(forse);

    let ebike = $(filterEbikeBikes).length;
    $(".badge10").text(ebike);

    let ideal = $(filterIdealBikes).length;
    $(".badge11").text(ideal);
  });

  // BOLD ON CLICK FILTER TAGS

  $(selectBike).click(function () {
    $(selectBike).css("font-weight", "normal");
    $(selectBike).css("color", "black");
    $(this).css("font-weight", "bold");
    $(this).css("color", "orange");
  });

  // SHOW ALL CARDS

  $("#showAll").on("click", function () {
    $("#cards").html("");

    allCard.forEach((el) => {
      $("#cards").append(createCard(el));
    });
  });

  // SHOW MALE CARDS

  $("#male").on("click", function () {
    $("#cards").html("");
    filterArrMale.forEach((el) => {
      $("#cards").append(createCard(el));
    });
  });

  // SHOW FEMALE CARDS

  $("#female").on("click", function () {
    $("#cards").html("");
    filterArrFemale.forEach((el) => {
      $("#cards").append(createCard(el));
    });
  });

  // SHOW LEGRAND CARDS

  $("#leGrand").on("click", function () {
    $("#cards").html("");
    filterLeGrandBikes.forEach((el) => {
      $("#cards").append(createCard(el));
    });
  });

  //SHOW KROSS CARDS

  $("#kross").on("click", function () {
    $("#cards").html("");
    filterKrossBikes.forEach((el) => {
      $("#cards").append(createCard(el));
    });
  });

  //SHOW EXPLORER CARDS

  $("#explorer").on("click", function () {
    $("#cards").html("");
    filterExplorerBikes.forEach((el) => {
      $("#cards").append(createCard(el));
    });
  });

  //SHOW VISITOR CARDS

  $("#visitor").on("click", function () {
    $("#cards").html("");
    filterVisitorBikes.forEach((el) => {
      $("#cards").append(createCard(el));
    });
  });

  //SHOW PONY CARDS

  $("#pony").on("click", function () {
    $("#cards").html("");
    filterPonyBikes.forEach((el) => {
      $("#cards").append(createCard(el));
    });
  });

  //SHOW FORSE CARDS

  $("#forse").on("click", function () {
    $("#cards").html("");
    filterForseBikes.forEach((el) => {
      $("#cards").append(createCard(el));
    });
  });

  //SHOW EBIKE CARDS

  $("#e-bike").on("click", function () {
    $("#cards").html("");
    filterEbikeBikes.forEach((el) => {
      $("#cards").append(createCard(el));
    });
  });

  //SHOW IDEAL CARDS

  $("#ideal").on("click", function () {
    $("#cards").html("");
    filterIdealBikes.forEach((el) => {
      $("#cards").append(createCard(el));
    });
  });
  
});
