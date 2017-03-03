$(function(){

  var highColor = "#1B9437";


  //線グラフ
  if($("canvas").length > 0){

    var chartWidth = $("div#chart-area").width();
    $("canvas").attr("width",chartWidth);

    var labels = $("canvas").attr("data-data_labels");
    var dataset_g = $("canvas").attr("data-dataset_g");
    var dataset_a = $("canvas").attr("data-dataset_a");



    var config = {
      type: 'line',
      data: {
        labels: labels.split(','),
        datasets: [
          {
            label: "目標値",
            fill: false,
            backgroundColor: "#0174c1",
            borderWidth: 2,
            borderColor: "#0174c1",
            pointBorderColor: "#fff",
            pointBackgroundColor: "#0174c1",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#0174c1",
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 2,
            tension: 0,
            data: dataset_g.split(',')
          },
          {
            label: "達成値",
            fill: false,
            backgroundColor: "#1B9437",
            borderWidth: 2,
            borderColor: "#1B9437",
            pointBorderColor: "#fff",
            pointBackgroundColor: "#1B9437",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#1B9437",
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 2,
            tension: 0,
            data: dataset_a.split(',')
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          xAxes: [
            {
              display: true,
              stacked: false,
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: '完了レッスン数',
                fontFamily: 'monospace',
                fontSize: 14
              },
              ticks: {
                reverse: false,
                callback: function(value){
                  return value;
                }
              }
            }
          ]
        }
      }
    };
    window.onload = function() {
      var ctx = document.getElementById("line").getContext("2d");
      window.myLine = new Chart(ctx, config);
    };

  }//end 線グラフ


  //学習予定内容
  if($("div#plan-boxes").length){

    $("div#plan-boxes").foldscroll({
      perspective: 200,
      margin: 110
    });

    $("div#button-up").click(function(){
      var p = $("div#plan-boxes").scrollTop();
      var goal = p-80;
      $("div#plan-boxes").animate({ scrollTop: goal });
    });

    $("div#button-down").click(function(){
      var p = $("div#plan-boxes").scrollTop();
      var goal = p+80;
      $("div#plan-boxes").animate({ scrollTop: goal });
    });


  }//end if plan-boxes

  //プログレスバー
  if($("div#progress-bar").length > 0){
    var progBars = $("div#progress-bar");

    progBars.each(function(){
      var count = $(this).attr("data-count");
      $(this).css("width",count+"%");
      if(count < 30){
        var progText = $(this).children("div#progress-text");
        var width = 60+parseInt(count)*2.5;
        progText.css({
          "color": highColor,
          "width": width+"px",
          "text-align": "right"
        });
      }

    });
  }//end プログレスバー

  //チェックボックス
  if($("div#check-box-square").length > 0){

    $("div#check-box-square").click(function(){

      var flag = $(this).children("div#check-box").attr("data-flag");

      if(flag == "no"){
        $(this).children("div#check-box").removeClass("nocheck");
        $(this).children("div#check-box").attr("data-flag","yes");
      }else{
        $(this).children("div#check-box").addClass("nocheck");
        $(this).children("div#check-box").attr("data-flag","no");
      }
    });

  }//end チェックボックス

  //スライド
  if($("div#slide-area").length){

    var slideCount = $("li#slide").length;
    $("span#slide-max").text(slideCount);

    $(".slide-right, .slide-right-circle").click(function(){

      var currentSlide = (parseInt($("span#slide-current").text()) - 1);
      $("li#slide").eq(currentSlide).hide();

      var currentSlide = currentSlide + 1;
      $("li#slide").eq(currentSlide).show();
      $("span#slide-current").text((currentSlide+1));

      if((currentSlide+1) == slideCount){
        $("div#slide-right").hide();
        $("div.slide-right-circle").hide();
      }

      $("div#slide-left").show();
      $("div.slide-left-circle").show();

    });//end slide-right

    $(".slide-left, .slide-left-circle").click(function(){

      var currentSlide = (parseInt($("span#slide-current").text()) - 1);
      $("li#slide").eq(currentSlide).hide();

      var currentSlide = currentSlide - 1;
      $("li#slide").eq(currentSlide).show();
      $("span#slide-current").text((currentSlide+1));

      if((currentSlide+1) == 1){
        $("div#slide-left").hide();
        $("div.slide-left-circle").hide();
      }

      $("div#slide-right").show();
      $("div.slide-right-circle").show();

    });//end slide-right

  }//end if

  //シンタックスハイライター
  if($("pre").length){

    hljs.initHighlightingOnLoad() ;
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/php");

  }//end if pre


  //faqを開く
  if($("div#open-faq").length > 0){

    $("div#open-faq").click(function(){
      $("div#faq-area").fadeIn();
    });

    $("div#faq-area").click(function(){
      $("div#help-area").click(function(){ event.stopPropagation(); });
      $(this).fadeOut();
    });

  }//end if

  //ヘルプ
  if($("div#help-title").length > 0){

    $("div#help-title").click(function(){
      var number = $("div#help-title").index($(this));
      $("div#help-answer").eq(number).slideToggle();
      if($(this).parent("div.help-box").hasClass("show")){
        $(this).parent("div.help-box").removeClass("show");
      }else{
        $(this).parent("div.help-box").addClass("show");
      }
    });
  }//end ヘルプタイトル

});
