// 侧边栏样式

$(document).ready(function () {
    $('ul.site-category-list').addClass('list-group');
    $('li.site-category-list-item').each(function () {
        $(this).addClass('d-flex justify-content-between list-group-item list-group-item-action');
    });
    $('a.site-category-list-link').each(function () {
        $(this).addClass('theme-link stretched-link link-dark link-underline link-underline-opacity-0');
    });
    $('span.site-category-list-count').each(function () {
        $(this).addClass('badge text-primary');
    });
    $('a.site-tag-link').each(function () {
        $(this).wrap('<span class="me-2"></span>')
        $(this).contents().filter(function() {
            return this.nodeType === 3 && $.trim(this.textContent) !== '';
        }).wrap('<span class="site-tag-name"></span>');
        $(this).wrapInner('<button class="theme-button btn btn-outline-dark btn-sm position-relative mb-3"></button>');
    });
    $('span.site-tag-count').each(function () {
        $(this).addClass('position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary');
    });

    // 重新渲染
    var theme = $('body').attr('data-bs-theme');
    window.updateThemeStyles(theme);
});