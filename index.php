<?php
/**
 * Created by PhpStorm.
 * User: Fernando Cárdenas
 * Date: 2/4/2019
 * Time: 5:09 AM
 */
$url = $_SERVER['REQUEST_URI'];
?>
<!DOCTYPE HTML>
<html lang="es-MX">
<head>
    <!--=============== basic  ===============-->
    <meta charset="UTF-8">
    <title>Gorilas Online - <?= 'Inicio' ?></title>
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="robots" content="index, follow"/>
    <meta name="keywords" content=""/>
    <meta name="description" content=""/>
    <?php include('components/styles.php'); ?>
    <link rel="shortcut icon" href="assets/images/favicon.ico">
</head>
<body>
<div class="loader">
    <div class="tm-loader">
        <div id="circle"></div>
    </div>
</div>
<div id="main">
    <?php include('components/header.php'); ?>
    <div id="wrapper">
        <div class="content-holder elem scale-bg2">
            <div class="dynamic-title">Inicio</div>
            <div class="nav-overlay"></div>
            <div class="nav-inner isDown">
                <?php include('components/navigator.php'); ?>
            </div>
            <?php
            /**
             * @var STRING $url
             * NO router NO life
             */
            switch ($url) {
                case '/' :
                    include('views/index.php');
                    break;
                case '' :
                    include('views/index.php');
                    break;
                case '/servicios' :
                    include('views/services.php');
                    break;
                case '/contacto' :
                    include('views/contact.php');
                    break;
                case '/portafolio' :
                    include('views/portfolio.php');
                    break;
                case '/portafolio/enmedioasociados' :
                    include('views/portfolio/enmedioasociados.php');
                    break;
                default:
                    include('/views/404.php');
                    break;
            } ?>
            <?php include('components/share.php'); ?>
        </div>
    </div>
</div>
<?php
include('components/footer.php');
include('components/scripts.php');
?>
</body>
</html>