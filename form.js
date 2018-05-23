console.log("robots working")

var theForm= document.querySelector("[data-form]");
theForm.addEventListener("submit", function(item){
    item.preventDefault();
    console.log('you submitted that shit my guy');
})