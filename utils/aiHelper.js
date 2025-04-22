// AI Helper functions for processing prompts, generating responses,
// and connecting to external AI APIs for content generation

// Check if an external AI API is configured
function isExternalAIConfigured() {
  const settings = localStorage.getItem('aiApiSettings');
  if (!settings) return false;

  try {
    const parsed = JSON.parse(settings);
    return parsed && parsed.apiKey && parsed.provider;
  } catch (err) {
    console.error('Error checking AI configuration:', err);
    return false;
  }
}

// Main function to process prompt - now with ability to use external AI
async function processAIPrompt(prompt) {
  // Check if we should use external AI
  if (isExternalAIConfigured()) {
    try {
      return await processWithExternalAI(prompt);
    } catch (error) {
      console.error('Error with external AI, falling back to local processing:', error);
      // Fall back to local processing if external AI fails
    }
  }

  // Local processing (fallback)
  return new Promise((resolve, reject) => {
    try {
      // Simulate processing time
      setTimeout(() => {
        const result = {
          subject: null,
          grade: null,
          duration: null,
          topic: null
        };

        // Extract subject
        const subjectMap = {
          'literacy': ['literacy', 'reading', 'writing', 'letters', 'alphabet', 'words', 'books', 'stories'],
          'numbers': ['numbers', 'counting', 'math', 'mathematics', 'arithmetic', 'shapes', 'quantity'],
          'social': ['social', 'emotional', 'feelings', 'friendship', 'sharing', 'cooperation', 'emotions'],
          'motor': ['motor', 'movement', 'exercise', 'physical', 'muscles', 'coordination', 'balance'],
          'sensory': ['sensory', 'touch', 'feel', 'texture', 'tactile', 'senses', 'smelling', 'tasting'],
          'art': ['art', 'craft', 'drawing', 'painting', 'creating', 'colors', 'coloring', 'artistic'],
          'music': ['music', 'songs', 'singing', 'rhythm', 'dance', 'instruments', 'beats', 'musical'],
          'nature': ['nature', 'outdoor', 'animals', 'plants', 'environment', 'science', 'exploration', 'discovery']
        };

        for (const [subject, keywords] of Object.entries(subjectMap)) {
          if (keywords.some((keyword) => prompt.toLowerCase().includes(keyword))) {
            result.subject = subject;
            break;
          }
        }

        // Extract grade
        const gradeMap = {
          'infant': ['infant', 'baby', 'babies', '0-1 year', '0-1 years', '0-1'],
          'toddler': ['toddler', 'toddlers', '1-2 year', '1-2 years', '1-2'],
          'twos': ['two year', 'two years', 'two-year', '2 year', '2 years', '2-year', '2-years', 'twos'],
          'threes': ['three year', 'three years', 'three-year', '3 year', '3 years', '3-year', '3-years', 'threes'],
          'fours': ['four year', 'four years', 'four-year', '4 year', '4 years', '4-year', '4-years', 'fours'],
          'preschool': ['preschool', 'pre-k', 'pre k', 'prekindergarten', '4-5 year', '4-5 years', '4-5']
        };

        for (const [grade, keywords] of Object.entries(gradeMap)) {
          if (keywords.some((keyword) => prompt.toLowerCase().includes(keyword))) {
            result.grade = grade;
            break;
          }
        }

        // Extract duration
        const durationRegex = /(\d+)\s*(min|minute|minutes)/i;
        const durationMatch = prompt.match(durationRegex);

        if (durationMatch) {
          const minutes = parseInt(durationMatch[1]);
          // Map to closest available duration
          const availableDurations = [5, 10, 15, 20, 30, 45];
          result.duration = availableDurations.reduce((prev, curr) =>
          Math.abs(curr - minutes) < Math.abs(prev - minutes) ? curr : prev
          ).toString();
        }

        // Extract topic
        // We'll use a heuristic approach to guess the topic
        // Typically everything after "about" or similar phrases is the topic
        const topicRegexPatterns = [
        /about\s+(.*?)(?:\s+for|\s+that|\s+with|\.|$)/i,
        /focused on\s+(.*?)(?:\s+for|\s+that|\s+with|\.|$)/i,
        /related to\s+(.*?)(?:\s+for|\s+that|\s+with|\.|$)/i,
        /based on\s+(.*?)(?:\s+for|\s+that|\s+with|\.|$)/i];


        for (const pattern of topicRegexPatterns) {
          const match = prompt.match(pattern);
          if (match && match[1]) {
            result.topic = match[1].trim();
            break;
          }
        }

        // If topic wasn't found with regex, try to extract nouns as potential topics
        if (!result.topic) {
          // This is a very simplified approach
          const words = prompt.split(/\s+/);
          const potentialTopics = words.filter((word) =>
          word.length > 3 &&
          !['activity', 'create', 'need', 'want', 'make', 'help', 'with', 'that', 'for', 'and', 'the'].includes(word.toLowerCase())
          );

          if (potentialTopics.length > 0) {
            result.topic = potentialTopics[potentialTopics.length - 1];
          }
        }

        // Provide AI-generated activity title if no clear topic was extracted
        if (!result.topic && result.subject) {
          const subjectTitles = {
            'literacy': 'Letter Learning Adventure',
            'numbers': 'Number Exploration',
            'social': 'Friendship Building',
            'motor': 'Movement Fun',
            'sensory': 'Sensory Discovery',
            'art': 'Creative Expression',
            'music': 'Musical Exploration',
            'nature': 'Nature Discovery'
          };

          result.topic = subjectTitles[result.subject] || 'Fun Learning Activity';
        }

        // If we still don't have a subject, try to guess based on other parameters
        if (!result.subject && result.topic) {
          const topicLower = result.topic.toLowerCase();
          for (const [subject, keywords] of Object.entries(subjectMap)) {
            if (keywords.some((keyword) => topicLower.includes(keyword))) {
              result.subject = subject;
              break;
            }
          }
        }

        resolve(result);
      }, 1200); // Simulate AI processing delay
    } catch (error) {
      reject(error);
    }
  });
}

// Process prompt using external AI API
async function processWithExternalAI(prompt) {
  const settings = JSON.parse(localStorage.getItem('aiApiSettings'));

  try {
    // Prepare structured prompt for AI
    const aiPrompt = `
      You are an AI assistant for a nursery school teacher. Extract the following information from the request:
      - Subject area (one of: literacy, numbers, social, motor, sensory, art, music, nature)
      - Age group (one of: infant, toddler, twos, threes, fours, preschool)
      - Duration in minutes (one of: 5, 10, 15, 20, 30, 45)
      - Topic or theme of the activity
      
      Format your response as a JSON object with the keys: subject, grade, duration, topic.
      If any information is missing, set the value to null.
      
      Request: "${prompt}"
    `;

    // Determine which API to use based on provider
    let result;

    switch (settings.provider) {
      case 'openai':
        result = await callOpenAI(aiPrompt, settings);
        break;
      case 'anthropic':
        result = await callAnthropic(aiPrompt, settings);
        break;
      case 'google':
        result = await callGoogleAI(aiPrompt, settings);
        break;
      case 'azure':
        result = await callAzureOpenAI(aiPrompt, settings);
        break;
      case 'custom':
        result = await callCustomAPI(aiPrompt, settings);
        break;
      default:
        throw new Error('Unsupported AI provider');
    }

    return result;
  } catch (error) {
    console.error('Error calling external AI API:', error);
    throw error;
  }
}

// Call OpenAI API
async function callOpenAI(prompt, settings) {
  console.log('Would call OpenAI API with:', {
    prompt,
    model: settings.modelName,
    temperature: settings.temperature
  });

  // In a real implementation, we would make a fetch request to OpenAI
  // For now, we'll simulate the response
  return simulateAIResponse(prompt);
}

// Call Anthropic API
async function callAnthropic(prompt, settings) {
  console.log('Would call Anthropic API with:', {
    prompt,
    model: settings.modelName,
    temperature: settings.temperature
  });

  // In a real implementation, we would make a fetch request to Anthropic
  // For now, we'll simulate the response
  return simulateAIResponse(prompt);
}

// Call Google AI API
async function callGoogleAI(prompt, settings) {
  console.log('Would call Google AI API with:', {
    prompt,
    model: settings.modelName,
    temperature: settings.temperature
  });

  // In a real implementation, we would make a fetch request to Google AI
  // For now, we'll simulate the response
  return simulateAIResponse(prompt);
}

// Call Azure OpenAI API
async function callAzureOpenAI(prompt, settings) {
  console.log('Would call Azure OpenAI API with:', {
    prompt,
    model: settings.modelName,
    temperature: settings.temperature
  });

  // In a real implementation, we would make a fetch request to Azure OpenAI
  // For now, we'll simulate the response
  return simulateAIResponse(prompt);
}

// Call Custom API Endpoint
async function callCustomAPI(prompt, settings) {
  console.log('Would call Custom API with:', {
    prompt,
    model: settings.modelName,
    temperature: settings.temperature
  });

  // In a real implementation, we would make a fetch request to the custom endpoint
  // For now, we'll simulate the response
  return simulateAIResponse(prompt);
}

// Simulate an AI API response
function simulateAIResponse(prompt) {
  // For simulation, we'll parse the prompt to extract information
  // This function would be replaced with actual API calls in production
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simple extraction from the prompt for demo purposes
      const result = {
        subject: prompt.toLowerCase().includes('literacy') ? 'literacy' :
        prompt.toLowerCase().includes('math') ? 'numbers' :
        prompt.toLowerCase().includes('social') ? 'social' : 'sensory',
        grade: prompt.toLowerCase().includes('toddler') ? 'toddler' :
        prompt.toLowerCase().includes('preschool') ? 'preschool' : 'threes',
        duration: '15',
        topic: 'Fun Learning Activity'
      };

      resolve(result);
    }, 1000);
  });
}

// Function to generate a response message about what the AI understood
function generateAIResponse(params) {
  let response = "I'll create";

  if (params.subject) {
    const subjectNames = {
      'literacy': 'an early literacy',
      'numbers': 'a number sense',
      'social': 'a social skills',
      'motor': 'a motor skills',
      'sensory': 'a sensory',
      'art': 'an arts & crafts',
      'music': 'a music & movement',
      'nature': 'a nature & science'
    };

    response += ` ${subjectNames[params.subject] || 'a'}`;
  } else {
    response += ' an';
  }

  response += ' activity';

  if (params.topic) {
    response += ` about "${params.topic}"`;
  }

  if (params.grade) {
    const gradeNames = {
      'infant': 'infants (0-1 year)',
      'toddler': 'toddlers (1-2 years)',
      'twos': 'two-year-olds',
      'threes': 'three-year-olds',
      'fours': 'four-year-olds',
      'preschool': 'preschoolers (4-5 years)'
    };

    response += ` for ${gradeNames[params.grade] || params.grade}`;
  }

  if (params.duration) {
    response += ` that takes about ${params.duration} minutes`;
  }

  return response;
}

// Function to generate lesson content with AI
async function generateLessonWithAI(subject, grade, duration, topic) {
  if (isExternalAIConfigured()) {
    try {
      const settings = JSON.parse(localStorage.getItem('aiApiSettings'));

      // Create a structured prompt for lesson generation
      const prompt = `
        Create a detailed nursery school activity with the following parameters:
        - Subject: ${getSubjectName(subject)}
        - Age Group: ${getGradeName(grade)}
        - Duration: ${getDurationName(duration)}
        - Topic: ${topic || 'General activity'}
        
        Include the following sections:
        1. Objectives (3-4 developmentally appropriate learning goals)
        2. Materials needed
        3. Step-by-step activity instructions
        4. Assessment strategies
        5. Extensions or variations
        
        Format your response as a JSON object with these keys: objectives (array), materials (array), 
        activities (array of steps), assessment (string), extensions (array).
        
        Make sure all content is developmentally appropriate for ${getGradeName(grade)}.
      `;

      console.log('Would call AI API to generate lesson content');

      // In a real implementation, we would call the appropriate API based on settings
      // For now, return a simulated response

      // Wait 2 seconds to simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Return a stub response - would be replaced with actual API call
      return {
        success: true,
        message: 'Generated with external AI'
        // Content would come from the AI in production
      };
    } catch (error) {
      console.error('Error generating lesson with external AI:', error);
      // Fall back to local generation
      return {
        success: false,
        error: error.message
      };
    }
  }

  // If no AI configured or AI failed, we'll return an indicator to use the local generator
  return {
    success: false,
    message: 'Using local generator'
  };
}

// Helper function to get subject name - imported from helpers.js
// These functions would typically be imported from helpers.js
// Duplicated here for demo purposes
function getSubjectName(id) {
  const subjectsMap = {
    'literacy': 'Early Literacy',
    'numbers': 'Number Sense',
    'social': 'Social Skills',
    'motor': 'Motor Skills',
    'sensory': 'Sensory Play',
    'art': 'Arts & Crafts',
    'music': 'Music & Movement',
    'nature': 'Nature & Science'
  };
  return subjectsMap[id] || 'Subject';
}

function getGradeName(id) {
  const gradesMap = {
    'infant': 'Infants (0-1 year)',
    'toddler': 'Toddlers (1-2 years)',
    'twos': 'Two-Year-Olds',
    'threes': 'Three-Year-Olds',
    'fours': 'Four-Year-Olds',
    'preschool': 'Pre-K (4-5 years)'
  };
  return gradesMap[id] || 'Grade';
}

function getDurationName(id) {
  const durationsMap = {
    '5': '5 minutes',
    '10': '10 minutes',
    '15': '15 minutes',
    '20': '20 minutes',
    '30': '30 minutes',
    '45': '45 minutes'
  };
  return durationsMap[id] || 'Duration';
}