var Messenger = function(el){
    'use strict';
    var m = this;
    
    m.init = function(){
      m.codeletters = "&#*+%?£@§$";
      m.message = 0;
      m.current_length = 0;
      m.fadeBuffer = false;
      m.messages = [
        
        'Thanks for visiting',
        'Kiitos käynnistä',
        'Merci de votre visite',
        '訪問していただきありがとうございます',
        'Tack för ditt besök',
        'Dank u voor uw bezoek',
        'Vielen Dank für Ihren Besuch',
        'Dziękujemy za odwiedzenie',
        'Благодарим вас за посещение',
        'Grazie per aver visitato',
        'Obrigado por visitar',
        'Gracias por visitar',
        'Hvala što ste posjetili',
        '謝謝你的光臨',
        'شكرا لزيارتكم',
        'आने के लिए धंयवाद'
      ];
      
      setTimeout(m.animateIn, 100);
    };
    
    m.generateRandomString = function(length){
      var random_text = '';
      while(random_text.length < length){
        random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } 
      
      return random_text;
    };
    
    m.animateIn = function(){
      if(m.current_length < m.messages[m.message].length){
        m.current_length = m.current_length + 2;
        if(m.current_length > m.messages[m.message].length) {
          m.current_length = m.messages[m.message].length;
        }
        
        var message = m.generateRandomString(m.current_length);
        $(el).html(message);
        
        setTimeout(m.animateIn, 0);
      } else { 
        setTimeout(m.animateFadeBuffer, 50);
      }
    };
    
    m.animateFadeBuffer = function(){
      if(m.fadeBuffer === false){
        m.fadeBuffer = [];
        for(var i = 0; i < m.messages[m.message].length; i++){
          m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
        }
      }
      
      var do_cycles = false;
      var message = ''; 
      
      for(var i = 0; i < m.fadeBuffer.length; i++){
        var fader = m.fadeBuffer[i];
        if(fader.c > 0){
          do_cycles = true;
          fader.c--;
          message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
        } else {
          message += fader.l;
        }
      }
      
      $(el).html(message);
      
      if(do_cycles === true){
        setTimeout(m.animateFadeBuffer, 50);
      } else {
        setTimeout(m.cycleText, 3000);
      }
    };
    
    m.cycleText = function(){
      m.message = m.message + 1;
      if(m.message >= m.messages.length){
        m.message = 0;
      }
      
      m.current_length = 0;
      m.fadeBuffer = false;
      $(el).html('');
      
      setTimeout(m.animateIn, 0);
    };
    
    m.init();
  }
  
  console.clear();
  var messenger = new Messenger($('#messenger'))