;(function($){
    var Toast = function(text,settings,time){
        var self = this;
        self.time = time || 2000;
        self.settings = {
            'position':'fixed',
            'z-index':'10010',
            'top':'50%',
            'left':'50%',
            'min-width':'100px',
            'max-width':'200px',
            'padding':'10px',
            'border-radius':'5px',
            '-webkit-border-radius':'5px',
            'background':'#000',
            'color':'#fff',
            'text-align':'center',
            'font-size':'14px',
            'word-break':'break-all',
            '-webkit-box-sizing':'border-box',
            'box-sizing':'border-box',
        };
        $.extend(this.settings,settings || {});
        self.$template = $('<div>'+text+'</div>');
        self.overlay = new Overlay();
        self.timer = null;
    }

    Toast.prototype = {
        show : function(){
            var self = this;
            self.overlay.show();
            self.$template.css(self.settings).appendTo("body").css('margin','-'+ self.$template.height()/2+'px 0 0 -'+ self.$template.width()/2+'px' )

            self.timer = setTimeout(function(){
                self.hide();
            },self.time);

        },
        hide : function(){
            var self = this;
            self.overlay.hide();
            self.$template.remove();
        }
    }

    window["Toast"] = Toast;

})(Zepto);