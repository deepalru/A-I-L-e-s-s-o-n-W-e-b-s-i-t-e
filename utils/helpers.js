// Mock data for subjects
const subjects = [
{ id: 'literacy', name: 'Early Literacy', icon: 'fa-abc' },
{ id: 'numbers', name: 'Number Sense', icon: 'fa-123' },
{ id: 'social', name: 'Social Skills', icon: 'fa-people-group' },
{ id: 'motor', name: 'Motor Skills', icon: 'fa-hand' },
{ id: 'sensory', name: 'Sensory Play', icon: 'fa-droplet' },
{ id: 'art', name: 'Arts & Crafts', icon: 'fa-palette' },
{ id: 'music', name: 'Music & Movement', icon: 'fa-music' },
{ id: 'nature', name: 'Nature & Science', icon: 'fa-leaf' }];


// Age groups for nursery school
const grades = [
{ id: 'infant', name: 'Infants (0-1 year)', icon: 'fa-baby' },
{ id: 'toddler', name: 'Toddlers (1-2 years)', icon: 'fa-baby-carriage' },
{ id: 'twos', name: 'Two-Year-Olds', icon: 'fa-child' },
{ id: 'threes', name: 'Three-Year-Olds', icon: 'fa-child-reaching' },
{ id: 'fours', name: 'Four-Year-Olds', icon: 'fa-child-dress' },
{ id: 'preschool', name: 'Pre-K (4-5 years)', icon: 'fa-children' }];


// Lesson durations (shorter for young children)
const durations = [
{ id: '5', name: '5 minutes', icon: 'fa-clock' },
{ id: '10', name: '10 minutes', icon: 'fa-clock' },
{ id: '15', name: '15 minutes', icon: 'fa-clock' },
{ id: '20', name: '20 minutes', icon: 'fa-clock' },
{ id: '30', name: '30 minutes', icon: 'fa-clock' },
{ id: '45', name: '45 minutes', icon: 'fa-clock' }];


// Sample lesson plan templates for nursery school
const lessonTemplates = {
  literacy: {
    infant: {
      title: "Baby Book Exploration",
      objectives: ["Develop visual tracking skills", "Introduce language through simple books", "Strengthen bonding through shared reading"],
      activities: [
      "Teacher shows high-contrast black and white picture cards to infants",
      "Reading simple board books with exaggerated expressions",
      "Singing nursery rhymes with accompanying hand movements"],

      assessment: "Observe infant engagement and response to visual stimuli and voices"
    },
    toddler: {
      title: "Rhyming Fun",
      objectives: ["Recognize simple rhyming sounds", "Develop listening skills", "Increase vocabulary through repetition"],
      activities: [
      "Read rhyming books with predictable patterns",
      "Sing songs with rhyming words and accompanying movements",
      "Use puppets to act out simple rhyming stories"],

      assessment: "Observe children's attempts to participate in rhymes and songs"
    },
    preschool: {
      title: "Letter Recognition Play",
      objectives: ["Recognize and name some letters, especially in own name", "Connect letters to their sounds", "Develop fine motor skills through letter activities"],
      activities: [
      "Letter hunt around the classroom using magnifying glasses",
      "Sensory letter tracing in sand, shaving cream, or playdough",
      "Creating letters with body positions and movements"],

      assessment: "Document which letters children recognize and which they are beginning to write"
    }
  },
  numbers: {
    toddler: {
      title: "Counting with Our Bodies",
      objectives: ["Count from 1-3 verbally", "Use fingers to show numbers", "Connect numbers to physical actions"],
      activities: [
      "Count steps while walking, jumping, or hopping",
      "Sing counting songs with finger plays",
      "Place objects in containers one by one while counting"],

      assessment: "Observe attempts to count objects and use fingers to show numbers"
    },
    threes: {
      title: "Counting Collections",
      objectives: ["Count small groups of objects up to 5", "Begin to recognize number symbols 1-5", "Compare groups using 'more' and 'less'"],
      activities: [
      "Sort and count collections of natural objects (pinecones, stones, shells)",
      "Number hunt with flashlights to find hidden number cards",
      "Make playdough 'cookies' and add correct number of 'sprinkles'"],

      assessment: "Document accuracy when counting small groups and recognition of written numbers"
    },
    preschool: {
      title: "Number Games",
      objectives: ["Count objects accurately up to 10", "Recognize number symbols 1-10", "Begin to understand one-to-one correspondence"],
      activities: [
      "Roll-and-count dice games with manipulatives",
      "Number puzzles with corresponding quantity pictures",
      "Movement activities following numerical instructions"],

      assessment: "Observe accuracy in counting objects and matching them to numerals"
    }
  },
  social: {
    toddler: {
      title: "Taking Turns",
      objectives: ["Practice simple turn-taking", "Use simple words to express needs", "Experience successful social interactions"],
      activities: [
      "Roll a ball back and forth with verbal cues for turns",
      "Share a special toy with teacher facilitation",
      "Simple 'your turn, my turn' activities with visual supports"],

      assessment: "Note children's willingness to take turns and strategies they use in social situations"
    },
    threes: {
      title: "Feelings Friends",
      objectives: ["Identify basic emotions in self and others", "Use words to express feelings", "Demonstrate empathy for peers"],
      activities: [
      "Feelings face matching game with photos and mirrors",
      "Read stories about emotions and discuss characters' feelings",
      "Role-play scenarios involving different emotions"],

      assessment: "Document children's emotional vocabulary and response to others' feelings"
    },
    fours: {
      title: "Friendship Skills",
      objectives: ["Practice cooperative play skills", "Resolve simple conflicts with words", "Build positive relationships with peers"],
      activities: [
      "Collaborative art projects requiring cooperation",
      "Puppet stories modeling conflict resolution",
      "Friendship recipe activity naming important friendship qualities"],

      assessment: "Observe interactions during free play and note strategies used during conflicts"
    }
  },
  sensory: {
    infant: {
      title: "Texture Exploration",
      objectives: ["Explore various textures through touch", "Develop sensory discrimination", "Encourage reaching and grasping"],
      activities: [
      "Supervised tummy time with texture mats and fabrics",
      "Guided hand exploration of sensory bottles and soft toys",
      "Gentle touch experiences with natural materials"],

      assessment: "Document infant responses to different textures and materials"
    },
    twos: {
      title: "Sensory Bins",
      objectives: ["Explore materials using multiple senses", "Develop descriptive vocabulary", "Practice fine motor skills through sensory play"],
      activities: [
      "Rice or bean sensory bin with scoops and containers",
      "Water play with pouring tools and floating objects",
      "Scented playdough with rolling pins and cookie cutters"],

      assessment: "Note vocabulary used during play and comfort level with messy materials"
    },
    fours: {
      title: "Sensory Science",
      objectives: ["Make predictions about sensory properties", "Describe sensory experiences using detailed vocabulary", "Connect sensory exploration to scientific concepts"],
      activities: [
      "Blindfolded guessing games with scents, sounds, and textures",
      "Making and testing oobleck (cornstarch and water mixture)",
      "Comparing and contrasting different sensory materials"],

      assessment: "Document children's predictions, observations, and scientific thinking"
    }
  },
  motor: {
    infant: {
      title: "Baby Moves",
      objectives: ["Strengthen core muscles", "Develop head control and tracking", "Practice reaching and grasping"],
      activities: [
      "Supervised tummy time with interesting visual objects",
      "Gentle assisted stretching during diaper changes",
      "Offering toys at different distances to encourage reaching"],

      assessment: "Document infant's progress in holding head up, rolling, and grasping objects"
    },
    twos: {
      title: "Obstacle Course Fun",
      objectives: ["Practice basic gross motor skills (jumping, climbing, crawling)", "Follow a sequence of movements", "Build confidence in physical abilities"],
      activities: [
      "Simple obstacle course with cushions, tunnels, and stepping stones",
      "Simon Says with basic movements and body part identification",
      "Dance freeze game with different movement instructions"],

      assessment: "Observe coordination, balance, and willingness to try new movements"
    },
    preschool: {
      title: "Fine Motor Workshop",
      objectives: ["Strengthen hand muscles for writing", "Practice correct pencil grip", "Develop hand-eye coordination"],
      activities: [
      "Bead stringing and lacing cards",
      "Playdough manipulation with tools",
      "Pre-writing pattern tracing with correct grasp"],

      assessment: "Note fine motor progress in various activities and proper tool use"
    }
  },
  art: {
    toddler: {
      title: "Sensory Art Exploration",
      objectives: ["Explore different art materials", "Practice grasp and release", "Experience cause and effect"],
      activities: [
      "Finger painting with edible paints",
      "Large paper scribbling with chunky crayons",
      "Sticker art with large, easy-to-grasp stickers"],

      assessment: "Observe exploration of materials and fine motor development"
    },
    threes: {
      title: "Color Mixing Magic",
      objectives: ["Identify primary colors", "Observe color mixing results", "Create intentional designs"],
      activities: [
      "Color mixing with eyedroppers and water",
      "Painting with ice cubes made from colored water",
      "Creating color wheels with finger paints"],

      assessment: "Document color recognition and interest in mixing process"
    }
  },
  music: {
    infant: {
      title: "Baby Beats",
      objectives: ["Respond to different sounds and rhythms", "Develop auditory discrimination", "Strengthen listening skills"],
      activities: [
      "Gentle music play with different instruments near baby",
      "Singing lullabies with varied tones and volumes",
      "Rocking and bouncing baby to different rhythms"],

      assessment: "Note responses to different sounds, rhythms, and tones"
    },
    fours: {
      title: "Rhythm Band",
      objectives: ["Follow simple rhythm patterns", "Create sounds with instruments", "Participate in group music making"],
      activities: [
      "Making simple instruments from recycled materials",
      "Echo clapping and rhythm stick patterns",
      "Moving to music with tempo changes"],

      assessment: "Observe ability to maintain beat and follow musical directions"
    }
  },
  nature: {
    twos: {
      title: "Nature Treasures",
      objectives: ["Observe natural objects", "Use descriptive language", "Sort and classify"],
      activities: [
      "Collecting natural items during outdoor walk",
      "Sorting natural objects by properties (rough/smooth, big/small)",
      "Nature item matching games"],

      assessment: "Document vocabulary used and observation skills"
    },
    preschool: {
      title: "Weather Watchers",
      objectives: ["Observe and track daily weather", "Learn weather vocabulary", "Connect clothing to weather conditions"],
      activities: [
      "Daily weather observation and charting",
      "Weather-related stories and songs",
      "Dramatic play with weather gear"],

      assessment: "Note weather predictions and understanding of different conditions"
    }
  }
};

// Generate a random ID
function generateId() {
  return Math.random().toString(36).substring(2, 15);
}

// Format date for display
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Save lesson to local storage
function saveLesson(lesson) {
  const savedLessons = localStorage.getItem('savedLessons') ?
  JSON.parse(localStorage.getItem('savedLessons')) :
  [];

  const newLesson = {
    id: generateId(),
    ...lesson,
    createdAt: new Date().toISOString()
  };

  savedLessons.push(newLesson);
  localStorage.setItem('savedLessons', JSON.stringify(savedLessons));
  return newLesson;
}

// Get all saved lessons
function getSavedLessons() {
  return localStorage.getItem('savedLessons') ?
  JSON.parse(localStorage.getItem('savedLessons')) :
  [];
}

// Delete a saved lesson
function deleteLesson(id) {
  const savedLessons = getSavedLessons();
  const updatedLessons = savedLessons.filter((lesson) => lesson.id !== id);
  localStorage.setItem('savedLessons', JSON.stringify(updatedLessons));
}

// Generate a lesson plan based on inputs
function generateLessonPlan(subject, grade, duration, topic) {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      // Try to get a template lesson
      let baseLesson = lessonTemplates[subject]?.[grade];

      // If no specific template exists, use a nursery-appropriate generic one
      if (!baseLesson) {
        baseLesson = {
          title: `${topic || getSubjectName(subject)} Activity`,
          objectives: [
          "Engage children in age-appropriate exploration",
          "Develop fine or gross motor skills through play",
          "Encourage social interaction and language development"],

          activities: [
          "Circle time introduction with songs and visual aids",
          "Teacher-guided demonstration with simple, clear language",
          "Hands-on exploration with appropriate materials",
          "Free play and discovery with teacher support"],

          assessment: "Observation of children's engagement, participation, and developmental progress"
        };
      }

      // If topic is provided, customize the lesson
      if (topic) {
        baseLesson = {
          ...baseLesson,
          title: topic
        };
      }

      // Add more sections based on duration
      const longLesson = parseInt(duration) >= 20;

      if (longLesson) {
        baseLesson.materials = [
        "Age-appropriate learning manipulatives",
        "Colorful picture books and visual aids",
        "Sensory materials (playdough, water, sand, etc.)",
        "Arts and crafts supplies"];


        baseLesson.extensions = [
        "Additional sensory exploration ideas",
        "Outdoor activities on the same theme",
        "Ways to involve parents/caregivers at home",
        "Adaptations for different developmental levels"];

        // Add recommended videos for longer lessons (shorter, nursery-appropriate)
        baseLesson.recommendedVideos = [
        { title: "Nursery Songs for Circle Time", length: "2:30", url: "https://youtu.edu/example1" },
        { title: "Simple Fingerplays for Young Children", length: "3:15", url: "https://youtu.edu/example2" },
        { title: "Storytelling with Puppets", length: "4:10", url: "https://youtu.edu/example3" }];


        // Add simple vocabulary terms appropriate for young children
        baseLesson.vocabulary = [
        { term: "Simple Word 1", definition: "Child-friendly explanation with picture reference" },
        { term: "Simple Word 2", definition: "Easy definition related to their everyday experience" },
        { term: "Action Word", definition: "Word that describes movement or activity children can demonstrate" },
        { term: "Feeling Word", definition: "Emotion word with facial expression description" },
        { term: "Object Word", definition: "Name of a concrete object children can see and touch" }];

        // Add teacher support questions appropriate for early childhood education
        if (!baseLesson.questions) {
          baseLesson.questions = [
          {
            "question": "How can I adapt this activity for children with different attention spans?",
            "answer": "For children with shorter attention spans, break the activity into smaller segments, incorporate more movement opportunities, use more animated expressions and voices, and be prepared to shift to a different aspect of the activity if engagement wanes. Visual timers can help children understand the duration of activities."
          },
          {
            "question": "What are the developmental benefits of this activity for young children?",
            "answer": "This activity supports fine motor development, language acquisition, sensory processing, social skills through turn-taking and sharing, emotional regulation, and early cognitive concepts. Children also practice listening skills and following simple directions."
          },
          {
            "question": "How can I create an inclusive environment for all children during this activity?",
            "answer": "Ensure materials are accessible for all developmental levels, use simple clear language paired with visual cues, allow for multiple ways to participate, validate all attempts at engagement, position yourself at children's eye level, and create a supportive atmosphere where mistakes are viewed as learning opportunities."
          }];
        }
      }

      // Return the generated lesson
      resolve({
        id: generateId(),
        subject,
        grade,
        duration,
        topic: topic || baseLesson.title,
        content: baseLesson,
        createdAt: new Date().toISOString()
      });
    }, 1500); // 1.5 second delay to simulate generation
  });
}

// Helper function to get the display name of a subject by ID
function getSubjectName(id) {
  const subject = subjects.find((s) => s.id === id);
  return subject ? subject.name : 'Subject';
}

// Helper function to get the display name of a grade by ID
function getGradeName(id) {
  const grade = grades.find((g) => g.id === id);
  return grade ? grade.name : 'Grade';
}

// Helper function to get the display name of a duration by ID
function getDurationName(id) {
  const duration = durations.find((d) => d.id === id);
  return duration ? duration.name : 'Duration';
}