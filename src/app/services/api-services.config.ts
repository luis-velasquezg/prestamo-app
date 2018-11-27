// Lista de direcciones de servicios del Back-End
export const ApiService: any = {
    API_URL_LISTAR_DISPOSITIVOS : "http://localhost:8080/prestamoapi/dispositivos/getAllDispositivos/",
    API_URL_LISTAR_SOLICITUDES : "http://localhost:8080/prestamoapi/solicitudes/getAllSolicitudes/",
    API_URL_LISTAR_SOLICITUDES_ACTIVAS : "http://localhost:8080/prestamoapi/solicitudes/getSolicitudesActivas/",
    API_URL_CREATE_SOLICITUD: "http://localhost:8080/prestamoapi/solicitudes/create/",
    API_URL_INSERT_DISPOSITIVO: "http://localhost:8080/prestamoapi/dispositivos/create/",
    API_URL_GET_DISPOSITIVO:"http://localhost:8080/prestamoapi/dispositivo/getByCodigo/",
    API_URL_GET_SOLICITUD:"http://localhost:8080/prestamoapi/solicitudes/getByCodigo/",
    API_URL_CREATE_USUARIO: "http://localhost:8080/prestamoapi/usuarios/create/",
    API_URL_GET_USUARIO:"http://localhost:8080/prestamoapi/usuarios/getById/",
}