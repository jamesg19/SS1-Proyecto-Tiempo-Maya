
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Tiempo Maya - RULETA de Mayas</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <?php include "blocks/bloquesCss.html" ?>
    <link rel="stylesheet" href="../css/ruleta.css">
    <link rel="stylesheet" href="css/estilo.css?v=<?php echo (rand()); ?>" />
    <link rel="stylesheet" href="css/calculadora.css?v=<?php echo (rand()); ?>" />
</head>

<body>
    
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
        <img width="50%" height="50%" src="../img/imagen.png" id="ruleta">
    </div>
    <div>
        <div id="sonido" style="display: none;">
            <iframe src="sonido/ruleta.mp3" id="audio"></iframe>

        </div>
    </div>
    <script src="../js/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="../js/script.js"></script>
</body>

</html>