import React, { useState } from 'react';
import { Search, Zap, Image, MessageSquare, Video, Code, Brain, Star, DollarSign, Sparkles } from 'lucide-react';

const AIModelHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModel, setSelectedModel] = useState(null);

  const categories = [
    { id: 'all', name: 'All Models', icon: Sparkles },
    { id: 'text', name: 'Text Generation', icon: MessageSquare },
    { id: 'vision', name: 'Computer Vision', icon: Image },
    { id: 'video', name: 'Video Analysis', icon: Video },
    { id: 'code', name: 'Code Generation', icon: Code },
    { id: 'multimodal', name: 'Multimodal', icon: Brain },
  ];

  const models = [
    {
      id: 1,
      name: 'Claude Sonnet 4.5',
      provider: 'Anthropic',
      category: 'text',
      description: 'Most intelligent model for complex reasoning and analysis',
      pricing: 'Paid',
      features: ['200K context', 'Advanced reasoning', 'Code generation'],
      performance: 95,
    },
    {
      id: 2,
      name: 'GPT-4 Turbo',
      provider: 'OpenAI',
      category: 'text',
      description: 'Powerful language model with broad knowledge',
      pricing: 'Paid',
      features: ['128K context', 'Function calling', 'Vision capable'],
      performance: 93,
    },
    {
      id: 3,
      name: 'Llama 3.1 405B',
      provider: 'Meta',
      category: 'text',
      description: 'Open source large language model',
      pricing: 'Free',
      features: ['Open source', 'Self-hostable', '128K context'],
      performance: 88,
    },
    {
      id: 4,
      name: 'YOLOv8',
      provider: 'Ultralytics',
      category: 'vision',
      description: 'Real-time object detection and segmentation',
      pricing: 'Free',
      features: ['Real-time detection', 'Instance segmentation', 'Pose estimation'],
      performance: 90,
    },
    {
      id: 5,
      name: 'YOLOv11',
      provider: 'Ultralytics',
      category: 'vision',
      description: 'Latest YOLO model with improved accuracy',
      pricing: 'Free',
      features: ['Enhanced accuracy', 'Faster inference', 'Multi-task learning'],
      performance: 94,
    },
    {
      id: 6,
      name: 'SAM 2',
      provider: 'Meta',
      category: 'vision',
      description: 'Segment Anything Model for image and video',
      pricing: 'Free',
      features: ['Zero-shot segmentation', 'Video tracking', 'Promptable'],
      performance: 92,
    },
    {
      id: 7,
      name: 'DALL-E 3',
      provider: 'OpenAI',
      category: 'vision',
      description: 'Generate high-quality images from text',
      pricing: 'Paid',
      features: ['High resolution', 'Text rendering', 'Style control'],
      performance: 91,
    },
    {
      id: 8,
      name: 'Stable Diffusion XL',
      provider: 'Stability AI',
      category: 'vision',
      description: 'Open source text-to-image generation',
      pricing: 'Free',
      features: ['Open source', 'Fine-tunable', 'High quality'],
      performance: 87,
    },
    {
      id: 9,
      name: 'Gemini Pro Vision',
      provider: 'Google',
      category: 'multimodal',
      description: 'Multimodal AI for text, image, and video',
      pricing: 'Paid',
      features: ['Multimodal inputs', 'Long context', 'Video understanding'],
      performance: 89,
    },
    {
      id: 10,
      name: 'CodeLlama 70B',
      provider: 'Meta',
      category: 'code',
      description: 'Specialized coding assistant',
      pricing: 'Free',
      features: ['Code completion', 'Bug fixing', 'Multiple languages'],
      performance: 86,
    },
    {
      id: 11,
      name: 'GitHub Copilot',
      provider: 'GitHub/OpenAI',
      category: 'code',
      description: 'AI pair programmer',
      pricing: 'Paid',
      features: ['IDE integration', 'Context-aware', 'Multi-language'],
      performance: 90,
    },
    {
      id: 12,
      name: 'Whisper Large v3',
      provider: 'OpenAI',
      category: 'multimodal',
      description: 'Speech recognition and translation',
      pricing: 'Free',
      features: ['99 languages', 'Timestamps', 'High accuracy'],
      performance: 92,
    },
    {
      id: 13,
      name: 'Mistral Large',
      provider: 'Mistral AI',
      category: 'text',
      description: 'European large language model',
      pricing: 'Paid',
      features: ['Multilingual', 'Function calling', '32K context'],
      performance: 87,
    },
    {
      id: 14,
      name: 'CLIP',
      provider: 'OpenAI',
      category: 'vision',
      description: 'Connect images and text',
      pricing: 'Free',
      features: ['Zero-shot classification', 'Image search', 'Embeddings'],
      performance: 85,
    },
    {
      id: 15,
      name: 'Video-LLaMA',
      provider: 'Open Source',
      category: 'video',
      description: 'Video understanding and QA',
      pricing: 'Free',
      features: ['Video analysis', 'Temporal reasoning', 'Multi-frame'],
      performance: 82,
    },
  ];

  const filteredModels = models.filter(model => {
    const matchesCategory = selectedCategory === 'all' || model.category === selectedCategory;
    const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         model.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         model.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const ModelCard = ({ model }) => (
    <div 
      onClick={() => setSelectedModel(model)}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-500 transform hover:-translate-y-1"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{model.name}</h3>
          <p className="text-sm text-gray-600">{model.provider}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          model.pricing === 'Free' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'
        }`}>
          {model.pricing}
        </span>
      </div>
      
      <p className="text-gray-700 mb-4 text-sm">{model.description}</p>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Performance</span>
          <span className="font-semibold text-gray-900">{model.performance}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${model.performance}%` }}
          />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {model.features.map((feature, idx) => (
          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
            {feature}
          </span>
        ))}
      </div>
    </div>
  );

  const ModelModal = ({ model, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{model.name}</h2>
            <p className="text-lg text-gray-600">{model.provider}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-700">{model.description}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Pricing</h3>
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
              model.pricing === 'Free' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'
            }`}>
              {model.pricing}
            </span>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
            <div className="grid grid-cols-2 gap-2">
              {model.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Performance Score</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                    style={{ width: `${model.performance}%` }}
                  />
                </div>
              </div>
              <span className="text-2xl font-bold text-gray-900">{model.performance}%</span>
            </div>
          </div>
          
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Use This Model
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Model Hub
                </h1>
                <p className="text-sm text-gray-600">All AI models in one place</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-semibold text-sm">
                {filteredModels.length} Models Available
              </span>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search models, providers, or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Categories */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                <Icon className="w-5 h-5" />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Free Models</p>
                <p className="text-2xl font-bold text-gray-900">
                  {models.filter(m => m.pricing === 'Free').length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Premium Models</p>
                <p className="text-2xl font-bold text-gray-900">
                  {models.filter(m => m.pricing === 'Paid').length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Avg Performance</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(models.reduce((acc, m) => acc + m.performance, 0) / models.length)}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map(model => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>

        {filteredModels.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No models found matching your criteria</p>
          </div>
        )}
      </div>

      {selectedModel && (
        <ModelModal model={selectedModel} onClose={() => setSelectedModel(null)} />
      )}
    </div>
  );
};

export default AIModelHub;