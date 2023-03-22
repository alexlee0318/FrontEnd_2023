
        let txt='the grown-ups response, this time, was to advise me to lay aside my drawings of boa constrictors, whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, and grammar. That is why, at the, age of six, I gave up what might have been a magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves,and it is tiresome for children to be always and forever explaining things to the.'
        newtxt = txt.replace(/[,.'"-]/g, '');
        console.log(newtxt);

        let Str = newtxt.replace(/[]/g, '소');
        console.log(Str);

        let wordsArray = Str.split(' ');
        console.log(wordsArray);

//     function wordCount() {
//             let count = 0;
//             for(let word of words)
//                 if (word == 'the'? count++)
//                     count = count++;
//         }
//         console.log(count)