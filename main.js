$(document).ready(() => {
/*-----------------------------------------------------------Donut Charts----------------------------------------------------------*/
    google.charts.load("current", {packages:["corechart"]});
    
    google.charts.setOnLoadCallback(drawBarChart1);
    google.charts.setOnLoadCallback(drawPieChart1);
    google.charts.setOnLoadCallback(drawDonutChart1);
    google.charts.setOnLoadCallback(drawDonutChart2);
    google.charts.setOnLoadCallback(drawDonutChart3);
    
    //Bar chart on second page
    function drawBarChart1() {
        var queryString = encodeURIComponent('SELECT A, B, C LIMIT 6 OFFSET 0');
        
        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/105l5L5a_P-PcLCu5g8BPEXAELcfO7Hh9VuxUrpkIq4U/gviz/tq?sheet=SheetNewVersion&headers=1&tq=' + queryString);
        query.send(handleQueryResponseTaxGifts);
    }

    function handleQueryResponseTaxGifts(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }
        
        var options = { 
            height: 300,
            backgroundColor: 'transparent',
            colors: ['#005d6d', '#38a9b9'],
            legend: {
                textStyle: {color: 'white', fontSize: 12},
                position: 'top',
                alignment:'center'
            },
            hAxis: {
                textStyle:{color: '#FFF'}
            },
            vAxis: {
                textStyle:{color: '#FFF'}
            }
        }
        
        var data = response.getDataTable();
        var chart = new google.visualization.ColumnChart(document.getElementById('barchart1'));
        chart.draw(data, options);
    }
    
    //Pie chart on second page
    function drawPieChart1() {
        var queryString = encodeURIComponent('SELECT A, L LIMIT 6 OFFSET 0');

        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/105l5L5a_P-PcLCu5g8BPEXAELcfO7Hh9VuxUrpkIq4U/gviz/tq?sheet=SheetNewVersion&headers=1&tq=' + queryString);
        query.send(handleQueryResponseNumberofCharities);
    }

    function handleQueryResponseNumberofCharities(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }
        
        var options = {
            height: 300,
            backgroundColor: 'transparent',
            pieSliceBorderColor: 'black',
            colors: ['#7d1618','#005d6d', '#38a9b9', '#313036', '#b1b0b8', '#f4ebd9'],
            legend: {
                textStyle: {color: 'white', fontSize: 12}
            }
        }

        var data = response.getDataTable();
        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
        chart.draw(data, options);
    }
    
    //First donut chart on fourth page
    function drawDonutChart1() {
        var queryString = encodeURIComponent('SELECT A, E LIMIT 6 OFFSET 0');

        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/105l5L5a_P-PcLCu5g8BPEXAELcfO7Hh9VuxUrpkIq4U/gviz/tq?sheet=SheetNewVersion&headers=1&tq=' + queryString);
        query.send(handleQueryResponseTotalExpenditures);
    }

    function handleQueryResponseTotalExpenditures(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var options = {
            pieHole: 0.4,
            backgroundColor: 'transparent',
            pieSliceBorderColor: 'black',
            slices: {
                0: { color: '#ee4646' },
                1: { color: '#2cbae3' },
                2: { color: '#2191b2' },
                3: { color: '#7e417c' },
                4: { color: '#c11072' },
                5: { color: '#a400a5' }
            },
            titleTextStyle: {
                fontSize: 24,
                color: 'white'
            },
            chartArea: {
                width: '100%',
                height: '80%'
            },
            legend: {
                textStyle: {
                    color: 'white',
                    fontSize: 12},
                position: 'right'
            }
        }
        
        var data = response.getDataTable();
        var chart = new google.visualization.PieChart(document.getElementById('donutchart1'));
//        google.visualization.events.addListener(chart, 'ready', function () {
//          Array.prototype.forEach.call(container.getElementsByTagName('text'), function(label) {
//            if (label.innerHTML === options.title) {
//              var subtitle = label.parentNode.appendChild(label.cloneNode(true));
//              subtitle.innerHTML = 'Subtitle';
//              subtitle.setAttribute('y', parseFloat(label.getAttribute('y')) + 20);
//            }
//          });
//        });
        chart.draw(data, options);
    }
    
    //Second donut chart on fourth page
    function drawDonutChart2() {
    var queryString = encodeURIComponent('SELECT A, D LIMIT 5 OFFSET 0');

        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/105l5L5a_P-PcLCu5g8BPEXAELcfO7Hh9VuxUrpkIq4U/gviz/tq?sheet=SheetNewVersion&headers=1&tq=' + queryString);
        query.send(handleQueryResponseRevenue);
    }

    function handleQueryResponseRevenue(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var options = {
            pieHole: 0.4,
            backgroundColor: 'transparent',
            pieSliceBorderColor: 'black',
            slices: {
                0: { color: '#3e6fd6' },
                1: { color: '#1450a3' },
                2: { color: '#94acff' },
                3: { color: '#6ba6f9' },
                4: { color: '#1ca2e3' }
            },
            titleTextStyle: {
                fontSize: 24,
                color: 'white',
            },
            chartArea: {
                width: '100%',
                height: '80%',
            },
            legend: {
                textStyle: {color: 'white', fontSize: 12}
            }
        }
        
        var data = response.getDataTable();
        var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));

        google.visualization.events.addListener(chart, 'ready', function() {
            document.getElementById('donutchart2').style.display = 'none';
        });

        chart.draw(data, options);
    }
    
    //Third donut chart on fourth page
    function drawDonutChart3() {
        var queryString = encodeURIComponent('SELECT A, H LIMIT 5 OFFSET 0');

        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/105l5L5a_P-PcLCu5g8BPEXAELcfO7Hh9VuxUrpkIq4U/gviz/tq?sheet=SheetNewVersion&headers=1&tq=' + queryString);
        query.send(handleQueryResponseSalariesandWages);
    }

    function handleQueryResponseSalariesandWages(response) {
        if (response.isError()) {
            alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
            return;
        }

        var options = {
            pieHole: 0.4,
            backgroundColor: 'transparent',
            pieSliceBorderColor: 'black',
            slices: {
                0: { color: '#582e4b' },
                1: { color: '#066298' },
                2: { color: '#0e4064' },
                3: { color: '#4eb7d2' },
                4: { color: '#812063' }
            },
            titleTextStyle: {
                fontSize: 24,
                color: 'white',
            },
            chartArea: {
                width: '100%',
                height: '80%',
            },
            legend: {
                textStyle: {color: 'white', fontSize: 12}
            }
        }
        
        var data = response.getDataTable();
        var chart = new google.visualization.PieChart(document.getElementById('donutchart3'));

        google.visualization.events.addListener(chart, 'ready', function() {
            document.getElementById('donutchart3').style.display = 'none';
        });

        chart.draw(data, options);
    }
    
/*-----------------------------------------------------------Functions----------------------------------------------------------*/
    
    //Adds shadow to navbar when scrolled past it's original position
    $(window).scroll(function(){
        if($(document).scrollTop() > 0) {
            $(".navbar").css("box-shadow", "0 4px 8px 0 rgba(0, 0, 0, 0.2)");
        } else {
            $(".navbar").css("box-shadow", "none");
        }
    });
    
    //Displays scrollToTop button if the page is scrolled past 100px
    $(window).scroll(function(){
        if($(document).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event for scrolling to the top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });
    
    //Increases dot size on hover
    $('#dot-expand').hover(function(){
        $(this).addClass('transition');
    },function(){
        $(this).removeClass('transition');   
    });
    
    //Switches the Google Chart visible on button click
    var currentButton = 1;
    $('.panelControlBtn').on("click", function() {
        var ID = $(this).attr('data-id');
        console.log(ID);
        if (ID != currentButton) {
            $(".donutchart").hide(0, function() {
                $("#donutchart" + ID).show();
                $(".donutcharttext" + ID).show();
        });
        currentButton = ID;
        }
    });
    
    $('button').on("click", function() {
        $('button').removeClass('on').addClass('off');
            $(this).removeClass('off').addClass('on');
    });
    
    //Sets up filtering and search for table
    $('#myTable').DataTable({
        responsive: true,
        "columnDefs": [
            { "orderable": false, "targets": 3 }
        ],
        //This function adds the Category column filter dropdown
        initComplete: function() {
            this.api().columns(3).every(function() {
                var column = this;
                var select = $('<select><option value="">Category:All</option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^'+val+'$' : '', true, false)
                            .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="'+d+'">'+d+'</option>')
                });
            });
        }
    });
    
    //Smooth scrolling animations
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top-60
            }, 750);
            return false;
          }
        }
      });
    });
    
    //Reveals elements as the user scrolls
    window.sr = ScrollReveal();
    sr.reveal('.navbar', {
        duration: 500,
        origin: 'top'
    });
    sr.reveal('#methodology', {
        duration: 1000,
        origin: 'left',
        distance: '300px'
    });
    sr.reveal('#page1 h1', {
        duration: 500,
        origin: 'left',
        distance: '300px'
    });
    sr.reveal('.google-maps', {
        duration: 3000,
        origin: 'top',
        distance: '300px',
        delay: 500
    });
    sr.reveal('.category-stats', {
        duration: 500,
        origin: 'right',
        distance: '300px'
    });
    sr.reveal('#page3', {
        duration: 1000,
        origin: 'top',
        distance: '300px'
    });
    sr.reveal('.donut-charts', {
        duration: 500,
        origin: 'left',
        distance: '300px',
        viewFactor: 0.5
    });
    sr.reveal('object', {
        duration: 500,
        origin: 'right',
        distance: '300px'
    });
    sr.reveal('#page5 h1', {
        duration: 500,
        origin: 'right',
        distance: '300px'
    });
})