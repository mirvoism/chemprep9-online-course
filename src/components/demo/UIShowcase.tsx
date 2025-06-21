import React, { useState } from 'react'
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  LoadingSpinner,
  ProgressBar,
  Modal
} from '@/components/ui'
import { useAccessibility } from '@/hooks/useAccessibility'
import { 
  BeakerIcon, 
  AdjustmentsHorizontalIcon,
  EyeIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/outline'

const UIShowcase: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(65)
  const { settings, updateSetting } = useAccessibility()

  const handleLoadingDemo = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const increaseProgress = () => {
    setProgress(prev => Math.min(prev + 10, 100))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-chemistry-800 mb-4">
            ChemPrep9 UI Component Showcase
          </h1>
          <p className="text-lg text-chemistry-600">
            Gentle UI Components for Comfortable Learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Button Showcase */}
          <Card>
            <CardHeader>
              <CardTitle>Button Components</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button 
                  leftIcon={<BeakerIcon className="w-4 h-4" />}
                  onClick={handleLoadingDemo}
                  loading={loading}
                >
                  {loading ? 'Loading...' : 'Start Experiment'}
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Open Modal
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Progress & Loading */}
          <Card>
            <CardHeader>
              <CardTitle>Progress & Loading</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <ProgressBar 
                  value={progress} 
                  label="Lesson Progress" 
                  showLabel 
                />
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2"
                  onClick={increaseProgress}
                >
                  Advance Progress
                </Button>
              </div>
              
              <div>
                <ProgressBar 
                  value={85} 
                  label="Unit 1 Complete" 
                  showLabel 
                  variant="success" 
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <LoadingSpinner size="sm" />
                <LoadingSpinner size="md" />
                <LoadingSpinner size="lg" />
              </div>
            </CardContent>
          </Card>

          {/* Card Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Card Variants</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Card variant="elevated" padding="sm">
                <h4 className="font-medium text-chemistry-800">Elevated Card</h4>
                <p className="text-sm text-chemistry-600">Enhanced shadow for emphasis</p>
              </Card>
              
              <Card variant="bordered" padding="sm">
                <h4 className="font-medium text-chemistry-800">Bordered Card</h4>
                <p className="text-sm text-chemistry-600">Clear border definition</p>
              </Card>
              
              <Card variant="ghost" padding="sm">
                <h4 className="font-medium text-chemistry-800">Ghost Card</h4>
                <p className="text-sm text-chemistry-600">Transparent background</p>
              </Card>
            </CardContent>
          </Card>

          {/* Accessibility Controls */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AdjustmentsHorizontalIcon className="w-5 h-5 mr-2" />
                Accessibility Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <EyeIcon className="w-4 h-4 mr-2" />
                  <span className="text-sm">High Contrast</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.highContrast}
                    onChange={(e) => updateSetting('highContrast', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-chemistry-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-chemistry-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm">Large Text</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.largeText}
                    onChange={(e) => updateSetting('largeText', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-chemistry-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-chemistry-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <SpeakerWaveIcon className="w-4 h-4 mr-2" />
                  <span className="text-sm">Screen Reader Mode</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.screenReaderMode}
                    onChange={(e) => updateSetting('screenReaderMode', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-chemistry-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-chemistry-600"></div>
                </label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Citation Showcase */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Citation System Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-chemistry-700 mb-4">
              The periodic table is organized by atomic number, with elements arranged in periods and groups. 
              <span className="citation-inline ml-1">
                [1]
              </span> 
              Chemical properties repeat periodically, which is why it's called the periodic table.
              <span className="citation-inline ml-1">
                [2]
              </span>
            </p>
            <div className="bg-chemistry-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-chemistry-800">References:</h4>
              <ol className="text-sm text-chemistry-600 list-decimal list-inside space-y-1">
                <li>NIST Chemistry WebBook - Periodic Table Data</li>
                <li>Brown, T. L. et al. Chemistry: The Central Science (14th ed.)</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Modal Demo */}
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="UI Component Demo"
          description="This modal demonstrates the Headless UI integration"
        >
          <div className="space-y-4">
            <p className="text-gray-600">
              This modal component is built with Headless UI and styled with Tailwind CSS. 
              It includes proper accessibility features like focus trapping and keyboard navigation.
            </p>
            
            <div className="flex space-x-2">
              <Button 
                variant="primary" 
                onClick={() => setShowModal(false)}
              >
                Got it!
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowModal(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default UIShowcase
