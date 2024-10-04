import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Books.css';

function Books() {
  const { bookName } = useParams();

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!bookName) {
    return <div>Book name is not specified.</div>;
  }

  const books = {
    ramayana: {
      title: 'Ramayana',
      description: `
        The Ramayana is one of the two major Sanskrit epics of ancient Indian literature, the other being the Mahabharata. 
        Traditionally attributed to the sage Valmiki, the Ramayana narrates the life of Prince Rama, his wife Sita, 
        and his loyal companion Hanuman. The narrative encompasses themes of duty, dharma (righteousness), loyalty, 
        and the ideals of familial love. The Ramayana consists of seven Kandas (books) and a total of 24,000 verses. 
        It begins with the birth of Rama in Ayodhya to King Dasharatha and Queen Kausalya. Rama is the embodiment of 
        virtue and dharma, and as the eldest son, he is the rightful heir to the throne. However, due to the machinations 
        of his stepmother Kaikeyi, Rama is exiled to the forest for fourteen years.
        
        During his exile, Rama is accompanied by Sita and his devoted brother Lakshmana. Their time in the forest is 
        marked by encounters with sages, demons, and various creatures, illustrating the challenges of adhering to 
        dharma amidst adversity. Sita is eventually abducted by the demon king Ravana, which sets off a monumental 
        quest to rescue her. Rama's journey takes him to various realms, including alliances with powerful beings like 
        Hanuman, the monkey god, and the vanaras (monkeys). Hanuman's unwavering devotion and bravery play a crucial 
        role in the battle against Ravana, culminating in the epic war of Lanka. The Ramayana concludes with Rama's 
        victorious return to Ayodhya, where he is crowned king. However, the narrative also explores the complexities 
        of love, duty, and sacrifice, as seen through Sita's trials and the challenges of being a king.
      `,
      imageUrl: 'https://i.pinimg.com/564x/66/dd/c4/66ddc40d895208649668f74df692de0e.jpg',
      link: 'https://www.sacred-texts.com/hin/rama/index.htm',
    },
    mahabharata: {
      title: 'Mahabharata',
      description: `
        The Mahabharata is one of the longest epic poems in the world and is considered the most significant text in 
        Hinduism. It narrates the epic narrative of the Kurukshetra War and the fates of the Kaurava and Pandava princes. 
        Composed by the sage Vyasa, the Mahabharata is not only a story of war but also explores profound philosophical 
        and ethical questions. The epic is divided into eighteen parvas (books) and contains around 100,000 shlokas (verses). 
        The central narrative focuses on the rivalry between two groups of cousins: the Pandavas and the Kauravas. 
        The Pandavas, led by Yudhishthira, are the rightful heirs to the throne of Hastinapura, while the Kauravas, 
        led by Duryodhana, are determined to seize power.

        The story begins with the childhood of the princes, their education under the great teacher Drona, and the 
        events leading to their eventual conflict. The tension escalates over issues of honor, loyalty, and the quest 
        for power, culminating in the catastrophic war at Kurukshetra. The Mahabharata is rich with subplots, character 
        development, and moral dilemmas. Key figures include Arjuna, the great archer; Krishna, who serves as Arjuna's 
        charioteer and divine guide; and Bhishma, the revered elder of the Kuru dynasty. The Bhagavad Gita, a philosophical 
        discourse between Krishna and Arjuna, is a part of this epic and discusses the moral complexities of war, duty, 
        and righteousness. The Mahabharata also addresses themes such as the nature of dharma (duty), the impact of 
        greed and desire, and the consequences of one's actions. After the war, the Pandavas emerge victorious, but at 
        a tremendous cost, leading to reflections on the futility of war and the value of peace.
      `,
      imageUrl: 'https://i.pinimg.com/originals/36/54/8a/36548aafb3376b8f90dc4476ae4c2abb.jpg',
      link: 'https://www.sacred-texts.com/hin/maha/index.htm',
    },
    bhagavata: {
      title: 'Bhagavata Purana',
      description: `
        The Bhagavata Purana, also known as the Bhagavatam, is one of the eighteen Mahāpurāṇas of Hinduism. 
        It primarily focuses on the life and teachings of Lord Krishna, detailing his divine exploits and the 
        philosophical underpinnings of devotion (Bhakti) to God. Composed in Sanskrit, the Bhagavata Purana comprises 
        twelve books (Cantos), with over eighteen thousand verses. It emphasizes the importance of Bhakti as the 
        highest path to liberation and explores various aspects of devotion and spirituality.

        The text begins with the story of Lord Vishnu, who incarnates as Krishna to restore dharma and protect 
        his devotees. The early chapters narrate the miraculous events surrounding Krishna's birth and childhood, 
        including his playful antics as a child, his divine powers, and his relationships with his family and friends. 
        Central to the Bhagavata Purana is the concept of Krishna as the ultimate reality, embodying love, compassion, 
        and playfulness. The text contains profound philosophical discussions about the nature of the universe, 
        the soul, and the relationship between God and devotees. The later chapters focus on Krishna's adulthood, 
        particularly his role in the Mahabharata and his divine interventions during the great war. The Bhagavata 
        Purana also includes stories of his devotees, emphasizing the transformative power of love and devotion. 
        One of the most celebrated episodes in the Bhagavata Purana is the Ras Leela, which depicts the divine love 
        between Krishna and the gopis (cowherd girls), illustrating the deep emotional bond between the devotee 
        and the divine.
      `,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81X4xxXVuzL.jpg',
      link: 'https://www.sacred-texts.com/hin/sbh/index.htm',
    },
  };

  const selectedBook = books[bookName.toLowerCase()];

  if (!selectedBook) {
    return <div>Book not found.</div>;
  }

  return (
    <div className="book-container">
      <h1 className="book-title">{selectedBook.title}</h1>
      <img src={selectedBook.imageUrl} alt={selectedBook.title} className="book-image" />
      <p className="book-description">{selectedBook.description}</p>
      <a href={selectedBook.link} className="book-link" target="_blank" rel="noopener noreferrer">
        Read {selectedBook.title} Online
      </a>
    </div>
  );
}

export default Books;
