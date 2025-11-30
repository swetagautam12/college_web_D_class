$(document).ready(function() {
    // Toggle FAQ answer on question click
    $('.faq-question').click(function() {
        $(this).next('.faq-answer').slideToggle(400);
        // Optionally, close others when one opens
        $('.faq-answer').not($(this).next()).slideUp(400);
    });
});
