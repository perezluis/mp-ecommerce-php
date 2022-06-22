<?php
// SDK de Mercado Pago
 require 'vendor/autoload.php';
// Agrega credenciales
MercadoPago\SDK::setAccessToken('APP_USR-1159009372558727-072921-8d0b9980c7494985a5abd19fbe92
1a3d-617633181');

// $path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
// var_dump($path);die();
// $preference = new MercadoPago\Preference();
// //...
// $item = new MercadoPago\Item();
// $item->title = 'Mi producto';
// $item->quantity = 1;
// $item->unit_price = 75.56;
// $preference->items = array($item);

// $preference->back_urls = array(
//     "success" => "https://www.tu-sitio/success",
//     "failure" => "http://www.tu-sitio/failure",
//     "pending" => "http://www.tu-sitio/pending"
// );
// $preference->auto_return = "approved";
?>