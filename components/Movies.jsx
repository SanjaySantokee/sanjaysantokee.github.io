const movieArrUnsorted = [
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/godfather.132843.mp_480x.progressive.jpg?v=1654286052',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/0b2b67a1de6a06d1ce65e4ccc64047e3_a9f7318e-c5c4-4d2a-aed2-890bbfad883c_480x.progressive.jpg?v=1573590273',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/b892c2f862023362da3e66ec2b92a699_90de31ac-e4ca-476e-8cc0-f634509f364b_480x.progressive.jpg?v=1573585334',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/darkknight.building.24x36_480x.progressive.jpg?v=1648745678',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9c592dee1ac813fcaf8c93557a487557_675ff711-4f45-4a98-95a5-0f97302b2126_480x.progressive.jpg?v=1573618688',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/wolfofwallstreet_480x.progressive.jpg?v=1620229322',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/a1106cc8beb5e35d57cb00026ed250c9_8268f124-b4bc-4e8a-86ec-2d2a148b07b3_480x.progressive.jpg?v=1573651454',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/2dfa6f0fe4b4a397c338a8db995b5539_480x.progressive.jpg?v=1573572643',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ad524bd1959b70ace5023856a777fc43_0f931fa2-25b7-423e-97fa-a8a448e19bec_480x.progressive.jpg?v=1573653957',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/the-lord-of-the-rings-the-two-towers_ej5o8ofs_480x.progressive.jpg?v=1659704557',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pirates-of-the-caribbean-dead-mans-chest_40149d63_480x.progressive.jpg?v=1668798093',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/scan-005_480x.progressive.jpg?v=1625693631',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/KILLBILL.VOL.1.PW_480x.progressive.jpg?v=1574966219',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/inglourious-basterds-style1.24x36_480x.progressive.jpg?v=1615395292',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/spider-man_f999883c_480x.progressive.jpg?v=1624899792',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/fd5af11edf919202ff939b18edd8f252_95a023bc-8e5f-4aa6-9537-25b549f6e93a_480x.progressive.jpg?v=1573594870',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/0a7a9977ed19636bfda256fb6afb21df_eee4198d-ff3a-4137-80b4-07b08e1a8850_480x.progressive.jpg?v=1573593887',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/edbeb65039c72e0138363d8b8d7e5f12_79d814f7-9ff1-437e-b1fa-7749fc6fd0eb_480x.progressive.jpg?v=1573587463',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/241e147345d2f99e0d461a42ebd31d9f_7f30c771-d4ad-465b-957b-d31373f3c90c_480x.progressive.jpg?v=1573591588',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/99763af666ee931302e21c9cad3243ed_48a46774-8baf-4a98-b2bc-9ecf85dbff8b_480x.progressive.jpg?v=1573655133',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/interstellar5_480x.progressive.jpg?v=1585846879',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/top-gun_480x.progressive.jpg?v=1653074766',
  'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/d9f6067d2406a7cfbf42a5fc4ae4cd9d_8174831c-db77-4608-9ae2-44aca8f2a6f5_480x.progressive.jpg?v=1573585461',
];

// eslint-disable-next-line no-unused-vars
function compareRandom(a, b) {
  if (a) { return Math.random() - 0.5; }
  if (b) { return Math.random() - 0.5; }
}

const movieArr = movieArrUnsorted.sort(compareRandom);

const Movies = () => (
  <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
    <div className="w-full relative flex items-center justify-center">
      <div id="outer-slider" className="w-full h-full mx-auto overflow-x-scroll overflow-y-hidden">
        <div
          id="slider"
          className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
        >
          {movieArr.map((movie, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 relative w-full sm:w-auto"
            >
              <img
                src={movie}
                alt="sitting area"
                className="object-cover object-center w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Movies;
