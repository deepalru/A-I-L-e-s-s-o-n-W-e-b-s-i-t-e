function AIPrompt({ onProcessPrompt, isProcessing }) {
  const [prompt, setPrompt] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim() && !isProcessing) {
      onProcessPrompt(prompt);
    }
  };

  const examplePrompts = [
  "Create a sensory activity for toddlers that lasts 10 minutes",
  "I need an outdoor activity about nature for preschoolers",
  "Help me with a 15-minute literacy game for 3-year-olds",
  "Design a music activity for infants that helps with development"];


  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8" data-id="tx39p7gx9" data-path="components/AIPrompt.js">
      <div className="flex items-center mb-4" data-id="lr9a1wf5i" data-path="components/AIPrompt.js">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3" data-id="cwre3xyb1" data-path="components/AIPrompt.js">
          <i className="fas fa-robot text-blue-500" data-id="e5kpe1g8i" data-path="components/AIPrompt.js"></i>
        </div>
        <div className="flex-grow" data-id="tnxc048la" data-path="components/AIPrompt.js">
          <h2 className="text-xl font-bold text-gray-800" data-id="uiyovfta3" data-path="components/AIPrompt.js">AI Assistant</h2>
          <p className="text-gray-600 text-sm" data-id="02pq6ded0" data-path="components/AIPrompt.js">Describe what you need and our AI will help create it</p>
        </div>
        {typeof isExternalAIConfigured === 'function' &&
        <div className="flex items-center" data-id="mpao5r6df" data-path="components/AIPrompt.js">
            <div className="flex items-center" data-id="p4070x4aq" data-path="components/AIPrompt.js">
              <span className={`inline-block w-3 h-3 rounded-full mr-2 ${isExternalAIConfigured() ? 'bg-green-500' : 'bg-gray-400'}`} data-id="0t2bp9sij" data-path="components/AIPrompt.js"></span>
              <span className="text-xs text-gray-500" data-id="iv6utw16m" data-path="components/AIPrompt.js">
                {isExternalAIConfigured() ? 'External AI' : 'Built-in AI'}
              </span>
            </div>
          </div>
        }
      </div>
      
      <form onSubmit={handleSubmit} className="mb-3" data-id="v3j165fwf" data-path="components/AIPrompt.js">
        <div className="relative" data-id="n3dqtg4do" data-path="components/AIPrompt.js">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Create a 15-minute art activity for 4-year-olds about colors"
            className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-md shadow-sm form-input focus:ring-blue-500 focus:border-blue-500"
            disabled={isProcessing} data-id="t98la42c6" data-path="components/AIPrompt.js" />

          <button
            type="submit"
            disabled={!prompt.trim() || isProcessing}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full w-8 h-8 flex items-center justify-center ${
            !prompt.trim() || isProcessing ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`
            } data-id="z13wwppt5" data-path="components/AIPrompt.js">

            {isProcessing ?
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" data-id="b7xjbgxco" data-path="components/AIPrompt.js"></div> :

            <i className="fas fa-arrow-right text-sm" data-id="7qji1xocx" data-path="components/AIPrompt.js"></i>
            }
          </button>
        </div>
      </form>
      
      <div className="mt-4" data-id="j0mwco461" data-path="components/AIPrompt.js">
        <p className="text-xs text-gray-500 mb-2" data-id="qmojjjgwg" data-path="components/AIPrompt.js">Try these examples:</p>
        <div className="flex flex-wrap gap-2" data-id="1d21qxvcp" data-path="components/AIPrompt.js">
          {examplePrompts.map((examplePrompt, index) =>
          <button
            key={index}
            onClick={() => setPrompt(examplePrompt)}
            disabled={isProcessing}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed" data-id="tppy4ed9o" data-path="components/AIPrompt.js">

              {examplePrompt}
            </button>
          )}
        </div>
      </div>
    </div>);

}