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
      $('#fill-area').text("Địa chỉ: " + $('#area').val());
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
};