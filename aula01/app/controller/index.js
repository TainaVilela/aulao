CL.App.controller.Index = {

    load: function () {

        $('#btn-home').off('click').on('click', function () {
            CL.App.controller.Index.events.btnHome();
        });


        $('#btn-cliente').off('click').on('click', function () {
            CL.App.controller.Index.events.btnCliente();
        });

    },

    events: {

        btnHome: function () {
            alert('clique do botao home');
        },

        btnCliente: function () {
            alert('clique do botao cliente');
        }


    },

    responses: {


    }

};