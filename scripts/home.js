($(function(){
    $("a[rel=group_photo]").fancybox({
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'titlePosition' 	: 'over',
        'onComplete'        : function(){
            $('#fancybox-title').css({ 'top': '0px', 'bottom': 'auto'  });
            $('#fancybox-left-ico').css({ 'left': '-100px' });
            $('#fancybox-right-ico').css({ 'right': '-100px', left:'auto' });
        }
//        'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
//            return '<span id="fancybox-title-over"> ' + (title.length ? ' &nbsp; ' + title : '') + '</span>';
//        }
    });

    $("a[rel=group_video]").fancybox({
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'titlePosition' 	: 'over',
        'type'          : 'swf',
        'swf'           : {
            'wmode'        : 'transparent',
            'allowfullscreen'   : 'true'
        },
        'onComplete'        : function(){
            $('#fancybox-title').css({ 'top': '0px', 'bottom': 'auto'  });
            $('#fancybox-left-ico').css({ 'left': '-100px' });
            $('#fancybox-right-ico').css({ 'right': '-100px', left:'auto' });
        }
    });

    $(".slider").cycle({
        fx: 'fade',
        timeout: 4000,
        speed: 1000,
        pause: true,
        pager:  '#pager',
       pagerAnchorBuilder: function(index, el) {
        return '<a href="#"> </a>'; // whatever markup you want
        }
    });

}));