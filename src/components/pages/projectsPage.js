import React , {Component}from 'react';

class Projectspage extends Component {
  render() {
      return (
        <div className = 'page'>
            
            <div className = "title">
                {this.props.title}
            </div>
            

        </div>
      );
  }
}

export default Projectspage;