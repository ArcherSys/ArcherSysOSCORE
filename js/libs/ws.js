(function(e){e.extend({websocketSettings:{open:function(){alert()},close:function(){},message:function(){},options:{},events:{}},websocket:function(n,s){var t=WebSocket?new WebSocket(n):{send:function(e){return!1},close:function(){}};e.websocketSettings=e.extend(e.websocketSettings,s);e(t).bind('open',e.websocketSettings.open).bind('close',e.websocketSettings.close).bind('message',e.websocketSettings.message).bind('message',function(t){var s=e.parseJSON(t.originalEvent.data),n=e.websocketSettings.events[s.type];if(n)n.call(this,s)});t.e$=t.send;t.send=function(t,s){var n={type:t};n=e.extend(!0,n,e.extend(!0,{},e.websocketSettings.options,n));if(s)n['data']=s;return this.e$(JSON.stringify(n))};e(window).unload(function(){t.close();t=null});return t}})})(jQuery);