const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
giros = 0;

function girar() {
    if (giros < 50) {
        let rand = Math.random() * 7200;
        calcular(rand);
        giros++;
        var sonido = document.querySelector('#audio');
        sonido.setAttribute('src', '../js/ruleta.mp3');
        //document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;
    } else {
        Swal.fire({
            icon: 'success',
            title: 'a',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar',
            allowOutsideClick: false
        }).then((result) => {
            if (result.value == true) {
                giros = 0;
                document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ';
                //document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;
            }
        })
    }


    function premio(premios, desc, ruta) {

        document.querySelector('.elije').innerHTML = 'EL NAHUAL ES: ' + premios;
        document.getElementById('imagenNahual').src = ruta + "";
        document.querySelector('.descripccionNahual').innerHTML = desc;

    }


    function calcular(rand) {

        valor = rand / 360;
        valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
        ruleta.style.transform = "rotate(" + rand + "deg)";
        var descrip = "";
        const ruta = "";

        setTimeout(() => {
            switch (true) {
                case valor > 0 && valor <= 18:
                    descrip = "Es el Nawal de todas las faltas, es el día de los abuelos que ya no están (difuntos). Es el día para pedir perdón por las faltas. Personas valientes y de sangre dulce que  fácilmente caen en culpas.";
                    //ruta = "src/imagenesNahuales/16.jpg";
                    premio("Ajmak", descrip, "src/imagenesNahuales/16.jpg");
                    break;
                case valor > 18 && valor <= 37:
                    descrip = "Significa idea, sabiduría. Es el Nawal de la inteligencia, día dedicado a pedir la sabiduría, el talento, el buen pensamiento. Es el Nawal del temblor o sismo. Personas muy creativas e imaginativas.";
                    //ruta = "src/imagenesNahuales/17.jpg";
                    premio("No'j", descrip, "src/imagenesNahuales/16.jpg");
                    break;
                case valor > 37 && valor <= 55:
                    descrip = "Nawal de la muerte repentina y los sufrimientos. Día propicio para curanderos y autoridades,  para cortar males y enfermedades. Personas confrontativas que cortan toda clase de males y problemas.";
                    //ruta = "src/imagenesNahuales/18.jpg";
                    premio("Tijax", descrip, "src/imagenesNahuales/18.jpg");
                    break;
                case valor > 55 && valor <= 73:
                    descrip = "Es el Nawal de toda clase de pleitos, es el día de la mujer,  día para curar enfermedades. Nawal de la piedra de cuarzo y de las semillas de Tz´ité. Personas creativas, defensoras de la mujer.";
                    //ruta = "src/imagenesNahuales/19.jpg";
                    premio("Kawok", descrip, "src/imagenesNahuales/19.jpg");
                    break;
                case valor > 73 && valor <= 91:
                    descrip = "Es el Nawal de sol, día para pedir sabiduría, talento y fortaleza física. Nawal de las flores, la  música, el deporte,  los cazadores y la agricultura. Personas líderes, selectivas, buscan primero su beneficio.";
                    //ruta = "src/imagenesNahuales/20.jpg";
                    premio("Ajpu", descrip, "src/imagenesNahuales/20.jpg");
                    break;
                case valor > 91 && valor <= 107:
                    descrip = "Es el Nawal del mar, ríos y lagos, día para sanar enfermedades de la mente, para agradecer y pedir la lluvia, enfermedades de la mente. El Nawal de todos los lugares donde está el agua. No es el concepto de locura que conocemos comúnmente,  es la capacidad de sentir lo que otros no sienten, por eso dicen que  hablan locuras.";
                    //ruta = "src/imagenesNahuales/1.jpg";
                    premio("Imox", descrip, "src/imagenesNahuales/1.jpg");
                    break;
                case valor > 107 && valor <= 123:
                    descrip = "Es el Nawal del aire y la luna, del espíritu del ser humano. Día para alejar energías malas y enfermedades. Es el viento que limpia nuestra casa y nuestro cuerpo. Personas nobles que se involucran en los problemas de otros fácilmente. Van y vienen de un lugar a otro, como el viento.";
                    //ruta = "src/imagenesNahuales/2.jpg";
                    premio("Iq'", descrip, "src/imagenesNahuales/2.jpg");
                    break;
                case valor > 123 && valor <= 141:
                    descrip = "Es el Nawal del aire y la luna, del espíritu del ser humano. Día para alejar energías malas y enfermedades. Es el viento que limpia nuestra casa y nuestro cuerpo. Personas nobles que se involucran en los problemas de otros fácilmente. Van y vienen de un lugar a otro, como el viento.";
                    //ruta = "src/imagenesNahuales/2.jpg";
                    premio("Ajabal", descrip, "src/imagenesNahuales/2.jpg");
                    break;
                case valor > 141 && valor <= 160:
                    descrip = "Es el Nawal de las cárceles visibles e invisibles. Es guardador. Representa la red donde se guarda el  maíz y donde se atrapan los peces. Día para pedir por los que están presos, para enredar y desenredar las cosas. Personas con mucho fuego en su ser.  Manejan energías positivas y negativas";
                    //ruta = "src/imagenesNahuales/4.jpg";
                    premio("K'at", descrip, "src/imagenesNahuales/4.jpg");
                    break;
                case valor > 160 && valor <= 178:
                    descrip = "Es el Nawal de la creación del hombre y la mujer. Es el dueño de todas las cosas materiales.  Día para pedir solución a toda clase de problemas y necesidades. Personas con un alto sentido de la lealtad.";
                    //ruta = "src/imagenesNahuales/5.jpg";
                    premio("Kan", descrip, "src/imagenesNahuales/5.jpg");
                    break;
                case valor > 178 && valor <= 198:
                    descrip = "Es el Nawal de toda clase de muertes, día para pedir que se aleje la muerte. Se pide el descanso y  paz de un moribundo. La Muerte no es mala,  es el complemento de la vida, el descanso. Es el día para retirar energías negativas en las personas. Personas con habilidad para las artes y oficios.";
                    //ruta = "src/imagenesNahuales/6.jpg";
                    premio("Kame", descrip, "src/imagenesNahuales/6.jpg");
                    break;
                case valor > 198 && valor <= 218:
                    descrip = "Es el nawal de toda clase de animales cuadrúpedos. Día para pedir fuerza para cargar con nuestras penas. Nawal de las cuatro esquinas del mundo. Día de los Ajqíjab´ o sacerdotes mayas. Personas líderes, dominantes con su pareja, les gusta la fama.";
                    //ruta = "src/imagenesNahuales/7.jpg";
                    premio("Kej", descrip, "src/imagenesNahuales/7.jpg");
                    break;
                case valor > 218 && valor <= 237:
                    descrip = "Significa semilla, simiente,  conejo. El planeta Venus. Es el Nawal de toda clase de semillas animales y vegetales. Día de la fertilidad y las cosechas,  propicio para iniciar cualquier siembra o negocio. Significa los cuatro colores del maíz,  rojo, negro, blanco y amarillo. Personas de mano ¨caliente¨ a quienes todo lo que siembran les florece.";
                    //ruta = "src/imagenesNahuales/8.jpg";
                    premio("Qanil", descrip, "src/imagenesNahuales/8.jpg");
                    break;
                case valor > 237 && valor <= 255:
                    descrip = "Es el Nawal de los cuatro señores del fuego,  Tojil, Awilix, Jakawitz´ y  Nikajtakaj. Día propicio para nivelar o pagar cualquier deuda. Día en que se agradece todo lo que recibimos en nuestra vida,  lo bueno y lo malo. Personas con mucha sensibilidad para las artes y que lloran con";
                    //ruta = "src/imagenesNahuales/9.jpg";
                    premio("Taj", descrip, "src/imagenesNahuales/9.jpg");
                    break;
                case valor > 255 && valor <= 273:
                    descrip = "Es el Nawal de la justicia, la autoridad material y espiritual, el orden. Día para pedir la solución a los problemas ante los tribunales. Día para  alejar los vicios. Son las personas que hablan por otros.  Los dueños de las leyes. Juzgan a los demás.";
                    //ruta = "src/imagenesNahuales/10.jpg";
                    premio("Tz'i", descrip, "src/imagenesNahuales/10.jpg");
                    break;

                case valor > 273 && valor <= 291:
                    descrip = "Es el Nawal de todas las artes, de los tejidos, de los artistas. Es un día propicio para pedir pareja, amarrar o desatar cualquier asunto. Son maestros de todas las artes.";
                    //ruta = "src/imagenesNahuales/11.jpg";
                    premio("Batz'", descrip, "src/imagenesNahuales/11.jpg");
                    break;

                case valor > 291 && valor <= 308:
                    descrip = "Es el Nawal de todos los caminos y dirigentes. Del sistema nervioso y sanguíneo. Día propicio para iniciar cualquier viaje o negocio. Son líderes naturales.";
                    //ruta = "src/imagenesNahuales/12.jpg";
                    premio("Ee", descrip, "src/imagenesNahuales/12.jpg");
                    break;

                case valor > 308 && valor <= 326:
                    descrip = "Es el Nawal de la casa y de los niños, día propicio para el hogar y la salud de los niños. Nawal de las generaciones tiernas. Personas que no pueden negarse ante otros.";
                    //ruta = "src/imagenesNahuales/13.jpg";
                    premio("Aj", descrip, "src/imagenesNahuales/13.jpg");
                    break;
                case valor > 326 && valor <= 343:
                    descrip = "Es el Nawal de la naturaleza y los altares mayas, día para pedir fortaleza física y mental. Es el Nawal de las siete vergüenzas humanas: orgullo, ambición, envidia, mentira, crimen, ingratitud, ignorancia por pereza. Personas de razonamiento interno a las que les gusta la naturaleza y la soledad.";
                    //ruta = "src/imagenesNahuales/14.jpg";
                    premio("Ix", descrip, "src/imagenesNahuales/14.jpg");
                    break;
                case valor > 343 && valor <= 360:
                    descrip = "Es el Nawal del bienestar económico, la buena fortuna, día propicio para agradecer y pedir el bienestar económico. Es la comunicación e intermediación entre Uk´ux Kaj y Uk´ux Ulew, el corazón del cielo y el corazón de la tierra. Personas que construyen su propio bienestar.";
                    //ruta = "src/imagenesNahuales/15.jpg";
                    premio("Tzikin", descrip, "src/imagenesNahuales/15.jpg");
                    break;


            }

        }, 5000);

    }
}