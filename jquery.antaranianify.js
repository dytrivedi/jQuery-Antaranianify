(function($){
/*
    Desctiption: a completely useless jQuery plugin
    Usage: $('div, p').antaranianify(); // it'll replace contents of all selected elements with "antaranian"
*/
    $.fn.antaranian = function(){
        var $els = $(this),
            selector = $(this).selector;
            /*
                Use of .selector was suggested by paul_irish so here are his last 5 tweets by Sun Dec 6 08:21:53 AMT 2009. 
            
                # Digging back into single sign-on/federated login. The latest UX conventions are pretty defined and smart & nice jquery plugins for EZ use.    about 8 hours ago   from TweetDeck
                  
                @markbao ah i dont have pings enabled anyway. i'm probably missing something cool. :) about 9 hours ago from TweetDeck in reply to markbao
                  
                @getify for LABjs's useCachePreload why not a custom mimetype like type="text/preloadedscript" or type="labjs/script" ? about 10 hours ago from TweetDeck

                The official jQuery podcast ep 3 and I'm the guest! http://bit.ly/8zaike I talk about webfonts, yayquery, modernizr & hugs 8:37 PM Dec 4th from web

                @rworth perfect! thank you sir. 7:24 PM Dec 4th from web in reply to rworth             
             */
        $els.each(function(){
            $(this)
                .find('*').not(selector).remove().end()
                .append('antaranian');
        });
    };
            
})(jQuery);

// Feel free to fork and appent new tweets from paul_irish


