$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    // click event on menu toggle
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse')
    })
})