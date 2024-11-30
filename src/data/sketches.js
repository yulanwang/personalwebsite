const sketches = [
    {
      id: 1,
      title: "Blind Portrait of A Friend",
      description: "First thing I drew in my sketchbook, of my lovely friend Dani, who happened to sit next to me in class that day.",
      imageUrl: "/img/sketchbook/blind-portrait.jpeg",
      referenceImage: null, 
    },
    {
      id: 2,
      title: "Cathedral Saint Saveur",
      description: "A front facing view of the Cathedral Saint Saveur in Aix-en-Provence. Drew this with some grandmas who were making collages!",
      imageUrl: "/img/sketchbook/cathedral-aix.jpeg",
      referenceImage: null, 
    },
    {
      id: 3,
      title: "Angel in the Cathedral",
      description: "A slightly spooky angel-doll figure in the Cathedral Saint Saveur.",
      imageUrl: "/img/sketchbook/cathedral-doll.jpeg",
      referenceImage: "/img/sketchbook/cathedral-doll-real.jpeg",
    },
    {
      id: 4,
      title: "A Mysterious Blue Corner",
      description: "A Roman-esque corner in the Cathedral Saint Saveur.",
      imageUrl: "/img/sketchbook/cave.jpeg",
      referenceImage: "/img/sketchbook/cave-real.jpeg",
    },
    {
      id: 5,
      title: "Ring and Bracelet",
      description: "Decided to document a ring and a bracelet I got after exploring the town of Aix alone for the first time.",
      imageUrl: "/img/sketchbook/rings-bracelet.jpeg",
      referenceImage: null, 
    },
    {
      id: 6,
      title: "Cezanne's Mountain",
      description: "Some friends and I hiked a mile up a hill to get to where Cezanne sat to paint his mountain. So we did the same after we got there.",
      imageUrl: "/img/sketchbook/cezanne-mountain1.jpeg",
      referenceImage: "/img/sketchbook/cezanne-mtn-real.jpeg",
    },
    {
      id: 7,
      title: "View from a Seat at the Opera",
      description: "Went to see the most interesting opera I've ever experienced. Left me stunned, in a good and bad way, up for interpretation. Anyway, here is the view.",
      imageUrl: "/img/sketchbook/theatre-du-jeu-de-pomme.jpeg",
      referenceImage: null, 
    },
    {
      id: 8,
      title: "Rousillon",
      description: "Apparently this is the Grand Canyon of France.",
      imageUrl: "/img/sketchbook/rousillon.jpeg",
      referenceImage: null, 
    },
    {
      id: 9,
      title: "Abbaye de Sénanque",
      description: "Unreal. Outside was a beautiful field of lavender. Take me back.",
      imageUrl: "/img/sketchbook/abbaaye-de-senanque.jpeg",
      referenceImage: null, 
    },
    {
      id: 10,
      title: "Calanque d'en Vau",
      description: "I had to hike for five hours with one small water and no food to get to this view. Worth it though!",
      imageUrl: "/img/sketchbook/calanque-d'eu-vau.jpeg",
      referenceImage: null, 
    },
    {
      id: 11,
      title: "La Cité Radieuse",
      description: "Very cool Le Corbusier work. Felt dystopian.",
      imageUrl: "/img/sketchbook/la-cite-radieuse.jpeg",
      referenceImage: "/img/sketchbook/tall-thing-real.jpeg",
    },
    {
        id: 12, 
        title: "First Watercolor Sketch",
        description: "For reference, this is supposed to be the garden outside of our classroom.",
        imageUrl: "/img/sketchbook/first-watercolor.jpeg",
        referenceImage: null, 
    },
    {
      id: 13, 
      title: "Gift Store in Marseille",
      description: "Very cool Le Corbusier work. Felt dystopian.",
      imageUrl: "/img/sketchbook/mistral.jpeg",
      referenceImage: "/img/sketchbook/mistral-real.jpeg",
    },
    {
        id: 14, 
        title: "That One Beach in Marseille...",
        description: "So many afternoons spent here, so many memories.",
        imageUrl: "/img/sketchbook/man-on-rock.jpeg",
        referenceImage: null, 
    },
    {
        id: 15, 
        title: "Beachside Things Pt. 1",
        description: "Some things I saw at that one beach in marseille",
        imageUrl: "/img/sketchbook/beachside-things.jpeg",
        referenceImage: "/img/sketchbook/man-on-rock-real.jpeg",
    },
    {
        id: 16, 
        title: "Nice Day Trip",
        description: "Breakfast at Nice, and a cute building we passed by.",
        imageUrl: "/img/sketchbook/nice.jpeg",
        referenceImage: "/img/sketchbook/nice-real.jpeg",
    },
    {
        id: 17, 
        title: "Rue des Arts",
        description: "Part of a group project. I wanted to represent this street Rue des Arts and how all the neighbors contribute a plant to make this street full of greenery.",
        imageUrl: "/img/sketchbook/rue-des-arts.jpeg",
        referenceImage: null, 
    },
    {
        id: 18, 
        title: "Cathedral Notre Dame of Paris",
        description: "Iconic, what more?",
        imageUrl: "/img/sketchbook/notre-dame.jpeg",
        referenceImage: null, 
    },
    {
        id: 19, 
        title: "Jardin du Luxembourg - A Bush",
        description: "Enjoyed a popsicle while I drew this.",
        imageUrl: "/img/sketchbook/louvre.jpeg",
        referenceImage: "/img/sketchbook/luxemberg-real.jpeg",
    },
    {
        id: 20, 
        title: "Tiger at the Louvre",
        description: "Wanted to work on my line work so I decided I liked the texture of this statue. Also because it just looks silly.",
        imageUrl: "/img/sketchbook/tiger-statue-sketch.jpeg",
        referenceImage: "/img/sketchbook/tiger-statue.jpeg",
    },
    {
        id: 21, 
        title: "Paris Here and There",
        description: "Some more of my four days in paris.",
        pages: [
            "/img/sketchbook/paris.jpeg", 
            "/img/sketchbook/paris-2.jpeg",
        ],
        referenceImage: null, 
    },
    {
        id: 22, 
        title: "Caveau de la Huchette",
        description: "The most magical place on Earth, I'm being serious.",
        imageUrl: "/img/sketchbook/caveaudelahuchette.jpeg",
        referenceImage: "/img/sketchbook/caveau-real.jpeg",
    },
    {
        id: 23, 
        title: "Bourse de Commerce",
        description: "Very cool exhibition and has an interesting history.",
        imageUrl: "/img/sketchbook/bourse-de-commerce-front.jpeg",
        referenceImage: "/img/sketchbook/bourse-de-commerce-real.jpeg",
    },
    {
        id: 24, 
        title: "My Attempt at Architecture",
        description: "This was for an ARCH assignment.",
        imageUrl: "/img/sketchbook/bourse-de-commerce-sketches.jpeg",
        referenceImage: "/img/sketchbook/stairs-at-bourse.jpeg",
    },
    {
        id: 25, 
        title: "Arc de Triomphe",
        description: "I liked the shading I did, used the new grey pens I got.",
        imageUrl: "/img/sketchbook/arc-de-triomphe.jpeg",
        referenceImage: null, 
    },
    {
        id: 26,
        title: "Eiffel Tower, with the Olympic Logo",
        description: "Of course, had to include this.",
        imageUrl: "/img/sketchbook/eiffel.jpeg",
        referenceImage: null, 
    },
    {
        id: 27, 
        title: "Beautiful Marseille",
        description: "Some comic-esque sketches of views from the fortress in Marseille",
        imageUrl: "/img/sketchbook/marseille.jpeg",
        referenceImage: null, 
    },
    {
        id: 28, 
        title: "Story Behind a Random Head in Aix",
        description: "My trial run of being a writer. We went around town to find an interesting head statue, and I picked this one.",
        imageUrl: "/img/sketchbook/head-comic.jpeg",
        referenceImage: null, 
    },
    {
        id: 29, 
        title: "Some Comics I Like",
        description: "Inspiration for my own comic strip.",
        imageUrl: "/img/sketchbook/comicbooks.jpeg",
        referenceImage: null, 
    },
    {
        id: 30, 
        title: "Some More Comics I Like",
        description: "More Inspiration for my own comic strip.",
        imageUrl: "/img/sketchbook/comicbooks2.jpeg",
        referenceImage: null, 
    },
    {
        id: 31, 
        title: "An Architectural Journey of Water in France",
        description: "Final project for the course.",
        pages: [
            "/img/sketchbook/comic1.jpeg",
            "/img/sketchbook/comic2.jpeg",
        ],
        referenceImage: null, 
    },
    {
        id: 32, 
        title: "Hotel de Caumont Centre d'Art",
        description: "Two pieces I enjoyed looking at.",
        imageUrl: "/img/sketchbook/jap-museum.jpeg",
        referenceImage: null, 
    },
    {
        id: 33, 
        title: "Postcard",
        description: "A postcard I came across at the Hotel de Caumont Centre d'Art.",
        imageUrl: "/img/sketchbook/jap-museum2.jpeg",
        referenceImage: null, 
    },
    {
        id: 34, 
        title: "The Streets of Cassis",
        description: "Day trip to Cassis, another one of those unreal Studio Ghibli towns.",
        imageUrl: "/img/sketchbook/cassis.jpeg",
        referenceImage: null, 
    },
    {
        id: 35, 
        title: "On a Boat Near Cassis",
        description: "The clearest, bluest water is in the calanques by Cassis.",
        imageUrl: "/img/sketchbook/boat-ride.jpeg",
        referenceImage: null, 
    },
    {
        id: 36, 
        title: "Foundation de LUMA",
        description: "Some collage sketches I did at the LUMA foundation in Arles. The architect behind the main building is Frank Gehry, who also designed the MIT Computer Science building, lol.",
        imageUrl: "/img/sketchbook/luma.jpeg",
        referenceImage: null, 
    },
    {
        id: 37, 
        title: "Roman Ampitheater at Arles",
        description: "All I remember was that I was overheating sketching this.",
        imageUrl: "/img/sketchbook/arles.jpeg",
        referenceImage: null, 
    },
    {
        id: 38, 
        title: "Dog.",
        description: "I just want to be a French dog lying in the sun. This was for a figures and moving people exercise.",
        imageUrl: "/img/sketchbook/aix-dog.jpeg",
        referenceImage: "/img/sketchbook/dog_real.jpeg"
    },



  ];
  
  export default sketches;
  