<?php
    // Message Vars
    $msg = '';
    $msgClass = '';

    // Check for submit
    if(filter_has_var(INPUT_POST, 'submit')){
        // Get form data

        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $cellphone = htmlspecialchars($_POST['cellphone']);
        $message = htmlspecialchars($_POST['message']);
        $subject = htmlspecialchars($_POST['subject']);

        // Check required fields 
        if(!empty($email) && !empty($name) && !empty($message)){
            // Passed
            // Check Email
            if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
                // Failed
                $msg = 'Por favor escribe un email válido';
                $msgClass = 'failed';
            } else {
                // Passed
                $toEmail = 'lucaspalmadev@gmail.com';
                $body = '<h4>Subject </h4><p>'.$subject.'</p>
                <h4>Name </h4><p>'.$name.'</p>
                <h4>Email </h4><p>'.$email.'</p>
                <h4>Cellphone </h4><p>'.$cellphone.'</p>
                <h4>Message </h4><p>'.$message.'</p>';

                // Email headers
                $headers = "MIME-Version: 1.0" ."\r\n";
                $headers .= "Content-Type:text/html;charset=UTF-8" ."\r\n";

                // Additional headers
                $headers .= "From: " . $name. "<" .$email. ">". "\r\n";

                if(mail($toEmail, $subject, $body, $headers)){
                    // Email sent
                    $msg = 'Tu email ha sido enviado';
                    $msgClass = 'success';
                } else {
                    $msg = 'Tu email no pudo ser enviado';
                    $msgClass = 'failed';
                }
            }
        } else {
            // Failed
            $msg = 'Porfavor completa todos los campos';
            $msgClass = 'failed';
        }

} 

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lucas Palma | Desarrollador Web</title>
    <!--custom css links-->
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
</head>
<body>

    <!--header design-->
    <header>
        <a href="#" class="logo">Cod<span>e</span>r.</a>

        <ul class="navlist">
            <li><a href="#home" class="active">inicio</a></li>
            <li><a href="#about">sobre mí</a></li>
            <li><a href="#services">servicios</a></li>
            <li><a href="#portfolio">portafolio</a></li>
            <li><a href="#contact">contactame</a></li>
        </ul>

        <div class="bx bx-menu" id="menu-icon">

        </div>
    </header>
    
    <!--home section design-->
    <section class="home" id="home">
        <div class="home-text">
            <div class="slide">
                <span class="one">Hola</span>
                <span class="two">Soy</span>
            </div>
            <h1>Lucas Palma</h1>
            <h3>Desarrollador <span>Web</span></h3>
            <p>Desarrollo sitios web personalizados para negocios <br>
            que buscan crecer en internet.</p>
            <div class="button">
                <a href="#" class="btn">Decí Hola</a>
                <a href="#" class="btn2"><span><i class='bx bx-play'></i></span>Mirá mi trabajo</a>
            </div>
        </div>
    </section>

    <!--about section design-->
    <section class="about" id="about">
        
        <!--1st column-->
        <div class="about-img">
            <img src="img/DSC_0267.png" alt="A picture of myself looking at the horizon">
        </div>
        
        <!--2nd column-->
        <div class="about-text">
            <h2>Sobre <span>mí</span></h2>
            <h4>Creativo Desarrollador Web</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus mauris et erat dapibus vehicula. Vestibulum vitae rutrum ante, nec scelerisque sem. Nam sit amet tellus vitae erat tempor consequat at non quam. Curabitur ac bibendum justo. Phasellus porta dictum fringilla. Integer pretium id ligula id ultricies. Suspendisse in nunc erat. Phasellus gravida iaculis dolor. Curabitur quis mollis nunc. Maecenas eu nunc nulla. Phasellus fermentum tellus sed nunc facilisis elementum vel a quam.</p>
            <a href="#" class="btn">Más Info</a>
        </div>
    </section>
    
    <!--service section design-->
    <section class="services" id="services">
        <div class="main-text">
            <p>En que soy experto</p>
            <h2><span>Mis</span> servicios</h2>
        </div>

        <div class="services-content">
            <div class="box">
                <div class="s-icons">
                    <i class='bx bx-mobile-alt'></i>
                </div>
                <h3>Diseño Web</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" class="read">Lee más</a>
            </div>

            <div class="box">
                <div class="s-icons">
                    <i class='bx bx-code-alt' ></i>
                </div>
                <h3>Disarrollo Web</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" class="read">Lee más</a>
            </div>

            <div class="box">
                <div class="s-icons">
                    <i class='bx bxs-edit'></i>
                </div>
                <h3>Diseño Creativo</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" class="read">Lee más</a>
            </div>
        </div>

    </section>

    <!--portfolio section design-->
    <section class="portfolio" id="portfolio">
        <div class="main-text">
            <p>Portafolio</p>
            <h2><span>Últimos</span> proyectos</h2>
        </div>

        <div class="portfolio-content">
            <div class="row">
                <img src="img/pueblo_serrano2.jpg" alt="Foto portada de Pueblo Serrano donde se pueden ver diferentes quesos y fiambres">
                <div class="layer">
                    <h5>Pueblo Serrano</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="https://pueblo-serrano.webflow.io/" target="_blank"><i class='bx bx-link-external'></i></a>
                </div>
            </div>
            <div class="row">
                <img src="img/pueblo_serrano2.jpg" alt="Foto portada de Pueblo Serrano donde se pueden ver diferentes quesos y fiambres">
                <div class="layer">
                    <h5>Pueblo Serrano</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="https://pueblo-serrano.webflow.io/" target="_blank"><i class='bx bx-link-external'></i></a>
                </div>
            </div><div class="row">
                <img src="img/pueblo_serrano2.jpg" alt="Foto portada de Pueblo Serrano donde se pueden ver diferentes quesos y fiambres">
                <div class="layer">
                    <h5>Pueblo Serrano</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="https://pueblo-serrano.webflow.io/" target="_blank"><i class='bx bx-link-external'></i></a>
                </div>
            </div>
        </div>
    </section>

    <!--contact section design-->
    <section class="contact" id="contact">
        <div class="contact-text">
            <h2>Contactame<span>!</span></h2>
            <h4>Si tienes algun proyecto en mente</h4>
            <p>Soy un desarrollador web - creando facinantes sitios web para negocios que quieren crecer en internet</p>
            <div class="list">
                <li><a href="#">+54 9 351-2335182</a></li>
                <li><a href="#">lucaspalmadev@gmail.com</a></li>
                <li><a href="#">whatever</a></li>
            </div>
            <div class="contact-icons">
                <a href="#"><i class='bx bxl-whatsapp' ></i></a>
                <a href="#"><i class='bx bxl-linkedin' ></i></a>
                <a href="#"><i class='bx bxl-instagram' ></i></a>
            </div>
        </div>

        <div class="contact-form">
            <?php if($msg != ''): ?>
                <div class="<?php echo $msgClass; ?>" ><?php echo $msg; ?></div>
            <?php endif; ?>
            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
                <input type="text" name="name" placeholder="Nombre y apellido" value="<?php echo isset($_POST['name']) ? $name : ''; ?>" >
                <input type="text" name="email" placeholder="Email" value="<?php echo isset($_POST['email']) ? $email : ''; ?>" >
                <input type="" name="cellphone" placeholder="Número de celular" value="<?php echo isset($_POST['cellphone']) ? $cellphone : ''; ?>">
                <input type="" name="subject" placeholder="Asunto" value="<?php echo isset($_POST['subject']) ? $subject : ''; ?>" >
                <textarea name="message" id="textarea" cols="35" rows="10" placeholder="¿Como puedo ayudarte?"><?php echo isset($_POST['message']) ? $message : ''; ?></textarea>
                <input type="submit" name="submit" value="Enviar mensaje" class="submit" >
            </form>
        </div>
    </section>

    <!--footer section design-->
    <section class="footer">
        <div class="last-text">
            <p>Copyright whatever</p>
        </div>

        <div class="top">
            <a href="#home"><i class='bx bx-up-arrow-alt' ></i></a>
        </div>
    </section>

    <!--custom js link-->
    <script type="text/javascript" src="script.js"></script>

</body>
</html>