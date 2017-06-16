$(function() {
    $('.toggle-language').on('click', function(e){
    	e.preventDefault();
        var current_language = $(this).attr('language');
        if(current_language == 'en_CA' || current_language == 'en-CA' || current_language == 'en'){
            language = 'fr'
        } else {
            language = 'en'
        }

        $.ajax({
            url: changeLanguageUrl + '/' + language,
            success: function(data){
                location.reload();          
            }
        });
    });
});