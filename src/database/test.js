const dataBase = require('./db');
const saveOrphanage = require('./saveOrphanage');

dataBase.then(async db => {
    //inserir dados na tabela

    await saveOrphanage(db, {
        lat: '-27.222633',
        lng: '-49.6655874',
        name: 'Lar de Amor',
        about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
        whatsapp: '30028922',
        images: [
            "https://images.unsplash.com/photo-1590033821368-7f7f469b1561?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1581701391032-33cb5e7b44fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
        opening_hours: 'Horários de visitas Das 8h até 18h',
        open_on_weekends: '1'
      
    })

    //consultar dados
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente um pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    //apagar dados
    //await db.run('DELETE FROM orphanages where id = "1"')    
})

