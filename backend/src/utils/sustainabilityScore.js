export function calculateSustainabilityScore(materials) {
    console.log(materials)
    let totalScore = 0;
    let maxScore = materials.length * 100;
    materials.forEach(material => {
        console.log(material.carbonFootprint)
        const carbonFootprint = parseFloat(material.carbonFootprint.match(/[\d.]+/)[0]);
      let materialScore = 0;
      //const match1 = material.carbonFootprint.match(/^([\d.]+)/);
      //carbonFootprint = match1 ? parseFloat(match[1]) : 0;
      if (carbonFootprint <= 5) {
        materialScore += 30;
      } else if (carbonFootprint <= 10) {
        materialScore += 20;
      } else {
        materialScore += 10;
      }
      const waterUsage = parseFloat(material.waterUsage.match(/[\d.]+/)[0]);
      if (waterUsage <= 200) {
        materialScore += 30;
      } else if (waterUsage <= 500) {
        materialScore += 20;
      } else {
        materialScore += 10;
      }
  
      if (material.recyclable) {
        materialScore += 20;
      }
  
      if (material.renewable) {
        materialScore += 20;
      }
  
      totalScore += materialScore;
    });
  
    const sustainabilityScore = (totalScore / maxScore) * 100;
    return Math.round(sustainabilityScore);
  }

  