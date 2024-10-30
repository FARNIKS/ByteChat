package com.farniks.websocketserver.controller;

import com.farniks.websocketserver.model.Mensaje;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class MensajeController {

    //enviara los mensajes en el websocket
    @MessageMapping("/envio")
    @SendTo("/tema/mensajes")
    public Mensaje envio(Mensaje mensaje){
        return  new Mensaje(mensaje.nombre(), mensaje.contenido());
    }
}
