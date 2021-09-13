class Answers{
    constructor(hero,heroine,song,movie){
        this.hero = hero
        this.heroine = heroine
        this.song = song
        this.movie = movie
        this.answers = []
        this.localdb = []
        this.getAnswers()
    }

    async getAnswers(){
        var answers = []
        await db.collection("Answers")
        .where('a_id' ,'==', qid)
        .onSnapshot((snapshot)=>{
            answers = snapshot.docs.map((doc) => doc.data())
            
            this.localdb = answers
            this.answers = this.localdb[0]
            this.checkAnswers()
        })
    }
    
    checkAnswers(){
        var heroname = this.hero.toUpperCase().trim()
        heroname = heroname.replace(/\s/g, '')
        heroname = heroname.slice(0,5)
    
        var dbHero = this.answers.hero.toUpperCase().trim()
        dbHero = dbHero.replace(/\s/g, '')
        dbHero= dbHero.slice(0,5)

        if(dbHero===heroname){
            form2.hero.hide();    
            form2.hero.value('')
            answerFlag += 1
        }

        var heroinename = this.heroine.toUpperCase().trim()
        heroinename = heroinename.replace(/\s/g, '')
        heroinename = heroinename.slice(0,6)
    
        var dbHeroine = this.answers.heroine.toUpperCase().trim()
        dbHeroine = dbHeroine.replace(/\s/g, '')
        dbHeroine= dbHeroine.slice(0,6)

        if(dbHeroine===heroinename){
            form2.heroine.hide();    
            form2.heroine.value('')
            answerFlag += 1
        }


        var songname = this.song.toUpperCase().trim()
        songname = songname.replace(/\s/g, '')
        songname = songname.slice(0,7)
    
        var dbsong = this.answers.song.toUpperCase().trim()
        dbsong = dbsong.replace(/\s/g, '')
        dbsong= dbsong.slice(0,7)

        if(dbsong===songname){
            form2.song.hide();    
            form2.song.value('')
            answerFlag += 1
        }


        var moviename = this.movie.toUpperCase().trim()
        moviename = moviename.replace(/\s/g, '')
        moviename = moviename.slice(0,10)
    
        var dbmovie = this.answers.movie.toUpperCase().trim()
        dbmovie = dbmovie.replace(/\s/g, '')
        dbmovie= dbmovie.slice(0,10)

        if(dbmovie===moviename){
            form2.movie.hide();    
            form2.movie.value('')
            answerFlag += 1
        }

    }
}