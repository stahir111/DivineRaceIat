// Divine Race IAT: race (face photos) x God/Devil (words).
// Built on Project Implicit's Qualtrics IAT template (quiat9.js), the same one the standard race IAT uses.
// HOW TO EDIT A WORD: change only the text inside the quotes, e.g. {word: 'Satan'} -> {word: 'NewWord'}.
// Keep every quote mark, curly brace { }, square bracket [ ] and comma exactly as it is.
//
// Scoring note: "compatible" = category1 with attribute1 (Black people + Devil / White people + God).
// So a POSITIVE D score means a stronger White-God (and Black-Devil) association.

define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

    return iatExtension({

        // ---------- RACE: Black people (face photos) ----------
        category1 : {
            name : 'Black people',
            title : {
                media : {word : 'Black people'},
                css : {color:'#31940F','font-size':'1.8em'},
                height : 4
            },
            stimulusMedia : [
                {image: 'bm1_nc.jpg'},
                {image: 'bm2_nc.jpg'},
                {image: 'bm3_nc.jpg'},
                {image: 'bf1_nc.jpg'},
                {image: 'bf2_nc.jpg'},
                {image: 'bf3_nc.jpg'}
            ],
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },

        // ---------- RACE: White people (face photos) ----------
        category2 : {
            name : 'White people',
            title : {
                media : {word : 'White people'},
                css : {color:'#31940F','font-size':'1.8em'},
                height : 4
            },
            stimulusMedia : [
                {image: 'wm1_nc.jpg'},
                {image: 'wm2_nc.jpg'},
                {image: 'wm3_nc.jpg'},
                {image: 'wf1_nc.jpg'},
                {image: 'wf2_nc.jpg'},
                {image: 'wf3_nc.jpg'}
            ],
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },

        // ---------- DEVIL words ----------
        attribute1 : {
            name : 'Devil',
            title : {
                media : {word : 'Devil'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4
            },
            stimulusMedia : [
                {word: 'Bezelbub'},
                {word: 'Lucifer'},
                {word: 'Satan'},
                {word: 'Demon'},
                {word: 'Sin'},
                {word: 'Unrighteousness'},
                {word: 'Hell'}
            ],
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },

        // ---------- GOD words ----------
        attribute2 : {
            name : 'God',
            title : {
                media : {word : 'God'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4
            },
            stimulusMedia : [
                {word: 'Omnipotent'},
                {word: 'Omniscient'},
                {word: 'Omnipresence'},
                {word: 'Savior'},
                {word: 'Supreme'},
                {word: 'Almighty'},
                {word: 'Holy spirit'}
            ],
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },

        // Where the face photos live (Project Implicit's public image folder).
        base_url : {
            image : 'https://baranan.github.io/minno-tasks/images/'
        }

        // Block lengths are left at the template defaults (20 / 40 trials),
        // which match the trial checks in GodIAT.rmd.
    });
});
