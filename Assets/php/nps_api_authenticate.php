<?php
// Get cURL resource
$curl = curl_init();
// Set options
$dataURL = 'https://developer.nps.gov/api/v1/parks?stateCode=me';
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER =--> true,
    CURLOPT_URL => $dataURL,
    CURLOPT_USERAGENT => $_SERVER['HTTP_USER_AGENT'],
    CURLOPT_HTTPHEADER => array('Authorization: AHxYpzNIdier9Velo2UerDKo7wSmswmujiAOecJt')
    ));
?>