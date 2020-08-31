var isCollapsed = true;
var btn = document.getElementById('collapsion-btn');
var pd_content = document.getElementById('pd-content').children;
hide();

function hide(){
        isCollapsed=false;
        for(let i = 1; i < pd_content.length; i++){
            pd_content[i].setAttribute("style", "display: none;");
        }
        btn.textContent = "Hiển thị nội dung";        
}

function show(){
    isCollapsed=true;
        for(let i = 1; i < pd_content.length; i++){
            pd_content[i].setAttribute("style", "display: inline-block;");
        }
        btn.textContent = "Thu gọn nội dung";
}

function collapse() {
    if(isCollapsed){
        hide();
    }else{
        show();
    }
}
