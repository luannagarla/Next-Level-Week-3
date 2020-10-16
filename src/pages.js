const orphanages = require('./database/fakedata.js');

module.exports = {
    
    index(request, response){
        //const city = request.query.city //red = precisa ser colocada na barra ou enviar em algum lugar (formulário)
        return response.render('index')
    },

    orphanage(request, response){
        return response.render('orphanage')
    },

    orphanages(request, response){
        return response.render('orphanages', { orphanages })        
    },

    createOrphanage(request, response){
        return response.render('create-orphanage')
    }


}