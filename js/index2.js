//グラフ2
//業務用途のデジタル・テクノロジのスキルに関する自己評価(2018)
var ctx = document.getElementById("self_assess_IT_jp");
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["素人(%)", "中程度(%)", "熟練(%)", "エキスパート(%)"],
      datasets: [{
          backgroundColor: ["#FF9EA9", "#FFC9CF", "#D7F7F1", "#D7F7F1"],
          hoverBackgroundColor: ["#F98693","#FF9EA9","#BFEEE5", "#BFEEE5"],
          data: [17, 41, 39, 3]
      }]
    },
    options: {
      title: {
        display: true,
        text: '日本',
      },
      legend: {
        /*凡例非表示*/
        display: false
    },
    }
  });

  var ctx = document.getElementById("self_assess_IT_sg");
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["素人(%)", "中程度(%)", "熟練(%)", "エキスパート(%)"],
      datasets: [{
          backgroundColor: ["#FF9EA9", "#FFC9CF", "#D7F7F1", "#D7F7F1"],
          hoverBackgroundColor: ["#F98693","#FF9EA9","#BFEEE5", "#BFEEE5"],
          data: [5, 31, 56, 8]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'シンガポール'
      },
      legend: {
        /*凡例非表示*/
        display: false
    },
    }
  });

  var ctx = document.getElementById("self_assess_IT_au");
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["素人(%)", "中程度(%)", "熟練(%)", "エキスパート(%)"],
      datasets: [{
          backgroundColor: ["#FF9EA9", "#FFC9CF", "#D7F7F1", "#D7F7F1"],
          hoverBackgroundColor: ["#F98693","#FF9EA9","#BFEEE5", "#BFEEE5"],
          data: [3, 26, 59, 12]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'オーストラリア'
      },
      legend: {
        /*凡例非表示*/
        display: false
    },
    }
  });

  var ctx = document.getElementById("self_assess_IT_us");
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["素人(%)", "中程度(%)", "熟練(%)", "エキスパート(%)"],
      datasets: [{
          backgroundColor: ["#FF9EA9", "#FFC9CF", "#D7F7F1", "#D7F7F1"],
          hoverBackgroundColor: ["#F98693","#FF9EA9","#BFEEE5", "#BFEEE5"],
          data: [3, 21, 61, 16]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'アメリカ'
      },
      legend: {
        /*凡例非表示*/
        display: false
    },
    }
  });

  var ctx = document.getElementById("self_assess_IT_gb");
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["素人(%)", "中程度(%)", "熟練(%)", "エキスパート(%)"],
      datasets: [{
          backgroundColor: ["#FF9EA9", "#FFC9CF", "#D7F7F1", "#D7F7F1"],
          hoverBackgroundColor: ["#F98693","#FF9EA9","#BFEEE5", "#BFEEE5"],
          data: [1, 27, 53, 19]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'イギリス'
      },
      legend: {
        /*凡例非表示*/
        display: false
    },
    }
  });

  var ctx = document.getElementById("self_assess_IT_de");
  var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["素人(%)", "中程度(%)", "熟練(%)", "エキスパート(%)"],
      datasets: [{
          backgroundColor: ["#FF9EA9", "#FFC9CF", "#D7F7F1", "#D7F7F1"],
          hoverBackgroundColor: ["#F98693","#FF9EA9","#BFEEE5", "#BFEEE5"],
          data: [3, 23, 65, 9]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'ドイツ'
      },
      legend: {
        /*凡例非表示*/
        display: false
    },
    }
  });