<?php session_start(); ?>
<?php

$conn = include '../conexion/conexion.php';
$pagina = $_GET['pagina'];
$informacion = $conn->query("SELECT htmlCodigo,seccion,nombre FROM tiempo_maya.pagina WHERE categoria='" . $pagina . "' order by orden;");
$secciones = $conn->query("SELECT seccion FROM tiempo_maya.pagina WHERE categoria='" . $pagina . "' group by seccion  order by orden;");
$elementos = $conn->query("SELECT nombre FROM tiempo_maya.pagina WHERE categoria='" . $pagina . "' AND nombre!='Informacion' AND seccion!='Informacion' order by orden;");

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Tiempo Maya - <?php echo $pagina ?></title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <?php include "../blocks/bloquesCss.html" ?>
    <link rel="stylesheet" href="../css/ruleta.css">
    <link rel="stylesheet" href="../css/estilo.css?v=<?php echo (rand()); ?>" />
    <link rel="stylesheet" href="../css/paginaModelo.css?v=<?php echo (rand()); ?>" />


</head>
<?php include "../NavBar2.php" ?>

<body>
    <section id="inicio">
        <div id="inicioContainer" class="inicio-container">

            <?php echo "<h1>" . $pagina . " </h1>";
            foreach ($secciones as $seccion) {
                echo " <a href='#" . $seccion['seccion'] . "' class='btn-get-started'>" . $seccion['seccion'] . "</a>";
            }
            ?>
        </div>
    </section>


    <div id="premio">

<table style=" margin: 0 auto;">
    <tr>
        <td>
            <p class="elije">ELIJE TU CORTESIA:</p>
        </td>
        <td><img src="image/cortesia.png" class="imgSorpresa"></td>

    </tr>
    <tr>
        <td>
            <p class="contador">TURNOS: 0</p>
        </td>
    </tr>
</table>

</div>

<div class="vara"></div>
<div>
<img width="50%" height="90%" src="../img/imagen.png" id="ruleta">
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</div>
<div>
<div id="sonido" style="display: none;">
    <iframe src="sonido/ruleta.mp3" id="audio"></iframe>

</div>
</div>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<script src="../js/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<script src="../js/script.js"></script>






</body>

</html>