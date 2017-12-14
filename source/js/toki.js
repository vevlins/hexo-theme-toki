var url = window.location.href
var items = document.querySelectorAll('.menu-item-link')
items.forEach(function(item){
    if(item.href == url) {item.style.color = '#607d8b'}else{
        item.style.color = '#333'
    }
})

var search = document.querySelector('.search')
var search_input = document.querySelector('.search-input')

search.onclick = function(e){
    search.style.display = 'none'
    search_input.style.display = 'block'
    search_input.focus()

}
search_input.onblur = function(e){
    setTimeout(function(){
        search_input.style.display = 'none'
        search.style.display = 'block'
    }, 50);
}
function matcher(post, regExp) {
    // 匹配优先级：title > tags > text
    return regExp.test(post.title) || post.tags.some(function(tag) {
        return regExp.test(tag.name);
    }) || regExp.test(post.text);
}
  
render = function(result){
    if(result.length == 0){
        document.querySelector('.not-found').style.display ='block'
        document.querySelector('.search-items').innerHTML = ''
    }else{
        var items = ''
        result.forEach(post => {
            var title = post.title
            var date = post.date
            var path = '../../../../../../../'+post.path
            date = new Date(date)
            date = date.toLocaleDateString()
           var item = `<li class='post-item'> \
            <span class='date'>${date}</span> \
            <a class='title' href='${path}'>${title}</a> \
          </li>`
          items += item
        });
        
       items = `<section class='archive'>
        <ul class='post-archive'>
            ${items}
        </ul>
      </section>`
      document.querySelector('.search-items').innerHTML = items
      document.querySelector('.not-found').style.display ='none'
    }
  document.querySelector('main').style.display = 'none'
}

onEnter = function(e){
    var e = e || window.event
    if(e.keyCode == 13){//回车
        var key = search_input.value
        var regExp = new RegExp(key.replace(/[ ]/g, '|'), 'gmi');
        console.log(regExp)
        $.get('../../../../../../../content.json',function(data){

            var result = data.filter(function(post) {
                return matcher(post, regExp);
            })
            render(result)
    })
}
}

window.onscroll = function(){
    if(document.documentElement.clientWidth <1300) return;
    var height = document.body.offsetHeight
    if($(window).scrollTop()>height/4){
        $('#top').show()
    }else{
        $('#top').hide()
    }
}

$('.tip-btn').click(function(){
    var flex= $('.tip-img').css('display') == 'flex'
    if(flex){
        $('.tip-img').css('display','none')
    }else{
        $('.tip-img').css('display','flex')
    }
    
})

function selectText(element) {
    if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        alert("none");
    }
}

$('pre').dblclick(function(e){
    // console.log($(e.target).text())
    selectText(e.target)
})