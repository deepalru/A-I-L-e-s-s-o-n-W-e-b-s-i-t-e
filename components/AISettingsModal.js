function AISettingsModal({ isOpen, onClose, onSave }) {
  // Check if the current user has permission to manage API settings
  const [hasAPIPermission, setHasAPIPermission] = React.useState(false);
  const [apiProvider, setApiProvider] = React.useState('openai');
  const [apiKey, setApiKey] = React.useState('');
  const [modelName, setModelName] = React.useState('gpt-3.5-turbo');
  const [temperature, setTemperature] = React.useState(0.7);
  const [maxTokens, setMaxTokens] = React.useState(1000);
  const [isSaving, setIsSaving] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    // Check permissions when modal opens
    if (isOpen) {
      setHasAPIPermission(hasPermission(PERMISSIONS.MANAGE_API_SETTINGS));

      // Load saved settings when modal opens
      const savedSettings = localStorage.getItem('aiApiSettings');
      if (savedSettings) {
        try {
          const settings = JSON.parse(savedSettings);
          setApiProvider(settings.provider || 'openai');
          setApiKey(settings.apiKey || '');
          setModelName(settings.modelName || 'gpt-3.5-turbo');
          setTemperature(settings.temperature || 0.7);
          setMaxTokens(settings.maxTokens || 1000);
        } catch (err) {
          console.error('Error loading saved API settings:', err);
        }
      }
    }
  }, [isOpen]);

  const handleSave = async () => {
    setError('');
    setIsSaving(true);

    try {
      // Simple validation
      if (!apiKey) {
        throw new Error('API Key is required');
      }

      // Test connection with selected provider
      const testResult = await testAIConnection(apiProvider, apiKey, modelName);

      if (!testResult.success) {
        throw new Error(testResult.message || 'Failed to connect to AI service');
      }

      // Save settings
      const settings = {
        provider: apiProvider,
        apiKey,
        modelName,
        temperature,
        maxTokens,
        lastTested: new Date().toISOString()
      };

      localStorage.setItem('aiApiSettings', JSON.stringify(settings));
      onSave(settings);
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  // Mock function to test connection - would be replaced with actual API call
  const testAIConnection = async (provider, key, model) => {
    // In a real implementation, this would make a test request to the AI service
    return new Promise((resolve) => {
      setTimeout(() => {
        if (key.length < 5) {
          resolve({ success: false, message: 'Invalid API key format' });
        } else {
          resolve({ success: true });
        }
      }, 1000);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50" data-id="bb0ux9edi" data-path="components/AISettingsModal.js">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto" data-id="whjczgpi2" data-path="components/AISettingsModal.js">
        <div className="p-6" data-id="ct5s2qrhh" data-path="components/AISettingsModal.js">
          <div className="flex justify-between items-center mb-4" data-id="xjpjeodgr" data-path="components/AISettingsModal.js">
            <h3 className="text-xl font-bold text-gray-900" data-id="6ru0q1hrv" data-path="components/AISettingsModal.js">AI API Settings</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700" data-id="suwn0iyuv" data-path="components/AISettingsModal.js">
              <i className="fas fa-times text-xl" data-id="fdulagvcb" data-path="components/AISettingsModal.js"></i>
            </button>
          </div>
          
          {!hasAPIPermission &&
          <div className="mb-4 p-4 bg-red-50 rounded-md border-l-4 border-red-500 text-red-700" data-id="8rg8eol80" data-path="components/AISettingsModal.js">
              <div className="flex" data-id="samszazv9" data-path="components/AISettingsModal.js">
                <div className="flex-shrink-0" data-id="5sbuw7jzu" data-path="components/AISettingsModal.js">
                  <i className="fas fa-lock text-red-500" data-id="lgnpb6z3n" data-path="components/AISettingsModal.js"></i>
                </div>
                <div className="ml-3" data-id="v2hi0aszd" data-path="components/AISettingsModal.js">
                  <h3 className="text-sm font-medium text-red-800" data-id="5ftvbrxuz" data-path="components/AISettingsModal.js">Access Denied</h3>
                  <div className="mt-2 text-sm text-red-700" data-id="a0ewz4pz7" data-path="components/AISettingsModal.js">
                    <p data-id="zh0ak8mwl" data-path="components/AISettingsModal.js">You don't have permission to manage API settings. Please contact an administrator.</p>
                  </div>
                </div>
              </div>
            </div>
          }
          
          {error &&
          <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700" data-id="sgji31rx9" data-path="components/AISettingsModal.js">
              <p data-id="cq0dhgdk1" data-path="components/AISettingsModal.js">{error}</p>
            </div>
          }
          
          {hasAPIPermission ?
          <div className="space-y-4" data-id="cmz4t4b1t" data-path="components/AISettingsModal.js">
            <div data-id="3um0tye4a" data-path="components/AISettingsModal.js">
              <label className="block text-sm font-medium text-gray-700 mb-1" data-id="8ruv712vf" data-path="components/AISettingsModal.js">
                AI Provider
              </label>
              <select
                value={apiProvider}
                onChange={(e) => setApiProvider(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" data-id="it2b0c2ga" data-path="components/AISettingsModal.js">

                <option value="openai" data-id="zrmx89flb" data-path="components/AISettingsModal.js">OpenAI</option>
                <option value="anthropic" data-id="3h8o58v4h" data-path="components/AISettingsModal.js">Anthropic</option>
                <option value="google" data-id="ztj2k7fkg" data-path="components/AISettingsModal.js">Google AI</option>
                <option value="azure" data-id="j7pcyxr34" data-path="components/AISettingsModal.js">Azure OpenAI</option>
                <option value="custom" data-id="dlvkhge00" data-path="components/AISettingsModal.js">Custom Endpoint</option>
              </select>
            </div>
            
            <div data-id="9myaooo43" data-path="components/AISettingsModal.js">
              <label className="block text-sm font-medium text-gray-700 mb-1" data-id="ebn66k5rr" data-path="components/AISettingsModal.js">
                API Key
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your API key"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" data-id="pmbz4925l" data-path="components/AISettingsModal.js" />

              <p className="mt-1 text-xs text-gray-500" data-id="9qi3uvyr9" data-path="components/AISettingsModal.js">
                Your API key is stored locally and never shared with our servers
              </p>
            </div>
            
            <div data-id="0fc70b5na" data-path="components/AISettingsModal.js">
              <label className="block text-sm font-medium text-gray-700 mb-1" data-id="g1ikm1c7r" data-path="components/AISettingsModal.js">
                Model Name
              </label>
              <input
                type="text"
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
                placeholder="e.g., gpt-3.5-turbo, claude-2"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" data-id="ihoc0yr7f" data-path="components/AISettingsModal.js" />

            </div>
            
            <div data-id="xlmgyswid" data-path="components/AISettingsModal.js">
              <label className="block text-sm font-medium text-gray-700 mb-1" data-id="9odzvr7tf" data-path="components/AISettingsModal.js">
                Temperature ({temperature})
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full" data-id="2vr90h4nm" data-path="components/AISettingsModal.js" />

              <div className="flex justify-between text-xs text-gray-500" data-id="kjgu1wnxz" data-path="components/AISettingsModal.js">
                <span data-id="eyqbv2w19" data-path="components/AISettingsModal.js">More Precise</span>
                <span data-id="uo1mn2zbm" data-path="components/AISettingsModal.js">More Creative</span>
              </div>
            </div>
            
            <div data-id="skbu17nuq" data-path="components/AISettingsModal.js">
              <label className="block text-sm font-medium text-gray-700 mb-1" data-id="88wn8bkud" data-path="components/AISettingsModal.js">
                Max Tokens
              </label>
              <input
                type="number"
                value={maxTokens}
                onChange={(e) => setMaxTokens(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" data-id="ogeidrkcl" data-path="components/AISettingsModal.js" />

            </div>
            </div> :

          <div className="text-center py-4 text-gray-500" data-id="i3puvqqne" data-path="components/AISettingsModal.js">
              <i className="fas fa-lock-alt text-3xl mb-2" data-id="uzo0xf6tj" data-path="components/AISettingsModal.js"></i>
              <p data-id="pf4u24mhv" data-path="components/AISettingsModal.js">API settings are restricted to administrator access only.</p>
            </div>
          }
          
          <div className="mt-6 flex justify-end" data-id="15koam8fi" data-path="components/AISettingsModal.js">
            <button
              onClick={onClose}
              className="mr-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50" data-id="07j24ufoh" data-path="components/AISettingsModal.js">

              {hasAPIPermission ? 'Cancel' : 'Close'}
            </button>
            {hasAPIPermission &&
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-id="yzggdf7vb" data-path="components/AISettingsModal.js">

                {isSaving ?
              <>
                    <span className="inline-block animate-spin mr-2" data-id="1h63b4ey5" data-path="components/AISettingsModal.js">
                      <i className="fas fa-spinner" data-id="56j710xwi" data-path="components/AISettingsModal.js"></i>
                    </span>
                    Testing...
                  </> :

              'Save Settings'
              }
              </button>
            }            
          </div>
        </div>
      </div>
    </div>);

}