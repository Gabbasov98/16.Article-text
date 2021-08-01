$(document).ready(function() {
    $(" .select").niceSelect()


    $(".table__check input").click(function() {
        if ($(this).is(':checked')) {
            $(this).parents(".table__row").addClass("table__row--active");
        } else {
            $(this).parents(".table__row").removeClass("table__row--active");
        }
    })
    $(".datapicker__show").click(function() {
        $(this).addClass("datapicker__show--active")
    })

    $(document).mouseup(function(e) { // событие клика по веб-документу
        if ($(".datapicker__show").hasClass("datapicker__show--active")) {
            var div = $(".datapicker__hidden"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                &&
                div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.siblings(".datapicker__show").removeClass("datapicker__show--active")
            }
        }

    });
    if (document.getElementById('myChart')) {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [20, 20, 15, 7],
                    backgroundColor: [
                        'rgba(111, 82, 237, 1)',
                        'rgba(255, 184, 0, 1)',
                        'rgba(255, 76, 97, 1)',
                        'rgba(51, 214, 159, 1)',
                        // 'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(111, 82, 237, 1)',
                        'rgba(255, 184, 0, 1)',
                        'rgba(255, 76, 97, 1)',
                        'rgba(51, 214, 159, 1)',
                        // 'rgba(255, 159, 64, 1)'
                    ],
                    // borderWidth: 1
                }]
            },
            options: {
                cutout: 50
            }
        });
    } else {
        var ctx = document.getElementById('myChart2').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [20, 20, 15],
                    backgroundColor: [
                        // 'rgba(255, 76, 97, 1)',
                        'rgba(111, 82, 237, 1)',
                        'rgba(255, 184, 0, 1)',
                        'rgba(51, 214, 159, 1)',
                        // 'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(111, 82, 237, 1)',
                        'rgba(255, 184, 0, 1)',
                        'rgba(51, 214, 159, 1)',
                        // 'rgba(255, 159, 64, 1)'
                    ],
                    // borderWidth: 1
                }]
            },
            options: {
                cutout: 35
            }
        });
    }


    function Diagram() {
        // var ctx = document.getElementById("myChart3");
        // var myChart = new Chart(ctx, {
        //     type: 'line',
        //     data: {
        //         labels: [], //Подписи оси x
        //         // axisX: {
        //         //     valueFormatString: "MMM",
        //         //     interval: 1,
        //         //     intervalType: "month"
        //         // },
        //         // axisY: {
        //         //     includeZero: false

        //         // },
        //         datasets: [{
        //                 // label: 'f(x)', //Метка
        //                 data: [
        //                     { x: 'Янв', y: 17 },
        //                     { x: 'Фев', y: 30 },
        //                     { x: 'Март', y: 28 },
        //                     { x: 'Апр', y: 45 },
        //                     { x: 'Май', y: 38 },
        //                     { x: 'Июнь', y: 20 },
        //                     { x: 'Июль', y: 20 },
        //                     { x: 'Авг', y: 35 },
        //                     { x: 'Сен', y: 48 },
        //                     { x: 'Окт', y: 45 },
        //                     { x: 'Ноя', y: 35 },
        //                     { x: 'Дек', y: 25 },
        //                 ], //Данные
        //                 borderColor: '[#00498D]', //Цвет
        //                 borderWidth: 2, //Толщина линии
        //                 fill: false, //Не заполнять под графиком
        //                 dataPoints: [

        //                 ]
        //             }
        //             //Можно добавить другие графики
        //         ]
        //     },

        //     options: {
        //         responsive: true, //Вписывать в размер canvas
        //         scales: {
        //             xAxis: [{
        //                 display: true,
        //                 ticks: {
        //                     fontSize: 6,
        //                 }
        //             }],
        //             // yAxes: [{
        //             //     display: false
        //             // }]

        //         },
        //         plugins: {
        //             legend: {
        //                 labels: {
        //                     // This more specific font property overrides the global property
        //                     font: {
        //                         size: 14
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // });
        // // myData = [15, 27, 29, 42, 38, 20, 21, 40, 44, 42, 30, 25]
        // // myDataLabels = ['Янв', "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"]
        // //     // Заполняем данными
        // // for (var x = 0; x < myData.length; x++) {
        // //     myChart.data.labels.push('' + myDataLabels[x]);
        // //     myChart.data.datasets[0].data.push(myData[x]);
        // // }
        // // Обновляем
        // myChart.render();

        // function f(x) { //Вычисление нужной функции
        //     return Math.sin(x);
        // }
        // const DATA_COUNT = 7;
        // const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

        // const labels = Utils.months({ count: 7 });
        // const data = {
        //     labels: labels,
        //     datasets: [{
        //             label: 'Dataset 1',
        //             data: Utils.numbers(NUMBER_CFG),
        //             borderColor: Utils.CHART_COLORS.red,
        //             backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        //         },
        //         {
        //             label: 'Dataset 2',
        //             data: Utils.numbers(NUMBER_CFG),
        //             borderColor: Utils.CHART_COLORS.blue,
        //             backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        //         }
        //     ]
        // };
        // var ctx = document.getElementById("myChart3");
        // var myChart = new Chart(ctx, {
        //     type: 'line',
        //     data: data,
        //     options: {
        //         responsive: true,
        //         plugins: {
        //             legend: {
        //                 position: 'top',
        //             },
        //             title: {
        //                 display: true,
        //                 text: 'Chart.js Line Chart'
        //             }
        //         }
        //     },
        // });
        // var speedCanvas = document.getElementById("myChart3");

        // Chart.defaults.defaultFontFamily = "Proxima Nova";
        // Chart.defaults.font.size = 10;
        // Chart.defaults.backgroundColor = "rgb(0, 73, 141,1)";
        // Chart.defaults.borderColor = "rgb(0, 73, 141,1)";
        // Chart.defaults.color = '#9FA2B4';

        // var speedData = {
        //     labelAngle: 0,

        //     labels: ['Янв', "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        //     datasets: [{
        //         data: [15, 27, 29, 42, 38, 20, 21, 40, 44, 42, 30, 25],
        //         tension: 0.4,
        //         font: {
        //             size: 10
        //         }
        //     }]
        // };

        // var chartOptions = {
        //     legend: {
        //         display: false,

        //         // labels: {
        //         //     boxWidth: 80,
        //         //     fontColor: 'black',
        //         //     fontSize: 10
        //         // }
        //     }
        // };

        // var lineChart = new Chart(speedCanvas, {
        //     type: 'line',
        //     axisX: {
        //         // valueFormatString: "DD-MMM",
        //         // interval: 10,
        //         // intervalType: "day",
        //         labelAngle: 0,
        //         // labelFontColor: "rgb(0,75,141)",
        //         // minimum: new Date(2012, 06, 10)
        //     },
        //     axisY: {
        //         // title: "Views on YouTube",
        //         // interlacedColor: "azure",
        //         // tickColor: "azure",
        //         // titleFontColor: "rgb(0,75,141)",
        //         // valueFormatString: "#M,,.",
        //         // interval: 100000000
        //     },
        //     data: speedData,
        //     options: {
        //         // chartOptions,
        //         font: {
        //             size: 10,
        //             labelAngle: 0,
        //         }
        //     }
        // });
        // console.log(Chart.defaults)
        const ctx = document.querySelector(".myChart3");
        // Tags - это метки, которые идут по оси X.  
        const tags = ["Январь", "Февраль", "Март", "Апрель"]
            // У нас может быть несколько наборов данных. Давайте начнем с одного
        const dataSales2020 = {
            label: "Продажи за месяц",
            data: [5000, 1500, 8000, 5102], // Данные представляют собой массив, который должен иметь такое же количество значений, как и количество тегов.
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Цвет фона
            borderColor: 'rgba(54, 162, 235, 1)', // Цвет границ
            borderWidth: 1, // Толщина границ
        };
        new Chart(ctx, {
            type: 'line', // Тип графики
            data: {
                labels: tags,
                datasets: [
                    dataSales2020,
                    // Больше данных здесь....
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                },
            }
        });
    }
    // Получение ссылки на элемент canvas в DOM

    //Ставим загрузку диаграммы на событие загрузки страницы
    // Diagram()


})