;(function($){

    /**
     * show()
     * hide()
     * @param settings
     * @constructor
     */
    var Overlay = function(settings){
        var self = this;
        self.settings = {
            top:0,
            left:0,
            width:'100%',
            height:'100%',
            background:'rgba(0,0,0,.6)',
            'z-index': 99,
            position:'fixed',
            display:'none'
        };
        self.$template = $('<div class="overlay"></div>');
        $.extend(this.settings,settings || {});
        self.init();
    };

    Overlay.prototype = {
        init : function(){
            var self = this;
            self.$template.css(self.settings).appendTo("body");
        },
        show : function(){
            var self = this;
            self.$template.show();
        },
        hide : function(){
            var self = this;
            self.$template.hide();
        }
    };

    window["Overlay"] = Overlay;
})(Zepto);