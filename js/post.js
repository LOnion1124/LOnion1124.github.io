// 为post页面元素添加bs5类标签

$(document).ready(function () {
    // // 将文档中的三四五级标题替换为五级标题
    // $('div.article h3, div.article h4, div.article h5').each(function () {
    //     var content = $(this).html();
    //     var newElement = $('<h5></h5>').html(content);
    //     $(this).replaceWith(newElement);
    // });
    // // 将文档中的一二级标题替换为三级标题
    // $('div.article h1, div.article h2').each(function () {
    //     var content = $(this).html();
    //     var newElement = $('<h3></h3>').html(content);
    //     $(this).replaceWith(newElement);
    // });
    // 标题样式
    $('div.article h1').each(function () {
        $(this).addClass('text-dark-emphasis py-1 mb-3 border-bottom h2 fw-bold border-3');
    });
    $('div.article h2').each(function () {
        $(this).addClass('text-dark-emphasis py-1 mb-3 border-bottom h3 fw-bold');
    });
    $('div.article h3').each(function () {
        $(this).addClass('fw-bold py-1 mb-3 h4');
    });
    $('div.article h4').each(function () {
        $(this).addClass('fw-bold py-1 mb-3 h5');
    });
    $('div.article h5').each(function () {
        $(this).addClass('fw-bold h6');
    });
    $('div.article h6').each(function () {
        $(this).addClass('fw-bold text-muted');
    });
    // 图片样式
    $('div.article img').each(function () {
        $(this).addClass('img-fluid rounded mx-auto d-block');
    });
    // 链接样式
    $('div.article a').each(function () {
        $(this).addClass('link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-50-hover');
    });
    // 引用格式
    $('div.article blockquote').each(function () {
        $(this).addClass('border-start border-4 border-secondary-subtle ps-2 text-muted');
    });
    // 表格样式
    $('div.article table').each(function () {
        $(this).wrap('<div class="table-responsive"></div>');
        $(this).addClass('table table-light-subtle table-striped table-bordered');
    });
    // 列表样式
    // $('div.article ol').not('#footnotelist ol').each(function () {
    //     $(this).addClass('list-unstyled');
    //     $(this).find('li').each(function () {
    //         var idx = $(this).index() + 1;
    //         var content = $(this).html();
    //         $(this).html('<span class="text-muted font-monospace pe-2">' + idx + '.</span><span>' + content + "</span>");
    //     });
    // });
    // $('div.article ul').each(function () {
    //     $(this).addClass('list-unstyled');
    //     $(this).find('li').each(function () {
    //         var content = $(this).html();
    //         $(this).html('<span class="text-muted pe-2"><i class="bi bi-record"></i></span><span>' + content + "</span>");
    //     });
    // });
    // 行内代码块
    $('div.article code').not('pre code').each(function () {
        $(this).addClass('font-monospace text-warning-emphasis bg-warning-subtle rounded p-1');
    });
    // 行内LaTeX公式
    $('div.article span.math.inline').each(function () {
        $(this).addClass('mx-1');
    });
    // 行间LaTeX公式
    $('div.article span.math.display').each(function () {
        $(this).wrap('<div class="table-responsive" style="overflow-x:auto;"></div>');
        $(this).parent().css({
            'display': 'block',
            'width': '100%'
        });
    });
    // 脚注样式
    // 依赖hexo-reference插件
    // 文内上标
    $('div.article sup').filter(function() {
        return /fnref:/.test($(this).attr('id'));
    }).each(function() {
        $(this).find('a').each(function() {
            $(this).removeClass();
            $(this).addClass('link-primary fw-bold');
        });
    });
    // 文末脚注
    $('#footnotes').addClass('text-muted fw-light');
    $('#footnotelist ol').removeAttr('style');
    $('#footnotelist ol').addClass('list-unstyled');
    $('#footnotelist ol').find('li').each(function () {
        $(this).find('span').removeAttr('style');
        $(this).children().first().addClass('footnotelist_id pe-2 font-monospace');
        $(this).children().first().next().addClass('footnotelist_content');
    });
    $('#footnotelist span.footnotelist_content').each(function () {
        $(this).addClass('align-text-top');
        $(this).children('a:last').each(function () {
            $(this).removeClass();
            $(this).removeAttr('style');
            $(this).addClass('ms-1 link-primary link-underline-opacity-0 icon-link icon-link-hover');
            $(this).css('--bs-icon-link-transform', 'translate3d(0, -.125rem, 0)');
            $(this).html('<i class="bi bi-chevron-double-up"></i>');
        });
    });
    // 出于某种原因，使用pandoc-renderer会导致文末脚注的某个</div>溢出，进而造成排版问题
    // 目前的解决方案是暴力注释了hexo-reference插件脚本文件的对应</div>文本语句
});