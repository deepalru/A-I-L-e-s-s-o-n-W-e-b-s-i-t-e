function Generator({ onGenerateLesson }) {
  const [subject, setSubject] = React.useState('');
  const [grade, setGrade] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [topic, setTopic] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [isProcessingAI, setIsProcessingAI] = React.useState(false);
  const [aiResponse, setAIResponse] = React.useState('');

  const canGenerate = subject && grade && duration;

  const handleProcessAIPrompt = async (prompt) => {
    setIsProcessingAI(true);
    setError('');
    setAIResponse('');

    try {
      // Call the AI prompt processor to extract parameters
      const params = await processAIPrompt(prompt);

      // Update form fields with AI-extracted parameters
      if (params.subject) setSubject(params.subject);
      if (params.grade) setGrade(params.grade);
      if (params.duration) setDuration(params.duration);
      if (params.topic) setTopic(params.topic);

      // Generate a response message
      const response = generateAIResponse(params);
      setAIResponse(response);

    } catch (err) {
      setError('Sorry, I had trouble understanding that. Please try again or use the form below.');
      console.error(err);
    } finally {
      setIsProcessingAI(false);
    }
  };

  const handleGenerate = async () => {
    if (!canGenerate) {
      setError('Please select a learning area, age group, and activity length to continue.');
      return;
    }

    setIsLoading(true);
    setError('');
    setAIResponse('');

    try {
      // Check if external AI is configured for content generation
      let useExternalAI = false;

      // Check if isExternalAIConfigured function exists and returns true
      if (typeof isExternalAIConfigured === 'function' && isExternalAIConfigured()) {
        try {
          // Try to generate with external AI
          const aiResult = await generateLessonWithAI(subject, grade, duration, topic);

          if (aiResult.success) {
            useExternalAI = true;
            // If needed, we could use aiResult.data here instead of local generation
          }
        } catch (aiError) {
          console.error('Error with external AI, falling back to local generation:', aiError);
          // Continue with local generation
        }
      }

      // Use standard lesson plan generation
      const lessonPlan = await generateLessonPlan(subject, grade, duration, topic);

      // Add a source flag to indicate if external AI was used
      if (useExternalAI) {
        lessonPlan.source = 'external-ai';
      }

      onGenerateLesson(lessonPlan);
    } catch (err) {
      setError('An error occurred while creating your activity. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AIPrompt
        onProcessPrompt={handleProcessAIPrompt}
        isProcessing={isProcessingAI} data-id="73zuu93m0" data-path="components/Generator.js" />

      
      {aiResponse &&
      <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 text-blue-700 rounded-r-md" data-id="4jd65fhp5" data-path="components/Generator.js">
          <div className="flex items-center" data-id="2acqs4eqc" data-path="components/Generator.js">
            <i className="fas fa-robot mr-2" data-id="pua0bijs9" data-path="components/Generator.js"></i>
            <p data-id="1u1wvuyns" data-path="components/Generator.js">{aiResponse}</p>
          </div>
        </div>
      }
      
      <div className="bg-white rounded-lg shadow-md p-6" data-id="9fdk1jbc7" data-path="components/Generator.js">
        <h2 className="text-xl font-bold text-gray-800 mb-6" data-id="z5l5beaji" data-path="components/Generator.js">Create Nursery School Activity</h2>
        
        {error &&
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700" data-id="9x7vyd37w" data-path="components/Generator.js">
            <p data-id="vog3p4csr" data-path="components/Generator.js">{error}</p>
          </div>
        }
      
      <SubjectSelector selectedSubject={subject} onSelectSubject={setSubject} data-id="hkv58xadv" data-path="components/Generator.js" />
      <GradeSelector selectedGrade={grade} onSelectGrade={setGrade} data-id="8zg2x33gr" data-path="components/Generator.js" />
      <DurationSelector selectedDuration={duration} onSelectDuration={setDuration} data-id="p9gbrg895" data-path="components/Generator.js" />
      
      <div className="mb-8" data-id="lqvcrgbqk" data-path="components/Generator.js">
        <h3 className="text-lg font-medium text-gray-900 mb-2" data-id="iypi9sbbn" data-path="components/Generator.js">Activity Theme (Optional)</h3>
        <p className="text-sm text-gray-500 mb-4" data-id="b6aap4c33" data-path="components/Generator.js">
          Enter a specific theme or leave blank for a general activity idea
        </p>
        <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="E.g., Colors, Animals, Seasons, Shapes..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm form-input" data-id="2x81kx1vy" data-path="components/Generator.js" />

      </div>
      
      <div className="flex justify-center" data-id="lei60rlga" data-path="components/Generator.js">
        <button
            onClick={handleGenerate}
            disabled={!canGenerate || isLoading}
            className={`flex items-center justify-center px-6 py-3 rounded-md text-white font-medium text-base ${
            canGenerate && !isLoading ?
            'bg-blue-500 hover:bg-blue-600' :
            'bg-gray-300 cursor-not-allowed'}`
            } data-id="cltd4e29p" data-path="components/Generator.js">

          {isLoading ?
            <React.Fragment data-id="zub2xg6hp" data-path="components/Generator.js">
              <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2" data-id="lcimegaka" data-path="components/Generator.js"></div>
              Generating...
            </React.Fragment> :

            <React.Fragment data-id="6jfc6nq42" data-path="components/Generator.js">
              <i className="fas fa-wand-magic-sparkles mr-2" data-id="ulqcib0av" data-path="components/Generator.js"></i>
              Create Activity
            </React.Fragment>
            }
        </button>
      </div>
    </div>
    </>);

}