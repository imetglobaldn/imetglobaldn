'use client';

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { motion, useMotionValue,  } from 'framer-motion';
import ChartControls from './ChartControls';

interface MermaidChartProps {
  chart: string;
}

const MermaidChart: React.FC<MermaidChartProps> = ({ chart }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      flowchart: {
        curve: 'basis',
        useMaxWidth: false,
        htmlLabels: true,
        padding: 20,
        rankSpacing: 50,
        nodeSpacing: 50,
      },
    });
  }, []);

  useEffect(() => {
    const renderChart = async () => {
      if (containerRef.current) {
        try {
          await mermaid.contentLoaded();
          const container = containerRef.current.getBoundingClientRect();
          setContainerSize({ width: container.width, height: container.height });

          const svg = containerRef.current.querySelector('svg');
          if (svg) {
            const { width, height } = svg.getBoundingClientRect();
            setChartSize({ width, height });
          }
        } catch (error) {
          console.error('Error rendering chart:', error);
        }
      }
    };

    renderChart();
    window.addEventListener('resize', renderChart);
    return () => window.removeEventListener('resize', renderChart);
  }, [chart]);

  const getDragConstraints = () => {
    if (!chartSize.width || !containerSize.width) return { top: 0, right: 0, bottom: 0, left: 0 };

    const scaledWidth = chartSize.width * zoom;
    const scaledHeight = chartSize.height * zoom;

    const xConstraint = Math.max(0, (scaledWidth - containerSize.width) / 2);
    const yConstraint = Math.max(0, (scaledHeight - containerSize.height) / 2);

    return {
      top: -yConstraint,
      bottom: yConstraint,
      left: -xConstraint,
      right: xConstraint,
    };
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.5));
  
  const handleReset = () => {
    setZoom(1);
    x.set(0);
    y.set(0);
  };

  const handleToggleDrag = () => setIsDragging(!isDragging);

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen();
      }
    }
  };

  const handleDownload = () => {
    const svg = containerRef.current?.querySelector('svg');
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      const downloadLink = document.createElement('a');
      downloadLink.href = svgUrl;
      downloadLink.download = 'architecture-diagram.svg';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(svgUrl);
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 py-2">
        <ChartControls
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onReset={handleReset}
          onToggleDrag={handleToggleDrag}
          onFullscreen={handleFullscreen}
          onDownload={handleDownload}
          isDragging={isDragging}
          currentZoom={zoom}
        />
      </div>
      
      <div 
        ref={containerRef}
        className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg"
        style={{ 
          height: 'calc(100vh - 300px)',
          minHeight: '500px',
        }}
      >
        <motion.div
          ref={chartRef}
          className="mermaid absolute"
          drag={isDragging}
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={getDragConstraints()}
          style={{
            x,
            y,
            scale: zoom,
            cursor: isDragging ? 'grab' : 'default',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          whileDrag={{ cursor: 'grabbing' }}
        >
          {chart}
        </motion.div>
      </div>

      <style jsx global>{`
        .mermaid {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .mermaid svg {
          max-width: none !important;
        }
        .node rect,
        .node circle,
        .node ellipse,
        .node polygon {
          fill: #ffffff;
          stroke: #333333;
          stroke-width: 1px;
        }
        .edgePath .path {
          stroke: #333333;
          stroke-width: 1.5px;
        }
        .cluster rect {
          fill: #f8f9fa;
          stroke: #dddddd;
          stroke-width: 1px;
          rx: 5px;
          ry: 5px;
        }
        .label {
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #333333;
          font-size: 14px;
        }
        .edgeLabel {
          background-color: #ffffff;
          padding: 4px;
          border-radius: 4px;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};

export default MermaidChart;
