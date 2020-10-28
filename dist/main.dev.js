"use strict";

var listDevice = [{
  'id': 1,
  'name': 'Điều hòa',
  'img': 'image/icon_colour_aircon.svg',
  'imghover': 'image/icon_aircon_white.svg',
  'list': [{
    'id': 1,
    'name': 'Điều hòa cây',
    'img': 'image/icon_colour_tv.svg',
    'imghover': 'image/icon_tv_white.svg'
  }, {
    'id': 2,
    'name': 'Điều hòa âm trần',
    'img': 'image/Washing_Machingv1.svg',
    'imghover': 'image/Washing_Machingv2.svg'
  }, {
    'id': 3,
    'name': 'Điều hòa tường',
    'img': 'image/icon_pool_white.svg',
    'imghover': 'image/icon_pool.svg'
  }]
}, {
  'id': 2,
  'name': 'Đèn chiếu sáng',
  'img': 'image/icon_colour_lighting.svg',
  'imghover': 'image/icon_lighting_white.svg',
  'list': [{
    'id': 1,
    'name': 'Đèn huỳnh quang',
    'img': 'image/Dryerv1.svg',
    'imghover': 'image/Dryerv2.svg'
  }, {
    'id': 2,
    'name': 'Đèn LED',
    'img': 'image/Fan_Heaterv1.svg',
    'imghover': 'image/Fan_Heaterv2.svg'
  }, {
    'id': 3,
    'name': 'Đèn sợi đốt',
    'img': 'image/Freezer_Largev1.svg',
    'imghover': 'image/Freezer_Largev2.svg'
  }, {
    'id': 4,
    'name': 'Đèn 1W',
    'img': 'image/icon_colour_aircon.svg',
    'imghover': 'image/icon_aircon_white.svg'
  }, {
    'id': 5,
    'name': 'Đèn 2W',
    'img': 'image/icon_colour_fridge.svg',
    'imghover': 'image/icon_fridge_white.svg'
  }, {
    'id': 6,
    'name': 'Đèn 3W',
    'img': 'image/icon_colour_lighting.svg',
    'imghover': 'image/icon_lighting_white.svg'
  }, {
    'id': 7,
    'name': 'Đèn 5W',
    'img': 'image/icon_colour_tv.svg',
    'imghover': 'image/icon_tv_white.svg'
  }]
}, {
  'id': 3,
  'name': 'Tủ lạnh',
  'img': 'image/icon_colour_fridge.svg',
  'imghover': 'image/icon_fridge_white.svg',
  'list': [{
    'id': 1,
    'name': 'Tủ lạnh mini',
    'img': 'image/Washing_Machingv1.svg',
    'imghover': 'image/Washing_Machingv2.svg'
  }, {
    'id': 2,
    'name': 'Tủ lạnh kem',
    'img': 'image/icon_pool_white.svg',
    'imghover': 'image/icon_pool.svg'
  }]
}, {
  'id': 4,
  'name': 'Máy làm đá',
  'img': 'image/Freezer_Largev1.svg',
  'imghover': 'image/Freezer_Largev2.svg',
  'list': [{
    'id': 1,
    'name': 'Máy mini',
    'img': 'image/Washing_Machingv1.svg',
    'imghover': 'image/Washing_Machingv2.svg'
  }, {
    'id': 2,
    'name': 'Máy to',
    'img': 'image/icon_pool_white.svg',
    'imghover': 'image/icon_pool.svg'
  }]
}, {
  'id': 5,
  'name': 'Tivi',
  'img': 'image/icon_colour_tv.svg',
  'imghover': 'image/icon_tv_white.svg',
  'list': [{
    'id': 1,
    'name': 'Tivi màn hình phẳng',
    'img': 'image/icon_colour_fridge.svg',
    'imghover': 'image/icon_fridge_white.svg'
  }, {
    'id': 2,
    'name': 'Tivi màn hình cong',
    'img': 'image/icon_colour_fridge.svg',
    'imghover': 'image/icon_fridge_white.svg'
  }, {
    'id': 3,
    'name': 'Tivi Untral 4K',
    'img': 'image/icon_colour_fridge.svg',
    'imghover': 'image/icon_fridge_white.svg'
  }, {
    'id': 4,
    'name': 'Tivi màn đen trắng',
    'img': 'image/icon_colour_fridge.svg',
    'imghover': 'image/icon_fridge_white.svg'
  }]
}, {
  'id': 6,
  'name': 'Bể bơi',
  'img': 'image/icon_pool_white.svg',
  'imghover': 'image/icon_pool.svg',
  'list': [{
    'id': 1,
    'name': 'Máy bơm con',
    'img': 'image/Fan_Heaterv1.svg',
    'imghover': 'image/Fan_Heaterv2.svg'
  }, {
    'id': 2,
    'name': 'Máy bơm tròn',
    'img': 'image/Fan_Heaterv1.svg',
    'imghover': 'image/Fan_Heaterv2.svg'
  }]
}, {
  'id': 7,
  'name': 'Máy rửa bát',
  'img': 'image/Dish_Washerv1.svg',
  'imghover': 'image/Dish_Washerv2.svg',
  'list': [{
    'id': 1,
    'name': 'Máy rửa bát Elec',
    'img': 'image/icon_colour_lighting.svg',
    'imghover': 'image/icon_lighting_white.svg'
  }]
}, {
  'id': 8,
  'name': 'Máy sấy',
  'img': 'image/Dryerv1.svg',
  'imghover': 'image/Dryerv2.svg',
  'list': [{
    'id': 1,
    'name': 'Máy sấy điện',
    'img': 'image/icon_pool_white.svg',
    'imghover': 'image/icon_pool.svg'
  }, {
    'id': 2,
    'name': 'Máy sấy Solar',
    'img': 'image/icon_pool_white.svg',
    'imghover': 'image/icon_pool.svg'
  }]
}, {
  'id': 9,
  'name': 'Máy giặt',
  'img': 'image/Washing_Machingv1.svg',
  'imghover': 'image/Washing_Machingv2.svg',
  'list': [{
    'id': 1,
    'name': 'Máy giặt cửa đứng',
    'img': 'image/Fan_Heaterv1.svg',
    'imghover': 'image/Fan_Heaterv2.svg'
  }, {
    'id': 2,
    'name': 'Máy giặt cửa ngang',
    'img': 'image/Fan_Heaterv1.svg',
    'imghover': 'image/Fan_Heaterv2.svg'
  }]
}, {
  'id': 10,
  'name': 'Máy sưởi',
  'img': 'image/Fan_Heaterv1.svg',
  'imghover': 'image/Fan_Heaterv2.svg',
  'list': [{
    'id': 1,
    'name': 'Máy sưởi đứng',
    'img': 'image/icon_pool_white.svg',
    'imghover': 'image/icon_pool.svg'
  }, {
    'id': 2,
    'name': 'Máy sưởi ngang',
    'img': 'image/icon_pool_white.svg',
    'imghover': 'image/icon_pool.svg'
  }]
}, {
  'id': 11,
  'name': 'Bếp điện',
  'img': 'image/Freezer_Largev1.svg',
  'imghover': 'image/Freezer_Largev2.svg',
  'list': [{
    'id': 1,
    'name': 'Bếp đơn',
    'img': 'image/icon_pool_white.svg',
    'imghover': 'image/icon_pool.svg'
  }, {
    'id': 2,
    'name': 'Bếp đôi',
    'img': 'image/icon_pool_white.svg',
    'imghover': 'image/icon_pool.svg'
  }]
}];
var idBtnToChange = 0;
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
}); //chart

function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function createChart() {
  var w = 65; //width icon

  var h = 65; //height icon

  var ctx = document.getElementById('canvas');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Điều hòa', 'Máy sấy', 'Bình nóng lạnh', 'Tủ lạnh', 'Máy giặt', 'Bếp điện', 'Đèn chiếu sáng', 'Máy rửa bát'],
      datasets: [{
        data: [450, 260, 240, 230, 180, 140, 110, 80],
        fill: false,
        backgroundColor: "#4082c4"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Điện năng tiêu thụ tháng 8',
        fontSize: 18,
        fontColor: '#000',
        padding: 50 // padding: {
        //     top: 10,
        //     bottom: 30,
        //     left: 0,
        //     right: 0
        // }

      },
      plugins: {
        // datalabels: {
        //   anchor: 'end',
        //   align  : 'start'        
        // },
        labels: {
          render: 'image',
          textMargin: 0,
          images: [{
            src: 'icon/dieuHoa.svg',
            width: w,
            height: h
          }, {
            src: 'icon/maySay.svg',
            width: w,
            height: h
          }, {
            src: 'icon/binhNongLanh.svg',
            width: w,
            height: h
          }, {
            src: 'icon/tuLanh.svg',
            width: w,
            height: h
          }, {
            src: 'icon/mayGiat.svg',
            width: w,
            height: h
          }, {
            src: 'icon/bepDien.svg',
            width: w,
            height: h
          }, {
            src: 'icon/den.svg',
            width: w,
            height: h
          }, {
            src: 'icon/mayRuaBat.svg',
            width: w,
            height: h
          }],
          position: 'outside'
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          barPercentage: 0.5
        }]
      }
    }
  });
} //normal modal


$(document).ready(function () {
  // loadButtonDevice();
  loadImgButtonDevice();
  iconUpDown();
  btnDeviceClick();
  btnCalcuClick();
  validateInputModal();
  scrollspy();
  activeBtn();
});

var loadButtonDevice = function loadButtonDevice() {
  for (var i = 0; i < listDevice.length; i++) {
    if (i % 2 == 0) {
      var html = '<div class="col-md-6 mb-1 pl-md-4 pr-md-1"><div class="div-device"><button type="button" class="btn btn-white btn-device" backimg="' + listDevice[i].img + '" backhoverimg="' + listDevice[i].imghover + '" data-toggle="modal" data-target="#listDeviceModal" data-id="' + listDevice[i].id + '"><span class="iconBox"></span><span class="listname"><span class="font28">' + listDevice[i].name + '</span></span><span class="listarrow"><span class="valueTxt">-1</span><span class="unit">kWh</span></span></button></div></div>';
      $('#row-device').append(html);
    } else {
      var html = '<div class="col-md-6 mb-1 pl-md-1 pr-md-4"><div class="div-device"><button type="button" class="btn btn-white btn-device" backimg="' + listDevice[i].img + '" backhoverimg="' + listDevice[i].imghover + '" data-toggle="modal" data-target="#listDeviceModal" data-id="' + listDevice[i].id + '"><span class="iconBox"></span><span class="listname"><span class="font28">' + listDevice[i].name + '</span></span><span class="listarrow"><span class="valueTxt">-1</span><span class="unit">kWh</span></span></button></div></div>';
      $('#row-device').append(html);
    }
  }
};

var loadImgButtonDevice = function loadImgButtonDevice() {
  var listBtnDevice = $(".btn-device");

  for (var i = 0; i < listBtnDevice.length; i++) {
    var url = listBtnDevice.eq(i).attr("backimg");
    listBtnDevice.eq(i).find(".iconBox").css('background-image', 'url(' + url + ')');
    listBtnDevice.eq(i).mouseover(function () {
      var urlHover = $(this).attr("backhoverimg");
      $(this).find(".iconBox").css('background-image', 'url(' + urlHover + ')'); // console.log(urlHover);
    });
    listBtnDevice.eq(i).mouseout(function () {
      var urlBack = $(this).attr("backimg");
      $(this).find(".iconBox").css('background-image', 'url(' + urlBack + ')'); // console.log(urlBack);
    });
  }
};

var btnDeviceClick = function btnDeviceClick() {
  var listBtnDevice = $('.btn-device');

  for (var i = 0; i < listBtnDevice.length; i++) {
    listBtnDevice.eq(i).click(function () {
      idBtnToChange = $(this).attr("data-id"); // console.log(idBtnToChange);

      $('#btn-xn').click(function () {
        var sg = $('#soGio').val();
        var sl = $('#soLuong').val(); // console.log('click');

        if (sg <= 0) {
          Swal.fire({
            icon: 'warning',
            title: 'Yêu cầu',
            text: 'Số giờ phải lớn hơn 0!'
          });
          return;
        } else if (sl <= 0) {
          Swal.fire({
            icon: 'warning',
            title: 'Yêu cầu',
            text: 'Số lượng phải lớn hơn 0!'
          });
          return;
        } else if (sg > 0 && sl > 0) {
          for (var j = 0; j < listBtnDevice.length; j++) {
            if (listBtnDevice.eq(j).attr('data-id') == idBtnToChange) {
              var button = listBtnDevice.eq(j);
              button.find('.valueTxt').text(Math.floor(Math.random() * 1000 + 100));
              button.find('.listarrow').removeClass('listarrow').addClass('device-confirmed');
              button.find('.valueTxt').css("display", "block");
              button.find('.unitDevice').css("display", "block");
              break;
            }
          }

          $('.modal').modal('hide');
          $('#btn-calcu').css("display", "block");
        }
      });
    });
  }
};

var activeBtn = function activeBtn() {
  var btn = $('.itemDevice');

  for (var i = 0; i < btn.length; i++) {
    var url = btn.eq(i).attr("backimg");
    btn.eq(i).find(".tile-icon").attr('src', url);
    btn.eq(i).click(function () {
      // console.log("click");
      if ($(this).hasClass('activeModal')) {
        var url1 = $(this).attr("backimg");
        $(this).find('.tile-icon').attr('src', url1);
        $(this).removeClass('activeModal');
      } else {
        var url2 = $(this).attr("backhoverimg");
        $(this).find('.tile-icon').attr('src', url2);
        $(this).addClass('activeModal');
      } // var change = $('.choose');
      // var url1 = change.attr("backimg");
      // change.find('.tile-icon').attr('src', url1);
      // change.removeClass('activeModal');
      // change.removeClass('choose');
      // var url2 = $(this).attr("backhoverimg");
      // $(this).find('.tile-icon').attr('src', url2);
      // $(this).addClass('activeModal');
      // $(this).addClass('choose');


      $('.nextStep').removeClass('disable');
      $('.info-device').removeClass('disable');
      $('.btn-xn').css("display", "block");
    }); // btn.eq(i).mouseover(function () {
    //     if (!$(this).hasClass("activeModal")) {
    //         var url2 = $(this).attr("backhoverimg");
    //         $(this).find('.tile-icon').attr('src', url2);
    //     }
    //     $(this).addClass('activeModal-hover');
    // });
    // btn.eq(i).mouseout(function () {
    //     if (!$(this).hasClass("activeModal")) {
    //         var url1 = $(this).attr("backimg");
    //         $(this).find('.tile-icon').attr('src', url1);
    //     }
    //     $(this).removeClass('activeModal-hover');
    // });
  }
}; // tang giam inputModal 


var iconUpDown = function iconUpDown() {
  $('.quantity').each(function () {
    var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.icon-up'),
        btnDown = spinner.find('.icon-down'),
        min = input.attr('min'),
        max = input.attr('max');
    btnUp.click(function () {
      var oldValue = parseFloat(input.val());

      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }

      spinner.find("input").val(newVal.toString());
      spinner.find("input").trigger("change");
    });
    btnDown.click(function () {
      var oldValue = parseFloat(input.val());

      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }

      spinner.find("input").val(newVal.toString());
      spinner.find("input").trigger("change");
    });
  });
}; // them/ xoa trong info-device


var addOrDeleteDevice = function addOrDeleteDevice(device, info) {
  var button = $("button[name='" + device + "']");
  var a = $("a[href='#" + device + "']"); // var aInfo = $("a[href='#"+info+"']");

  var tab = $('#' + device);
  var listTabPane = $('#' + info).find('.tab-pane');
  button.click(function () {
    if (!button.hasClass('activeModal')) {
      //xoa
      a.css('display', 'none');

      if (a.hasClass('active')) {
        a.removeClass('active');
        tab.removeClass('active show');

        for (var i = 0; i < listTabPane.length; i++) {
          var navLink = listTabPane.eq(i).attr('id');
          var buttonChange = $("button[name='" + navLink + "']");

          if (buttonChange.hasClass('activeModal')) {
            listTabPane.eq(i).addClass('active show'); // console.log(navLink);

            $("a[href='#" + navLink + "']").addClass('active');
            break;
          }
        }

        ;
      } // button.removeClass('activeModal');
      // var url2 = button.attr("backhoverimg");
      // button.find('.tile-icon').attr('src', url2);

    } else {
      //them
      a.css('display', 'block');
      var check = 1;

      for (var i = 0; i < listTabPane.length; i++) {
        if (listTabPane.eq(i).hasClass("active")) {
          check = 0;
          break;
        }
      }

      ;

      if (check) {
        a.addClass('active');
        tab.addClass('active show');
      } // button.addClass('activeModal');
      // var url1 = button.attr("backimg");
      // button.find('.tile-icon').attr('src', url1); 

    }
  });
}; //check Active Modal


var checkActiveModal = function checkActiveModal(device) {
  var listDevice = $('#list-' + device).find('.itemDevice');
  var check = 1;

  for (var i = 0; i < listDevice.length; i++) {
    if (listDevice.eq(i).hasClass('activeModal')) {
      check = 0;
      break;
    }
  }

  if (check) {
    $("a[href='#info-" + device + "']").addClass('disable');
    $('#info-' + device).addClass('disable');
    $('#btn-xn-' + device).css('display', 'none');
  }
};

var clickCheckActiveModal = function clickCheckActiveModal(device) {
  var listDevice = $('#list-' + device).find('.itemDevice');

  for (var i = 0; i < listDevice.length; i++) {
    listDevice.eq(i).click(function () {
      for (var j = 0; j < listDevice.length; j++) {
        var check = 1;

        if (listDevice.eq(j).hasClass('activeModal')) {
          check = 0;
          break;
        }
      }

      if (check) {
        $("a[href='#info-" + device + "']").addClass('disable');
        $('#info-' + device).addClass('disable');
        $('#btn-xn-' + device).css('display', 'none');
      } else {
        $("a[href='#info-" + device + "']").removeClass('disable');
      }
    });
  }
}; //check input is NaN


var checkInputValidate = function checkInputValidate(device, info) {
  //check soGio, soLuong
  var button = $("button[name='" + device + "']");
  var a = $("a[href='#" + device + "']");
  var tab = $('#' + device);
  var listTabPane = $('#' + info).find('.tab-pane');
  var soGio = $('#soGio-' + device);
  var soLuong = $('#soLuong-' + device);

  if (button.hasClass('activeModal')) {
    if (soGio.val() == "") {
      if (!a.hasClass('active')) {
        for (var i = 0; i < listTabPane.length; i++) {
          var navLink = listTabPane.eq(i).attr('id');

          if (listTabPane.eq(i).hasClass('active show')) {
            listTabPane.eq(i).removeClass('active show'); // console.log(navLink);

            $("a[href='#" + navLink + "']").removeClass('active');
            a.addClass('active');
            tab.addClass('active show');
            break;
          }
        }

        ;
      }

      soGio.focus();
      notiValidate();
      return 1;
    }

    if (soLuong.val() == "") {
      if (!a.hasClass('active')) {
        for (var i = 0; i < listTabPane.length; i++) {
          var navLink = listTabPane.eq(i).attr('id');

          if (listTabPane.eq(i).hasClass('active show')) {
            listTabPane.eq(i).removeClass('active show'); // console.log(navLink);

            $("a[href='#" + navLink + "']").removeClass('active');
            a.addClass('active');
            tab.addClass('active show');
            break;
          }
        }

        ;
      }

      soLuong.focus();
      notiValidate();
      return 1;
    }
  }
}; //check input is NaN for Modal den


var checkInputValidate2 = function checkInputValidate2(device, info) {
  var button = $("button[name='" + device + "']");
  var a = $("a[href='#" + device + "']");
  var tab = $('#' + device);
  var listTabPane = $('#' + info).find('.tab-pane');
  var soBong = $('#number-soBong-' + device); // var soLuong = $('#soLuong-' + device);

  if (button.hasClass('activeModal')) {
    if (soBong.val() == "") {
      if (!a.hasClass('active')) {
        for (var i = 0; i < listTabPane.length; i++) {
          var navLink = listTabPane.eq(i).attr('id');

          if (listTabPane.eq(i).hasClass('active show')) {
            listTabPane.eq(i).removeClass('active show'); // console.log(navLink);

            $("a[href='#" + navLink + "']").removeClass('active');
            a.addClass('active');
            tab.addClass('active show');
            break;
          }
        }

        ;
      }

      soBong.focus();
      notiValidate();
      return 1;
    }
  }
}; //check input is NaN for Modal dieuHoa


var checkInputValidate3 = function checkInputValidate3(device, info) {
  var button = $("button[name='" + device + "']");
  var a = $("a[href='#" + device + "']");
  var tab = $('#' + device);
  var listTabPane = $('#' + info).find('.tab-pane');
  var nhietDo = $('#temperature-' + device); // var soLuong = $('#soLuong-' + device);

  if (button.hasClass('activeModal')) {
    if (nhietDo.val() == "" || nhietDo.val() < 16) {
      if (!a.hasClass('active')) {
        for (var i = 0; i < listTabPane.length; i++) {
          var navLink = listTabPane.eq(i).attr('id');

          if (listTabPane.eq(i).hasClass('active show')) {
            listTabPane.eq(i).removeClass('active show'); // console.log(navLink);

            $("a[href='#" + navLink + "']").removeClass('active');
            a.addClass('active');
            tab.addClass('active show');
            break;
          }
        }

        ;
      }

      nhietDo.focus();
      Swal.fire({
        icon: 'warning',
        title: 'Yêu cầu',
        text: 'Yêu cầu điền một số trong khoảng 16 đến 32, không có dấu hay ký tự đặc biệt'
      });
      return 1;
    }
  }
};

$('#listDeviceModal').on('show.bs.modal', function (event) {
  $('.nextStep').addClass('disable');
  $('#info-device').addClass('disable');
  $('.btn-xn').css("display", "none");
  $('#soGio').val(1);
  $('#soLuong').val(1);
  var button = $(event.relatedTarget);
  var id = button.data('id');

  for (var i = 0; i < listDevice.length; i++) {
    if (listDevice[i].id === id) {
      $('#exampleModalLabel').text(listDevice[i].name);
      var q = listDevice[i].name.toLocaleLowerCase();
      $('#question').text("Chọn loại " + q + " bạn có ?");
      $('#listDetailDevice').empty();

      for (var j = 0; j < listDevice[i].list.length; j++) {
        var html = '<button tabindex="0" class="itemDevice" backimg="' + listDevice[i].list[j].img + '" backhoverimg="' + listDevice[i].list[j].imghover + '"><img src="' + listDevice[i].list[j].img + '" class="tile-icon" alt="image item"><span class="tile-label">' + listDevice[i].list[j].name + '</span></button>';
        $('#listDetailDevice').append(html);
      }

      break;
    } else {
      continue;
    }
  }
});

var btnCalcuClick = function btnCalcuClick() {
  $('#btn-calcu').click(function () {
    $('#calculate, #table-parameter, #month-detail, #chart').show();
    createChart();
  });
}; // scrollprsy


var scrollspy = function scrollspy() {// $('a').click(function () {
  //     var sectionTo = $(this).attr('href');
  //     $('.modal').animate({
  //         scrollTop: $(sectionTo).offset().top
  //     }, 1500);
  // });
  // $('a').click(function (event) {
  //     if (this.hash !== "") {
  //         event.preventDefault();
  //         var hash = this.hash;
  //         $('#modalInfoCustomer').animate({
  //             scrollTop: $(hash).offset().top
  //         }, 800, function () {
  //             window.location.hash = hash;
  //         });
  //         // $('html, body').animate({
  //         //     scrollTop: $(hash).offset().top
  //         // }, 1500, function () {
  //         //     window.location.hash = hash;
  //         // });
  //     }
  // });
};

var validateInputModal = function validateInputModal() {
  $('.inputModal').keyup(function () {
    var min = $(this).attr('min');
    var max = $(this).attr('max');
    var number = parseInt($(this).val()); // console.log(number);

    if (number < min) {
      $(this).val("");
      $(this).val(min); // $(this).trigger("change");
    }

    if (number > max) {
      $(this).val("");
      $(this).val(max); // $(this).trigger("change");
    }
  });
};

var notiValidate = function notiValidate() {
  Swal.fire({
    icon: 'warning',
    title: 'Yêu cầu',
    text: 'Yêu cầu điền một số, không có dấu hay ký tự đặc biệt'
  });
}; //click bat ca ngay


var check24h = function check24h(name) {
  $('#check-' + name).click(function () {
    if ($(this).prop('checked')) {
      $('#soGio-' + name).val(24);
      $('#soGio-' + name).addClass('disable2');
      $('#soGio-' + name).parent().find('.icon-up').addClass('disable2');
      $('#soGio-' + name).parent().find('.icon-down').addClass('disable2');
    } else {
      $('#soGio-' + name).removeClass('disable2');
      $('#soGio-' + name).parent().find('.icon-up').removeClass('disable2');
      $('#soGio-' + name).parent().find('.icon-down').removeClass('disable2');
    }
  });
}; //modal bep dien


$(document).ready(function () {
  var info = 'info-bep';
  $('#btn-bep').click(function () {
    var button = $(this); // console.log(idBtnToChange);

    $('#btn-xn-bep').click(function () {
      if (checkInputValidate('bepDon', info)) {
        return;
      } else if (checkInputValidate('bepDoi', info)) {
        return;
      }

      button.find('.valueTxt').text(Math.floor(Math.random() * 1000 + 100));
      button.find('.listarrow').removeClass('listarrow').addClass('device-confirmed');
      button.find('.valueTxt').css("display", "block");
      button.find('.unitDevice').css("display", "block");
      button.find(".recommend").css("display", "block");
      button.find(".listname").css("padding-top", "15px");
      button.attr("title", button.find(".recommend").text());
      button.attr("data-toggle", "tooltip");
      button.tooltip();
      $('.modal').modal('hide');
      $('#btn-calcu').css("display", "block");
    });
  });
  addOrDeleteDevice('bepDon', info);
  addOrDeleteDevice('bepDoi', info);
  checkActiveModal('bep');
  clickCheckActiveModal('bep');
});
$('#modalBep').on('show.bs.modal', function (event) {
  // var button = $(event.relatedTarget);
  // console.log(button.data('choice'));
  // if (button.hasClass("clicked")) {
  //     return;
  // } else {
  //     activeBtn();
  // }
  // button.addClass("clicked");
  var list = $('.itemDevice');

  for (var i = 0; i < list.length; i++) {
    if (list.eq(i).hasClass('activeModal')) {
      var url = list.eq(i).attr("backhoverimg");
      list.eq(i).find(".tile-icon").attr('src', url);
    }
  }

  checkActiveModal('bep');
}); //modal den

$(document).ready(function () {
  var info = 'info-den';
  $('#btn-den').click(function () {
    var button = $(this); // console.log(idBtnToChange);

    $('#btn-xn-den').click(function () {
      // var sb1 = $('#number-soBong-denHuynhQuang').val();
      // var sb2 = $('#number-soBong-Led').val();
      // var sb3 = $('#number-soBong-denSoiDot').val();
      if (checkInputValidate2("denHuynhQuang", info)) {
        return;
      } else if (checkInputValidate2("denLed", info)) {
        return;
      } else if (checkInputValidate2("denSoiDot", info)) {
        return;
      } else if (checkInputValidate2("denHalogen", info)) {
        return;
      } else {
        button.find('.valueTxt').text(Math.floor(Math.random() * 1000 + 100));
        button.find('.listarrow').removeClass('listarrow').addClass('device-confirmed');
        button.find('.valueTxt').css("display", "block");
        button.find('.unitDevice').css("display", "block");
        button.find(".recommend").css("display", "block");
        button.find(".listname").css("padding-top", "15px");
        button.attr("title", button.find(".recommend").text());
        button.attr("data-toggle", "tooltip");
        button.tooltip();
        $('.modal').modal('hide');
        $('#btn-calcu').css("display", "block");
      }
    });
  });
  $("#slider-denHuynhQuang, #slider-denLed, #slider-denSoiDot, #slider-denHalogen").roundSlider({
    radius: 85,
    circleShape: "half-top",
    sliderType: "min-range",
    mouseScrollAction: true,
    value: 1,
    handleSize: "+10",
    min: 1,
    max: 24
  });
  $('#soBong-denHuynhQuang').on('input', function () {
    $('#number-soBong-denHuynhQuang').val($('#soBong-denHuynhQuang').val());
  });
  $('#number-soBong-denHuynhQuang').keyup(function () {
    $('#soBong-denHuynhQuang').val($('#number-soBong-denHuynhQuang').val());
  });
  $('#soBong-denLed').on('input', function () {
    $('#number-soBong-denLed').val($('#soBong-denLed').val());
  });
  $('#number-soBong-denLed').keyup(function () {
    $('#soBong-denLed').val($('#number-soBong-denLed').val());
  });
  $('#soBong-denSoiDot').on('input', function () {
    $('#number-soBong-denSoiDot').val($('#soBong-denSoiDot').val());
  });
  $('#number-soBong-denSoiDot').keyup(function () {
    $('#soBong-denSoiDot').val($('#number-soBong-denSoiDot').val());
  });
  $('#soBong-denHalogen').on('input', function () {
    $('#number-soBong-denHalogen').val($('#soBong-denHalogen').val());
  });
  $('#number-soBong-denHalogen').keyup(function () {
    $('#soBong-denHalogen').val($('#number-soBong-denHalogen').val());
  });
  addOrDeleteDevice('denHuynhQuang', info);
  addOrDeleteDevice('denLed', info);
  addOrDeleteDevice('denSoiDot', info);
  addOrDeleteDevice('denHalogen', info);
  checkActiveModal('den');
  clickCheckActiveModal('den');
});
$('#modalDen').on('show.bs.modal', function (event) {
  // $(this).find('.rs-tooltip').attr('id', 'soGioDen');
  checkActiveModal('den');
  var list = $('.itemDevice');

  for (var i = 0; i < list.length; i++) {
    if (list.eq(i).hasClass('choose')) {
      var url = list.eq(i).attr("backhoverimg");
      list.eq(i).find(".tile-icon").attr('src', url);
      break;
    }
  }

  checkActiveModal('den');
}); // modal tu lanh 

$(document).ready(function () {
  $('#btn-tuLanh').click(function () {
    var button = $(this); // console.log(idBtnToChange);

    $('#btn-xn-tuLanh').click(function () {
      var sl1 = $('#slTuLanhLon').val();
      var sl2 = $('#slTuLanhTrungBinh').val();
      var sl3 = $('#slTuLanhMini').val();

      if (sl1 == "") {
        $('#slTuLanhLon').focus();
        notiValidate();
        return;
      } else if (sl2 == "") {
        $('#slTuLanhTrungBinh').focus();
        notiValidate();
        return;
      } else if (sl3 == "") {
        $('#slTuLanhMini').focus();
        notiValidate();
        return;
      } else {
        button.find('.valueTxt').text(Math.floor(Math.random() * 1000 + 100));
        button.find('.listarrow').removeClass('listarrow').addClass('device-confirmed');
        button.find('.valueTxt').css("display", "block");
        button.find('.unitDevice').css("display", "block");
        button.find(".recommend").css("display", "block");
        button.find(".listname").css("padding-top", "15px");
        button.attr("title", button.find(".recommend").text());
        button.attr("data-toggle", "tooltip");
        button.tooltip();
        $('.modal').modal('hide');
        $('#btn-calcu').css("display", "block");
      }
    });
  });
});
$('#modalTuLanh').on('show.bs.modal', function (event) {
  // activeBtn();
  var list = $('.itemDevice');

  for (var i = 0; i < list.length; i++) {
    if (list.eq(i).hasClass('choose')) {
      var url = list.eq(i).attr("backhoverimg");
      list.eq(i).find(".tile-icon").attr('src', url);
      break;
    }
  }
}); //modal tivi
// $(document).ready(function () {
//     var info = 'info-tivi';
//     $('#btn-tivi').click(function () {
//         var button = $(this);
//         // console.log(idBtnToChange);
//         $('#btn-xn-tivi').click(function () {
//             if (checkInputValidate("tiviHD", info)) {
//                 return;
//             } else if (checkInputValidate("tivi4K", info)) {
//                 return;
//             }
//             button.find('.valueTxt').text(Math.floor((Math.random() * 1000) + 100));
//             button.find('.listarrow').removeClass('listarrow').addClass('device-confirmed');
//             button.find('.valueTxt').css("display", "block");
//             button.find('.unitDevice').css("display", "block");
//             button.find(".recommend").css("display", "block");
//             button.find(".listname").css("padding-top", "15px");
//             button.attr("title", button.find(".recommend").text());
//             button.attr("data-toggle", "tooltip");
//             button.tooltip();
//             $('.modal').modal('hide');
//             $('#btn-calcu').css("display", "block");
//         });
//     });
//     addOrDeleteDevice('tiviHD', info);
//     addOrDeleteDevice('tivi4K', info);
//     checkActiveModal('tivi');
//     clickCheckActiveModal('tivi');
// });
// $('#modalTivi').on('show.bs.modal', function (event) {
//     var list = $('.itemDevice');
//     for (var i = 0; i < list.length; i++) {
//         if (list.eq(i).hasClass('activeModal')) {
//             var url = list.eq(i).attr("backhoverimg");
//             list.eq(i).find(".tile-icon").attr('src', url);
//         }
//     }
//     checkActiveModal('tivi');
// });
//modal may giat

$(document).ready(function () {
  var info = 'info-mayGiat';
  $('#btn-mayGiat').click(function () {
    var button = $(this); // console.log(idBtnToChange);

    $('#btn-xn-mayGiat').click(function () {
      if (checkInputValidate("mayGiatCuaDung", info)) {
        return;
      } else if (checkInputValidate("mayGiatCuaNgang", info)) {
        return;
      }

      button.find('.valueTxt').text(Math.floor(Math.random() * 1000 + 100));
      button.find('.listarrow').removeClass('listarrow').addClass('device-confirmed');
      button.find('.valueTxt').css("display", "block");
      button.find('.unitDevice').css("display", "block");
      button.find(".recommend").css("display", "block");
      button.find(".listname").css("padding-top", "15px");
      button.attr("title", button.find(".recommend").text());
      button.attr("data-toggle", "tooltip");
      button.tooltip();
      $('.modal').modal('hide');
      $('#btn-calcu').css("display", "block");
    });
  });
  addOrDeleteDevice('mayGiatCuaDung', info);
  addOrDeleteDevice('mayGiatCuaNgang', info);
  checkActiveModal('mayGiat');
  clickCheckActiveModal('mayGiat');
});
$('#modalMayGiat').on('show.bs.modal', function (event) {
  var list = $('.itemDevice');

  for (var i = 0; i < list.length; i++) {
    if (list.eq(i).hasClass('activeModal')) {
      var url = list.eq(i).attr("backhoverimg");
      list.eq(i).find(".tile-icon").attr('src', url);
    }
  }

  checkActiveModal('mayGiat');
}); //modal thiet bi khac

$(document).ready(function () {
  var info = 'info-tbk';
  $('#btn-tbk').click(function () {
    var button = $(this); // console.log(idBtnToChange);

    $('#btn-xn-tbk').click(function () {
      if (checkInputValidate("quatTran", info)) {
        return;
      } else if (checkInputValidate("quatCay", info)) {
        return;
      } else if (checkInputValidate("tiviHD", info)) {
        return;
      } else if (checkInputValidate("tivi4K", info)) {
        return;
      }

      button.find('.valueTxt').text(Math.floor(Math.random() * 1000 + 100));
      button.find('.listarrow').removeClass('listarrow').addClass('device-confirmed');
      button.find('.valueTxt').css("display", "block");
      button.find('.unitDevice').css("display", "block");
      button.find(".recommend").css("display", "block");
      button.find(".listname").css("padding-top", "15px");
      button.attr("title", button.find(".recommend").text());
      button.attr("data-toggle", "tooltip");
      button.tooltip();
      $('.modal').modal('hide');
      $('#btn-calcu').css("display", "block");
    });
  });
  addOrDeleteDevice('quatTran', info);
  addOrDeleteDevice('quatCay', info);
  addOrDeleteDevice('tiviHD', info);
  addOrDeleteDevice('tivi4K', info);
  checkActiveModal('tbk');
  clickCheckActiveModal('tbk');
});
$('#modalQuat').on('show.bs.modal', function (event) {
  var list = $('.itemDevice');

  for (var i = 0; i < list.length; i++) {
    if (list.eq(i).hasClass('activeModal')) {
      var url = list.eq(i).attr("backhoverimg");
      list.eq(i).find(".tile-icon").attr('src', url);
    }
  }

  checkActiveModal('quat');
}); //modal lo nuong

$(document).ready(function () {
  var info = 'info-loNuong';
  $('#btn-loNuong').click(function () {
    var button = $(this); // console.log(idBtnToChange);

    $('#btn-xn-loNuong').click(function () {
      if (checkInputValidate('lo1', info)) {
        return;
      } else if (checkInputValidate('lo2', info)) {
        return;
      }

      button.find('.valueTxt').text(Math.floor(Math.random() * 1000 + 100));
      button.find('.listarrow').removeClass('listarrow').addClass('device-confirmed');
      button.find('.valueTxt').css("display", "block");
      button.find('.unitDevice').css("display", "block");
      button.find(".recommend").css("display", "block");
      button.find(".listname").css("padding-top", "15px");
      button.attr("title", button.find(".recommend").text());
      button.attr("data-toggle", "tooltip");
      button.tooltip();
      $('.modal').modal('hide');
      $('#btn-calcu').css("display", "block");
    });
  });
  addOrDeleteDevice('lo1', info);
  addOrDeleteDevice('lo2', info);
  checkActiveModal('loNuong');
  clickCheckActiveModal('loNuong');
});
$('#modalBep').on('show.bs.modal', function (event) {
  // var button = $(event.relatedTarget);
  // console.log(button.data('choice'));
  // if (button.hasClass("clicked")) {
  //     return;
  // } else {
  //     activeBtn();
  // }
  // button.addClass("clicked");
  var list = $('.itemDevice');

  for (var i = 0; i < list.length; i++) {
    if (list.eq(i).hasClass('activeModal')) {
      var url = list.eq(i).attr("backhoverimg");
      list.eq(i).find(".tile-icon").attr('src', url);
    }
  }

  checkActiveModal('bep');
}); // modal dieu hoa 

$(document).ready(function () {
  var info = 'info-dieuHoa';
  $('.temperature-widget-wrapper').each(function () {
    var spinner = $(this),
        input = spinner.find('.temperature-gauge-label'),
        btnUp = spinner.find('.temperature-up'),
        btnDown = spinner.find('.temperature-down'),
        min = 16,
        max = 32;
    btnUp.click(function () {
      var oldValue = parseFloat(input.html());

      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }

      var html = newVal + "<span class='unit'>°</span>";
      spinner.find(".temperature-gauge-label").html(html);
      spinner.find("input").val(newVal.toString()); // $('#temperature-dieuHoa').val(newVal);
      // spinner.find("input").trigger("change");
    });
    btnDown.click(function () {
      var oldValue = parseFloat(input.html());

      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }

      var html = newVal + "<span class='unit'>°</span>";
      spinner.find(".temperature-gauge-label").html(html);
      spinner.find("input").val(newVal.toString()); // $('#temperature-dieuHoa').val(newVal);
      // spinner.find("input").trigger("change");
    });
  }); // $('.input-temperature').focusout(function () {
  //     var value = $(".temperature-gauge-label").text().substr(0, 2);
  //     var min = $(this).attr('min');
  //     var max = $(this).attr('max');
  //     var number = parseInt($(this).val());
  //     if (number < min) {
  //         $(this).val("");
  //         $(this).val(value);
  //         $(this).trigger("change");
  //     }
  //     if (number > max) {
  //         $(this).val("");
  //         $(this).val(value);
  //         $(this).trigger("change");
  //     }
  //     if (number <= 0) {
  //         $(this).val("");
  //         $(this).val(value);
  //         // $(this).trigger("change");
  //     }
  // })

  $('#temperature-dieuHoaAmTran').keyup(function () {
    var number = parseInt($(this).val());

    if (!isNaN(number) && number >= 16 && number <= 32) {
      var html = number + "<span class='unit'>°</span>";
      $("#label-dieuHoaAmTran").html(html);
    } else {
      var html = 18 + "<span class='unit'>°</span>";
      $("#label-dieuHoaAmTran").html(html);
    }
  });
  $('#temperature-dieuHoaTreoTuong').keyup(function () {
    var number = parseInt($(this).val());

    if (!isNaN(number) && number >= 16 && number <= 32) {
      var html = number + "<span class='unit'>°</span>";
      $("#label-dieuHoaTreoTuong").html(html);
    } else {
      var html = 18 + "<span class='unit'>°</span>";
      $("#label-dieuHoaTreoTuong").html(html);
    }
  });
  $('#temperature-dieuHoaCay').keyup(function () {
    var number = parseInt($(this).val());

    if (!isNaN(number) && number >= 16 && number <= 32) {
      var html = number + "<span class='unit'>°</span>";
      $("#label-dieuHoaCay").html(html);
    } else {
      var html = 18 + "<span class='unit'>°</span>";
      $("#label-dieuHoaCay").html(html);
    }
  });
  $('#btn-dieuHoa').click(function () {
    var button = $(this); // console.log(idBtnToChange);

    $('#btn-xn-dieuHoa').click(function () {
      if (checkInputValidate3("dieuHoaAmTran", info)) {
        return;
      } else if (checkInputValidate3("dieuHoaTreoTuong", info)) {
        return;
      } else if (checkInputValidate3("dieuHoaCay", info)) {
        return;
      } else {
        button.find('.valueTxt').text(Math.floor(Math.random() * 1000 + 100));
        button.find('.listarrow').removeClass('listarrow').addClass('device-confirmed');
        button.find('.valueTxt').css("display", "block");
        button.find('.unitDevice').css("display", "block");
        button.find(".recommend").css("display", "block");
        button.find(".listname").css("padding-top", "15px");
        button.attr("title", button.find(".recommend").text());
        button.attr("data-toggle", "tooltip");
        button.tooltip();
        $('.modal').modal('hide');
        $('#btn-calcu').css("display", "block");
      }
    });
  });
  $("#slider-dieuHoaAmTran, #slider-dieuHoaTreoTuong, #slider-dieuHoaCay").roundSlider({
    radius: 72,
    circleShape: "half-top",
    sliderType: "min-range",
    mouseScrollAction: true,
    value: 1,
    handleSize: "+10",
    min: 1,
    max: 24
  });
  addOrDeleteDevice('dieuHoaAmTran', info);
  addOrDeleteDevice('dieuHoaTreoTuong', info);
  addOrDeleteDevice('dieuHoaCay', info); // addOrDeleteDevice('quatCay', info);

  checkActiveModal('dieuHoa');
  clickCheckActiveModal('dieuHoa'); // $('.rs-tooltip').attr('id', 'soGioDieuHoa');
  // $('.rs-tooltip').change(function(){
  //     console.log('change');
  //     $('#soGio-dieuHoa').val($(this).text());
  // });
  // $('#soGio-dieuHoa').keyup(function(){
  //     console.log('change');
  //     $('.rs-tooltip').text($(this).val());
  // });
});
$('#modalDieuHoa').on('show.bs.modal', function (event) {
  // $('.nextStep').addClass('disable');
  // $('.info-device').addClass('disable');
  // $('#btn-xn-dieuHoa').css("display", "none");
  // var button = $(event.relatedTarget);
  // if (button.hasClass("clicked")) {
  //     return;
  // } else {
  //     activeBtn();
  // }
  // button.addClass("clicked");
  var list = $('.itemDevice');

  for (var i = 0; i < list.length; i++) {
    if (list.eq(i).hasClass('choose')) {
      var url = list.eq(i).attr("backhoverimg");
      list.eq(i).find(".tile-icon").attr('src', url);
      break;
    }
  }

  checkActiveModal('dieuHoa');
}); //modal may say

$(document).ready(function () {
  var info = 'info-maySay';
  $('#btn-maySay').click(function () {
    var button = $(this); // console.log(idBtnToChange);

    $('#btn-xn-maySay').click(function () {
      if (checkInputValidate("maySayToc", info)) {
        return;
      } else if (checkInputValidate("maySayQuanAo", info)) {
        return;
      }

      button.find('.valueTxt').text(Math.floor(Math.random() * 1000 + 100));
      button.find('.listarrow').removeClass('listarrow').addClass('device-confirmed');
      button.find('.valueTxt').css("display", "block");
      button.find('.unitDevice').css("display", "block");
      button.find(".recommend").css("display", "block");
      button.find(".listname").css("padding-top", "15px");
      button.attr("title", button.find(".recommend").text());
      button.attr("data-toggle", "tooltip");
      button.tooltip();
      $('.modal').modal('hide');
      $('#btn-calcu').css("display", "block");
    });
  });
  addOrDeleteDevice('maySayToc', info);
  addOrDeleteDevice('maySayQuanAo', info);
  checkActiveModal('maySay');
  clickCheckActiveModal('maySay');
});
$('#modalMaySay').on('show.bs.modal', function (event) {
  var list = $('.itemDevice');

  for (var i = 0; i < list.length; i++) {
    if (list.eq(i).hasClass('activeModal')) {
      var url = list.eq(i).attr("backhoverimg");
      list.eq(i).find(".tile-icon").attr('src', url);
    }
  }

  checkActiveModal('maySay');
}); //modal may rua bat

$(document).ready(function () {
  $('#btn-mayRuaBat').click(function () {
    var button = $(this); // console.log(idBtnToChange);

    $('#btn-xn-mayRuaBat').click(function () {
      if ($('#number-soGio-mayRuaBat').val() == "") {
        $('#number-soGio-mayRuaBat').focus();
        notiValidate();
        return;
      }

      button.find('.valueTxt').text(Math.floor(Math.random() * 1000 + 100));
      button.find('.listarrow').removeClass('listarrow').addClass('device-confirmed');
      button.find('.valueTxt').css("display", "block");
      button.find('.unitDevice').css("display", "block");
      button.find(".recommend").css("display", "block");
      button.find(".listname").css("padding-top", "15px");
      button.attr("title", button.find(".recommend").text());
      button.attr("data-toggle", "tooltip");
      button.tooltip();
      $('.modal').modal('hide');
      $('#btn-calcu').css("display", "block");
    });
  });
  $('#soGio-mayRuaBat').on('input', function () {
    $('#number-soGio-mayRuaBat').val($('#soGio-mayRuaBat').val());
  });
  $('#number-soGio-mayRuaBat').keyup(function () {
    $('#soGio-mayRuaBat').val($('#number-soGio-mayRuaBat').val());
  });
});
$('#modalMayRuaBat').on('show.bs.modal', function (event) {
  $('#btn-xn-mayRuaBat').css('display', 'block');
}); //modal binh nong lanh

$(document).ready(function () {
  var info = 'info-binhNongLanh';
  $('#btn-binhNongLanh').click(function () {
    var button = $(this); // console.log(idBtnToChange);

    $('#btn-xn-binhNongLanh').click(function () {
      if (checkInputValidate('binhNongLanh15', info)) {
        return;
      } else if (checkInputValidate('binhNongLanh20', info)) {
        return;
      } else if (checkInputValidate('binhNongLanh30', info)) {
        return;
      }

      button.find('.valueTxt').text(Math.floor(Math.random() * 1000 + 100));
      button.find('.listarrow').removeClass('listarrow').addClass('device-confirmed');
      button.find('.valueTxt').css("display", "block");
      button.find('.unitDevice').css("display", "block");
      button.find(".recommend").css("display", "block");
      button.find(".listname").css("padding-top", "15px");
      button.attr("title", button.find(".recommend").text());
      button.attr("data-toggle", "tooltip");
      button.tooltip();
      $('.modal').modal('hide');
      $('#btn-calcu').css("display", "block");
    });
  });
  addOrDeleteDevice('binhNongLanh15', info);
  addOrDeleteDevice('binhNongLanh20', info);
  addOrDeleteDevice('binhNongLanh30', info);
  checkActiveModal('binhNongLanh');
  clickCheckActiveModal('binhNongLanh');
  check24h('binhNongLanh15');
  check24h('binhNongLanh20');
  check24h('binhNongLanh30');
});
$('#modalBinhNongLanh').on('show.bs.modal', function (event) {
  var list = $('.itemDevice');

  for (var i = 0; i < list.length; i++) {
    if (list.eq(i).hasClass('activeModal')) {
      var url = list.eq(i).attr("backhoverimg");
      list.eq(i).find(".tile-icon").attr('src', url);
    }
  }

  checkActiveModal('binhNongLanh');
});