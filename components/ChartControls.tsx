'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Move, 
  RotateCcw,
  Download
} from 'lucide-react';

interface ChartControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  onToggleDrag: () => void;
  onFullscreen: () => void;
  onDownload: () => void;
  isDragging: boolean;
  currentZoom: number;
}

const ChartControls: React.FC<ChartControlsProps> = ({
  onZoomIn,
  onZoomOut,
  onReset,
  onToggleDrag,
  onFullscreen,
  onDownload,
  isDragging,
  currentZoom,
}) => {
  return (
    <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 border-r pr-2 dark:border-gray-600">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onZoomIn}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          title="Zoom In"
        >
          <ZoomIn className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </motion.button>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {Math.round(currentZoom * 100)}%
        </span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onZoomOut}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          title="Zoom Out"
        >
          <ZoomOut className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </motion.button>
      </div>

      <div className="flex items-center space-x-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onToggleDrag}
          className={`p-2 rounded-md ${
            isDragging 
              ? 'bg-blue-100 dark:bg-blue-900' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
          title="Toggle Pan Mode"
        >
          <Move className={`w-5 h-5 ${
            isDragging 
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-gray-600 dark:text-gray-300'
          }`} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onReset}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          title="Reset View"
        >
          <RotateCcw className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onFullscreen}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          title="Fullscreen"
        >
          <Maximize2 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onDownload}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          title="Download SVG"
        >
          <Download className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </motion.button>
      </div>
    </div>
  );
};

export default ChartControls;
