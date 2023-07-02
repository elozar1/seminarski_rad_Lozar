export function randomColor() {
  var crvena = Math.floor(Math.random() * 256);
  var zelena = Math.floor(Math.random() * 256);
  var plava = Math.floor(Math.random() * 256);
  return "rgb(" + crvena + ", " + zelena + ", " + plava + ")";
}

export function randomName() {
  const prvoDio = [
    "dobar",
    "loš",
    "zao",
    "brz",
    "spor",
    "sitan",
    "dinamitan",
    "jak",
    "slab",
    "zlatan",
    "srebren",
    "brončan",
    "drven",
    "mlitav",
    "spretan",
    "mlak",
    "vruć",
  ];

  const drugiDio = [
    "Ivica",
    "Robi",
    "Adrijan",
    "Ivan",
    "Silvio",
    "Marko",
    "Borjan",
    "Filip",
    "Petar",
    "Zvonko",
    "Stipe",
    "Ante",
    "Dean",
  ];
  const pridjev = prvoDio[Math.floor(Math.random() * prvoDio.length)];
  const ime = drugiDio[Math.floor(Math.random() * drugiDio.length)];
  return pridjev + " " + ime;
}
