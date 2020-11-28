$(function () {
  let btnStart = $("#start");
  let btnAgain = $("#stop");
  let firstCar = $("#firstCar");
  let secondCar = $("#secondCar");
  let carWidth = firstCar.width();
  let raceCar = $(window).width() - carWidth;
  let span = $("#count");

 
  btnStart.on("click", function () {
   
    let raceTime1 = Math.floor(Math.random() * 5000 + 1);
    let raceTime2 = Math.floor(Math.random() * 5000 + 1);

    let finish = false;
    let place = "first";
  
    function check() {
      
      if (finish == false) {
        finish = true;
      } else {
        place = "second";
      }
    }

    span.show();

    let sec = 3;

    // CAR ANIMATION

    let timer = setInterval(function () {
      span.animate(
        {
          opacity: 1,
        },
        200,
        function () {
          span.text(sec--);
          btnStart.attr("disabled", "true");
          btnAgain.attr("disabled", "true");
        }
      );
      if (sec === 1) {
        span.fadeOut("swing", function () {
          firstCar.animate(
            {
              left: raceCar,
            },
            raceTime1,
            function () {
              check();
              $('place').css('color', 'red');
              $("#finish").css("display", "block");
              btnStart.removeAttr("disabled");
              btnAgain.removeAttr("disabled");
              $(".table").append(
                `<tr><th>"Finished in : ${place}  place with a time of : ${raceTime1} miliseconds </th></tr>`
              );
            }
          );
          secondCar.animate(
            {
              left: raceCar,
            },
            raceTime2,
            function () {
              check();
              $('place').css('color', 'red');
              $("#finish").css("display", "block");
              btnStart.removeAttr("disabled");
              btnAgain.removeAttr("disabled");
              $(".table2").append(
                `<tr><th>"Finished in : ${place} place with a time of : ${raceTime2} miliseconds </th></tr>`
              );
            }
          );
        });
        clearInterval(timer);
      }
    }, 1000);

    
    //  SET LOCAL STORAGE
    let placeFirstCar = '';
    let placeSecondCar = '';

    if(raceTime1 < raceTime2){
      placeFirstCar = 'first'
      placeSecondCar = 'second'
    }else{
      placeFirstCar = 'second'
      placeSecondCar = 'first'
    };

    let obj = {
      carOneTime: raceTime1,
      carTwoTime: raceTime2,
      placeFirstCar:placeFirstCar,
      placeSecondCar:placeSecondCar
    };
    // console.log(obj);
    
    let objString = JSON.stringify(obj);

    localStorage.setItem("all", objString);
  });


    let allStorage = localStorage.getItem("all");
    // console.log(allStorage);

    let allStorageToObj = JSON.parse(allStorage);
    // console.log(allStorageToObj);

    $(".table").val(allStorageToObj.carOneTime);
    $(".table").val(allStorageToObj.placeFirstCar);

    $(".table1").val(allStorageToObj.carTwoTime);
    $(".table1").val(allStorageToObj.placeSecondCar);

    $(".tableOld").append(
      `<tr><th>"Finished in : ${allStorageToObj.placeFirstCar} place with a time of : ${allStorageToObj.carOneTime} miliseconds </th></tr>`
    );
    $(".tableOld").append(
      `<tr><th>"Finished in : ${allStorageToObj.placeSecondCar} place with a time of : ${allStorageToObj.carTwoTime} miliseconds </th></tr>`
    );
  
  // BUTTON PLAY AGAIN

  btnAgain.on("click", function () {
    $(".car").css("left", "0");
    $("#finish").css("display", "none");
    $("#carId").text();
    $("#carId1").text();
    span.hide();
  });

});
