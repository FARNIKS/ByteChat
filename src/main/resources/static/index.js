let stompCliente = null;

const onConnectSocket = ()=>{
    stompCliente.subscribe('/tema/mensajes',(mensaje)=>{
        mostrarMensaje(mensaje.body);
    });
};

const onWebSocketClose =()=>{
    if(stompCliente!== null){
        stompCliente.desactivate();
    }
};

const conectarWS = ()=>{
    onWebSocketClose();
    stompCliente = new StompJs.Client({
        webSocketFactory:()=> new WebSocket("ws://localhost:8080/websocket")
    })
    stompCliente.onConnect= onConnectSocket;
    stompCliente.onWebSocketClose = onWebSocketClose;
    stompCliente.activate();
};

const enviarMensaje=()=>{
    let txtNombre=document.getElementById('txtNombre');
    let txtMensaje=document.getElementById('txtMensaje');

    if (txtNombre.value.trim() === '' && txtMensaje.value.trim() === '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Los campos nombre y mensaje deben estar completos",
        });
    }else if (txtNombre.value.trim() === '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Debe colocar el nombre de usuario",
        });
    }else if (txtMensaje.value.trim() === '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Debe llenar el campo mensaje",
        });
    }else{
        stompCliente.publish({
            destination:'/app/envio',
            body: JSON.stringify({
                nombre: txtNombre.value,
                contenido: txtMensaje.value
            })
        });
    }  
};

const mostrarMensaje=(mensaje)=>{
    const body = JSON.parse(mensaje);
    const ULMensajes = document.getElementById('ULMensajes');

    const mensajeLI= document.createElement('li');
    mensajeLI.classList.add('list-group-item');
    mensajeLI.innerHTML=`<strong>${body.nombre}</strong>: ${body.contenido}`;;
    ULMensajes.appendChild(mensajeLI);
};

document.addEventListener('DOMContentLoaded',()=>{
    const btnEnviar = document.getElementById('btnEnviar');
    btnEnviar.addEventListener('click',(e)=>{
        e.preventDefault();
        enviarMensaje();
        txtMensaje.value = '';
    })
    conectarWS();
});

