window.onload = function () {

    let menuIconColors = ["#8f5fe8", "#ffab00", "#fc424a", "#0090e7", "#00d25b", "#8f5fe8", "#ffab00", "#fc424a"];
    let el = document.getElementsByClassName('menu-items');

    for (let i = 0; i < 8; i++) {
        el[i].childNodes[1].childNodes[1].childNodes[1].style.color = menuIconColors[i];
    }

    // Load google charts
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    // Draw the chart and set the chart values
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Day', 'This Week', 'Previous Week'],
            ['Monday', 12, 11],
            ['Tuesday', 4, 6],
            ['Wednesday', 11, 8],
            ['Thursday', 5, 9],
            ['Friday', 6, 9],
            ['Saturday', 8, 10]
        ]);

        // Optional; add a title and set the width and height of the chart
        var options = { 
            'width': '100%', 
            'height': 300, 
            'backgroundColor': '#12151E',
            curveType: 'function',
            hAxis: {textStyle: {
                color: 'white'
            }},
            vAxis: {textStyle: {
                color: 'white'
            }},
            legend: {
                position: 'bottom',
                textStyle: {
                    color: '#6c7293'
                },
            },
            colors: ['#fcb441', 'blue']
        };

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.LineChart(document.getElementById('linechart'));
        chart.draw(data, options);


        var data2 = google.visualization.arrayToDataTable([
            ['Subject','Marks'],
            ['Math',95],
            ['Sci',86],
            ['Eng',98],
            ['His',56],
            ['Geo',78],
            ['Com', 66],
            ['Art', 79],
            ['Bio',34]
        ]);

        // Optional; add a title and set the width and height of the chart
        var options2 = { 
            'width': '100%', 
            'height': 300, 
            'backgroundColor': '#12151E',
            legend: {
                textStyle: {
                    color: '#6c7293'
                },
            },
            chartArea: {width:377, height: 200}
        };

        // Display the chart inside the <div> element with id="piechart"
        var chart2 = new google.visualization.PieChart(document.getElementById('piechart'));
        chart2.draw(data2, options2);

    }


    let notifications = document.getElementById('notifications');
    notifications.style.right = '-400px';

    let profile = document.getElementById('profile-dropdown');
    profile.style.top = '-200px';

}

function toggleNotification(){
    let notifications = document.getElementById('notifications');
    
    if(notifications.style.right == '-400px'){
        notifications.style.right = '0%';
    }
    else{
        notifications.style.right = '-400px';
    }
}

function toggleProfile(){
    let profile = document.getElementById('profile-dropdown');
    
    if(profile.style.top == '-200px'){
        profile.style.top = '75px';
    }
    else{
        profile.style.top = '-200px';
    }
}

