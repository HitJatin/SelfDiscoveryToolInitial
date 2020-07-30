$(document).ready(function() {
    $.ajax({
        url: "https://ix61k6qun9.execute-api.ap-southeast-1.amazonaws.com/prod/lifetoolsdataset?category=Baselines"
    }).then(function(data) {
        console.log(data);
        file_source=data;
        $("#quality").text(file_source[0].Property);
        $("#Quality_desc").text(file_source[0].Meaning);
    });
});