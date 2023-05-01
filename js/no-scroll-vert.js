$(function () {
    var scrollEvents = ['wheel', 'mousewheel']
  
    function freezeScroll() {
        for (var i = 0; i < arguments.length; i++) {
            elem = arguments[i];
            let func = preventScrollEventFunc(elem);
            let options = {
            passive: false
        };
        $(elem).on('mouseenter', function () {
          onWheel(window, func, options);
        }).on('mouseleave', function () {
          removeOnWheel(window, func);
        });
      }
    }
    // Отменить скролл страницы, если элемент selector прокручен до упора
    function preventScrollEventFunc(selector) {
        let elem = $(selector);
  
        function preventScroll(e) {
            let offset = e.wheel || e.wheelDelta;
            let crossingUpper = elem.scrollTop() == 0 && offset > 0;
            let crossingDown = (elem[0].scrollHeight - elem.scrollTop()
          == elem[0].clientHeight && offset < 0);
            if (crossingUpper || crossingDown) {
                e.preventDefault()
            }
        }
      return preventScroll;
    }
    // Повесить обработчик func для событий wheel и mousewheel у elem
    function onWheel(elem, func, options) {
        options = options || {};
        scrollEvents.forEach(function (item, i, arr) {
            elem.addEventListener(item, func, options);
        });
    }
    // Убрать обработчик func для событий wheel и mousewheel у elem
    function removeOnWheel(elem, func, options) {
        options = options || {};
        scrollEvents.forEach(function (item, i, arr) {
            elem.removeEventListener(item, func, options);
        });
    }
  
    $(document).ready(function () {
        freezeScroll('.noScroll');
    });
  });