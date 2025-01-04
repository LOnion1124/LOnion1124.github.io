// 为post页面元素添加bs5类标签

$(document).ready(function () {
    // 将文档中的三四五级标题替换为五级标题
    $('div.article h3, div.article h4, div.article h5').each(function () {
        var content = $(this).html();
        var newElement = $('<h5></h5>').html(content);
        $(this).replaceWith(newElement);
    });
    // 将文档中的一二级标题替换为三级标题
    $('div.article h1, div.article h2').each(function () {
        var content = $(this).html();
        var newElement = $('<h3></h3>').html(content);
        $(this).replaceWith(newElement);
    });
    // 标题样式
    $('div.article h3, div.article h5').each(function () {
        $(this).addClass('text-dark-emphasis py-1 mb-3 border-bottom');
    });
    // 图片样式
    $('div.article img').each(function () {
        $(this).addClass('img-fluid rounded mx-auto d-block');
    });
    // 链接样式
    $('div.article a').each(function () {
        $(this).addClass('link-primary link-offset-3 link-underline-opacity-0 link-underline-opacity-75-hover');
    });
    // 引用格式
    $('div.article blockquote').each(function () {
        $(this).addClass('border-start border-4 border-secondary-subtle ps-2 text-muted');
    });
    // 表格样式
    $('div.article table').each(function () {
        $(this).addClass('table table-light table-striped table-bordered');
    });
    // 列表样式
    $('div.article ol, div.article ul').not('#footnotelist ol').each(function () {
        $(this).addClass('list-unstyled');
    });
    // 行内代码块
    $('div.article code').not('pre code').each(function () {
        $(this).addClass('font-monospace text-dark-emphasis bg-light rounded p-1');
    });
    // 脚注样式
    // 依赖hexo-reference插件
    $('div.article sup').filter(function() {
        return /fnref:/.test($(this).attr('id'));
    }).each(function() {
        $(this).find('a').each(function() {
            $(this).removeClass();
            $(this).addClass('link-primary fw-bold');
        });
    });
    $('#footnotes').addClass('text-muted fw-light');
    $('a[rev="footnote"]').each(function () {
        $(this).parent().css('margin-left', '0');
        $(this).parent().prev().css('padding-right', '8px');
        $(this).parent().prev().addClass('font-monospace align-text-top');
        $(this).removeClass();
        $(this).addClass('link-primary link-underline-opacity-0');
        $(this).html('&nbsp;<i class="bi bi-chevron-double-up"></i>');
    });
    // 出于某种原因，使用pandoc-renderer会导致文末脚注的某个</div>溢出，进而造成排版问题
    // 目前的解决方案是暴力注释了hexo-reference插件脚本文件的对应</div>文本语句
});