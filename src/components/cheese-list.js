import React from 'react';

export default class CheeseList extends React.Component {
  render() {
    const cheeseList = this.props.cheeses.map((cheese, index) => {
      return <li key={index}>{cheese}</li>;
    }
  )
    return (
      <div>
        <ul>{cheeseList}</ul>
      </div>
    );
  }
}
