$(document).ready(function () {
    holder = $('.pagination-holder');
    holder.wrapInner('<ul class="pagination"></ul>');
    holder.find('ul.pagination').children().each(function () {
        $(this).wrap('<li class="page-item"></li>');
        $(this).addClass('page-link');
        if ($(this).hasClass('current')) {
            $(this).addClass('active');
        }
        if (
            $(this).is('span') &&
            ($(this).hasClass('prev') || $(this).hasClass('next'))
        ) {
            $(this).closest('li.page-item').addClass('disabled');
            $(this).addClass('bg-light-subtle');
        }
    });
});