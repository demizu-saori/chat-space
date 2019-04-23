$(function(){
  function buildHTML(message){
    var image= message.image ? `<img src="${message.image}">` : ""
    var html = `
                <li class="message">
                  <div class="message__upper-info">
                    <p class="message__upper-info__talker">${message.user_name}</p>
                    <p class="message__upper-info__date">${message.time}</p>
                  </div>
                   <div class="message__text__box">
                      <p class="message__text">${message.text}</p>
                      <div class="message__image">
                      ${image}
                      </div>
                   </div>
                </li>`;
    return html;
  }


  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var url = $(this).attr('action')
    var formData = new FormData($(this).get(0))

    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html).animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('form')[0].reset();
      $('.submit-btn').removeAttr("disabled");
    })

    .fail(function(){
      alert('error');
    })
  });
})
