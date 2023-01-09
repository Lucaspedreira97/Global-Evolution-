import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Divider } from "@mui/material";
import img from "../../assets/hifive.png";
//import CheckIcon from "@mui/icons-material/Check";

export default function MediaCard() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          md={2}
        />
        <img
          src={img}
          alt="img"
          style={{ width: 290, objectFit: "cover", margin: 50 }}
        />
        <Grid>
          <Typography gutterBottom variant="h3" component="div">
            Hi-Five!
          </Typography>
          <Typography variant="h5" color="text.secondary" maxWidth={800}>
            Toda la información de tus pólizas en un solo lugar y con la
            practicidad de realizar las denuncias de un siniestro de forma fácil
            y rápida.
          </Typography>
          <ul>
            <li>
              <Typography variant="h6" color="text.secondary" maxWidth={800}>
                Cargar y consultar siniestros en tiempo real mediante un codigo
                QR
              </Typography>
            </li>
            <li>
              <Typography variant="h6" color="text.secondary" maxWidth={800}>
                Descargar la Tarjeta Vehicular y el Certificado Mercosur.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" color="text.secondary" maxWidth={800}>
                Geolocalización
              </Typography>
            </li>
            <li>
              <Typography variant="h6" color="text.secondary" maxWidth={800}>
                Contacto directo con tu aseguradora o productor
              </Typography>
            </li>
            <li>
              <Typography variant="h6" color="text.secondary" maxWidth={800}>
                Consultar y descargar tus pólizas.
              </Typography>
            </li>
            <li>
              <Typography variant="h6" color="text.secondary" maxWidth={800}>
                Acceder a nuestros sitios web y redes sociales.
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      {/* <Divider sx={{margin:0}}/> */}
    </div>
  );
}
