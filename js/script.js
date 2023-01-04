const mobileOption = document.getElementById('mobileoption');
const barButton = document.getElementById('barbutton');
const closeButton = document.getElementById('closebutton');
const body = document.querySelector('body');
const speakerCard = document.querySelector('.speakercard');
const moreButton = document.getElementById('morebutton');
const lessButton = document.getElementById('lessbutton');
const speakerData = [{
  speakerName: 'Abiy ahmed',
  speakerPicture: './images/Abiy_Ahmed.jpeg',
  speakerPictureAlt: 'Abiy ahmed',
  speakerTitle: 'Prime minister of Federal Democratic Republic of Ethiopia',
  speakerExperience: 'Ethiopias current Prime Minister. He is a tech and AI enthusiast, as well as a co-founder of the Ethiopian information security administration.',
},
{
  speakerName: 'Solomon Kassa',
  speakerPicture: './images/solomon_kassa.jpg',
  speakerPictureAlt: 'Solomon Kassa',
  speakerTitle: 'Tech Manager, TV Personality | Founder, 1888EC | Author | PublicSpeaker |',
  speakerExperience: 'experienced in full Systems Development Life Cycle (SDLC), host of a weekly dynamic science and technology TV show, and an author of a science and technology book,',
}, {
  speakerName: 'Getnet Aseffa',
  speakerPicture: './images/getnet_asseffa.jpg',
  speakerPictureAlt: 'Getnet Aseffa',
  speakerTitle: 'Founder and CEO of iCog-Labs',
  speakerExperience: 'A computer scientist, a futurist, and a rational progressive who is enthusiastic about making a breakthrough in the capability of AI systems to think, learn and create and the use of cutting-edge technology to help leapfrog Africa into the future.',
}, {
  speakerName: 'Dr. Joy Buolamwini',
  speakerPicture: './images/Joy_Buolamwini.jpg',
  speakerPictureAlt: 'Dr. Joy Buolamwini',
  speakerTitle: 'Founder Algorithmic Justice League',
  speakerExperience: 'She founded the Algorithmic Justice League to create a world with more equitable and accountable technology. Her MIT thesis methodology uncovered large racial and gender bias in AI services from companies like Microsoft, IBM, and Amazon.',
}, {
  speakerName: 'Sabelo Mhlambi',
  speakerPicture: './images/Sabelo_Mhlambi.jpg',
  speakerPictureAlt: 'Sabelo Mhlambi',
  speakerTitle: 'NLP Machine Learning Engineer + AI-Ethics & Human Rights Researcher',
  speakerExperience: ' computer scientist, researcher and Fellow at Harvard’s Berkman Klein Center for Internet & Society and a Technology and Human Rights Fellow Carr Center for Human Rights Policy, focused on the ethical implications of technology in the developing world.',
}, {
  speakerName: 'Prof.Tommie Meyer',
  speakerPicture: './images/Prof.Tommie_Meyer.jpg',
  speakerPictureAlt: 'Prof.Tommie Meyer',
  speakerTitle: ' Professor in Computer Science and Co-Director: Centre for Artificial Intelligence Research',
  speakerExperience: 'professor in Computer Science at the University of Cape Town (UCT) and Co-Director of the national Centre for Artificial Intelligence Research (CAIR). also, the leader of the Knowledge Representation and Reasoning group at UCT, as well as the Director of the Artificial Intelligence Research Unit (AIRU) –CAIR UCT node.',
}];
// disable popup mopbile menu
mobileOption.style.display = 'none';
// event listener for popup menu bar
barButton.addEventListener('click', () => {
  mobileOption.style.display = 'block';
  body.style.overflow = 'hidden';
});
// add event listener for close button
closeButton.addEventListener('click', () => {
  mobileOption.style.display = 'none';
  body.style.overflow = 'auto';
});
// add event listner mobile option for anywhere click
mobileOption.addEventListener('click', () => {
  mobileOption.style.display = 'none';
  body.style.overflow = 'auto';
});
// check resize on windows to disable mobileoption
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    mobileOption.style.display = 'none';
    body.style.overflow = 'auto';
  }
});

// clone speakercards to six
for (let i = 0; i <= 4; i += 1) {
  const clone = speakerCard.cloneNode(true);
  speakerCard.after(clone);
}

const newSpeakerCards = document.getElementsByClassName('speakercard');
// populate speakers card data
for (let i = 0; i <= 5; i += 1) {
  newSpeakerCards[i].getElementsByClassName('speakerpicture')[0].src = speakerData[i].speakerPicture;
  newSpeakerCards[i].getElementsByClassName('speakerpicture')[0].alt = speakerData[i].speakerPictureAlt;
  newSpeakerCards[i].getElementsByClassName('speakername')[0].innerHTML = speakerData[i].speakerName;
  newSpeakerCards[i].getElementsByClassName('speakertitledetail')[0].innerHTML = speakerData[i].speakerTitle;
  newSpeakerCards[i].getElementsByClassName('speakerexperience')[0].innerHTML = speakerData[i].speakerExperience;
}

// mobile version  more and less button interaction
// on windows resizing

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    moreButton.style.display = 'block';
    lessButton.style.display = 'none';
    for (let i = 2; i <= 5; i += 1) {
      newSpeakerCards[i].style.display = 'none';
    }
    moreButton.addEventListener('click', () => {
      for (let i = 2; i <= 5; i += 1) {
        newSpeakerCards[i].style.display = 'flex';
        moreButton.style.display = 'none';
        lessButton.style.display = 'block';
      }
    });
    lessButton.addEventListener('click', () => {
      for (let i = 2; i <= 5; i += 1) {
        newSpeakerCards[i].style.display = 'none';
        moreButton.style.display = 'block';
        lessButton.style.display = 'none';
      }
    });
  } else {
    moreButton.style.display = 'none';
    lessButton.style.display = 'none';
    for (let i = 2; i <= 5; i += 1) {
      newSpeakerCards[i].style.display = 'flex';
    }
  }
});

// on mobile page loading
if (window.innerWidth < 768) {
  moreButton.style.display = 'block';
  lessButton.style.display = 'none';
  for (let i = 2; i <= 5; i += 1) {
    newSpeakerCards[i].style.display = 'none';
  }
  moreButton.addEventListener('click', () => {
    for (let i = 2; i <= 5; i += 1) {
      newSpeakerCards[i].style.display = 'flex';
      moreButton.style.display = 'none';
      lessButton.style.display = 'block';
    }
  });
  lessButton.addEventListener('click', () => {
    for (let i = 2; i <= 5; i += 1) {
      newSpeakerCards[i].style.display = 'none';
      moreButton.style.display = 'block';
      lessButton.style.display = 'none';
    }
  });
}
