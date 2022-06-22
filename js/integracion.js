// $("#checkout-btn").click(function() {
//     $('#checkout-btn').attr("disabled", true);
    
//     const orderData = {
//         cantidad: document.getElementById("cantidad").value,
//         titulo: document.getElementById("titulo").value,
//         precio: document.getElementById("precio").value
//     };
      
//     fetch("preference.php", {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderData),
//     })
//       .then(function(response) {
//           return response.json();
//       })
//       .then(function(preference) {
//           createCheckoutButton(preference.id);
//       })
//       .catch(function() {
//           alert("Unexpected error");
//           $('#checkout-btn').attr("disabled", false);
//       });
//   });

$("#checkout-btn").click(function() {
    $('#checkout-btn').attr("disabled", true);
    
    const orderData = {
        cantidad: document.getElementById("cantidad").value,
        titulo: document.getElementById("titulo").value,
        precio: document.getElementById("precio").value
    };
    $.ajax({
        url: "preference.php",
        type: "POST",
        data: JSON.stringify(orderData),
        contentType: false,
        processData:false,
        beforeSend: function () {
            console.log("pagando, espere por favor...");
        },
        success: function (response) {
            console.log(response);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus, errorThrown);
        }
    });
});


  // Create preference when click on checkout button
function createCheckoutButton(preferenceId) {
     // Agrega credenciales de SDK
  const mp = new MercadoPago("APP_USR-d81f7be9-ee11-4ff0-bf4e-20c36981d7bf", {
    locale: "es-MX",
  });
  // Inicializa el checkout
  mp.checkout({
    preference: {
      id: preferenceId,
    },
    render: {
      container: ".checkout-btn", // Indica el nombre de la clase donde se mostrará el botón de pago
      label: "Pagar la compra", // Cambia el texto del botón de pago (opcional)
    },
  });
  }