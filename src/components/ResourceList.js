import React from 'react';
import useResources from './useResources';

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

// Custom Hooks

const ResourceList = (props) => {

  // Using Custom Hooks here in the Component
  const resources = useResources(props.resourceName)

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
