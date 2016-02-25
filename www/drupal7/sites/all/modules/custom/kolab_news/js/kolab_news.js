(function ($) {
  Drupal.behaviors.kolab_news= {
    attach: function (context, settings) {
      var newsList = $('#news-list-main');
      var number_pagination = settings.kolab_news.kolab_num_nodes;
      
      if(newsList.length > 0) {
        newsList.imagesLoaded( function() {
          // init Masonry
          newsList.isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'masonry',
            sortBy: 'original-order',
            masonry: {
              columnWidth: '.grid-sizer',
              gutter: '.gutter-sizer'
            }
          });
        });
      }

      var loadNews = function(date) {
        var button = $('#load-more');
        var pagination = button.attr("data-pagination");

        $('body').append('<div class="news-loader"><span></span></div>');

        $.ajax({
          url: '/news/load-more',
          data: { pagination: pagination, date: date},
          type: 'POST',
          dataType: 'json',
        })
        .done(function(data) {
          
          var $newItems = $(data.data_output);
            newsList.append($newItems).isotope('appended', $newItems).isotope('layout');
            if(data.data_left == "0"){
              button.fadeOut();
            } else {
              button.show();
            }
            pagination = parseInt(pagination) + number_pagination;
            button.attr("data-pagination", pagination);
            $('body>.news-loader').remove();
        })
        .fail(function() {
          $('body>.news-loader').remove();
        });
      }

      var filterNews = function(date, shift) {
        var button = $('#load-more');
        var pagination = button.attr("data-pagination");

        shift = typeof shift !== 'undefined' ? shift : false;
        $('body').append('<div class="news-loader"><span></span></div>');

        newsList.find("article").each(function(){
          newsList.isotope('remove', $(this));
          $(this).remove();
        });
        
        $.ajax({
          url: '/news/filter-date',
          data: { pagination: pagination, shift: shift, date: date },
          type: 'POST',
          dataType: 'json',
        })
        .done(function(data) {
          var $newItems = $(data.data_output);

          $("#month-filter .main-date").attr("data-date", data.date_timestamp).html(data.date);

          if($newItems.length) {
            newsList.prepend($newItems).isotope('prepended', $newItems).isotope('layout');
          }

          if(data.data_left == "0"){
            button.fadeOut();
          } else {
            button.show();
          }

          button.attr("data-pagination", number_pagination);

          $('body>.news-loader').remove();
        })
        .fail(function() {
          $('body>.news-loader').remove();
        });
      }

      $('#load-more').on('click', function(event) {
        event.preventDefault();
        var date = $("#month-filter .main-date").attr("data-date");
        loadNews(date);
        return false;
      });

      $("#month-filter a.filter").on('click', function(event) {
        event.preventDefault();
        var date = $("#month-filter .main-date").attr("data-date");
        filterNews(date, $(this).attr("data-shift"));
      });
    }
  };
})(jQuery);