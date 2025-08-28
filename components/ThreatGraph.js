import { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const ThreatGraph = () => {
  const globeEl = useRef();
  const [arcsData, setArcsData] = useState([]);

  useEffect(() => {
    // Auto-rotate
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.2;
      globeEl.current.pointOfView({ altitude: 2.5 }, 5000);
    }

    // Generate random arcs data
    const N_ARCS = 20;
    const newArcsData = [...Array(N_ARCS).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [['#ff0000', '#ffffff', '#ff0000', '#ffffff'][Math.round(Math.random() * 3)]],
    }));

    setArcsData(newArcsData);

  }, []);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

      arcsData={arcsData}
      arcColor={'color'}
      arcDashLength={() => Math.random()}
      arcDashGap={() => Math.random()}
      arcDashAnimateTime={() => Math.random() * 4000 + 500}
      arcStroke={0.5}

      width={600}
      height={600}
      backgroundColor="rgba(0,0,0,0)"
    />
  );
};

export default ThreatGraph;
