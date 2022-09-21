let doc = $(document);
let win = $(window);

/* sp:mobile menu */
let app__menu = (function() {

    function menu_open(__mobile_menu) {
        __mobile_menu.removeClass('-translate-y-full').attr('data-sp-status', true);
        console.log('StandardPak__menu: OPEN');
    }

    function menu_close(__mobile_menu) {
        __mobile_menu.addClass('-translate-y-full').attr('data-sp-status', false);
        console.log('StandardPak__menu: CLOSE');
    }

    function init() {
        let __burger = $('a[data-sp-name="bureger-btn"]');
        let __mobile_menu = $('div[data-sp-name="mobile-menu"]');
        __burger.on('click', function(){
            let __mobile_menu_status = __mobile_menu.attr('data-sp-status');
            if( __mobile_menu_status == 'false' ){
                menu_open(__mobile_menu);
            } else{
                menu_close(__mobile_menu);
            }
        });
    }

    return {
        init: init
    }

})();
/* /sp:mobile menu */

/* sp:resize */
let app__resize = (function() {

    function blocks_resize() {
        let __header_h = $('header[data-sp-name="header"]').height();
        console.log('StandardPak__window-width: '+__header_h+'px');
        $('main[data-sp-name="main"]').css('padding-top', __header_h);
        $('div[data-sp-name="mobile-menu"]').css('padding-top', __header_h);
        $('div[data-sp-name="search"]').css('top', __header_h+10);
    }

    function init() {
        win.on('resize', function(){
            blocks_resize();
        });
    }

    return {
        init: init
    }

})();
/* /sp:resize */

/* sp:load */
let app__load = (function() {

    function blocks_load() {
        let __header_h = $('header[data-sp-name="header"]').height();
        console.log('StandardPak__window-width: '+__header_h+'px');
        $('main[data-sp-name="main"]').css('padding-top', __header_h);
        $('div[data-sp-name="mobile-menu"]').css('padding-top', __header_h);
        $('div[data-sp-name="search"]').css('top', __header_h+10);
    }

    function init() {
        blocks_load();
    }

    return {
        init: init
    }

})();
/* /sp:load */

/* sp:main-banner */
let app__owl_banner = (function() {

    function owl_funct(__owl_block) {
        __owl_block.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            dots: false,
            nav: false,
            autoplay:true,
            autoplayTimeout:10000,
            autoplayHoverPause:true
        });
        $('.owl-carousel-main-banner .owl-stage-outer, .owl-carousel-main-banner .owl-stage, .owl-carousel-main-banner .owl-item').css('height', '100%');
        $('.owl-main-banner-next').on('click', function(){
            __owl_block.trigger("next.owl.carousel");
        });
        $('.owl-main-banner-prev').on('click', function(){
            __owl_block.trigger("prev.owl.carousel");
        });
    }


    function init() {
        __owl_block = $('.owl-carousel-main-banner');
        owl_funct(__owl_block);
    }

    return {
        init: init
    }

})();
/* /sp:main-banner */

/* sp:sale-banner */
let app__owl_sale_index = (function() {

    function owl_funct(__owl_block) {
        __owl_block.owlCarousel({
            responsive:{
                0:{
                    items: 2,
                    margin: 20,
                },
                1024:{
                    items: 3,
                    margin: 20,
                },
                1350:{
                    items: 4,
                    margin: 40,
                },
                1550:{
                    items: 5,
                    margin: 40,
                }
            },
            loop: true,
            dots: false,
            nav: false,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true
        });
        $('.owl-carousel-sale-index .owl-stage-outer, .owl-carousel-sale-index .owl-stage, .owl-carousel-sale-index .owl-item').css('height', '100%');
        $('.owl-sale-index-next').on('click', function(){
            __owl_block.trigger("next.owl.carousel");
        });
        $('.owl-sale-index-prev').on('click', function(){
            __owl_block.trigger("prev.owl.carousel");
        });
    }


    function init() {
        __owl_block = $('.owl-carousel-sale-index');
        owl_funct(__owl_block);
    }

    return {
        init: init
    }

})();
/* /sp:sale-banner */

/* sp:marketsplace-banner */
let app__owl_markplace = (function() {

    function owl_funct(__owl_block) {
        __owl_block.owlCarousel({
            responsive:{
                0:{
                    items: 2,
                    margin: 20,
                    autoplayTimeout:2000,
                },
                1350:{
                    items: 4,
                    margin: 40,
                    autoplayTimeout:4000,
                },
                1550:{
                    items: 5,
                    margin: 60,
                    autoplayTimeout:4000,
                }
            },
            loop: true,
            dots: false,
            nav: false,
            autoplay:true,
            autoplayHoverPause:true,
            autoWidth:true,
            center:true
        });
        $('.owl-carousel-markeplace .owl-stage-outer, .owl-carousel-markeplace .owl-stage, .owl-carousel-markeplace .owl-item').css('height', '100%');
        $('.owl-markeplace-next').on('click', function(){
            __owl_block.trigger("next.owl.carousel");
        });
        $('.owl-markeplace-prev').on('click', function(){
            __owl_block.trigger("prev.owl.carousel");
        });
    }


    function init() {
        __owl_block = $('.owl-carousel-markeplace');
        owl_funct(__owl_block);
    }

    return {
        init: init
    }

})();
/* /sp:marketsplace-banner */

/* sp:search-open-close */
let app__searh_open_close = (function() {

    function searh_open(__block_view) {
        __block_view.removeClass('-translate-y-[150%]').attr('data-sp-status', true);
        console.log('StandardPak__searh: OPEN');
    }

    function searh_close(__block_view) {
        __block_view.addClass('-translate-y-[150%]').attr('data-sp-status', false);
        console.log('StandardPak__searh: CLOSE');
    }

    function searh_open__mobile(__block_view__mobile) {
        __block_view__mobile.removeClass('hidden');
        setTimeout(function() {
            __block_view__mobile.addClass('bg-[#00000083]');
            $('div[data-sp-name="search-mobile"]').css('transform', 'translateY(0)');
        }, 150);
        console.log('StandardPak__searh: OPEN');
    }

    function init() {
        let __btn = $('a[data-sp-name="search-btn"]');
        let __block_view = $('div[data-sp-name="search"]');
        let __block_view__mobile = $('div[data-sp-name="search-mobile__bg"]');
        let __type_open = null;
        win.on('resize', function(){
            let win_w = win.width();
            if( win_w <= 760 ){
                __type_open = 0;
            } else{
                __type_open = 1;
            }
        });
        __btn.on('click', function(){
            if( __type_open == 1 ){
                let __block_view_status = __block_view.attr('data-sp-status');
                if( __block_view_status == 'false' ){
                    searh_open(__block_view);
                } else{
                    searh_close(__block_view);
                }
            } else{
                searh_open__mobile(__block_view__mobile);
            }
        });
    }

    return {
        init: init
    }

})();
/* /sp:search-open-close */

/* sp:body-close */
let app__body_close = (function() {

    function body_close_all_winoows() {
        $('div[data-sp-name="search"]').addClass('-translate-y-[150%]').attr('data-sp-status', false);
        $('div[data-sp-name="mobile-menu"]').addClass('-translate-y-full').attr('data-sp-status', false);
        console.log('StandardPak__searh: CLOSE all windows');
    }


    function init() {
        let __body = $('main');
        __body.on('click', function(){
            body_close_all_winoows();
        });
    }

    return {
        init: init
    }

})();
/* /sp:body-close */

/* sp:search-mobile */
let app__search_mobile_open_close = (function() {

    function search_mobile() {
    }


    function init() {
        let __patterm = $('div[data-sp-name="search-mobile"]');
        $('div[data-sp-name="search-mobile_swiper"]').swipe({
        swipeStatus: function(event, phase, direction, distance , duration , fingerCount) {
            __patterm.css('transform', 'translateY(' + distance + 'px)');
            if (phase === $.fn.swipe.phases.PHASE_END) {
                if (direction == 'down' && distance > 100) {
                    setTimeout(function() {
                        __patterm.css('transform', 'translateY(105%)');
                        $('div[data-sp-name="search-mobile__bg"]').removeClass('bg-[#00000083]');
                        setTimeout(function() {
                            $('div[data-sp-name="search-mobile__bg"]').addClass('hidden');
                        }, 150);
                    }, 150);
                }
                if (direction == 'down' && distance < 100) {
                    setTimeout(function() {
                        __patterm.css('transform', 'translateY(0)');
                    }, 150);
                }
            }
        },
        threshold: 0
        });
    }

    return {
        init: init
    }

})();
/* /sp:search-mobile */

/* sp:collapser */
let app__collapser = (function() {

    function sp_collapser(__collapse_id) {
        let __uri_el = 'div[data-sp-collapse-content="'+__collapse_id+'"]';
        console.log(__uri_el);
        let __collpser_content = $(__uri_el);
        console.log(__collpser_content);
        $('div[data-sp-name="content-collapse"]').removeClass('p-5').addClass('h-0 overflow-hidden');
        __collpser_content.addClass('p-5 h-auto').removeClass('h-0 overflow-hidden');
    }


    function init() {
        __btn_collapse = $('a[data-sp-name="btn-collapse"]');
        __btn_collapse.on('click', function(){
            let __collapse_id =  $(this).attr('data-sp-collapse');
            console.log('StandardPak__searh: OPEN collapse block, id: '+__collapse_id);
            sp_collapser(__collapse_id);
        });
    }

    return {
        init: init
    }

})();
/* /sp:collapser */

/* sp:maskedinput-tel */
let app__masked_input_tel = (function() {

    function sp_masked_tel(__input_01) {
        __input_01.mask('+7 (999) 999-99-99');
    }


    function init() {
        let __input_tel__dilivery_page = $('input[data-sp-name="form__content_tel"]');
        sp_masked_tel(__input_tel__dilivery_page);
    }

    return {
        init: init
    }

})();
/* /sp:maskedinput-tel */

/* sp:filters-mobile */
let app__filters_mobile = (function() {

    function filters_mobile_open() {
        $('div[data-sp-name="filters-mobile__bg"]').removeClass('hidden');
        setTimeout(function() {
            $('div[data-sp-name="filters-mobile__bg"]').addClass('bg-[#00000083]');
            $('div[data-sp-name="filters-mobile"]').css('transform', 'translateY(0)');
        }, 150);
    }

    function init() {
        let __patterm = $('div[data-sp-name="filters-mobile"]');
        $('div[data-sp-name="filters-mobile_swiper"]').swipe({
        swipeStatus: function(event, phase, direction, distance , duration , fingerCount) {
            __patterm.css('transform', 'translateY(' + distance + 'px)');
            if (phase === $.fn.swipe.phases.PHASE_END) {
                if (direction == 'down' && distance > 100) {
                    setTimeout(function() {
                        __patterm.css('transform', 'translateY(105%)');
                        $('div[data-sp-name="filters-mobile__bg"]').removeClass('bg-[#00000083]');
                        setTimeout(function() {
                            $('div[data-sp-name="filters-mobile__bg"]').addClass('hidden');
                        }, 150);
                    }, 150);
                }
                if (direction == 'down' && distance < 100) {
                    setTimeout(function() {
                        __patterm.css('transform', 'translateY(0)');
                    }, 150);
                }
            }
        },
        threshold: 0
        });

        $('div[data-sp-name="filters-open"]').on('click', function(){
            filters_mobile_open();
        });
    }

    return {
        init: init
    }

})();
/* /sp:filters-mobile */

/* sp:item-slider */
let app__owl_item_slider = (function() {

    function owl_funct(__owl_block) {
        __owl_block.owlCarousel({
            responsive:{
                0:{
                    items: 4,
                    margin: 20,
                },
                500:{
                    items: 5,
                    margin: 20,
                },
                1024:{
                    items: 4,
                    margin: 20,
                },
            },
            loop: true,
            dots: false,
            nav: false,
            autoplay:false,
            animateOut: 'slideOutUp',
            animateIn: 'slideInUp',
            mouseDrag : false,
            touchDrag : false
        });
        $('.owl-carousel-item .owl-stage-outer, .owl-carousel-item .owl-stage, .owl-carousel-item .owl-item').css('height', '100%');
        $('.owl-item-next').on('click', function(){
            __owl_block.trigger("next.owl.carousel");
            $('.owl-item-prev').css('opacity', '1');
        });
        $('.owl-item-prev').on('click', function(){
            __owl_block.trigger("prev.owl.carousel");
        });
    }


    function init() {
        __owl_block = $('.owl-carousel-item');
        owl_funct(__owl_block);
    }

    return {
        init: init
    }

})();
/* /sp:item-slider */

/* sp:item-slider--view */
let app__owl_item_slider__view = (function() {

    function sp_view_funct(__url_img) {
        $('img[data-sp-name="item-image__view"]').attr('src', __url_img);
    }


    function init() {
        $('div[data-sp-name="item-image"]').on('click', function(){
            __this = $(this);
            __url_img = __this.attr('data-sp-url');
            sp_view_funct(__url_img);
        });
    }

    return {
        init: init
    }

})();
/* /sp:item-slider--view */


doc.ready(app__load.init);
doc.ready(app__menu.init);
doc.ready(app__resize.init);
doc.ready(app__owl_banner.init);
doc.ready(app__owl_sale_index.init);
doc.ready(app__owl_markplace.init);
doc.ready(app__searh_open_close.init);
doc.ready(app__body_close.init);
doc.ready(app__search_mobile_open_close.init);
doc.ready(app__collapser.init);
doc.ready(app__masked_input_tel.init);
doc.ready(app__filters_mobile.init);
doc.ready(app__owl_item_slider.init);
doc.ready(app__owl_item_slider__view.init);