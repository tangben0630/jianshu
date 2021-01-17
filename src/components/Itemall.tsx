import React from 'react'

const withItem = (ChildComponent: React.ComponentType) => {
  return (props: any) => {
    return <ChildComponent {...props} />
  }
};

export default withItem