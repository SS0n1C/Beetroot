
$(document).ready(() =>  {
    console.log('ready')
    $("body").css({margin: "0", padding: "0",fontFamily: 'Lato', fontWeight: "400"})
    $("a").css({textDecoration: "none"})
    $(`<div>`).appendTo('body').addClass('wrapper').css({backgroundColor: '#2B3040', height: "100%",padding: "82px 220px"})
    $(`<div></div>`).appendTo(".wrapper").addClass("contentBox").css('background-image', 'url(assets/img/photo.png)')
    $(".contentBox").css({height: "860px", width: "1000px",display: "flex", justifyContent: "center", alignItems:"center"})
    $("<div>").appendTo(".contentBox").addClass("content").css({width:"600px",height:"552px",backgroundColor: '#212534'})
    $("<div>").appendTo(".content").addClass("headerContent").css({padding:"28px 50px",backgroundColor:"#2B3040",display:"flex",justifyContent:"space-between"})
    // firstLink
    $("<a href='#'></a>").appendTo(".headerContent").addClass("link").css({textDecoration:"none"})
    $("<div></div").appendTo(".link").addClass("headerItem")
    $("<div></div>").appendTo(".headerItem").addClass("headerItem_img").css({textAlign:"center"})
    $("#svg1").appendTo(".headerItem_img").css({stroke:"#8D91A3"})
    $("<div></div>").appendTo(".headerItem").addClass("headerItem_txt").text("Information")
    $(".headerItem_txt").css({fontSize:"16px",lineHeight:"28px",textTransform:"uppercase",color:"#8D91A3",paddingTop: "15px"})
    $(".link").hover(function(){
        $(".headerItem_txt").css("color", "#FFFFFF");
        $("#svg1").css({stroke:"white"})
    }, function(){
            $(".headerItem_txt").css("color", "#8D91A3");
            $("#svg1").css({stroke:"#8D91A3"})
    })

    // secondLink
    $("<a href='#'></a>").appendTo(".headerContent").addClass("link link2").css({textDecoration:"none"})
    $("<div></div").appendTo(".link2").addClass("headerItem headerItem2")
    $("<div></div>").appendTo(".headerItem2").addClass("headerItem_img headerItem_img2").css({textAlign:"center"})
    $("#svg2").appendTo(".headerItem_img2").css({stroke:"#8D91A3"})
    $("<div></div>").appendTo(".headerItem2").addClass("headerItem_txt2").text("Ratings Info").css({fontSize:"16px",lineHeight:"28px",textTransform:"uppercase",color:"#8D91A3",paddingTop: "15px"})
    $(".link2").hover(function(){
        $(".headerItem_txt2").css("color", "#FFFFFF");
        $("#svg2").css({stroke:"white"})
    }, function(){
            $(".headerItem_txt2").css("color", "#8D91A3");
            $("#svg2").css({stroke:"#8D91A3"})
    })
    // 3Link
     // secondLink
     $("<a href='#'></a>").appendTo(".headerContent").addClass("link link3").css({textDecoration:"none"})
     $("<div></div").appendTo(".link3").addClass("headerItem headerItem3")
     $("<div></div>").appendTo(".headerItem3").addClass("headerItem_img headerItem_img3").css({textAlign:"center"})
     $("#svg3").appendTo(".headerItem_img3").css({fill:"#8D91A3"})
     $("<div></div>").appendTo(".headerItem3").addClass("headerItem_txt3").text("where to buy").css({fontSize:"16px",lineHeight:"28px",textTransform:"uppercase",color:"#8D91A3",paddingTop: "15px"})
     $(".link3").hover(function(){
        $(".headerItem_txt3").css("color", "#FFFFFF");
        $("#svg3").css({stroke:"white"})
    }, function(){
            $(".headerItem_txt3").css("color", "#8D91A3");
            $("#svg3").css({stroke:"#8D91A3"})
    })

    // mainContent
    $("<div>").appendTo(".content").addClass("mainContent").css({padding:"60px 40px", display:"flex",alignItems:"center"})

    // left
    $("<div>").appendTo(".mainContent").addClass("leftBlock").css({marginRight:"40px"})
    $("<div><img src='assets/img/mainIMG.png' alt='photo'></div>").appendTo(".leftBlock").css({marginBottom:"25px"})
    $("<div>").appendTo(".leftBlock").addClass("starrField").css({display:"flex", justifyContent:"center"})
    $("<div><img src='assets/img/star.png' alt='photo'></div>").appendTo(".starrField").addClass("star")
    $("<div><img src='assets/img/star.png' alt='photo'></div>").appendTo(".starrField").addClass("star")
    $("<div><img src='assets/img/star.png' alt='photo'></div>").appendTo(".starrField").addClass("star")
    $("<div><img src='assets/img/star.png' alt='photo'></div>").appendTo(".starrField").addClass("star")
    $("<div><img src='assets/img/starblack.png' alt='photo'></div>").appendTo(".starrField").addClass("star")
    $(".star").css({margin:"0px 5px"})
    
    // right
    $("<div>").appendTo(".mainContent").addClass("rightBlock").css({width:"100%"})

    $("<div>").appendTo(".rightBlock").addClass("rightHeader").css({display:"flex",justifyContent:"space-between",marginBottom:"40px"})
    $("<div>").appendTo(".rightHeader").addClass("rightTxt")
    $("<div>").appendTo(".rightTxt").addClass("rightTitle").text("FarCry 6").css({fontSize:"32px",lineHeight:"32px",color:"white",paddingBottom:"15px"})
    $("<div>").appendTo(".rightTxt").addClass("rightSubTitle").text("First Released Oct 6, 2021").css({fontSize:"14px",lineHeight:"20px",color:"white"})
    $("<div><img src='assets/img/score.png' alt='photo'></div>").appendTo(".rightHeader").addClass("rightIMG")

    $("<div>").appendTo(".rightBlock").text("Far Cry 6 is a 2021 action-adventure first-person shooter game developed by Ubisoft Toronto. It is the sixth main installment in the Far Cry series and the successor Far Cry 5.").addClass("mainTxt")
    $(".mainTxt").css({fontSize:"14px",lineHeight:"22px",color:"#B7BACD",paddingRight:"50px",marginBottom:"50px"})

    $("<div>").appendTo(".rightBlock").addClass("price").css({display:"flex",justifyContent:"space-between"})

    $("<div>").appendTo(".price").addClass("sale")
    $("<div>").appendTo(".sale").text("20% OFF!").css({fontSize:"12px",lineHeight:"20px",color:"#FFDD3F"})
    $("<div>").appendTo(".sale").text("$59.96").css({fontSize:"32px",lineHeight:"32px",color:"white"})

    $("<a href='#'>Buy it now</a>").appendTo(".price").addClass("but").css({backgroundColor:"#13E28D",width:"150px",height:"60px"})
    $(".but").css({display:"flex",justifyContent:"center",alignItems:"center",textDecoration:"none",fontSize:"16px",lineHeight:"20px",color:"#FFFFFF",textTransform:"uppercase"})

})


    

