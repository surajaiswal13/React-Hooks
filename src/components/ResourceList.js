import React, { useState, useEffect } from 'react';
import axios from 'axios';

// class ResourceList extends React.Component {
//   state = {
//     resources: [],
//   }

//   async componentDidMount() {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`);

//     this.setState({ resources: response.data });
//   }

//   async componentDidUpdate(prevProps) {
//     if(prevProps.resourceName !== this.props.resourceName) {
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`);

//       this.setState({ resources: response.data });
//     }
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.resources.map(resource => (
//           <li key={resource.id}>{resource.title}</li>
//         ))}
//       </ul>
//     )
//   }
// }

const ResourceList = (props) => {

  const [ resources, setResources ] = useState([]);

  const fetchResources = async (resourceName) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);

    setResources(response.data );
  }

  useEffect(() => {
    fetchResources(props.resourceName)
  }, [props.resourceName])


  return (
    <ul>
      {/* {resources.map(resource => (
        <li key={resource.id}>{resource.title}</li>
        ))} */}

      {
        resources.map(resource => (
          <li key={resource.id} >{resource.title}</li>
        ))
      }
    </ul>
  )
}

export default ResourceList;
