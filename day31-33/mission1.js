var region=document.querySelectorAll(".region");//地区复选框集合
var product=document.querySelectorAll(".product");//产品复选框集合
var regall=document.querySelector(".regall");//地区全选按钮
var proall=document.querySelector(".proall");//产品全选按钮
table=document.getElementById("table-wrapper");
//地区全选按钮功能
regall.onchange=function(){
    if(regall.checked){
        for(i=0;i<region.length;i++){
            region[i].checked=true;
        }
    }
    else{
        for(i=0;i<region.length;i++){
            region[i].checked=false;
        }
    }
    createTable();
}
//产品全选按钮功能
proall.onchange=function(){
    if(proall.checked){
        for(i=0;i<product.length;i++){
            product[i].checked=true;
        }
    }
    else{
        for(i=0;i<product.length;i++){
            product[i].checked=false;
        }
    }
    createTable();
}
//地区复选按钮功能
for(i=0;i<region.length;i++){
    region[i].onchange=function(){
        checkallmenu();
        createTable();
    }
}
//产品复选按钮功能
for(i=0;i<product.length;i++){
    product[i].onchange=function(){
        checkallmenu();
        createTable();
    }
}
function checkallmenu(){
    // (function(){
        if(product[0].checked&&product[1].checked&&product[2].checked){
            proall.checked=true;
        }
        else{
            proall.checked=false;
        }
    // })();
    // (function(){
        if(region[0].checked&&region[1].checked&&region[2].checked){
            regall.checked=true;
        }
        else{
            regall.checked=false;
        }
    // })();
}
//创建表格
function createTable() {
    renderTable(collectData());
}
//收集数据，并输出数据数组
function collectData(){

    data=new Array();
    for(i=0;i<region.length;i++){
        for(j=0;j<product.length;j++){ 
            if(region[i].checked&&product[j].checked){
                for(k=0;k<sourceData.length;k++){
                    if((sourceData[k].product==product[j].value)&&(sourceData[k].region==region[i].value)){
                        data.push(sourceData[k]);
                    }
                }
            }
        }
    }
    return data;
}
//根据数据，输出相应的表格
function renderTable(data){
    console.log(data);
    // 输出表头：商品、地区、1月、2月、…… 12月
    var t_column = 14;
    var string = "<table border=\"1\"><thead><tr><th>商品</th><th>地区</th>";
    for (var i = 0; i < t_column - 2; i++) {
        string = string.concat("<th>" + (i + 1) + "月" + "</th>");
    }
    string = string.concat("</thead>");
    string = string.concat("<tbody>");
    for (var i = 0; i < data.length; i++) {
        string = string.concat("<tr>");
        string = string.concat("<td>" + data[i].product + "</td>");
        string = string.concat("<td>" + data[i].region + "</td>");
        for (var j = 0; j < t_column - 2; j++) {
            string = string.concat("<td>" + data[i].sale[j] + "</td>");
        }
        string = string.concat("</tr>");
    }
    string = string.concat("</tbody>");
    // 把生成的HTML内容赋给table-wrapper
    table.innerHTML = string;
}