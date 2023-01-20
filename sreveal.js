/*Importada la llibreria = ScrollReveal*/

/**********************/
/*****U LIKE PAAAA*****/
/**********************/

window.sr = ScrollReveal();

    /*Index*/

    sr.reveal('.apartats_base_foto', {              /*But no em funciona amb 'apartats_base' solament ???!*/
        duration: 2900,
        origin: 'bottom',
        distance: '-200px',
        reset: false
    });

    sr.reveal('.apartats_base_text', {
        duration: 2800,
        origin: 'bottom',
        distance: '-200px',
        reset: false
    });

    sr.reveal('.apartats_base_75_nove', {           /*Junta amb .apartats_novetats*/
        duration: 2500,
        origin: 'right',
        distance: '-200px',
        reset: false
    });

    /*Index (objectes)*/                                                                                                                

    sr.reveal('.apartats_objectes_parti_1', {           
        duration: 3500,
        origin: 'bottom',
        distance: '-300px',
        reset: false
    });

    sr.reveal('.apartats_objectes_parti_2', {           
        duration: 3500,
        origin: 'left',
        distance: '-100px',
        reset: false         
    });

    sr.reveal('.apartats_objectes_parti_3', {           
        duration: 3500,
        origin: 'right',
        distance: '-100px',
        reset: false        
    });

    sr.reveal('.apartats_objectes_parti_4', {           
        duration: 3500,
        origin: 'bottom',
        distance: '-300px',
        reset: false
    });

    /*Novetats*/

    sr.reveal('.apartat_novetats', {
        duration: 2500,
        origin: 'rigth',
        distance: '-100px',
        reset: false
    });

    sr.reveal('.text_novetats75p_editjs_h1', {
        duration: 2800,
        origin: 'left',
        distance: '400px',
        reset: false
    });

    sr.reveal('.text_novetats75p_editjs_p1', {
        duration: 3300,
        origin: 'left',
        distance: '400px',
        reset: false
    });

    sr.reveal('.text_novetats75p_editjs_p2', {
        duration: 3800,
        origin: 'left',
        distance: '400px',
        reset: false
    });