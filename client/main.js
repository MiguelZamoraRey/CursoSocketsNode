const urlSocket= 'http://10.10.73.44:6677';

//aqui es donde ponemos el socket a nuestro cliente
// le pasamos la direccio de nuestro socket
var socket = io.connect(urlSocket,{'forceNew':true});

socket.on('messages', (data)=>{
    render(data);
});

function render(data){
    var html = data.map((message,index)=>{
        return(`
            <div class="message">
                <strong>${message.nickname}</strong> says:
                <p>${message.text}</p>
            </div>
        `)
    }).join(' ');

    var div_msg = document.getElementById('messages');
    div_msg.innerHTML = html;
    div_msg.scrollTop = div_msg.scrollHeight;
}

function addMessage(event){
    var message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };
    document.getElementById('nickname').style.display='none';
    socket.emit('add-message', message);
    return false;
}

