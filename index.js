class Music {
    constructor(name, avtor, type, year, bywhom, time, id) {
      this.name = name;
      this.avtor = avtor;
      this.type = type;
      this.year = year;
      this.bywhom = bywhom;
      this.time = time;
      this.id = id;
    }
  }
  
  function createMusic() {
    const rotate = [];
    let p = +prompt('Son kiriting')
    for (let i = 0; i < p; i++) {
      const music = new Music(
        `Song ${i+1}`,
        `Artist ${i+1}`,
        `Genre ${i+1}`,
        2021,
        `Composer ${i+1}`,
        `${i+1}:30`,
        i+1
      );
      
      rotate.push(music);
    }
    
    return rotate;
  }
  alert('Console ga o`ting! Malumot shu yerda')
  
  const rotate = createMusic();
  console.log(rotate);

//   function s() {
//     return `
//             <p></p>
//             <p></p>
//             <p></p>
//             <p></p>
//             <p></p>
//             <p></p>
//             <p></p>
//     `
//   }