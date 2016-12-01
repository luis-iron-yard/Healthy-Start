import React from 'react'

class Nav extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="container-fluid">
               <div className="row navBar">

                 <div className="col-sm-2">
                   <button type="button" className="btn btn-lg btn-primary btn-block">Nutrition</button>
                 </div>

                 <div className="col-sm-2">
                   <button type="button" className="btn btn-lg btn-primary btn-block">Complaint</button>
                 </div>

                 <div className="col-sm-6">
                     <div className="form-group">
                     <input type="text" className="form-control input-lg" placeholder="search recipes" />
                     </div>
                 </div>

                 <div className="col-sm-2">
                   <button type="button" className="btn btn-lg btn-primary btn-block"><img src="http://bonniesomerville.nz/wp-content/uploads/2015/08/profile-icon.png" style="width: 1.5em"/></button>
                 </div>

               </div>
             </div>
        )

    }
}

export default Nav
