"use strict";

$(document).ready(function () {
  $('.itemHouse').click(function () {
    $('#info-house').addClass('checked-house');
    var list = $('.itemHouse');

    for (var i = 0; i < list.length; i++) {
      if (list.eq(i).hasClass('chooseHouse')) {
        list.eq(i).removeClass('chooseHouse');
        list.eq(i).find('.tile-label').removeClass('chooseHouse-label');
        break;
      }
    }

    $(this).addClass('chooseHouse');
    $(this).find('.tile-label').addClass('chooseHouse-label');
    removeDisable("info-people");
    removeDisable("info-area");
  });
  $('a[href="#info-people"]').click(function () {
    setTimeout(function () {
      $('#adults').focus();
    }, 500);
  });
  $('a[href="#info-area"]').click(function () {
    setTimeout(function () {
      $('#area').focus();
    }, 500);
  });
  $('#btn-xn-info').click(function () {
    var adults = $('#adults').val();
    var child = $('#children').val();

    if (adults < 0 || adults > 8 || adults == "") {
      console.log("adults");
      $('#adults').focus();
      Swal.fire({
        icon: 'warning',
        title: 'Yêu cầu',
        text: 'Số người lớn cần lớn hơn bằng 0 và nhỏ hơn 8, đúng định dạng số'
      });
      return;
    } else if (child < 0 || child > 8 || child == "") {
      console.log("children");
      $('#children').focus();
      Swal.fire({
        icon: 'warning',
        title: 'Yêu cầu',
        text: 'Số trẻ em cần lớn hơn bằng 0 và nhỏ hơn 8, đúng định dạng số'
      });
      return;
    } else {
      $('#fill-name').text("Họ tên: " + $('#name').val());
      $('#fill-phone').text("Số điện thoại: " + $('#phone').val());
      $('#fill-email').text("Email: " + $('#email').val());

      if ($('#pac-map').css('display') == 'block') {
        if ($('#pac-input').val() != "") {
          $('#fill-area').text("Địa chỉ: " + $('#pac-input').val());
          $('#fill-area').css('display', 'block');
        }
      } else {
        $('#fill-area').css('display', 'none');
      }

      var list = $('.itemHouse');

      for (var i = 0; i < list.length; i++) {
        if (list.eq(i).hasClass('chooseHouse')) {
          $('#fill-house').text(list.eq(i).find('.tile-label').text());
          break;
        }
      }

      $('#fill-adults').text("-" + $('#adults').val() + " người lớn");
      $('#fill-children').text("-" + $('#children').val() + " trẻ em");
      $('#no-info').css('display', 'none');
      $('.modal').modal('hide');
    }
  });
  $('#name, #phone, #email').keyup(function () {
    var name = $('#name').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    var area = $('#area').val();

    if (name != "" && phone != "" && email != "") {
      removeDisable("info-house");

      if ($('#info-house').hasClass('checked-house')) {
        removeDisable("info-people");
        removeDisable("info-area");
      }

      if (area != "") {
        $('#btn-xn-info').removeClass('disable');
      }
    } else if (name == "" || phone == "" || email == "") {
      addDisable("info-house");
      addDisable("info-people");
      addDisable("info-area");
      $('#btn-xn-info').addClass('disable');
    }
  });
  $('#area').keyup(function () {
    var area = $('#area').val();

    if (area != "") {
      $('#btn-xn-info').removeClass('disable');
    } else {
      $('#btn-xn-info').addClass('disable');
    }
  });
});
$('#modalInfoCustomer').on('show.bs.modal', function (event) {
  // $('.next').addClass('disable');
  if ($('#area').val() != "") {
    $('#btn-xn-info').removeClass('disable');
  } else {
    $('#btn-xn-info').addClass('disable');
  }
});

var addDisable = function addDisable(id) {
  $('a[href="#' + id + '"]').addClass('disable');
  $('#' + id + '').addClass('disable');
};

var removeDisable = function removeDisable(id) {
  $('a[href="#' + id + '"]').removeClass('disable');
  $('#' + id + '').removeClass('disable');
}; //chia se vi tri


var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
    $('#pac-map').css('display', 'none');
    $('#mapholder').css('display', 'block');
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

$('#shareLocal').click(function () {
  getLocation();
});

function showPosition(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  $('#lat').val(lat);
  $('#lng').val(lng);
  var latlon = new google.maps.LatLng(lat, lng);
  var mapholder = document.getElementById('mapholder');
  mapholder.style.height = '500px';
  mapholder.style.width = '100%';
  var myOptions = {
    center: latlon,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    navigationControlOptions: {
      style: google.maps.NavigationControlStyle.SMALL
    }
  };
  var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
  var marker = new google.maps.Marker({
    position: latlon,
    map: map,
    title: "You are here!"
  });
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation.";
      break;

    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;

    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;

    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
} //chon vi tri tren ban do


$(document).ready(function () {
  $('#getLocal').click(function () {
    $('#mapholder').css('display', 'none');
    $('#pac-map').css('display', 'block');
  });
});

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 21.044763,
      lng: 105.843671
    },
    zoom: 17
  });
  var card = document.getElementById("pac-card");
  var input = document.getElementById("pac-input");
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
  var autocomplete = new google.maps.places.Autocomplete(input); // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.

  autocomplete.bindTo("bounds", map); // Set the data fields to return when the user selects a place.

  autocomplete.setFields(["address_components", "geometry", "icon", "name"]);
  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById("infowindow-content");
  infowindow.setContent(infowindowContent);
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });
  autocomplete.addListener("place_changed", function () {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();

    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    } // If the place has a geometry, then present it on a map.


    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17); // Why 17? Because it looks good.
    }

    marker.setPosition(place.geometry.location);
    marker.setVisible(true); // console.log("lat: " + place.geometry.viewport.Ya.i);
    // console.log("lng: " + place.geometry.viewport.Sa.i);

    $('#lat').val(place.geometry.viewport.Ya.i);
    $('#lng').val(place.geometry.viewport.Sa.i);
    var address = "";

    if (place.address_components) {
      address = [place.address_components[0] && place.address_components[0].short_name || "", place.address_components[1] && place.address_components[1].short_name || "", place.address_components[2] && place.address_components[2].short_name || ""].join(" ");
    }

    infowindowContent.children["place-icon"].src = place.icon;
    infowindowContent.children["place-name"].textContent = place.name;
    infowindowContent.children["place-address"].textContent = address;
    infowindow.open(map, marker);
  }); // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.

  function setupClickListener(id, types) {
    var radioButton = document.getElementById(id);
    radioButton.addEventListener("click", function () {
      autocomplete.setTypes(types);
    });
  }

  setupClickListener("changetype-all", []);
  setupClickListener("changetype-address", ["address"]);
  setupClickListener("changetype-establishment", ["establishment"]);
  setupClickListener("changetype-geocode", ["geocode"]);
  document.getElementById("use-strict-bounds").addEventListener("click", function () {
    console.log("Checkbox clicked! New state=" + this.checked);
    autocomplete.setOptions({
      strictBounds: this.checked
    });
  });
}