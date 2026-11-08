import React from "react";
import VideoVigilanciaDetalle from "../servicios/VideoVigilanciaDetalle";

/**
 * Ruta legada /video-vigilancia.
 *
 * Se mantiene el archivo por compatibilidad con el enrutador, pero ahora
 * muestra el mismo diseño de detalle de servicio que /servicios/1.
 */
const VideoVigilancia: React.FC = () => <VideoVigilanciaDetalle />;

export default VideoVigilancia;
