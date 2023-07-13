function handleFile(e) {
  var files = e.target.files;
  var f = files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    var data = new Uint8Array(e.target.result);
    var workbook = XLSX.read(data, { type: 'array' });

    // Obtener la primera hoja de cálculo
    var sheetName = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[sheetName];

    // Convertir la hoja de cálculo a formato JSON
    var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Acceder a los datos
    var horarios = jsonData.slice(1); // Ignorar la primera fila (encabezados)

    var diasSemana = jsonData[0].slice(1); // Obtener los días de la semana desde la primera fila

    var dataFormateada = [];
    for (var i = 0; i < horarios.length; i++) {
      var fila = horarios[i];
      var horario = fila[0]; // Obtener el horario desde la primera columna

      var datosFila = [];
      for (var j = 1; j < fila.length; j++) {
        var valor = fila[j];

        // Crear objeto con etiquetas para cada celda
        var etiqueta = {
          dia: diasSemana[j - 1], // Restar 1 para coincidir con los índices de los días de la semana
          horario: horario
        };

        var datoEtiquetado = {
          valor: valor,
          etiqueta: etiqueta
        };

        datosFila.push(datoEtiquetado);
      }

      dataFormateada.push(datosFila);
    }

    console.log(dataFormateada);
  };

  reader.readAsArrayBuffer(f);
}
