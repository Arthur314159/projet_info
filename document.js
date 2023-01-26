display_doc(doc)
    {
        //Pour chaque bloc dans doc
        call (display_bloc(idb));
    }
display_bloc(idb)
    {
        var liste_sb = bloc[idb];
        //Pour chaque sous-bloc dans liste_sb
        call (display_sbloc(idsb));
    }
display_sbloc(idsb)
    {
        var dic_sb_content = sb.idsb; // ou sb[idsb]
        switch (type_sb){
            case texte:
                call (display_texte);
            case titre:
                call (display_titre);
            case QCM_1:
                call(display_QCM_1);
            case QCM_M:
                call (display_QCM_M);
        }


    }
display_texte(texte)
    {
        
    }
display_titre(texte)
    {

    }
display_QCM_1(question,reponse,FB,bonne_reponse)
    {

    }
display_QCM_M(question,reponse,FB,bonne_reponse)
    {

    }