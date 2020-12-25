$(function(){
    // tab_contents内の idがsite_describe以外のsection要素 を非表示にする
    $('#tab_contents section[id != "site_background"]').hide();
  
    // a要素(=タブ) をクリック
    $("a").click(function(){
      // tab_contents内のdiv要素をいったん全て非表示にする
      $("#tab_contents section").hide();
  
      // 押したa要素(=タブ)のhrefの値を取得 → 同じ名前のidがついている要素があるのでそれを表示
      $($(this).attr("href")).show();
  
      // 現在のcurrentクラスを削除
      $(".current").removeClass("current");
  
      // 選択されたタブ（自分自身）にcurrentクラスを追加
      $(this).addClass("current");
  
      return false;
    });
  });


//スライドショー
$(document).ready(function(){
  $( '#slider1' ).sliderPro();
});


//フィルタリング
$(function(){
  // ボタンを選択
  $("button").click(function(){
    // value属性の値を取得
    var target = $(this).attr("value");

    // 全てのli要素を調べる
    $("#page_des li").each(function(){
      // 一度全て非表示にする
      $(this).animate({"opacity" : 0}, 100, function(){
        $(this).hide();

        // フィルタリングの条件を満たしているか
        if($(this).hasClass(target)){
          // 条件を満たしている場合は再表示
          $(this).show();
          $(this).animate({"opacity" : 1}, 100);
        }
      });
    });
  });
});
