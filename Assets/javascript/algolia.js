// CONFIGURE ALGOLIA---------------------------------------------------------------------------------------
// initialize the Algolia client
var client = algoliasearch(applicationID, apiKey);
// provide the client to the helper factory
var helper = algoliasearchHelper(client, indexName); 

// listen to the results coming from Algolia
helper.on('result', function(content) {
    // display the JSON response in the page
    renderHits(content);
});
  





// // example code of how to pull data from the JSON response (in this case, BestBuy products)
// function renderHits(content) {
//     $('#container').html(JSON.stringify(content, null, 2));
// }

// var applicationID = 'latency';
// var apiKey = '04fe08d12c90e98f7e8cfd4e6f903a2c';
// var indexName = 'bestbuy';

// helper.search();

// helper.on('result', function(content) {
//     renderHits(content);
// });
    
// function renderHits(content) {
//     $('#container').html(JSON.stringify(content, null, 2));
// }

// function renderHits(content) {
//     $('#container').html(function() {
//         return $.map(content.hits, function(hit) {
//             return '<li>' + hit.name + '</li>';
//         });
//     });
// }