import { useState, useEffect } from 'react';

import buildingDataJson from '../data/building.json'

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  useEffect(() => {
    setBuildingData(buildingDataJson);
  }, []);



  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    //FILL HERE
    return buildingData[floorIndex];
  }
  const getListOfActivities = ():string[]=>{
    //FILL HERE
    const listOfActivities: string[] = []
    buildingData.forEach(floor => {
      listOfActivities.push(floor.activity)
    })
    return listOfActivities
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
