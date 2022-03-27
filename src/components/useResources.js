import React , { useState, useEffect } from 'react'
import axios from 'axios';

const useResources = (resourceName) => {
  
    const [ resources, setResources ] = useState([]);
  
    const fetchResources = async (resourceName) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);
  
      setResources(response.data );
    }
  
    // useEffect is Replacement for LifeCycle Method will call api whenever resourceName is Updated and for first time render
  
    useEffect(() => {
      fetchResources(resourceName)
    }, [resourceName])
  
    // custom Hooks return somethings
    return resources
  
  }

export default useResources;