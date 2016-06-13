## webapp component

### 一.Overlay   遮罩层
```
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
```
** Method **
* show()
* hide()

** Example **
```
var overlay = new Overlay({
    background:'rgba(0,0,0,.9)'
});
overlay.show();
```

### 二.Toast   提示框
param:
    text,settings,time

** Method **
* show()

** Example **
```
var toast = new Toast("登陆成功",{},1000);
toast.show();
```
