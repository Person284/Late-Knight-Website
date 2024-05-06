let query;

document.getElementById("submitButton").addEventListener('click', loadText)

function loadText(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'test.json', true);

    xhr.onload = function(){
        if(this.status == 200){
            var result = JSON.parse(this.responseText);

            var output = '';

            for(var entry of result){
                output += '<tr><td>' + entry.season +'</td>' +
                '<td>'+ entry.episode +'</td>'+
                '<td>'+ entry.releasedate +'</td>'+
                '<td>'+ entry.host +'</td>'+
                '<td>'+ entry.musicalguest +'</td>'+
                '<td>'+ entry.description +'</td>'+
                '<td><a href='+ entry.link +'>youtube</a></td></tr>';
            }

            document.getElementById('tableBody').innerHTML = output;
        }
    }

    xhr.send();

    query = document.getElementById("searchvids").value;
    console.log(query)
}