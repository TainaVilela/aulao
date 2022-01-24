var CL = {

    LoadProject: function () {

        CL.App.controller.Index.load();
    },

    App: {

        controller: {
            Index: null,

            cliente: {
                Read: null,
                Create: null,
                Update: null,
            }
        },

        model: {
            Index: null,
            Cliente: null
        }
    },

    Data: {
        Local: {
            /*
			* input JSON object as string object into a local storage
			* @param {string} nome
			* @param {object} obj
			*/
            set: function (nome, obj) {
                var objtxt = JSON.stringify(obj);
                localStorage.setItem(nome, objtxt);
                return true;
            },

            /*
             * get JSON object from a name parameter
             * @param {string} nome
             */
            get: function (nome) {
                var obj = localStorage.getItem(nome);
                return JSON.parse(obj);
            },

            /*
             * clear the specific local storage from a name parameter
             * @param {string} nome
             */
            clear: function (nome) {
                localStorage.removeItem(nome);
            },

            clearAll: function () {
                localStorage.clear();
            }

        },

        Session: {
            /*
			* input JSON object as string object into a session storage
			* @param {string} nome
			* @param {object} obj
			*/
            set: function (nome, obj) {
                var objtxt = JSON.stringify(obj);
                sessionStorage.setItem(nome, objtxt);
                return true;
            },

            /*
             * get JSON object from a name parameter
             * @param {string} nome
             */
            get: function (nome) {
                var obj = sessionStorage.getItem(nome);
                return JSON.parse(obj);
            },

            /*
             * clear the specific session storage from a name parameter
             * @param {string} nome
             */
            clear: function (nome) {
                sessionStorage.removeItem(nome);
            },

            clearAll: function () {
                sessionStorage.clear();
            }

        }
    }

};