import React, { useState, useRef, useEffect } from 'react';
import './tabs.css';

// --- SVG Logo Components (for a professional look) ---
const ReactLogo = () => <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="tech-logo"><circle cx="0" cy="0" r="2" fill="#61DAFB"></circle><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>;
const AngularLogo = () => <svg viewBox="0 0 250 250" className="tech-logo"><path fill="#DD0031" d="M125 0L25 40l15 160 85 50 85-50 15-160L125 0z"></path><path fill="#C3002F" d="M125 0v250l85-50 15-160L125 0z"></path><path fill="#FFF" d="M125 50l-65 140h30l15-35h40l15 35h30L125 50zm0 35l20 50h-40l20-50z"></path></svg>;
const VueLogo = () => <svg viewBox="0 0 256 221" className="tech-logo"><path fill="#42b883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"></path><path fill="#35495e" d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"></path></svg>;
const SvelteLogo = () => <svg viewBox="0 0 100 100" className="tech-logo"><path d="M78.2,50.2c0.2,1.3-0.1,2.5-0.5,3.7c-0.2,0.7-0.5,1.3-0.8,1.9c-0.3,0.6-0.6,1.2-1,1.8c-0.4,0.6-0.8,1.1-1.2,1.6 c-0.2,0.2-0.3,0.4-0.5,0.6l-1.8,1.8c-0.5,0.5-1.1,0.9-1.7,1.3c-0.6,0.4-1.2,0.8-1.8,1.1c-1.3,0.7-2.6,1.2-4,1.6 c-0.7,0.2-1.4,0.4-2.1,0.5c-1.3,0.3-2.7,0.4-4,0.4c-0.7,0-1.3,0-2,0c-1.3-0.1-2.6-0.3-3.8-0.7c-0.6-0.2-1.2-0.4-1.8-0.7 c-0.6-0.3-1.2-0.6-1.7-1c-1.1-0.7-2.1-1.6-3-2.6c-0.2-0.2-0.5-0.5-0.7-0.7c-0.5-0.6-1-1.2-1.4-1.9c-0.4-0.7-0.7-1.4-0.9-2.1 c-0.3-0.7-0.5-1.4-0.6-2.1c-0.1-0.7-0.2-1.4-0.2-2.1c0-0.7,0-1.4,0.1-2c0.1-1.3,0.4-2.6,0.8-3.8c0.2-0.6,0.5-1.2,0.8-1.8 c0.3-0.6,0.6-1.2,1-1.8c0.4-0.6,0.8-1.1,1.2-1.6c0.2-0.2,0.3-0.4,0.5-0.6l1.8-1.8c0.5-0.5,1.1-0.9,1.7-1.3 c0.6-0.4,1.2-0.8,1.8-1.1c1.3-0.7,2.6-1.2,4-1.6c0.7-0.2,1.4-0.4,2.1-0.5c1.3-0.3,2.7-0.4,4-0.4c0.7,0,1.3,0,2,0 c1.3,0.1,2.6,0.3,3.8,0.7c0.6,0.2,1.2,0.4,1.8,0.7c0.6,0.3,1.2,0.6,1.7,1c1.1,0.7,2.1,1.6,3,2.6c0.2,0.2,0.5,0.5,0.7,0.7 c0.5,0.6,1,1.2,1.4,1.9c0.4,0.7,0.7,1.4,0.9,2.1c0.3,0.7,0.5,1.4,0.6,2.1C78.1,48.8,78.2,49.5,78.2,50.2z M50,100C22.4,100,0,77.6,0,50S22.4,0,50,0s50,22.4,50,50S77.6,100,50,100z" fill="#ff3e00"></path></svg>;

const Tabs = () => {
  const tabsData = {
    frontend: {
      name: 'Frontend',
      title: 'Frontend Frameworks',
      items: [
        { name: 'React', logo: <ReactLogo /> },
        { name: 'Angular', logo: <AngularLogo /> },
        { name: 'Vue', logo: <VueLogo /> },
        { name: 'Svelte', logo: <SvelteLogo /> },
      ],
    },
    backend: {
      name: 'Backend',
      title: 'Backend Technologies',
      items: [
        { name: 'React', logo: <ReactLogo /> },
        { name: 'Angular', logo: <AngularLogo /> },
      ],
    },
    databases: {
      name: 'Databases',
      title: 'Database Technologies',
      items: [
        { name: 'Vue', logo: <VueLogo /> },
        { name: 'Svelte', logo: <SvelteLogo /> },
      ],
    },
    cloud: {
      name: 'Cloud',
      title: 'Cloud Services',
      items: [
        { name: 'React', logo: <ReactLogo /> },
        { name: 'Svelte', logo: <SvelteLogo /> },
      ],
    },
  };

  const tabIds = Object.keys(tabsData);
  const [activeTab, setActiveTab] = useState(tabIds[0]);
  const [gliderStyle, setGliderStyle] = useState({});
  const tabsRef = useRef([]);

  useEffect(() => {
    const activeTabNode = tabsRef.current[tabIds.indexOf(activeTab)];
    if (activeTabNode) {
      setGliderStyle({
        width: activeTabNode.offsetWidth,
        left: activeTabNode.offsetLeft,
      });
    }
  }, [activeTab, tabIds]);

  return (
    <div className="page-container mt-20">
      <h1 className="main-heading">Explore The Tech Stack</h1>
      <div className="tab-section-container">
        <div role="tablist" aria-label="Technology Categories" className="tab-header">
          {tabIds.map((tabId, index) => (
            <button
              ref={(el) => (tabsRef.current[index] = el)}
              key={tabId}
              className={`tab-btn ${activeTab === tabId ? 'tab-active' : ''}`}
              onClick={() => setActiveTab(tabId)}
            >
              {tabsData[tabId].name}
            </button>
          ))}
          <div className="tab-glider" style={gliderStyle}></div>
        </div>

        <div className="tab-content-panel">
          <div className="content-body">
            <h2 className="content-title">{tabsData[activeTab].title}</h2>
            {/* The key={activeTab} prop is essential for re-triggering the animation */}
            <div className="content-items" key={activeTab}>
              {tabsData[activeTab].items.map((item) => (
                <div key={item.name} className="content-item">
                  <div className="logo-container">{item.logo}</div>
                  <span className="item-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;