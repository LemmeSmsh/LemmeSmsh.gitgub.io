<?php

if (file_exists('config.php')) {
	require_once('config.php');
}

set_time_limit(999999999);

// Startup
//require_once('system/startup.php');

// Registry
//$registry = new Registry();

// Config
//$config = new Config();
//$registry->set('config', $config);

// Database 
//$db = new DB(DB_DRIVER, DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
//$registry->set('db', $db);

// Функция для формирования sql-запроса вида, параметры - dbInsert(база данных (string), [...колонки] (массив), [...значения] (массив))
function dbInsert($dbName, $columnsName, $payload) {

    $columnsNameString = implode("`, `", $columnsName);
    $payloadString = implode("', '", $payload);
    $query = "REPLACE INTO " . $dbName . " (`" . $columnsNameString . "`) VALUES ('" . $payloadString . "')";
    return $query;
};

// Значения колонок бд opencart
$oc_attribute = ['attribute_id', 'attribute_group_id', 'sort_order'];
$oc_attribute_description = ['attribute_id', 'language_id', 'name'];

$oc_category = ['category_id', 'parent_id', 'column', 'status'];
$oc_category_description = ['category_id', 'language_id', 'name', 'meta_title'];
$oc_category_description_bak = ['category_id', 'language_id', 'name', 'meta_title'];
$oc_category_pars = ['id', 'id_cat', 'cat_name'];
$oc_category_path = ['category_id', 'path_id', ];
$oc_category_to_layout = ['category_id'];
$oc_category_to_store = ['category_id'];

$oc_product = ['product_id', 'model', 'sku', 'jan', 'quantity', 'stock_status_id', 'image', 'shipping', 'price', 'weight', 'weight_class_id', 'length_class_id', 'minimum', 'sort_order', 'status'];
$oc_product_description = ['product_id', 'language_id', 'name', 'description', 'meta_title'];
$oc_product_to_category = ['product_id','category_id'];
$oc_product_to_layout = ['product_id'];
$oc_product_to_store = ['product_id'];
$oc_product_attribute = ['product_id', 'attribute_id', 'language_id', 'text'];
    
// Для отслеживания наличия атрибутов
$attribute_counter = 1;
$attributes = [];



$pwd = md5('130zav982ziv');
$post = [
    'login' => 'alex@forward.dp.ua',
    'password' => $pwd,
];

// Авторизация по логину и паролю Brain API
$ch = curl_init('http://api.brain.com.ua/auth');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
$response = curl_exec($ch);
curl_close($ch);
$response = json_decode($response, true);

var_dump($response); // Вывод ответа



$SID = $response['result']; // $SID - идентификатор сессии

$ids = ["1037","1038","1040","1097","1103","1107","1108","1112","1120","1164","1180","1182","1190","1191","1192","1193","1194","1204","1205","1206","1207","1208","1213","1217","1227","1235","1261","1263","1264","1265","1269","1272","1275","1278","1285","1287","1293","1333","1359","1360","1363","1365","1366","1367","1368","1369","1377","1382","1390","1391","1396","1401","1403","1405","1406","1418","1432","1434","1441","1442","1443","1471","1555","1556","1558","1562","1563","7266","7273","7326","7328","7331","7332","7379","7381","7403","7404","7405","7407","7502","7503","7505","7506","7507","7509","7682","7683","7743","7744","7790","7814","7852","7882","7900","7901","7902","7906","7908","7925","7926","7928","7937","7938","7939","7940","7942","7946","7947","7967","7982","7986","8136","8170","8171","8172","8177","8220","8230","8327","8344","8359","8361","8363","8364","8365","8396","8397","8408","8414","8415","8462","1440","7904","7827","7819","7821","7822","7823","7824","7829","8366","8367","8369","8370","8371","8372","7837","7838","7844","7845","7846"];

// Для заполнения атрибутов в бд, отслеживания невнесенных и id новых
$attribute_counter = 1;
$attributes = array();

sleep(0.5);

$counter = 0;

foreach($ids as $key => $cat_id) {
    
    $id = $cat_id;
    
    // Забираются товары по категориям с Brain API
    $ch = curl_init('http://api.brain.com.ua/products/' . $id . '/' . $SID);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $responseProducts = curl_exec($ch);
    $responseProducts = json_decode($responseProducts);
    curl_close($ch);
    
    foreach($responseProducts->result->list as $product_key => $product) {
        $ch = curl_init('http://api.brain.com.ua/product/' . $product->productID);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $responseProduct = curl_exec($ch);
        $responseProduct = json_decode($responseProduct);
        curl_close($ch);
        
        var_dump($responseProduct);
        
        $counter++;
    }
};

print_r($counter);