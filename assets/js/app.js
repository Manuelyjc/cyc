$(document).ready(function () {
  // Validar si el dispositivo soporta hover
  if (window.matchMedia('(hover: hover)').matches) {
    $('body').addClass('hover-supported');
  } else {
    $('body').removeClass('hover-supported');
  }
  if ($('body').hasClass('hover-supported')) {
    console.log('El dispositivo soporta hover.');
  } else {
    console.log('El dispositivo no soporta hover.');
  }

  // ABRIR / CERRAR MENU
  $(document).on('click', '.menu-toggle', function () {
    $("header").toggleClass("open");
  });

  // EFECTOS
  $(document).ready(function () {
    const $items = $('.content-grid-hen .item');

    function revealRandomItem() {
      const randomIndex = Math.floor(Math.random() * $items.length);
      const $item = $items.eq(randomIndex);

      // Evita activar repetidamente el mismo item si ya está activo
      if (!$item.hasClass('reveal')) {
        $item.addClass('reveal');

        // Luego de 2 segundos, vuelve a poner el fondo
        setTimeout(() => {
          $item.removeClass('reveal');
        }, 2000);
      }
    }

    // Ejecuta una vez por segundo
    setInterval(revealRandomItem, 1000);
  });


  // SLIDER
  $('.fade').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    fade: true,
    cssEase: 'linear'
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

  // SELECTIZE
  $("select").selectize({
  });
});