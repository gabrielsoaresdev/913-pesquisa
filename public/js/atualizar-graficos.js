function atualizar(op) {

  elemento = document.getElementById("op" + op);
  elemento.classList.add('active');

  for(i = 1; i <= 6; i++) {
    if(i != op)
      document.getElementById("op" + i).classList.remove('active');
  }
  switch (op) {
    case 1:
      resultPres();
      break;
    case 2:
      pesquisaPres();
      break;
    case 3:
      resultadoAlGov();
      break;
    case 4:
      pesquisaAlGov();
      break;
    case 5:
      resultadoAlSen();
      break;
    case 6:
      pesquisaAlSen();
      break;
    default:

  }
}

function pesquisaAlGov() {
  // Load google charts
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  // Draw the chart and set the chart values
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Candidato', 'Porcentagem'],
      ['Renan - MDB', 46],
      ['Josan Leite - PSL', 2],
      ['Pinto de Luna - PROS [INDEFERIDO]', 0],
      ['Basile - PSOL', 1],
      ['Fernando Collor - PTC [RENUNCIOU]', 22]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Resultado - Apuração', 'width':'100%', 'height':500};

    /// Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('grafico'));
    chart.draw(data, options);
  }
}

function resultadoAlGov() {
  // Load google charts
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  // Draw the chart and set the chart values
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Candidato', 'Porcentagem'],
      ['Renan - MDB [ELEITO]', 46],
      ['Josan Leite - PSL', 11.05],
      ['Pinto de Luna - PROS [INDEFERIDO]', 7.31],
      ['Basile - PSOL', 4.34]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Resultado - Apuração', 'width':'100%', 'height':500};

    /// Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('grafico'));
    chart.draw(data, options);
  }
}

function pesquisaAlSen() {
  // Load google charts
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  // Draw the chart and set the chart values
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Candidato', 'Porcentagem'],
      ['Rodrigo Cunha - PSDB [ELEITO]', 33],
      ['Renan Calheiros - MDB [ELEITO]', 27],
      ['Maurício Quintela - PL', 15],
      ['Benedito de Lira - PP', 14],
      ['Flávio Moreno - PSL', 3],
      ['Prof. Cícero - PSOL', 3],
      ['Osvaldo Maciel - PCB', 0],
      ['Sergio Cabrail - PATRIOTA', 0]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Resultado - Apuração', 'width':'100%', 'height':500};

    /// Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('grafico'));
    chart.draw(data, options);
  }
}

function resultadoAlSen() {
  // Load google charts
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  // Draw the chart and set the chart values
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Candidato', 'Porcentagem'],
      ['Rodrigo Cunha - PSDB [ELEITO]', 34.42],
      ['Renan Calheiros - MDB [ELEITO]', 23.88],
      ['Maurício Quintela - PL', 18.98],
      ['Benedito de Lira - PP', 14],
      ['Flávio Moreno - PSL', 5.49],
      ['Prof. Cícero - PSOL', 2.22],
      ['Osvaldo Maciel - PCB', 0.57],
      ['Sergio Cabrail - PATRIOTA', 0.44]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Resultado - Apuração', 'width':'100%', 'height':500};

    /// Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('grafico'));
    chart.draw(data, options);
  }
}

function pesquisaPres() {

    // Load google charts
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    // Draw the chart and set the chart values
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Candidato', 'Porcentagem'],
        ['Álvaro Dias - PODEMOS', 3],
        ['Cabo Daciolo - PATRIOTA', 1],
        ['Ciro Gomes - PDT', 13],
        ['Eymael - DC', 0],
        ['Haddad - PT', 13],
        ['Alckmin - PSDB', 9],
        ['Boulos - PSOL', 2],
        ['Meirelles - PMDB', 3],
        ['Bolsonaro - PSL', 26],
        ['Amoedo - NOVO', 3],
        ['João Goulard - PPL', 0],
        ['Marina Silva - REDE', 8],
        ['Vera - PSTU', 0],
      ]);

      // Optional; add a title and set the width and height of the chart
      var options = {'title':'Pesquisa DATAFOLHA', 'width':'100%', 'height':500};

      /// Display the chart inside the <div> element with id="piechart"
      var chart = new google.visualization.BarChart(document.getElementById('grafico'));
      chart.draw(data, options);
    }
}

function resultPres() {
  // Load google charts
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  // Draw the chart and set the chart values
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Candidato', 'Porcentagem'],
      ['Álvaro Dias - PODEMOS', 0.8],
      ['Cabo Daciolo - PATRIOTA', 1.26],
      ['Ciro Gomes - PDT', 12.47],
      ['Eymael - DC', 0.04],
      ['Haddad - PT [SEGUNDO TURNO]', 29.28],
      ['Alckmin - PSDB', 4.76],
      ['Boulos - PSOL', 0.58],
      ['Meirelles - PMDB', 1.2],
      ['Bolsonaro - PSL [SEGUNDO TURNO]', 46.03],
      ['Amoedo - NOVO', 2.5],
      ['João Goulard - PPL', 0.03],
      ['Marina Silva - REDE', 1],
      ['Vera Lucia - PSTU', 0.05]
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = {'title':'Resultado - Apuração', 'width':'100%', 'height':500};

    /// Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('grafico'));
    chart.draw(data, options);
  }
}
