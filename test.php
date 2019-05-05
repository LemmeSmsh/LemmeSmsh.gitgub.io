<?php 

echo "Hello World!";

$pwd = md5('130zav982ziv');
$post = [
    'login' => 'alex@forward.dp.ua',
    'password' => $pwd,
];

$ch = curl_init('http://api.brain.com.ua/auth');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
$response = curl_exec($ch);
curl_close($ch);
$response = json_decode($response, true);
//var_dump($response);
$SID = $response['result'];

$ch = curl_init('http://api.brain.com.ua/categories/' . $SID . '?lang=ua');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$responseCategories = curl_exec($ch);
curl_close($ch);

$responseCategories = json_decode($responseCategories);
//var_dump($responseCategories);

foreach ($responseCategories->result as $product_id => $product) {
    $ch = curl_init('http://api.brain.com.ua/products/' . $product->categoryID . '/' . $SID);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $products = curl_exec($ch);
    curl_close($ch);
    $products = json_decode($products);

    foreach($products->result->list as $item_key => $item) {
        print_r($item->name);
        echo "<br><br>";
    };
};
