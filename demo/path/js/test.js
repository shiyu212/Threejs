var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
var isChrome = userAgent.indexOf('Chrome')!=-1;
var is360Nomal = userAgent.indexOf('compatible') != -1;
/**
  * 文字转语音播报
  */
  function textToVideo (txt,timeOut) {

        if (isIE || isIE11 || is360Nomal) {// IE浏览器,360兼容模式
            if(audio.src && audio.src != baiduApi +  encodeURI(txt)){
                setTimeout(function(){
                    audio.src = baiduApi +  encodeURI(txt);
                    audio.play();
                },timeOut);
            }else{
                audio.src = baiduApi +  encodeURI(txt);
                audio.play();
            }
        }else if(isChrome){//  360极速模式,Chrome
            if($("#ifr-video").attr('src') && $("#ifr-video").attr('src') != baiduApi +  encodeURI(txt)){
                setTimeout(function(){
                    $("#ifr-video").attr('src',baiduApi +  encodeURI(txt));
                },timeOut);
            }else{
                $("#ifr-video").attr('src',baiduApi +  encodeURI(txt));
            }
        } else { // 火狐
            window.speechSynthesis.speak(new SpeechSynthesisUtterance(txt));
        }
    }
