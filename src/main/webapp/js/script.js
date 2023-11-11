$(document).ready(function () {
  // hamburger
  var hamburger = $(".hamburger");
  var navLink = $(".menu");
  $(hamburger).click(function () {
    $(navLink).toggleClass("hide");
  });

 
  // changing map image depending on size
  $(window).resize(function () {
    var image = $(".map");
    var browserWidth = $(window).width();

    if (browserWidth < 400) {
      image.attr("src", "./images/location map-mobile.png");
    } else {
      image.attr("src", "./images/location map.png");
    }
  });
  // form validation
  $("#send").click(function (e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#number").val();
    var message = $("#message").val();
    var check = $("#checkbox");
    var formValid = false;
    var person = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    if (
      validateName(name, formValid) &&
      validateEmail(email, formValid) &&
      validatePhone(phone, formValid) &&
      validateMessage(message, formValid) &&
      validateCheckBox(formValid)
    ) {
      $("#number").val("");
      $("#name").val("");
      $("#email").val("");
      $("#message").val("");
      $("#checkbox").prop("checked", false);
      if (typeof Storage !== "undefined") {
        var personJson = JSON.stringify(person);
        localStorage.setItem(person.phone, personJson);
      }
    } else {
      e.preventDefault();
    }
    function validateName(name, formValid) {
      if (name.trim() == "") {
        $("#name-error").text("This is required");
        formValid = false;
      } else if (name.trim().length <= 1) {
        $("#name-error").text("This is invalid");
        formValid = false;
      } else {
        $("#name-error").text("");
        formValid = true;
      }
      return formValid;
    }
    function validateEmail(email, formValid) {
      var pattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      if (email.trim() == "") {
        $("#email-error").text("This is required");
        formValid = false;
      } else if (!pattern.test(email)) {
        formValid = false;
        $("#email-error").text("This is invalid email");
      } else {
        formValid = true;
        $("#email-error").text("");
      }
      return formValid;
    }

    function validatePhone(phone, formValid) {
      if (phone.trim() == "") {
        $("#phone-error").text("This is required");
        formValid = false;
      } else if (phone.trim().length != 10) {
        $("#phone-error").text("This is invalid");
        formValid = false;
      } else {
        $("#phone-error").text("");
        formValid = true;
      }

      return formValid;
    }

    function validateMessage(message, formValid) {
      if (message.trim() == "") {
        $("#message-error").text("this is required");
        formValid = false;
      } else {
        $("#message-error").text("");
        formValid = true;
      }
      return formValid;
    }

    function validateCheckBox(formValid) {
      if (!check.is(":checked")) {
        formValid = false;
        $("#checkbox-error").text("this is required");
      } else {
        formValid = true;
        $("#checkbox-error").text("");
      }
      return formValid;
    }
  });
});


// var arr=[10,5,6,3,9,8];
// arr.push(11);
// console.log(arr)
// arr.pop()
// console.log(arr)
// var arrTwo=arr.splice(2,1,6)
// console.log(arrTwo)