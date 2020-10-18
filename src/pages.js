const dataBase = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {
    
    index(request, response){
        //const city = request.query.city //red = precisa ser colocada na barra ou enviar em algum lugar (formulário)
        return response.render('index')
    },

    async orphanage(request, response){
        const id = request.query.id
        try {
            const db = await dataBase;
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            const orphanage = results[0]
            
            orphanage.images = orphanage.images.split(",")
            orphanage.firstImage = orphanage.images[0]
            if(orphanage.open_on_weekends == "0" ){
                orphanage.open_on_weekends = false
            } else{
                orphanage.open_on_weekends = true
            }
            
            return response.render('orphanage', {orphanage})
        } catch (error) {
            console.log(error)
            return response.send('Erro no banco de dados')
        }
    },

    async orphanages(request, response){
        try{
            const db = await dataBase;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return response.render('orphanages', { orphanages })      
        } catch{
            console.log(error)
            return response.send('Erro no banco de dados')
        }          
    },

    createOrphanage(request, response){
        return response.render('create-orphanage')
    }


}