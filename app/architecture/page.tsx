'use client';

// import React, {  useCallback } from 'react';
import dynamic from 'next/dynamic';
// import ArchitectureNav from '@/components/ArchitectureNav';

// Import MermaidChart with no SSR
const MermaidChart = dynamic(
  () => import('@/components/MermaidChart'),
  { ssr: false }
);

const Architecture = () => {
  // const [activeSection, setActiveSection] = useState('overview');

  // const handleSectionChange = useCallback((section: string) => {
  //   // setActiveSection(section);
  //   highlightSection(section);
  // }, []);

  // const highlightSection = (section: string) => {
  //   // Reset all highlights
  //   const allNodes = document.querySelectorAll('.mermaid g.node');
  //   allNodes.forEach(node => {
  //     node.classList.remove('highlighted');
  //   });

    // Add highlight to selected section
  //   const sectionNodes = document.querySelectorAll(`.mermaid g.${section}`);
  //   sectionNodes.forEach(node => {
  //     node.classList.add('highlighted');
  //   });
  // };

  const chartDefinition = `
  flowchart TB
    %% Main Layout Structure
    subgraph CoreLayout["Core Layout"]
      direction TB
      Layout["Layout.tsx"]
      Navbar["Navbar.tsx"]
      Footer["Footer.tsx"]
      ScrollToTop["ScrollToTop.tsx"]
      DisclaimerPopup["DisclaimerPopup.tsx"]
      
      Layout --> Navbar
      Layout --> Footer
      Layout --> ScrollToTop
      Layout --> DisclaimerPopup
    end

    %% Pages Structure
    subgraph Pages["Pages"]
      direction TB
      HomePage["Home page.tsx"]
      NewsPage["News page.tsx"]
      BlogPage["Blog page.tsx"]
      ContactPage["Contact page.tsx"]
      CoursePage["Course page.tsx"]
      AboutPage["About page.tsx"]
    end

    %% Main Sections
    subgraph MainSections["Main Sections"]
      direction TB
      HeroSection["Hero Section"]
      StatsSection["Stats Section"]
      WhySection["Why IMET Section"]
      CoursesSection["Courses Section"]
      TestimonialsSection["Testimonials"]
      CollaborationSection["Collaboration"]
    end

    %% Interactive Elements
    subgraph InteractiveElements["Interactive Elements"]
      direction TB
      ChatBot["ChatBot"]
      ContactForm["Contact Form"]
      Maps["Interactive Maps"]
      VideoPlayer["Video Section"]
      Carousel["Course Carousel"]
      PopupSystem["Popup System"]
    end

    %% Educational Content
    subgraph Education["Education"]
      direction TB
      QualificationPath["Qualification Pathway"]
      ProgramOutcomes["Program Outcomes"]
      CourseModules["Course Modules"]
      Specializations["Specializations"]
    end

    %% User Interface
    subgraph UISystem["UI System"]
      direction TB
      Buttons["Action Buttons"]
      Forms["Form Components"]
      Cards["Content Cards"]
      Navigation["Nav Components"]
      Modals["Modal Windows"]
    end

    %% Data Management
    subgraph DataSystem["Data System"]
      direction TB
      APILayer["API Integration"]
      StateManagement["State Management"]
      DataFetching["Data Fetching"]
      Caching["Data Caching"]
    end

    %% Page Connections
    HomePage --> HeroSection
    HomePage --> StatsSection
    HomePage --> WhySection
    HomePage --> CoursesSection
    HomePage --> TestimonialsSection
    HomePage --> CollaborationSection

    %% Interactive Connections
    HeroSection --> VideoPlayer
    HeroSection --> Buttons
    ContactPage --> ContactForm
    ContactForm --> Forms
    CoursesSection --> Carousel
    Carousel --> Cards

    %% Educational Flow
    CoursePage --> QualificationPath
    QualificationPath --> ProgramOutcomes
    CoursePage --> CourseModules
    CourseModules --> Specializations

    %% Data Flow
    APILayer --> DataFetching
    DataFetching --> StateManagement
    StateManagement --> Caching

    %% UI Interactions
    Buttons --> Modals
    Navigation --> Pages
    Cards --> PopupSystem

    %% Mobile Responsiveness
    Navbar --> Navigation
    Navigation --> Modals

    %% Feature Connections
    ChatBot --> APILayer
    Maps --> DataFetching
    Forms --> APILayer

    classDef default fill:#f9f9f9,stroke:#333,stroke-width:1px
    classDef highlighted fill:#e3f2fd,stroke:#1e88e5,stroke-width:2px
    classDef coreLayout fill:#f9f,stroke:#333,stroke-width:2px
    classDef pages fill:#bbf,stroke:#333,stroke-width:2px
    classDef mainSections fill:#bfb,stroke:#333,stroke-width:2px
    classDef interactiveElements fill:#fbf,stroke:#333,stroke-width:2px
    classDef education fill:#fbb,stroke:#333,stroke-width:2px
    classDef uiSystem fill:#bff,stroke:#333,stroke-width:2px
    classDef dataSystem fill:#ffb,stroke:#333,stroke-width:2px

    class Layout,Navbar,Footer,ScrollToTop,DisclaimerPopup coreLayout
    class HomePage,NewsPage,BlogPage,ContactPage,CoursePage,AboutPage pages
    class HeroSection,StatsSection,WhySection,CoursesSection,TestimonialsSection,CollaborationSection mainSections
    class ChatBot,ContactForm,Maps,VideoPlayer,Carousel,PopupSystem interactiveElements
    class QualificationPath,ProgramOutcomes,CourseModules,Specializations education
    class Buttons,Forms,Cards,Navigation,Modals uiSystem
    class APILayer,StateManagement,DataFetching,Caching dataSystem
  `;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          IMET Global Architecture
        </h1>

        {/* <ArchitectureNav
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        /> */}
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mt-4">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Component Relationship Diagram
            </h2>
          </div>
          
          <div className="chart-container">
            <MermaidChart chart={chartDefinition} />
          </div>
          
          <div className="mt-6 space-y-4">
            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Legend
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-pink-200"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Core Layout</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-200"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Pages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-200"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Main Sections</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-200"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Interactive Elements</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-200"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Education</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-cyan-200"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">UI System</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-200"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Data System</span>
                </div>
              </div>
            </section>
            
            <section className="hidden md:block">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Key Features
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>Hierarchical component structure</li>
                <li>Clear data flow visualization</li>
                <li>Interactive element relationships</li>
                <li>Educational content organization</li>
                <li>UI component system</li>
                <li>Data management flow</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <style jsx>{`
        .chart-container {
          width: 100%;
          min-height: 500px;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default Architecture;
