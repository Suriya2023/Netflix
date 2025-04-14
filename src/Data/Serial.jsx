export const SeralData = [
  {
    "id": "1",
    "title": "Jaadu Teri Nazar",
    "description": "He is a Daavansh who holds keys to Daayan’s immortality! She’s Rewavanshi, the chosen one. Meant to be enemies, what happens when they fall in love?",
    "language": "हिंदी",
    "image": {
      "thumbnail": "sources/r1/cms/prod/1135/1743103281135-h",
      "expanded": "sources/r1/cms/prod/8949/1732286618949-i",
      "alt": "Jhanak"
    }
  },
  {
    "id": "2",
    "title": "Laughter Chefs Unlimited Entertainment",
    "description": "Culinary comedy returns! Six celebrity couples showcase their unique dynamics in a kitchen setting and compete for the top prize.",
    "language": "हिंदी",
    "image": {
      "thumbnail": "sources/r1/cms/prod/9500/1740560199500-h",
      "expanded": "sources/r1/cms/prod/8384/1738315988384-i",
      "alt": "Mannat Har khushi paane ki"
    }
  },
  {
    "id": "3",
    "title": "Ghum Hai Kisikey",
    "description": "Tejaswini’s dreamy love story gets a not-so-happy ending. Reluctantly, she embraces her arranged marriage to Neil, but chaos follows as the old flame re-enters.",
    "language": "हिंदी",
    "image": {
      "thumbnail": "sources/r1/cms/prod/2105/1738196472105-h",
      "expanded": "sources/r1/cms/prod/9716/1735201259716-i",
      "alt": "Anupama"
    }
  },
  {
    "id": "4",
    "title": "Anupama",
    "description": "From unfulfilled dreams to changing relationships, Anupama has seen it all! As the family’s guiding light, can she deal with the drama of the new generation?",
    "language": "हिंदी",
    "image": {
      "thumbnail": "sources/r1/cms/prod/9664/1735201199664-h",
      "expanded": "sources/r1/cms/prod/2511/1730829042511-i",
      "alt": "Yeh Rishta"
    }
  },
  {
    "id": "5",
    "title": "Yeh Rishta",
    "description": "Following in her mother’s footsteps, Abhira aspires to be a lawyer. And for Ruhi, love equals everything! What happens when their lives intertwine with Armaan?",
    "language": "हिंदी",
    "image": {
      "thumbnail": "sources/r1/cms/prod/7952/1730828857952-h",
      "expanded": "sources/r1/cms/prod/2150/1738196552150-i",
      "alt": "Ghum Hai Kisikey"
    }
  },
  {
    "id": "6",
    "title": "Mannat Har khushi paane ki",
    "description": "Abandoned and gifted, Mannat becomes a chef, unaware her boss is her mother. Secrets and betrayal test her strength. Will she find her destiny?",
    "language": "हिंदी",
    "image": {
      "thumbnail": "sources/r1/cms/prod/2877/1738315992877-h",
      "expanded": "sources/r1/cms/prod/5371/1740560295371-i",
      "alt": "Laughter Chefs Unlimited Entertainment"
    }
  },
  {
    "id": "7",
    "title": "MTV Roadies",
    "description": "After 19 seasons, Roadies is back! Season 20, Roadies XX, introduces a thrilling new element: betrayal. Expect the unexpected.",
    "language": "हिंदी",
    "image": {
      "thumbnail": "sources/r1/cms/prod/4996/1744464614996-h",
      "expanded": "sources/r1/cms/prod/6268/1743103346268-i",
      "alt": "Jaadu Teri Nazar"
    }
  },
  {
    "id": "8",
    "title": "Jhanak",
    "description": "For Jhanak, dance is the breath of her life! But a tragedy pushes her into a whirlwind of crushed dreams, failures, and a marriage of convenience.",
    "language": "हिंदी",
    "image": {
      "thumbnail": "sources/r1/cms/prod/7624/1732286547624-h",
      "expanded": "sources/r1/cms/prod/9672/1744464679672-i",
      "alt": "MTV Roadies"
    }
  }
];

// Duplicate title ko Unknown karne ka code:
const titles = new Set();
SeralData.forEach(item => {
  if (titles.has(item.title)) {
    item.title = "Unknown";
  } else {
    titles.add(item.title);
  }
});

console.log(SeralData);
