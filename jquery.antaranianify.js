(function($){
/*
    Description: a completely useless jQuery plugin
    Usage: $('div, p').antaranianify(); // it'll replace contents of all selected elements with "antaranian"

    Spelling corrected with help of vladikoff
*/
    $.fn.antaranian = function(){
        var $els = $(this),
            selector = $els.selector;
            /*
                Use of .selector was suggested by paul_irish so here are his last 5 tweets by Sun Dec 6 08:21:53 AMT 2009. 
                Updated tweets from paul_irish by dytrivedi. As of Feb 6 2010.

                @miketaylr do you think there's a good usecase for this in app development? http://foolip.org/microdatajs/live/ /cc @wycats about 13 hours ago from TweetDeck
                  
                @yeah_its_me sorries! fixed video on vimeo: http://vimeo.com/9072189 the mp3 is also fixed now. we sorry about 21 hours ago from TweetDeck in reply to yeah_its_me
                  
                @stoyanstefanov so happy to hear that. :D 2:32 PM Jan 30th from Echofon in reply to stoyanstefanov

                @pineagranate why do you think so 12:46 PM Jan 30th from TweetDeck in reply to pineagranate

                @malsup i most enjoy <html class="no-js"> and then (function(H,C){H[C]=H[C].replace(/\bno-js\b/,'js')})(docElement,'className') for FOUC 12:03 PM Jan 30th from TweetDeck in reply to malsup
             */
        return $els.each(function(){
            $(this)
                .find('*').not(selector).remove().end()
                .append('antaranian');
        });
    };
            
})(jQuery);

// Feel free to fork and append new tweets from paul_irish


