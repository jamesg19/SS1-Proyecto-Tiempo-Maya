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

                    premio("Ajmak");
                    break;
                case valor > 18 && valor <= 37:

                    premio("No'j");
                    break;
                case valor > 37 && valor <= 55:

                    premio("Tijax");
                    break;
                case valor > 55 && valor <= 73:

                    premio("Kawok");
                    break;
                case valor > 73 && valor <= 91:

                    premio("Ajpu");
                    break;
                case valor > 91 && valor <= 107:

                    premio("Imox");
                    break;
                case valor > 107 && valor <= 123:

                    premio("Iq'");
                    break;
                case valor > 123 && valor <= 141:

                    premio("Ajabal");
                    break;
                case valor > 141 && valor <= 160:

                    premio("K'at");
                    break;
                case valor > 160 && valor <= 178:

                    premio("Kan");
                    break;
                case valor > 178 && valor <= 198:

                    premio("Kame");
                    break;
                case valor > 198 && valor <= 218:

                    premio("Kej");
                    break;
                case valor > 218 && valor <= 237:

                    premio("Qanil");
                    break;
                case valor > 237 && valor <= 255:

                    premio("Taj");
                    break;
                case valor > 255 && valor <= 273:

                    premio("Tz'i");
                    break;

                case valor > 273 && valor <= 291:

                    premio("Batz'");
                    break;

                case valor > 291 && valor <= 308:

                    premio("Ee");
                    break;

                case valor > 308 && valor <= 326:

                    premio("Aj");
                    break;
                case valor > 326 && valor <= 343:

                    premio("Ix");
                    break;
                case valor > 343 && valor <= 360:
                    premio("Tzikin");
                    break;


            }

        }, 5000);

    }
}