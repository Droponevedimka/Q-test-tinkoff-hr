!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

    var result=[0,0,0];
        now = true;
    function outResult(item){
        let first = '';
        if(item.first) first = 'first-img';
        document.getElementById('modal-final').innerHTML = `
        <div class="final-block">
            
                        <div class="final-block-left"> 
                            <div class="final-block-left-center"> 
                                <div class="final-block-img">                            
                                    <img class="final-block-left-img" src="img/${item.img}-mob.png"/>  
                                    <div class="soc-items-mob" >
                                        <a href="#" class="icon-button-mob facebook"><i class="icon-facebook fab fa-facebook-f"></i></a>
                                        <a href="#" class="icon-button-mob vk"><i class="icon-vk fab fa-vk"></i></a>                                       
                                    </div>
                                </div>
                                <p class="final-block-title"> ${item.title}</p>          
                                <p class="final-block-left-text">
                                ${item.text}                                         
                                </p>
                
                                <a href="#" class="final-go-btn">
                                    GO в команду <span class="final-go-btn-tin">Тинькофф</span>
                                </a>
                            </div> 
                        </div>
                        <div class="final-block-right"> 
                            <div class="final-block-img">  
                            <img class="final-block-right-img ${first}" src="img/${item.img}.png"/>
                            <div class="soc-items">
                                        <a href="#" class="icon-button facebook"><i class="icon-facebook fab fa-facebook-f"></i></a>
                                        <a href="#" class="icon-button vk"><i class="icon-vk fab fa-vk"></i></a>                                         
                                    </div>
                                </div>  
                        </div>
                </div>  
        `;
        
    }
    function skipIn(e){
        var modalId = e.getAttribute('data-modal'),
            overlay = document.querySelector('.js-overlay-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
                document.getElementById('intro').style.display = 'none';
                modalElem.classList.add('active');
                overlay.classList.add('active');
                document.getElementById('intro').classList.toggle('paused-intro');
                document.getElementById('scroller-text').classList.toggle('paused-scroller');
        now = false;
    }

    function StarWar(e){
        document.getElementById('intro').classList.toggle('paused-intro');
        document.getElementById('scroller-text').classList.toggle('paused-scroller');
        document.getElementById('parent').classList.toggle('parent-move');
        document.getElementById('start-btn-noClick').style.pointerEvents = 'none';
        

            setTimeout(function(){   
                if(now){ skipIn(e); }         
                }, 19500);
        
            
    }

    function gotoTinkoff(){        
        fbq('track', 'complete.rabotatinkoff');
        ym(55127908, "complete.rabotatinkoff"); 
        VK.Retargeting.Hit('complete.rabotatinkoff');   

        function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', ' gdn.full.submit', {
                'send_to': 'AW-829038128/u-S3CNXIwakBELC8qIsD',
                'event_callback': callback
            });
            return false;
          }

          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', ' search.full.submit', {
                'send_to': 'AW-868396707/_SsKCOLMwakBEKPdip4D',
                'event_callback': callback
            });
            return false;
          }
          
                                    
              
          
    }
    

document.addEventListener('DOMContentLoaded', function() {

      
        /* Записываем в переменные массив элементов-кнопок и подложку.
            Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
        var modalButtons = document.querySelectorAll('.js-open-modal'),
            overlay      = document.querySelector('.js-overlay-modal'),
            closeButtons = document.querySelectorAll('.js-modal-close');
                              
            
        /* Перебираем массив кнопок */
        modalButtons.forEach(function(item){

            /* Назначаем каждой кнопке обработчик клика */
            item.addEventListener('click', function(e) {               
                e.preventDefault();

                var testItem = this.getAttribute('id');
                var modalId = this.getAttribute('data-modal'),
                    modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
                if (modalId != "1") result[testItem.slice(-1)]++;
                
                if(modalId == "2"){ 
                    function gtag_report_conversion(url) {
                        var callback = function () {
                          if (typeof(url) != 'undefined') {
                            window.location = url;
                          }
                        };
                        gtag('event', ' test.step1', {
                            'send_to': 'AW-829038128/vqvaCMHjwKkBELC8qIsD',
                            'event_callback': callback
                        });
                        return false;
                      }                      
                      
                      function gtag_report_conversion(url) {
                        var callback = function () {
                          if (typeof(url) != 'undefined') {
                            window.location = url;
                          }
                        };
                        gtag('event', ' test.step1 ', {
                            'send_to': 'AW-868396707/FquYCJzTwKkBEKPdip4D',
                            'event_callback': callback
                        });
                        return false;
                      }
                      
                      fbq('track', 'test.step1');   
                      ym(55127908, "test.step1"); 
                      VK.Retargeting.Hit('test.step1');                          
                }

                if(modalId == "3"){ 

                    function gtag_report_conversion(url) {
                        var callback = function () {
                          if (typeof(url) != 'undefined') {
                            window.location = url;
                          }
                        };
                        gtag('event', ' test.step2', {
                            'send_to': 'AW-829038128/vqvaCMHjwKkBELC8qIsD',
                            'event_callback': callback
                        });
                        return false;
                      }                      
                      
                      function gtag_report_conversion(url) {
                        var callback = function () {
                          if (typeof(url) != 'undefined') {
                            window.location = url;
                          }
                        };
                        gtag('event', ' test.step2', {
                            'send_to': 'AW-868396707/FquYCJzTwKkBEKPdip4D',
                            'event_callback': callback
                        });
                        return false;
                      }

                      fbq('track', 'test.step2');   
                      ym(55127908, "test.step2"); 
                      VK.Retargeting.Hit('test.step2');                     
      
                }

                if(modalId == "4"){ 
                    function gtag_report_conversion(url) {
                        var callback = function () {
                          if (typeof(url) != 'undefined') {
                            window.location = url;
                          }
                        };
                        gtag('event', ' test.step3', {
                            'send_to': 'AW-829038128/vqvaCMHjwKkBELC8qIsD',
                            'event_callback': callback
                        });
                        return false;
                      }                      
                      
                      function gtag_report_conversion(url) {
                        var callback = function () {
                          if (typeof(url) != 'undefined') {
                            window.location = url;
                          }
                        };
                        gtag('event', ' test.step3 ', {
                            'send_to': 'AW-868396707/FquYCJzTwKkBEKPdip4D',
                            'event_callback': callback
                        });
                        return false;
                      }

                      
                      fbq('track', 'test.step3'); 
                      ym(55127908, "test.step3"); 
                      VK.Retargeting.Hit('test.step3');                                 
                }

                if(modalId == "5"){
                    function gtag_report_conversion(url) {
                        var callback = function () {
                          if (typeof(url) != 'undefined') {
                            window.location = url;
                          }
                        };
                        gtag('event', ' test.step4', {
                            'send_to': 'AW-829038128/vqvaCMHjwKkBELC8qIsD',
                            'event_callback': callback
                        });
                        return false;
                      }                      
                      
                      function gtag_report_conversion(url) {
                        var callback = function () {
                          if (typeof(url) != 'undefined') {
                            window.location = url;
                          }
                        };
                        gtag('event', ' test.step4 ', {
                            'send_to': 'AW-868396707/FquYCJzTwKkBEKPdip4D',
                            'event_callback': callback
                        });
                        return false;
                      } 
                             
                      fbq('track', 'test.step4');     
                      ym(55127908, "test.step4"); 
                      VK.Retargeting.Hit('test.step4');                            
                }               

                if(modalId == "6"){   
                    function gtag_report_conversion(url) {
                        var callback = function () {
                          if (typeof(url) != 'undefined') {
                            window.location = url;
                          }
                        };
                        gtag('event', 'complete.test', {
                            'send_to': 'AW-868396707/EX3WCMzlwKkBEKPdip4D',
                            'event_callback': callback
                        });
                        return false;
                      }                              
                      fbq('track', 'complete.test'); 
                      VK.Retargeting.Hit('complete.test');                     
                    let item = {};
                    if(result[0]>result[1] && result[0]>result[2]){ 
                        item.first = true;                       
                        item.title = "Борец <br> за правду";
                        item.text = `В детстве ты наверняка смотрел по телеку на чуваков в цветных костюмах и хотел стать одним из них. И не зря — чувства справедливости, стойкости духа и желания помочь у тебя хоть отбавляй<br><br>
                        Стань супергероем своего времени — присоединяйся к <a href="#" class="final-link">команде Тинькофф!</a>`;
                        item.img = "final-1";
                        outResult(item);
                    }  else{    
                            if(result[1]>result[2]){
                                item.first = false;
                                item.title = "Мистер <br> рассудительность";
                                item.text = `Ты такой же, как знаменитый вулканец — спокойный, рассудительный и логичный. Без труда сможешь решить любую проблему, даже если кругом творится полный ад.<br><br>
                                Респектуем за твои суперспособности и приглашаем в <a href="#" class="final-link">суперкоманду Тинькофф</a> — давай решать мировые проблемы вместе!`;
                                item.img = "final-2";
                                outResult(item);
                            } else{
                                item.first = false;
                                item.title = "Бескомпромисный <br> остряк";
                                item.text = `Ауч! Колкие ответы, дерзкое поведение и настоящая ненависть к тупости — да ты переплюнул даже главного безумца-ученого. Wubba Lubba Dub Dub!<br><br>
                                Такой как ты не должен оставаться в тени — присоединяйся к <a href="#" class="final-link">суперкоманде Тинькофф!</a>`;
                                item.img = "final-3";
                                outResult(item);
                            }
                    }

                }
                /* После того как нашли нужное модальное окно, добавим классы
                    подложке и окну чтобы показать их. */
                modalElem.classList.add('active');
                overlay.classList.add('active');
                
            }); // end click

        }); // end foreach

   


            overlay.addEventListener('click', function() {
                document.querySelector('.modal.active').classList.remove('active');
                this.classList.remove('active');
            });
         
}); // end ready


