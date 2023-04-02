const gameArrUnsorted = [
  'https://raw.githubusercontent.com/luisDanielRoviraContreras/img/master/2.png',
  '/games/mc.png',
  '/games/arkham.png',
  '/games/bf2.png',
  '/games/bowser.png',
  '/games/halo.png',
  '/games/link.png',
  '/games/mk.png',
  '/games/pop.png',
  '/games/re.png',
  '/games/wfc.png',
  '/games/witcher.png',
];

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

const gameArr = gameArrUnsorted.sort(compareRandom);

const Games = () => (

  <div className="content">
    <div className="con-cards">
      {
        gameArr.map((game) => (
          <div className="card">
            <div className="con-img">
              <img src={game} alt="" />
              <img className="blur" src={game}
                alt=""
              />
            </div>
          </div>
        ))
      }
    </div>
  </div>
);

export default Games;
