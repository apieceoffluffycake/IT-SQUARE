//グラフ3
//教育分野におけるIT利用率
var ctx = document.getElementById("edu_IT");
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['日本', 'アメリカ', 'イギリス', '韓国', 'シンガポール', 'デンマーク', 'スウェーデン'],
        datasets: [{
            label: 'IT利用率(％)',
            data: [17.4, 32.1, 31.2, 48.2, 57.5, 41.5, 37.3],
            /*棒の色*/
            backgroundColor: ['#FF9EA9', '#D7F7F1', '#D7F7F1', '#D7F7F1', '#D7F7F1', '#D7F7F1', '#D7F7F1'],
            /*マウスホバー時の棒の色*/
            hoverBackgroundColor: ['#F98693', '#BFEEE5', '#BFEEE5', '#BFEEE5', '#BFEEE5', '#BFEEE5', '#BFEEE5']
        }, ]
    },
    options: {
        title: {
            display: true,
            text: '教育分野におけるITの利用率(2009)'
        },
        legend: {
            /*凡例非表示*/
            display: false
        },
        scales: {
            xAxes: [{
                display:false,
                barPercentage: 0.9,
                /*補助線なし*/
                gridLines: {
                    display: false
                },
            }],
            /*y軸の設定*/
            yAxes: [{
                /*補助線なし*/
                /*gridLines: {
                    display: false
                },*/
                ticks: {
                    suggestedMax: 60,
                    suggestedMin: 0,
                    stepSize: 20,
                    /*単位(今回はいらない)*/
                    /*callback: function (value, index, values) {
                        return value + '％'
                    }*/
                }
            }]
        },
    }
});



var ctx = document.getElementById("edu_IT_mobile");
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['日本', 'アメリカ', 'イギリス', '韓国', 'シンガポール', 'デンマーク', 'スウェーデン'],
        datasets: [{
            label: 'IT利用率(％)',
            data: [17.4, 32.1, 31.2, 48.2, 57.5, 41.5, 37.3],
            /*棒の色*/
            backgroundColor: ['#FF9EA9', '#D7F7F1', '#D7F7F1', '#D7F7F1', '#D7F7F1', '#D7F7F1', '#D7F7F1'],
            /*マウスホバー時の棒の色*/
            hoverBackgroundColor: ['#F98693', '#BFEEE5', '#BFEEE5', '#BFEEE5', '#BFEEE5', '#BFEEE5', '#BFEEE5']
        }, ]
    },
    options: {
        title: {
            display: true,
            text: '教育分野におけるITの利用率(2009)'
        },
        legend: {
            /*凡例非表示*/
            display: false
        },
        scales: {
            xAxes: [{
                display:false,
                barPercentage: 0.9,
                /*補助線なし*/
                gridLines: {
                    display: false
                },
            }],
            /*y軸の設定*/
            yAxes: [{
                /*補助線なし*/
                /*gridLines: {
                    display: false
                },*/
                ticks: {
                    suggestedMax: 60,
                    suggestedMin: 0,
                    stepSize: 20,
                    /*単位(今回はいらない)*/
                    /*callback: function (value, index, values) {
                        return value + '％'
                    }*/
                }
            }]
        },
    }
});