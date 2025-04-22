function LessonDisplay({ lesson, onSave }) {
  const [isSaved, setIsSaved] = React.useState(false);
  const [isCopied, setIsCopied] = React.useState(false);
  const [showResourceModal, setShowResourceModal] = React.useState(false);
  const [expandedActivity, setExpandedActivity] = React.useState(null);
  const lessonRef = React.useRef(null);

  // Function to get default teacher knowledge questions if none provided
  const getDefaultQuestions = () => {
    return [
    {
      question: "How can I adapt this activity for children with different developmental levels?",
      answer: "Early childhood classrooms often have children at varying developmental stages, even within the same age group. To adapt this activity:\n\n• For children who need more support: Simplify instructions, provide visual cues, offer hand-over-hand assistance, and break tasks into smaller steps.\n\n• For advanced learners: Add complexity to tasks, encourage leadership roles like demonstrating to peers, introduce additional vocabulary, and extend the activity with more challenging questions.",
      teachingTips: [
      "Use a buddy system where more advanced children can help peers",
      "Prepare both simpler and more complex materials to use as needed",
      "Observe each child's engagement level and adjust your approach"]

    },
    {
      question: "What are the specific developmental benefits of this activity for young children?",
      answer: "This activity supports multiple areas of development that are critical during early childhood:\n\n• Cognitive: Enhances problem-solving skills, encourages critical thinking, and develops concept understanding.\n\n• Language: Builds vocabulary, promotes communication skills, and practices verbal expression.\n\n• Social-Emotional: Fosters cooperation, develops emotional literacy, and builds confidence.\n\n• Physical: Strengthens fine or gross motor skills depending on the activity components.",
      teachingTips: [
      "Point out these benefits to parents in newsletters or documentation",
      "Take photos to document developmental progress",
      "Use specific praise that highlights the skills being developed"]

    },
    {
      question: "How can I manage behavior and keep young children engaged throughout the activity?",
      answer: "Young children have limited attention spans, so successful behavior management requires thoughtful planning:\n\n• Engagement Strategies: Use animated expressions, incorporate movement, employ songs or rhymes, and ask open-ended questions to maintain interest.\n\n• Environment Setup: Create clear boundaries for the activity space, remove distractions, ensure comfortable seating, and have all materials organized and easily accessible.\n\n• Transitions: Give warnings before transitions, use visual timers, incorporate movement between sitting activities, and have a clear routine that children can anticipate.",
      teachingTips: [
      "Keep the pace moving - young children need frequent changes",
      "Have additional materials ready for children who finish quickly",
      "Use positive reinforcement to acknowledge appropriate behavior"]

    }];

  };

  // Generate relevant images based on the subject and topic
  const getRelevantImages = () => {
    const imagesBySubject = {
      math: [
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1635372722656-389f87a941db?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"],

      science: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"],

      english: [
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510442447389-30a3f54e1911?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"],

      history: [
      "https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566128606739-a2f46650c2ed?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"],

      geography: [
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589519160142-7d1a51b4d628?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"],

      art: [
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"],

      music: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514119412350-e174d90d280e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"],

      pe: [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526676037777-05a232554d77?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"]

    };

    // Default to math if subject not found
    return imagesBySubject[lesson.subject] || imagesBySubject.math;
  };

  // Generate YouTube video suggestions based on the subject and topic
  const getYouTubeVideos = () => {
    // Map for nursery/early childhood appropriate videos
    const videosBySubject = {
      literacy: [
      { title: "Phonics Song with Two Words", url: "https://www.youtube.com/watch?v=BELlZKpi1Zs", thumbnail: "https://img.youtube.com/vi/BELlZKpi1Zs/hqdefault.jpg", duration: "3:45", ageRange: "2-5 years" },
      { title: "Letter Sounds | Fun Learning Video for Children", url: "https://www.youtube.com/watch?v=neQhbh4aqNM", thumbnail: "https://img.youtube.com/vi/neQhbh4aqNM/hqdefault.jpg", duration: "2:30", ageRange: "1-4 years" },
      { title: "Alphabet Adventure | Early Reading Skills", url: "https://www.youtube.com/watch?v=Np6NJAxSJv4", thumbnail: "https://img.youtube.com/vi/Np6NJAxSJv4/hqdefault.jpg", duration: "4:15", ageRange: "3-5 years" }],

      numbers: [
      { title: "Counting 1 to 10 | Number Songs for Toddlers", url: "https://www.youtube.com/watch?v=DR-cfDsHCGA", thumbnail: "https://img.youtube.com/vi/DR-cfDsHCGA/hqdefault.jpg", duration: "3:10", ageRange: "1-3 years" },
      { title: "Simple Addition for Preschoolers", url: "https://www.youtube.com/watch?v=AzhLTRCE9i4", thumbnail: "https://img.youtube.com/vi/AzhLTRCE9i4/hqdefault.jpg", duration: "4:00", ageRange: "3-5 years" },
      { title: "Number Recognition Games for Early Learners", url: "https://www.youtube.com/watch?v=V_lEFu0MLSY", thumbnail: "https://img.youtube.com/vi/V_lEFu0MLSY/hqdefault.jpg", duration: "5:25", ageRange: "2-4 years" }],

      social: [
      { title: "Sharing is Caring | Social Skills for Toddlers", url: "https://www.youtube.com/watch?v=ddvTFgzkS5I", thumbnail: "https://img.youtube.com/vi/ddvTFgzkS5I/hqdefault.jpg", duration: "3:15", ageRange: "1-4 years" },
      { title: "Making Friends at Preschool", url: "https://www.youtube.com/watch?v=mZAHDUc-J-A", thumbnail: "https://img.youtube.com/vi/mZAHDUc-J-A/hqdefault.jpg", duration: "2:45", ageRange: "2-5 years" },
      { title: "Feelings and Emotions Song for Children", url: "https://www.youtube.com/watch?v=utZr0dPu5sk", thumbnail: "https://img.youtube.com/vi/utZr0dPu5sk/hqdefault.jpg", duration: "4:10", ageRange: "2-4 years" }],

      motor: [
      { title: "Toddler Exercise and Movement Activities", url: "https://www.youtube.com/watch?v=3_oIssULEk0", thumbnail: "https://img.youtube.com/vi/3_oIssULEk0/hqdefault.jpg", duration: "5:30", ageRange: "1-3 years" },
      { title: "Fine Motor Skills Development", url: "https://www.youtube.com/watch?v=VfUyqhj5CcI", thumbnail: "https://img.youtube.com/vi/VfUyqhj5CcI/hqdefault.jpg", duration: "4:15", ageRange: "2-4 years" },
      { title: "Fun Gross Motor Games for Preschoolers", url: "https://www.youtube.com/watch?v=5if4EUMh1aQ", thumbnail: "https://img.youtube.com/vi/5if4EUMh1aQ/hqdefault.jpg", duration: "3:50", ageRange: "3-5 years" }],

      sensory: [
      { title: "Safe Sensory Play Ideas for Infants", url: "https://www.youtube.com/watch?v=rZ-3V99rkOE", thumbnail: "https://img.youtube.com/vi/rZ-3V99rkOE/hqdefault.jpg", duration: "4:20", ageRange: "0-1 year" },
      { title: "Sensory Bins for Toddlers", url: "https://www.youtube.com/watch?v=YQ_T1X6FzEA", thumbnail: "https://img.youtube.com/vi/YQ_T1X6FzEA/hqdefault.jpg", duration: "6:15", ageRange: "1-3 years" },
      { title: "Texture Exploration for Early Learners", url: "https://www.youtube.com/watch?v=JLzfCCsmET4", thumbnail: "https://img.youtube.com/vi/JLzfCCsmET4/hqdefault.jpg", duration: "3:45", ageRange: "2-4 years" }],

      art: [
      { title: "First Art Projects for Toddlers", url: "https://www.youtube.com/watch?v=IQYJ6it_DI0", thumbnail: "https://img.youtube.com/vi/IQYJ6it_DI0/hqdefault.jpg", duration: "5:10", ageRange: "1-3 years" },
      { title: "Finger Painting for Nursery Kids", url: "https://www.youtube.com/watch?v=r1mBPucdnmQ", thumbnail: "https://img.youtube.com/vi/r1mBPucdnmQ/hqdefault.jpg", duration: "3:25", ageRange: "2-4 years" },
      { title: "Creative Art Ideas for Preschoolers", url: "https://www.youtube.com/watch?v=7a8tAZL-KGI", thumbnail: "https://img.youtube.com/vi/7a8tAZL-KGI/hqdefault.jpg", duration: "4:50", ageRange: "3-5 years" }],

      music: [
      { title: "Baby Music and Movement", url: "https://www.youtube.com/watch?v=71hqRT9U0wg", thumbnail: "https://img.youtube.com/vi/71hqRT9U0wg/hqdefault.jpg", duration: "4:30", ageRange: "0-1 year" },
      { title: "Simple Musical Instruments for Toddlers", url: "https://www.youtube.com/watch?v=UVSjy0rPvpk", thumbnail: "https://img.youtube.com/vi/UVSjy0rPvpk/hqdefault.jpg", duration: "3:40", ageRange: "1-3 years" },
      { title: "Preschool Song and Dance Activities", url: "https://www.youtube.com/watch?v=71hqRT9U0wg", thumbnail: "https://img.youtube.com/vi/71hqRT9U0wg/hqdefault.jpg", duration: "5:15", ageRange: "3-5 years" }],

      nature: [
      { title: "Nature Exploration for Young Children", url: "https://www.youtube.com/watch?v=XmIYvFIMfXA", thumbnail: "https://img.youtube.com/vi/XmIYvFIMfXA/hqdefault.jpg", duration: "4:20", ageRange: "2-5 years" },
      { title: "Plant Growth for Preschoolers", url: "https://www.youtube.com/watch?v=ib5uiLMM2TE", thumbnail: "https://img.youtube.com/vi/ib5uiLMM2TE/hqdefault.jpg", duration: "3:50", ageRange: "3-5 years" },
      { title: "Weather Activities for Toddlers", url: "https://www.youtube.com/watch?v=sn6GLgaTY0M", thumbnail: "https://img.youtube.com/vi/sn6GLgaTY0M/hqdefault.jpg", duration: "4:10", ageRange: "2-4 years" }]
    };

    // Default to generic nursery educational videos if subject not found
    return videosBySubject[lesson.subject] || [
    { title: "Circle Time Activities for Young Children", url: "https://www.youtube.com/watch?v=r1mvdGKQp4M", thumbnail: "https://img.youtube.com/vi/r1mvdGKQp4M/hqdefault.jpg", duration: "4:15", ageRange: "1-5 years" },
    { title: "Early Childhood Development Milestones", url: "https://www.youtube.com/watch?v=J_JrKwGn_Rc", thumbnail: "https://img.youtube.com/vi/J_JrKwGn_Rc/hqdefault.jpg", duration: "5:30", ageRange: "0-5 years" },
    { title: "Engaging Activities for Nursery Students", url: "https://www.youtube.com/watch?v=ib5uiLMM2TE", thumbnail: "https://img.youtube.com/vi/ib5uiLMM2TE/hqdefault.jpg", duration: "6:00", ageRange: "2-5 years" }];
  };

  // Generate learning standards based on subject and grade level
  const getLearningStandards = () => {
    const standardsBySubject = {
      math: [
      "Use place value understanding to round whole numbers to the nearest 10 or 100.",
      "Fluently add and subtract multi-digit whole numbers using the standard algorithm.",
      "Develop understanding of fractions as numbers."],

      science: [
      "Plan and conduct an investigation to provide evidence of the effects of balanced and unbalanced forces.",
      "Make observations to provide evidence that energy can be transferred from place to place.",
      "Analyze and interpret data from fossils to provide evidence of organisms and environments from long ago."],

      english: [
      "Ask and answer questions to demonstrate understanding of a text, referring explicitly to the text as the basis for answers.",
      "Determine the main idea of a text; recount the key details and explain how they support the main idea.",
      "Write opinion pieces on topics or texts, supporting a point of view with reasons."],

      history: [
      "Compare life in specific historical periods to life today.",
      "Explain probable causes and effects of events and developments.",
      "Use information about a historical source to determine what it tells about the past."]

    };

    return standardsBySubject[lesson.subject] || [
    "Demonstrate grade-appropriate content knowledge and skills as specified by state/district standards.",
    "Apply critical thinking skills to analyze and solve problems within the content area.",
    "Communicate effectively using the vocabulary and processes of the discipline."];

  };

  // Generate vocabulary terms based on subject and topic
  const getVocabularyTerms = () => {
    const vocabBySubject = {
      math: [
      { term: "Numerator", definition: "The top number in a fraction that shows how many parts we have." },
      { term: "Denominator", definition: "The bottom number in a fraction that shows how many equal parts make up a whole." },
      { term: "Factor", definition: "A number that divides evenly into another number." },
      { term: "Product", definition: "The result of multiplying numbers together." },
      { term: "Sum", definition: "The result of adding numbers together." }],

      science: [
      { term: "Hypothesis", definition: "An educated guess that can be tested." },
      { term: "Variable", definition: "A factor that can change in an experiment." },
      { term: "Ecosystem", definition: "A community of living organisms interacting with their environment." },
      { term: "Adaptation", definition: "A characteristic that helps an organism survive in its environment." },
      { term: "Matter", definition: "Anything that has mass and takes up space." }],

      english: [
      { term: "Protagonist", definition: "The main character in a story." },
      { term: "Setting", definition: "When and where a story takes place." },
      { term: "Plot", definition: "The sequence of events in a story." },
      { term: "Theme", definition: "The central message or insight about life expressed through a literary work." },
      { term: "Inference", definition: "A conclusion drawn based on evidence and reasoning." }],

      history: [
      { term: "Primary Source", definition: "A document or physical object created during the time under study." },
      { term: "Secondary Source", definition: "Information created after or by someone without firsthand experience." },
      { term: "Chronology", definition: "The arrangement of events in the order they occurred in time." },
      { term: "Artifact", definition: "An object made by humans, typically of historical interest." },
      { term: "Cause and Effect", definition: "The relationship between events where one is the result of the other." }]

    };

    return vocabBySubject[lesson.subject] || [
    { term: "Objective", definition: "A specific, measurable goal to be achieved." },
    { term: "Assessment", definition: "The process of evaluating student learning." },
    { term: "Differentiation", definition: "Adapting teaching to meet individual student needs." },
    { term: "Engagement", definition: "The level of interest and participation in learning." },
    { term: "Scaffold", definition: "Temporary support to help students master new concepts and skills." }];

  };

  // Display the resource modal
  const ResourceModal = () => {
    if (!showResourceModal) return null;

    const videos = getYouTubeVideos();

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50" data-id="sny1filug" data-path="components/LessonDisplay.js">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" data-id="o07ht776d" data-path="components/LessonDisplay.js">
          <div className="p-6" data-id="qpkxccikt" data-path="components/LessonDisplay.js">
            <div className="flex justify-between items-center mb-4" data-id="vcq0n64r5" data-path="components/LessonDisplay.js">
              <h3 className="text-xl font-bold text-gray-900" data-id="5037w4ecc" data-path="components/LessonDisplay.js">Educational Resources for {lesson.topic}</h3>
              <button onClick={() => setShowResourceModal(false)} className="text-gray-500 hover:text-gray-700" data-id="eoosbctld" data-path="components/LessonDisplay.js">
                <i className="fas fa-times text-xl" data-id="yszqokfag" data-path="components/LessonDisplay.js"></i>
              </button>
            </div>
            
            <div className="mb-6" data-id="vufc9f8fu" data-path="components/LessonDisplay.js">
              <h4 className="text-lg font-semibold text-gray-800 mb-3" data-id="fa4itui4f" data-path="components/LessonDisplay.js">Recommended Videos</h4>
              <p className="text-sm text-gray-600 mb-3" data-id="z9zzs72am" data-path="components/LessonDisplay.js">Age-appropriate videos selected for early childhood development</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-id="scq5a38pn" data-path="components/LessonDisplay.js">
                {videos.map((video, index) =>
                <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200" data-id="qlspnpnat" data-path="components/LessonDisplay.js">
                    <div className="bg-gray-100 h-40 flex items-center justify-center relative" data-id="9xe2uiwxn" data-path="components/LessonDisplay.js">
                      <img
                      src={video.thumbnail}
                      alt={`${video.title} thumbnail`}
                      className="w-full h-full object-cover" data-id="hj8hef787" data-path="components/LessonDisplay.js" />

                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-200" data-id="11wcg0zzy" data-path="components/LessonDisplay.js">
                        <div className="bg-red-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg" data-id="8zrqin197" data-path="components/LessonDisplay.js">
                          <i className="fas fa-play text-lg" data-id="191hvjsaz" data-path="components/LessonDisplay.js"></i>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded" data-id="j2hqib1dq" data-path="components/LessonDisplay.js">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-3" data-id="6j1es78j5" data-path="components/LessonDisplay.js">
                      <h5 className="font-medium text-gray-900 mb-1" data-id="tvgb7ka6q" data-path="components/LessonDisplay.js">{video.title}</h5>
                      <div className="flex justify-between items-center" data-id="q5qab4zvg" data-path="components/LessonDisplay.js">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full" data-id="90rtttahs" data-path="components/LessonDisplay.js">
                          {video.ageRange}
                        </span>
                        <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm hover:underline flex items-center" data-id="9cwum9xj9" data-path="components/LessonDisplay.js">
                          Watch <i className="fas fa-external-link-alt ml-1 text-xs" data-id="k2vc4ql94" data-path="components/LessonDisplay.js"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mb-8" data-id="8nf2jk62b" data-path="components/LessonDisplay.js">
              <h4 className="text-lg font-semibold text-gray-800 mb-3" data-id="9ed41m81v" data-path="components/LessonDisplay.js">Teacher Resources</h4>
              <p className="text-sm text-gray-600 mb-4" data-id="ikfxjfsf6" data-path="components/LessonDisplay.js">Printable materials to support implementation of this activity</p>
              
              <div className="mb-6" data-id="dskv59pri" data-path="components/LessonDisplay.js">
                <h5 className="font-medium text-gray-800 mb-3 flex items-center" data-id="y5ii14z70" data-path="components/LessonDisplay.js">
                  <i className="fas fa-print text-blue-500 mr-2" data-id="oi67qudnx" data-path="components/LessonDisplay.js"></i> Printable Activity Materials
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="jj6g8ynpw" data-path="components/LessonDisplay.js">
                  <div className="flex items-center p-3 border rounded-lg hover:bg-blue-50 transition-colors duration-200" data-id="qmirzmza6" data-path="components/LessonDisplay.js">
                    <div className="bg-red-100 p-3 rounded-lg mr-3" data-id="bx0dawhbm" data-path="components/LessonDisplay.js">
                      <i className="fas fa-file-pdf text-red-500 text-xl" data-id="90hxtl67b" data-path="components/LessonDisplay.js"></i>
                    </div>
                    <div data-id="eic4fnv34" data-path="components/LessonDisplay.js">
                      <h5 className="font-medium text-gray-900" data-id="o1g9ccdbk" data-path="components/LessonDisplay.js">Activity Worksheet</h5>
                      <p className="text-sm text-gray-500" data-id="a30dfyek7" data-path="components/LessonDisplay.js">Age-appropriate printable for {getGradeName(lesson.grade)}</p>
                    </div>
                    <button className="ml-auto text-blue-500 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2 rounded-md transition-colors duration-200" data-id="87qfg8m9h" data-path="components/LessonDisplay.js">
                      <i className="fas fa-download" data-id="6fhpuajp2" data-path="components/LessonDisplay.js"></i>
                    </button>
                  </div>
                  <div className="flex items-center p-3 border rounded-lg hover:bg-blue-50 transition-colors duration-200" data-id="ypu2w9b1v" data-path="components/LessonDisplay.js">
                    <div className="bg-orange-100 p-3 rounded-lg mr-3" data-id="kywyd9tuh" data-path="components/LessonDisplay.js">
                      <i className="fas fa-images text-orange-500 text-xl" data-id="h21xwn2pk" data-path="components/LessonDisplay.js"></i>
                    </div>
                    <div data-id="h4o4lhizl" data-path="components/LessonDisplay.js">
                      <h5 className="font-medium text-gray-900" data-id="2fdnqll2m" data-path="components/LessonDisplay.js">Visual Cards</h5>
                      <p className="text-sm text-gray-500" data-id="n4mlfojhn" data-path="components/LessonDisplay.js">Printable visual supports for the activity</p>
                    </div>
                    <button className="ml-auto text-blue-500 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2 rounded-md transition-colors duration-200" data-id="600nvuviz" data-path="components/LessonDisplay.js">
                      <i className="fas fa-download" data-id="deklcpdox" data-path="components/LessonDisplay.js"></i>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mb-6" data-id="pljty7ygk" data-path="components/LessonDisplay.js">
                <h5 className="font-medium text-gray-800 mb-3 flex items-center" data-id="wzxzlxlji" data-path="components/LessonDisplay.js">
                  <i className="fas fa-clipboard-check text-green-500 mr-2" data-id="wl9lqryiw" data-path="components/LessonDisplay.js"></i> Assessment & Documentation
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="tjp50gcrx" data-path="components/LessonDisplay.js">
                  <div className="flex items-center p-3 border rounded-lg hover:bg-blue-50 transition-colors duration-200" data-id="xyc2mj3wf" data-path="components/LessonDisplay.js">
                    <div className="bg-blue-100 p-3 rounded-lg mr-3" data-id="hoiooa66a" data-path="components/LessonDisplay.js">
                      <i className="fas fa-file-word text-blue-500 text-xl" data-id="ujhdu6jtz" data-path="components/LessonDisplay.js"></i>
                    </div>
                    <div data-id="m3lzwq2sc" data-path="components/LessonDisplay.js">
                      <h5 className="font-medium text-gray-900" data-id="ej6v6uqhu" data-path="components/LessonDisplay.js">Observation Checklist</h5>
                      <p className="text-sm text-gray-500" data-id="h61ux9fae" data-path="components/LessonDisplay.js">For documenting children's participation</p>
                    </div>
                    <button className="ml-auto text-blue-500 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2 rounded-md transition-colors duration-200" data-id="f1becncc4" data-path="components/LessonDisplay.js">
                      <i className="fas fa-download" data-id="3htrj44fu" data-path="components/LessonDisplay.js"></i>
                    </button>
                  </div>
                  <div className="flex items-center p-3 border rounded-lg hover:bg-blue-50 transition-colors duration-200" data-id="d17ypko48" data-path="components/LessonDisplay.js">
                    <div className="bg-green-100 p-3 rounded-lg mr-3" data-id="s96iitsm1" data-path="components/LessonDisplay.js">
                      <i className="fas fa-file-excel text-green-500 text-xl" data-id="zvl63i1z6" data-path="components/LessonDisplay.js"></i>
                    </div>
                    <div data-id="ot2t1wnr4" data-path="components/LessonDisplay.js">
                      <h5 className="font-medium text-gray-900" data-id="mshyqcvbp" data-path="components/LessonDisplay.js">Development Tracking</h5>
                      <p className="text-sm text-gray-500" data-id="04e215rgt" data-path="components/LessonDisplay.js">Milestone checklist for this age group</p>
                    </div>
                    <button className="ml-auto text-blue-500 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2 rounded-md transition-colors duration-200" data-id="h5azpcaet" data-path="components/LessonDisplay.js">
                      <i className="fas fa-download" data-id="wvqbemqz2" data-path="components/LessonDisplay.js"></i>
                    </button>
                  </div>
                </div>
              </div>
              
              <div data-id="817dncxin" data-path="components/LessonDisplay.js">
                <h5 className="font-medium text-gray-800 mb-3 flex items-center" data-id="joi3c0nf2" data-path="components/LessonDisplay.js">
                  <i className="fas fa-user-graduate text-purple-500 mr-2" data-id="v1njzqzxw" data-path="components/LessonDisplay.js"></i> Parent Communication
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="6qwnrbcoy" data-path="components/LessonDisplay.js">
                  <div className="flex items-center p-3 border rounded-lg hover:bg-blue-50 transition-colors duration-200" data-id="f1ou4epks" data-path="components/LessonDisplay.js">
                    <div className="bg-purple-100 p-3 rounded-lg mr-3" data-id="aaqwcbs05" data-path="components/LessonDisplay.js">
                      <i className="fas fa-file-alt text-purple-500 text-xl" data-id="n0kcmzpe5" data-path="components/LessonDisplay.js"></i>
                    </div>
                    <div data-id="gv6pv4vzs" data-path="components/LessonDisplay.js">
                      <h5 className="font-medium text-gray-900" data-id="q76mrjnya" data-path="components/LessonDisplay.js">Parent Letter</h5>
                      <p className="text-sm text-gray-500" data-id="wgtyy6nc1" data-path="components/LessonDisplay.js">Explains activity and home connections</p>
                    </div>
                    <button className="ml-auto text-blue-500 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2 rounded-md transition-colors duration-200" data-id="zop203itb" data-path="components/LessonDisplay.js">
                      <i className="fas fa-download" data-id="2qerut2e7" data-path="components/LessonDisplay.js"></i>
                    </button>
                  </div>
                  <div className="flex items-center p-3 border rounded-lg hover:bg-blue-50 transition-colors duration-200" data-id="hoek5y8cw" data-path="components/LessonDisplay.js">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-3" data-id="vgblvwvy3" data-path="components/LessonDisplay.js">
                      <i className="fas fa-home text-indigo-500 text-xl" data-id="4lfzjb7aq" data-path="components/LessonDisplay.js"></i>
                    </div>
                    <div data-id="kw2jt2ad7" data-path="components/LessonDisplay.js">
                      <h5 className="font-medium text-gray-900" data-id="ariq1k926" data-path="components/LessonDisplay.js">Home Extension</h5>
                      <p className="text-sm text-gray-500" data-id="f2m8hzj56" data-path="components/LessonDisplay.js">Activity ideas for families to try at home</p>
                    </div>
                    <button className="ml-auto text-blue-500 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2 rounded-md transition-colors duration-200" data-id="pcyim2yys" data-path="components/LessonDisplay.js">
                      <i className="fas fa-download" data-id="pj1v35jvj" data-path="components/LessonDisplay.js"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Collection - New Section */}
            <div className="mb-8" data-id="a4jobq68i" data-path="components/LessonDisplay.js">
              <h4 className="text-lg font-semibold text-gray-800 mb-3" data-id="b0idj4a1a" data-path="components/LessonDisplay.js">Visual Inspiration Gallery</h4>
              <p className="text-sm text-gray-600 mb-4" data-id="i1bgmqwi6" data-path="components/LessonDisplay.js">Activity implementation examples and visual aids</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4" data-id="p4y6vz78w" data-path="components/LessonDisplay.js">
                {getRelevantImages().map((image, index) =>
                <div key={index} className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 h-40" data-id="u816dx7xz" data-path="components/LessonDisplay.js">
                    <img
                    src={image}
                    alt={`${lesson.topic} example ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-id="th8fkt5r8" data-path="components/LessonDisplay.js" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3" data-id="p06hqrh0m" data-path="components/LessonDisplay.js">
                      <p className="text-white text-sm font-medium" data-id="dg640t4yz" data-path="components/LessonDisplay.js">{getSubjectName(lesson.subject)} Activity Example</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex justify-end" data-id="m66kqj07b" data-path="components/LessonDisplay.js">
              <button
                onClick={() => setShowResourceModal(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow transition-all duration-200 hover:shadow-lg" data-id="bmmvk7w6d" data-path="components/LessonDisplay.js">

                Close
              </button>
            </div>
          </div>
        </div>
      </div>);

  };


  if (!lesson) return null;

  const handleSave = () => {
    const savedLesson = saveLesson(lesson);
    setIsSaved(true);
    if (onSave) onSave(savedLesson);

    // Reset the saved status after 3 seconds
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleCopyToClipboard = () => {
    if (lessonRef.current) {
      // Create a range and select the content
      const range = document.createRange();
      range.selectNodeContents(lessonRef.current);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);

      // Execute copy command
      document.execCommand('copy');

      // Clean up selection
      selection.removeAllRanges();

      // Show copied indicator
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    }
  };

  const handleExport = () => {
    // Create lesson content as string
    const title = `# ${lesson.topic}\n\n`;
    const metadata = `Subject: ${getSubjectName(lesson.subject)}\nGrade: ${getGradeName(lesson.grade)}\nDuration: ${getDurationName(lesson.duration)}\n\n`;

    let content = `## Objectives\n`;
    lesson.content.objectives.forEach((obj) => {
      content += `- ${obj}\n`;
    });

    content += `\n## Activities\n`;
    lesson.content.activities.forEach((act, i) => {
      content += `${i + 1}. ${act}\n`;
    });

    content += `\n## Assessment\n${lesson.content.assessment}\n`;

    if (lesson.content.materials) {
      content += `\n## Materials\n`;
      lesson.content.materials.forEach((mat) => {
        content += `- ${mat}\n`;
      });
    }

    if (lesson.content.extensions) {
      content += `\n## Extensions\n`;
      lesson.content.extensions.forEach((ext) => {
        content += `- ${ext}\n`;
      });
    }

    // Add learning standards section
    content += `\n## Learning Standards\n`;
    getLearningStandards().forEach((standard) => {
      content += `- ${standard}\n`;
    });

    // Add vocabulary section
    content += `\n## Vocabulary\n`;
    getVocabularyTerms().forEach((item) => {
      content += `- ${item.term}: ${item.definition}\n`;
    });

    // Add questions section if available
    if (lesson.content.questions) {
      content += `\n## Teacher Knowledge Questions\n`;
      lesson.content.questions.forEach((item, i) => {
        content += `\n### Question ${i + 1}: ${item.question}\n`;
        content += `${item.answer}\n`;
      });
    }

    // Add suggested resources
    content += `\n## Recommended Resources\n`;
    content += `- Access online resources at: https://lessongenius.edu/resources/${lesson.subject}/${lesson.grade}\n`;
    content += `- Explore related video content on educational platforms\n`;
    content += `- Use visual aids to enhance student understanding\n`;

    const fullContent = title + metadata + content;

    // Create a blob and download
    const blob = new Blob([fullContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${lesson.topic.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_lesson_plan.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 fade-in" data-id="2eksbyyun" data-path="components/LessonDisplay.js">
      <ResourceModal data-id="gf6mhwfix" data-path="components/LessonDisplay.js" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 border-b pb-4" data-id="73qdlv0so" data-path="components/LessonDisplay.js">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0" data-id="ag24dms9i" data-path="components/LessonDisplay.js">{lesson.topic}</h2>
        <div className="flex flex-wrap gap-2" data-id="5eckk5d0p" data-path="components/LessonDisplay.js">
          <button
            onClick={() => setShowResourceModal(true)}
            className="flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50" data-id="mrsh0mscm" data-path="components/LessonDisplay.js">
            <i className="fas fa-play-circle text-red-500 mr-1" data-id="c30jrw2xz" data-path="components/LessonDisplay.js"></i>
            Resources
          </button>
          <button
            onClick={handleCopyToClipboard}
            className="flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50" data-id="5glaf6mqb" data-path="components/LessonDisplay.js">

            <i className={`fas ${isCopied ? 'fa-check text-green-500' : 'fa-copy text-gray-500'} mr-1`} data-id="m13u10mtf" data-path="components/LessonDisplay.js"></i>
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
          <button
            onClick={handleExport}
            className="flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50" data-id="2e3osiy1g" data-path="components/LessonDisplay.js">

            <i className="fas fa-download text-gray-500 mr-1" data-id="7yh1hk9bj" data-path="components/LessonDisplay.js"></i>
            Export
          </button>
          <button
            onClick={handleSave}
            className={`flex items-center px-3 py-1.5 text-sm rounded ${
            isSaved ?
            'bg-green-500 text-white border-green-500' :
            'bg-blue-500 hover:bg-blue-600 text-white border-blue-500'}`
            } data-id="wmqxbahn0" data-path="components/LessonDisplay.js">

            <i className={`fas ${isSaved ? 'fa-check' : 'fa-save'} mr-1`} data-id="klc6hjy0v" data-path="components/LessonDisplay.js"></i>
            {isSaved ? 'Saved!' : 'Save'}
          </button>
        </div>
      </div>
      
      <div className="mb-6" data-id="gnoekq2wj" data-path="components/LessonDisplay.js">
        <div className="flex flex-wrap gap-2 mb-4" data-id="dbrqn1qxl" data-path="components/LessonDisplay.js">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800" data-id="urqczr3j9" data-path="components/LessonDisplay.js">
            <i className="fas fa-book-open mr-1" data-id="3qwz4ubue" data-path="components/LessonDisplay.js"></i> {getSubjectName(lesson.subject)}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800" data-id="tbm5u45tg" data-path="components/LessonDisplay.js">
            <i className="fas fa-users mr-1" data-id="xaj8mzczo" data-path="components/LessonDisplay.js"></i> {getGradeName(lesson.grade)}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800" data-id="ijf1170s8" data-path="components/LessonDisplay.js">
            <i className="fas fa-clock mr-1" data-id="j4xfenuf3" data-path="components/LessonDisplay.js"></i> {getDurationName(lesson.duration)}
          </span>
        </div>
        
        {/* Enhanced visual preview carousel with activity overview */}
        <div className="mb-8" data-id="6uukdogs9" data-path="components/LessonDisplay.js">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-id="u05gj8sti" data-path="components/LessonDisplay.js">
            {/* Visual carousel */}
            <div className="border rounded-lg overflow-hidden shadow-md" data-id="1xwhnrx1m" data-path="components/LessonDisplay.js">
              <div className="relative" data-id="ypntfawfz" data-path="components/LessonDisplay.js">
                <div className="flex overflow-x-auto snap-x scroll-smooth" data-id="image-carousel" data-path="components/LessonDisplay.js">
                  {getRelevantImages().map((image, index) =>
                  <div key={index} className="snap-start shrink-0 w-full" data-id="vxxqiizsm" data-path="components/LessonDisplay.js">
                      <img
                      src={image}
                      alt={`${lesson.topic} visual ${index + 1}`}
                      className="h-56 sm:h-64 md:h-72 w-full object-cover"
                      data-id="bi81xouei"
                      data-path="components/LessonDisplay.js" />

                    </div>
                  )}
                </div>
                <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 text-xs text-gray-700 shadow-sm" data-id="xyjpvvn7r" data-path="components/LessonDisplay.js">
                  <i className="fas fa-image mr-1" data-id="m675zxayj" data-path="components/LessonDisplay.js"></i> Swipe for more
                </div>
                
                {/* Image navigation dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2" data-id="7odxcl6xb" data-path="components/LessonDisplay.js">
                  {getRelevantImages().map((_, index) =>
                  <button
                    key={index}
                    className="w-2 h-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition-all duration-200"
                    aria-label={`View image ${index + 1}`} data-id="dmx43dst1" data-path="components/LessonDisplay.js">
                  </button>
                  )}
                </div>
              </div>
            </div>
            
            {/* Activity overview */}
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-100 shadow-md" data-id="3o2aatpx5" data-path="components/LessonDisplay.js">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" data-id="8z09sx4pm" data-path="components/LessonDisplay.js">Activity Overview</h3>
              <div className="space-y-4" data-id="kzuvlh8tb" data-path="components/LessonDisplay.js">
                <div className="flex items-start" data-id="v0mrwm0zj" data-path="components/LessonDisplay.js">
                  <div className="mt-1 bg-blue-100 p-2 rounded-full mr-3" data-id="xemvnkqa8" data-path="components/LessonDisplay.js">
                    <i className="fas fa-bullseye text-blue-600" data-id="mfrtoij5f" data-path="components/LessonDisplay.js"></i>
                  </div>
                  <div data-id="ifvosu39g" data-path="components/LessonDisplay.js">
                    <h4 className="font-medium text-gray-900 mb-1" data-id="hecp8kq9a" data-path="components/LessonDisplay.js">Purpose</h4>
                    <p className="text-sm text-gray-700" data-id="bjcugzwqr" data-path="components/LessonDisplay.js">
                      {lesson.content.objectives?.[0] || "Designed to support age-appropriate development in a playful, engaging way"}.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start" data-id="ve37ocawu" data-path="components/LessonDisplay.js">
                  <div className="mt-1 bg-green-100 p-2 rounded-full mr-3" data-id="y85tdtync" data-path="components/LessonDisplay.js">
                    <i className="fas fa-child text-green-600" data-id="lk4kfewhf" data-path="components/LessonDisplay.js"></i>
                  </div>
                  <div data-id="3ua2m6ju9" data-path="components/LessonDisplay.js">
                    <h4 className="font-medium text-gray-900 mb-1" data-id="nhe45ujh4" data-path="components/LessonDisplay.js">Age Group</h4>
                    <p className="text-sm text-gray-700" data-id="2ra2nmh2w" data-path="components/LessonDisplay.js">
                      Designed specifically for {getGradeName(lesson.grade)} with developmentally appropriate challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start" data-id="9hmir7vxd" data-path="components/LessonDisplay.js">
                  <div className="mt-1 bg-purple-100 p-2 rounded-full mr-3" data-id="ekfd7nz7b" data-path="components/LessonDisplay.js">
                    <i className="fas fa-brain text-purple-600" data-id="ofg2magj7" data-path="components/LessonDisplay.js"></i>
                  </div>
                  <div data-id="33fag0a9r" data-path="components/LessonDisplay.js">
                    <h4 className="font-medium text-gray-900 mb-1" data-id="0pyc33sds" data-path="components/LessonDisplay.js">Key Benefits</h4>
                    <div className="flex flex-wrap gap-2 mt-1" data-id="8v0yd4j7k" data-path="components/LessonDisplay.js">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800" data-id="q9mzyuelp" data-path="components/LessonDisplay.js">
                        Fine Motor Skills
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800" data-id="r115d2ih1" data-path="components/LessonDisplay.js">
                        Cognitive Development
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800" data-id="amded2die" data-path="components/LessonDisplay.js">
                        Language Growth
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800" data-id="n6eyixjsp" data-path="components/LessonDisplay.js">
                        Social Skills
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start" data-id="et5yg4ct1" data-path="components/LessonDisplay.js">
                  <div className="mt-1 bg-red-100 p-2 rounded-full mr-3" data-id="6xocr8rfm" data-path="components/LessonDisplay.js">
                    <i className="fas fa-clock text-red-600" data-id="ohb5mltvs" data-path="components/LessonDisplay.js"></i>
                  </div>
                  <div data-id="qteoe1y8a" data-path="components/LessonDisplay.js">
                    <h4 className="font-medium text-gray-900 mb-1" data-id="mj6vh8k7o" data-path="components/LessonDisplay.js">Time & Setup</h4>
                    <p className="text-sm text-gray-700" data-id="o3u3hdiiv" data-path="components/LessonDisplay.js">
                      A {getDurationName(lesson.duration)} activity with approximately 5 minutes of setup time required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lesson-content" ref={lessonRef} data-id="ds4h2y8gt" data-path="components/LessonDisplay.js">
        {/* Two column layout for desktop */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-6" data-id="ptcxn495m" data-path="components/LessonDisplay.js">
          <div className="lg:col-span-2" data-id="i5rxz647x" data-path="components/LessonDisplay.js">
            <section className="mb-6" data-id="am8jnjr5n" data-path="components/LessonDisplay.js">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center" data-id="od6133uec" data-path="components/LessonDisplay.js">
                <i className="fas fa-bullseye text-blue-500 mr-2" data-id="scl8nuhfz" data-path="components/LessonDisplay.js"></i> Objectives
              </h3>
              <ul className="list-disc pl-5 space-y-1" data-id="mhmhuiwob" data-path="components/LessonDisplay.js">
                {lesson.content.objectives.map((objective, index) =>
                <li key={index} className="text-gray-700" data-id="11jfjb2ce" data-path="components/LessonDisplay.js">{objective}</li>
                )}
              </ul>
            </section>
            
            <section className="mb-6" data-id="b70vvp71b" data-path="components/LessonDisplay.js">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center" data-id="jvabwr1h6" data-path="components/LessonDisplay.js">
                <i className="fas fa-tasks text-blue-500 mr-2" data-id="1o9n93aoq" data-path="components/LessonDisplay.js"></i> Activities
              </h3>
              <p className="text-sm text-gray-600 mb-3" data-id="ddm9ntbdd" data-path="components/LessonDisplay.js">Step-by-step implementation guide for this nursery activity</p>
              <div className="space-y-4" data-id="gvyhgv02l" data-path="components/LessonDisplay.js">
                {lesson.content.activities.map((activity, index) =>
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                  data-id="activity-item-${index}"
                  data-path="components/LessonDisplay.js">

                    <div
                    className="flex items-center px-4 py-3 bg-blue-50 border-b border-gray-200 cursor-pointer"
                    onClick={() => setExpandedActivity(expandedActivity === index ? null : index)} data-id="g9icynqx9" data-path="components/LessonDisplay.js">

                      <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0" data-id="tqlc45xfx" data-path="components/LessonDisplay.js">
                        {index + 1}
                      </div>
                      <h4 className="font-medium text-gray-900 flex-grow" data-id="yk93tqy0f" data-path="components/LessonDisplay.js">
                        {activity.split('.')[0]}.
                      </h4>
                      <i className={`fas ${expandedActivity === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-500`} data-id="xqewp8e0w" data-path="components/LessonDisplay.js"></i>
                    </div>
                    
                    {expandedActivity === index &&
                  <div className="p-4 bg-white" data-id="0ya3qc44y" data-path="components/LessonDisplay.js">
                        <p className="text-gray-700 mb-3" data-id="koe3sl5wj" data-path="components/LessonDisplay.js">
                          {activity.split('.').slice(1).join('.')}
                        </p>
                        <div className="mt-3 pt-3 border-t border-gray-100" data-id="znuibfvwa" data-path="components/LessonDisplay.js">
                          <div className="flex flex-wrap gap-2" data-id="i2vke2vny" data-path="components/LessonDisplay.js">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800" data-id="22opv160j" data-path="components/LessonDisplay.js">
                              <i className="fas fa-child mr-1" data-id="kvdb4a3k2" data-path="components/LessonDisplay.js"></i> Age-Appropriate
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800" data-id="m98yt8uwd" data-path="components/LessonDisplay.js">
                              <i className="fas fa-brain mr-1" data-id="5px3midgy" data-path="components/LessonDisplay.js"></i> Developmental
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800" data-id="pxnrywakz" data-path="components/LessonDisplay.js">
                              <i className="fas fa-hands mr-1" data-id="ggyhbmfho" data-path="components/LessonDisplay.js"></i> Hands-on
                            </span>
                          </div>
                        </div>
                      </div>
                  }
                  </div>
                )}
              </div>
            </section>
            
            <section className="mb-6" data-id="1o0f9hpti" data-path="components/LessonDisplay.js">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center" data-id="p3plodrq4" data-path="components/LessonDisplay.js">
                <i className="fas fa-check-circle text-blue-500 mr-2" data-id="ivuv0kny8" data-path="components/LessonDisplay.js"></i> Assessment
              </h3>
              <p className="text-gray-700" data-id="22mgbpjj7" data-path="components/LessonDisplay.js">{lesson.content.assessment}</p>
            </section>
            
            {lesson.content.materials &&
            <section className="mb-6" data-id="0xovyijih" data-path="components/LessonDisplay.js">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center" data-id="z0q81401w" data-path="components/LessonDisplay.js">
                  <i className="fas fa-toolbox text-blue-500 mr-2" data-id="cz0vl9rhg" data-path="components/LessonDisplay.js"></i> Materials
                </h3>
                <ul className="list-disc pl-5 space-y-1" data-id="15n5t1lzi" data-path="components/LessonDisplay.js">
                  {lesson.content.materials.map((material, index) =>
                <li key={index} className="text-gray-700" data-id="ml6lfzseu" data-path="components/LessonDisplay.js">{material}</li>
                )}
                </ul>
              </section>
            }
            
            {lesson.content.extensions &&
            <section className="mb-6" data-id="0ya2n6mjb" data-path="components/LessonDisplay.js">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center" data-id="upxd27n8s" data-path="components/LessonDisplay.js">
                  <i className="fas fa-rocket text-blue-500 mr-2" data-id="cwz76ddg3" data-path="components/LessonDisplay.js"></i> Extensions
                </h3>
                <ul className="list-disc pl-5 space-y-1" data-id="89fw4i21i" data-path="components/LessonDisplay.js">
                  {lesson.content.extensions.map((extension, index) =>
                <li key={index} className="text-gray-700" data-id="v6t1dw1sm" data-path="components/LessonDisplay.js">{extension}</li>
                )}
                </ul>
              </section>
            }
            
            {/* Teacher Questions Section - Enhanced with collapsible answers */}
            {lesson.content.questions &&
            <section className="mb-6" data-id="teacher-questions-section" data-path="components/LessonDisplay.js">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center" data-id="mj2s9q4tr" data-path="components/LessonDisplay.js">
                  <i className="fas fa-question-circle text-blue-500 mr-2" data-id="xq4bu2ax4" data-path="components/LessonDisplay.js"></i> Teacher Knowledge Questions
                </h3>
                <p className="text-sm text-gray-600 mb-4" data-id="pmwvce9lf" data-path="components/LessonDisplay.js">Common questions to help you prepare for this activity</p>
                <div className="space-y-4" data-id="tc41h23wd" data-path="components/LessonDisplay.js">
                  {(lesson.content.questions || getDefaultQuestions()).map((item, index) =>
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm" data-id="0vr4nqyv1" data-path="components/LessonDisplay.js">
                      <div className="bg-blue-50 px-4 py-3 border-b border-gray-200" data-id="0uqwp5jj2" data-path="components/LessonDisplay.js">
                        <h4 className="font-medium text-gray-900" data-id="wyia76lf5" data-path="components/LessonDisplay.js">
                          <i className="fas fa-question-circle text-blue-400 mr-2" data-id="99rr2ka90" data-path="components/LessonDisplay.js"></i>
                          {item.question}
                        </h4>
                      </div>
                      <div className="p-4 bg-white" data-id="tl9ndq7z1" data-path="components/LessonDisplay.js">
                        <p className="text-gray-700 whitespace-pre-line" data-id="vhl46d45h" data-path="components/LessonDisplay.js">
                          {item.answer}
                        </p>
                        
                        {item.teachingTips &&
                    <div className="mt-3 pt-3 border-t border-gray-100" data-id="ruf4yum53" data-path="components/LessonDisplay.js">
                            <h5 className="text-sm font-medium text-gray-900 mb-2 flex items-center" data-id="8jtlaqncj" data-path="components/LessonDisplay.js">
                              <i className="fas fa-lightbulb text-yellow-500 mr-2" data-id="5as6uiefz" data-path="components/LessonDisplay.js"></i>
                              Teaching Tips
                            </h5>
                            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1" data-id="prchv62ji" data-path="components/LessonDisplay.js">
                              {item.teachingTips.map((tip, tipIndex) =>
                        <li key={tipIndex} data-id="q5hxncl6i" data-path="components/LessonDisplay.js">{tip}</li>
                        )}  
                            </ul>
                          </div>
                    }
                      </div>
                    </div>
                )}
                </div>
              </section>
            }
            
            {/* Implementation Timeline - New section */}
            <section className="mb-6 border border-blue-100 rounded-lg overflow-hidden" data-id="implementation-timeline" data-path="components/LessonDisplay.js">
              <div className="bg-blue-50 px-4 py-3 border-b border-blue-100" data-id="y41h9chd4" data-path="components/LessonDisplay.js">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center" data-id="timeline-heading" data-path="components/LessonDisplay.js">
                  <i className="fas fa-clock text-blue-500 mr-2" data-id="s201noaxz" data-path="components/LessonDisplay.js"></i> Implementation Timeline
                </h3>
              </div>
              <div className="p-4" data-id="7u0amdepk" data-path="components/LessonDisplay.js">
                <div className="relative" data-id="qtz598mja" data-path="components/LessonDisplay.js">
                  {/* Timeline connector */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200" data-id="hadnxuh1s" data-path="components/LessonDisplay.js"></div>
                  
                  {/* Timeline steps */}
                  <div className="space-y-6 relative" data-id="yu4m6nxsr" data-path="components/LessonDisplay.js">
                    {/* Preparation step */}
                    <div className="ml-10 relative" data-id="tb2uartg1" data-path="components/LessonDisplay.js">
                      <div className="absolute -left-10 mt-1.5 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-md" data-id="109cmlg3f" data-path="components/LessonDisplay.js">
                        <i className="fas fa-check text-xs" data-id="zkdv0c11c" data-path="components/LessonDisplay.js"></i>
                      </div>
                      <h4 className="text-base font-medium text-gray-900 mb-2" data-id="ua8e9ckst" data-path="components/LessonDisplay.js">Preparation (Before Activity)</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1" data-id="3xvjfehx6" data-path="components/LessonDisplay.js">
                        <li data-id="x53d7cx5l" data-path="components/LessonDisplay.js">Gather all materials needed for the activity</li>
                        <li data-id="twu7h1yaq" data-path="components/LessonDisplay.js">Set up the learning environment</li>
                        <li data-id="vxbvkvvjt" data-path="components/LessonDisplay.js">Review key vocabulary and concepts</li>
                        <li data-id="8r8st56gb" data-path="components/LessonDisplay.js">Prepare any visual aids or props</li>
                      </ul>
                    </div>
                    
                    {/* Introduction step */}
                    <div className="ml-10 relative" data-id="y2nj2k8hx" data-path="components/LessonDisplay.js">
                      <div className="absolute -left-10 mt-1.5 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-md" data-id="725y4aeei" data-path="components/LessonDisplay.js">
                        <i className="fas fa-play text-xs" data-id="q3cwdr2x8" data-path="components/LessonDisplay.js"></i>
                      </div>
                      <h4 className="text-base font-medium text-gray-900 mb-2" data-id="65mzatdzs" data-path="components/LessonDisplay.js">Introduction (5 minutes)</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1" data-id="pe6sxckjr" data-path="components/LessonDisplay.js">
                        <li data-id="pc5ud8bzk" data-path="components/LessonDisplay.js">Gather children in a circle or small groups</li>
                        <li data-id="gh3h8kjq3" data-path="components/LessonDisplay.js">Introduce the activity topic with enthusiasm</li>
                        <li data-id="44zjjuavo" data-path="components/LessonDisplay.js">Use visual aids to capture attention</li>
                        <li data-id="ypqp3u8x1" data-path="components/LessonDisplay.js">Ask simple questions to engage prior knowledge</li>
                      </ul>
                    </div>
                    
                    {/* Main Activity step */}
                    <div className="ml-10 relative" data-id="d9vqviobd" data-path="components/LessonDisplay.js">
                      <div className="absolute -left-10 mt-1.5 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-md" data-id="k1o4458co" data-path="components/LessonDisplay.js">
                        <i className="fas fa-star text-xs" data-id="1bgl57paq" data-path="components/LessonDisplay.js"></i>
                      </div>
                      <h4 className="text-base font-medium text-gray-900 mb-2" data-id="ltxbtz44k" data-path="components/LessonDisplay.js">Main Activity ({getDurationName(lesson.duration)})</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1" data-id="tzunaz740" data-path="components/LessonDisplay.js">
                        <li data-id="wo8999xed" data-path="components/LessonDisplay.js">Follow activity steps in sequence</li>
                        <li data-id="f19knhmig" data-path="components/LessonDisplay.js">Model each step before children attempt it</li>
                        <li data-id="c8by7m6mk" data-path="components/LessonDisplay.js">Provide positive reinforcement</li>
                        <li data-id="3qgs6lgi4" data-path="components/LessonDisplay.js">Support children who need extra assistance</li>
                      </ul>
                    </div>
                    
                    {/* Conclusion step */}
                    <div className="ml-10 relative" data-id="gxdwebgnp" data-path="components/LessonDisplay.js">
                      <div className="absolute -left-10 mt-1.5 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-md" data-id="vazew3034" data-path="components/LessonDisplay.js">
                        <i className="fas fa-flag-checkered text-xs" data-id="p2u2bdaej" data-path="components/LessonDisplay.js"></i>
                      </div>
                      <h4 className="text-base font-medium text-gray-900 mb-2" data-id="g7wij67mu" data-path="components/LessonDisplay.js">Conclusion (5 minutes)</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1" data-id="c6dzq1sr4" data-path="components/LessonDisplay.js">
                        <li data-id="ll8jgg26w" data-path="components/LessonDisplay.js">Review what was learned</li>
                        <li data-id="gbk473zfn" data-path="components/LessonDisplay.js">Have children share their experience</li>
                        <li data-id="n542fwv8d" data-path="components/LessonDisplay.js">Connect activity to future learning</li>
                        <li data-id="an8ipj1de" data-path="components/LessonDisplay.js">Transition to next part of day</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar for additional information */}
          <div className="lg:col-span-1" data-id="qhsjp0d1a" data-path="components/LessonDisplay.js">
            <div className="bg-gray-50 rounded-lg p-4" data-id="lxydmirv9" data-path="components/LessonDisplay.js">
              {/* Learning Standards Section */}
              <section className="mb-6" data-id="i7so4f0d3" data-path="components/LessonDisplay.js">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center" data-id="zm9wihiu5" data-path="components/LessonDisplay.js">
                  <i className="fas fa-award text-blue-500 mr-2" data-id="rf2ddcldw" data-path="components/LessonDisplay.js"></i> Learning Standards
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm" data-id="x0odouatt" data-path="components/LessonDisplay.js">
                  {getLearningStandards().map((standard, index) =>
                  <li key={index} className="text-gray-700" data-id="pa350sp0e" data-path="components/LessonDisplay.js">{standard}</li>
                  )}
                </ul>
              </section>
              
              {/* Vocabulary Section */}
              <section className="mb-6" data-id="aytl4zred" data-path="components/LessonDisplay.js">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center" data-id="7k8eagerg" data-path="components/LessonDisplay.js">
                  <i className="fas fa-book text-blue-500 mr-2" data-id="irmc66cvn" data-path="components/LessonDisplay.js"></i> Key Vocabulary
                </h3>
                <div className="space-y-2" data-id="mrruas9nx" data-path="components/LessonDisplay.js">
                  {getVocabularyTerms().slice(0, 5).map((item, index) =>
                  <div key={index} className="border-b border-gray-200 pb-2" data-id="x55i0z9f3" data-path="components/LessonDisplay.js">
                      <span className="font-medium text-gray-900" data-id="hzv38qf45" data-path="components/LessonDisplay.js">{item.term}</span>
                      <p className="text-sm text-gray-600" data-id="meeir1rpt" data-path="components/LessonDisplay.js">{item.definition}</p>
                    </div>
                  )}
                </div>
              </section>
              
              {/* Resources Preview */}
              <section data-id="1iblzjy49" data-path="components/LessonDisplay.js">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center" data-id="jur875ytq" data-path="components/LessonDisplay.js">
                  <i className="fas fa-external-link-alt text-blue-500 mr-2" data-id="r6iiz7hjt" data-path="components/LessonDisplay.js"></i> Related Resources
                </h3>
                <div className="space-y-2" data-id="uro8mvay8" data-path="components/LessonDisplay.js">
                  <div className="flex items-center p-2 bg-white rounded border border-gray-200" data-id="d01e79fyl" data-path="components/LessonDisplay.js">
                    <i className="fas fa-video text-red-500 mr-2" data-id="vgxbarmrc" data-path="components/LessonDisplay.js"></i>
                    <span className="text-sm" data-id="cleujb1eo" data-path="components/LessonDisplay.js">Instructional Videos</span>
                    <button
                      onClick={() => setShowResourceModal(true)}
                      className="ml-auto text-blue-500 hover:text-blue-700 text-sm" data-id="upywwds6z" data-path="components/LessonDisplay.js">

                      View All
                    </button>
                  </div>
                  <div className="flex items-center p-2 bg-white rounded border border-gray-200" data-id="i7brpmrhd" data-path="components/LessonDisplay.js">
                    <i className="fas fa-file-pdf text-red-500 mr-2" data-id="7lr18g9c4" data-path="components/LessonDisplay.js"></i>
                    <span className="text-sm" data-id="vwozy22lp" data-path="components/LessonDisplay.js">Printable Worksheets</span>
                    <button
                      onClick={() => setShowResourceModal(true)}
                      className="ml-auto text-blue-500 hover:text-blue-700 text-sm" data-id="4ooz2q7s3" data-path="components/LessonDisplay.js">

                      View All
                    </button>
                  </div>
                  <div className="flex items-center p-2 bg-white rounded border border-gray-200" data-id="2f2spamj8" data-path="components/LessonDisplay.js">
                    <i className="fas fa-laptop text-blue-500 mr-2" data-id="spdkpp7tr" data-path="components/LessonDisplay.js"></i>
                    <span className="text-sm" data-id="fan714py0" data-path="components/LessonDisplay.js">Interactive Activities</span>
                    <button
                      onClick={() => setShowResourceModal(true)}
                      className="ml-auto text-blue-500 hover:text-blue-700 text-sm" data-id="8uitpu053" data-path="components/LessonDisplay.js">

                      View All
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>);

}