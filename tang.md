// JavaScript Document
function loadjscssfile(filename,filetype){

    if(filetype == "js"){
        var fileref = document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src",filename);
    }else if(filetype == "css"){
    
        var fileref = document.createElement('link');
        fileref.setAttribute("rel","stylesheet");
        fileref.setAttribute("type","text/css");
        fileref.setAttribute("href",filename);
    }
   if(typeof fileref != "undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
    
}
loadjscssfile("/css/revision_css/public/jquery.fullPage.css"+"?v="+new Date().getTime(),"css");
loadjscssfile("/css/revision_css/page/index3.css"+"?v="+new Date().getTime(),"css");


loadjscssfile("/js/revision_js/public/jquery.fullPage.min.js"+"?v="+new Date().getTime(),"js");
loadjscssfile("/js/revision_js/page/index.js"+"?v="+new Date().getTime(),"js");
loadjscssfile("/js/revision_js/page/header.js"+"?v="+new Date().getTime(),"js");
loadjscssfile("/js/revision_js/page/app.js"+"?v="+new Date().getTime(),"js");
loadjscssfile("/js/revision_js/page/tabhost.js"+"?v="+new Date().getTime(),"js");
