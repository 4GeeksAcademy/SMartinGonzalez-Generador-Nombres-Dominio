let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dom = ['.com', '.net', '.us', '.io'];

for(let i = 0; i < pronoun.length; i++){
    for(let u = 0; u <adj.length; u++){
        for(let o = 0; o < noun.length;o++){
            for(let p = 0; p < dom.length;p++){
                console.log(pronoun[i] + adj[u] + noun[o] + dom[p]);
            }
        }
    }
}

