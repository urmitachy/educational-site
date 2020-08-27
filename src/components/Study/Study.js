import React from 'react';




const Study = (props) => {
    const { title, price, picture, duration } = props.course;
    
    return (
       
            <div className ="col-md-4">
            <div className="single-item my-3">
                <div className="card p-2 ">
                    <img className="card-img-top img-height" src={picture} alt={title} />
                    <div className="card-body">
                    <hr />
                        <h3 className="card-title line-height">{title}</h3>
                        
                        <small className="text-muted">Duration : {duration}</small>
                        <h4>${price}</h4>
                        <button className="btn btn-sm btn-warning"
                            onClick={() => props.addToEnroll(props.course)} >Enroll Now</button>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default Study;