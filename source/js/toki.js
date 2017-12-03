var url = window.location.href
var items = document.querySelectorAll('.menu-item-link')
items.forEach(function(item){
    if(item.href == url) {item.style.color = '#c30'}else{
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
search_input.onblur = function(){
    search_input.style.display = 'none'
    search.style.display = 'block'
}
function matcher(post, regExp) {
    // 匹配优先级：title > tags > text
    return regExp.test(post.title) || post.tags.some(function(tag) {
        return regExp.test(tag.name);
    }) || regExp.test(post.text);
}
  
render = function(result){
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
  document.querySelector('main').style.display = 'none'
  document.querySelector('.search-items').innerHTML = items
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