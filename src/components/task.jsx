import React, { Component } from 'react';

class Cards extends Component {
    state = { 
        error: null,
        isLoaded: false,
        profiles: []
     }

    componentDidMount() {
        fetch("https://********.in/api/users?page=2")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                 isLoaded: true,
                 profiles: result.data,
              });
            //  console.log(this.state.items);
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    render() {
        const { error, isLoaded, profiles } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
          <div>
            <div className="profiles " style={{width:"750px",marginTop:"40px",marginLeft:"50px"}}>
                <div className="row" >
                    {profiles.map(profile => (
                        <div className="col-md-4" key={profile.id}>
                        <div className="card" style={{width:"250px", marginBottom:"10px"}} >
                            <img className="card-img-top mt5" src={profile.avatar} alt="Card image" style={{width:"50%",marginTop:"10px",borderRadius:"50%",alignSelf:"center"}} />
                            <div className="card-body" style={{alignSelf:"center"}}>
                                <h4 className="card-title">{profile.first_name} {profile.last_name}</h4>
                                <p className="card-text">(Engineer)</p>
                                <a href="#" className="btn btn-outline-dark">Read More</a>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
          );     
        }
    }
}
 
export default Cards;
