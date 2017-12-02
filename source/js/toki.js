var url = window.location.href
var items = document.querySelectorAll('.menu-item-link')
items.forEach(function(item){
    if(item.href == url) {item.style.color = '#c30'}else{
        item.style.color = '#333'
    }
})