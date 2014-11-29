$(function () {
    $(".article a").attr("target", "_blank");
    $(".brand-title,nav").remove();
//     $("#nav").remove();
    $(".search").html('<hr style="FILTER: progid:DXImageTransform.Microsoft.Shadow(color:#987cb9,direction:145,strength:15)" width="90%" color=#ccc SIZE=1/>');
    $(".headerpic img").css("width", "100px")
    $(".headerpic").append('<div class="grcode"><i class="fa fa-qrcode"></i></div>');
    $('#toc').toc({'container': '.article', 'selectors': 'h1,h2', prefix: 'top'});
    $('.article').each(function (i) {
        $(this).find('img').each(function () {
            if ($(this).parent().hasClass('fancybox')) return;
            var url2 = this.src;
            $(this).wrap('<a href="' + url2 + '" title="' + this.title + '" class="fancybox"></a>');
        });
        $(this).find('.fancybox').each(function () {
            $(this).attr('rel', 'article' + i);
        });
    });

    if ($.fancybox) {
        $('.fancybox').fancybox({
            padding: 0,
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                title: {
                    type: 'inside'
                },
                overlay: {
                    css: {
                        'background': 'rgba(0,0,0,0.5)'
                    }
                }
            }

        });
    }
    ;
    $(".grcode").mouseover(function () {
        grcode();
    }).mouseout(function () {
        $(".qrcodeTable ").empty();
    });
});
function grcode() {
    $(".qrcodeTable").append('<i class="label label-danger">手机扫描</i><br>');
    var url = $("link[rel='canonical']").attr('href');
    console.info(url);
    $(".qrcodeTable").qrcode({
        render: "canvas",
        text: url
    });
    $(window).scroll(function () {
        var yy = $(this).scrollTop();//获得滚动条top值
        if ($(this).scrollTop() < 30) {
            $(".qrcodeTable").css({"position": "relative", top: "5px", left: "-50px"});
        } else {
            $(".qrcodeTable").css({"position": "relative", top: yy + "px", left: "-50px"});
        }
    });
}
