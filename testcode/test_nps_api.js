var nl = getNewLine()
    
    function getNewLine() {
        var agent = navigator.userAgent
    
        if (agent.indexOf("Win") >= 0)
            return "\r\n"
        else
            if (agent.indexOf("Mac") >= 0)
                return "\r"
    
         return "\r"
    
    }
    
    pagecode = '<?php'+nl+
        '	// Get cURL resource'+nl+
        '	$curl = curl_init();'+nl+
        '	// Set options'+nl+
        '	$state = \'me\';'+nl+
        '	$dataURL = \'https://developer.nps.gov/api/v1/parks?stateCode=\' . $state;'+nl+
        '	curl_setopt_array($curl, array('+nl+
        '		CURLOPT_RETURNTRANSFER => true,'+nl+
        '		CURLOPT_URL => $dataURL,'+nl+
        '		CURLOPT_USERAGENT => $_SERVER[\'HTTP_USER_AGENT\'],'+nl+
        '		CURLOPT_HTTPHEADER => array(\'Authorization: INSERT-API-KEY-HERE\')'+nl+
        '	));'+nl+
        '	// Send the request & save response to $response'+nl+
        '	$response = curl_exec($curl);'+nl+
        '	// Close request to clear up some resources'+nl+
        '	curl_close($curl);'+nl+
        '	$json = json_decode($response);'+nl+
        '	'+nl+
        '	// Output park names'+nl+
        '	$numParks = $json->total;'+nl+
        '	echo "There are " . $numParks . " in " . strtoupper($state) . ".<br />";'+nl+
        '	for ($i = 0; $i < count($json->data); $i++) {'+nl+
        '		echo $json->data[$i]->fullName, "<br />";'+nl+
        '	}'+nl+
        '?>'
    
    document.write(pagecode);